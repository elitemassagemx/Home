document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/";
    let services = {};

    function handleImageError(img) {
        console.warn(`Failed to load image: ${img.src}`);
        img.style.display = 'none';
    }

    function buildImageUrl(iconPath) {
        if (!iconPath) return '';
        return iconPath.startsWith('http') ? iconPath : `${BASE_URL}${iconPath}`;
    }

    function getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.error(`Element with id "${id}" not found`);
        }
        return element;
    }

    function loadJSONData() {
        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('JSON data loaded successfully:', data);
                services = data.services;
                renderServices('individual');
                renderPackages();
                setupFilters();
                setupServiceCategories();
            })
            .catch(error => {
                console.error('Error loading or parsing the JSON file:', error);
                const servicesList = getElement('services-list');
                const packageList = getElement('package-list');
                if (servicesList) servicesList.innerHTML = '<p>Error al cargar los servicios. Por favor, intente más tarde.</p>';
                if (packageList) packageList.innerHTML = '<p>Error al cargar los paquetes. Por favor, intente más tarde.</p>';
            });
    }

    function renderServices(category) {
        console.log(`Rendering services for category: ${category}`);
        const servicesList = getElement('services-list');
        const template = getElement('service-template');
        if (!servicesList || !template) return;

        servicesList.innerHTML = '';

        if (!Array.isArray(services[category])) {
            console.error(`services[${category}] is not an array:`, services[category]);
            servicesList.innerHTML = '<p>Error al cargar los servicios. Por favor, intente más tarde.</p>';
            return;
        }

        services[category].forEach((service, index) => {
            console.log(`Rendering service ${index + 1}:`, service);
            const serviceElement = template.content.cloneNode(true);
            
            serviceElement.querySelector('.service-title').textContent = service.title || 'Sin título';
            
            const serviceIcon = serviceElement.querySelector('.service-icon');
            serviceIcon.src = buildImageUrl(service.icon);
            serviceIcon.onerror = () => handleImageError(serviceIcon);
            
            serviceElement.querySelector('.service-description').textContent = service.description || 'Sin descripción';
            
            const benefitsIcon = serviceElement.querySelector('.benefits-icon');
            benefitsIcon.src = buildImageUrl(Array.isArray(service.benefitsIcons) ? service.benefitsIcons[0] : service.benefitsIcons);
            benefitsIcon.onerror = () => handleImageError(benefitsIcon);
            
            serviceElement.querySelector('.service-benefits').textContent = Array.isArray(service.benefits) ? service.benefits.join(', ') : 'No especificado';
            
            const durationIcon = serviceElement.querySelector('.duration-icon');
            durationIcon.src = buildImageUrl(service.durationIcon);
            durationIcon.onerror = () => handleImageError(durationIcon);
            
            serviceElement.querySelector('.service-duration').textContent = service.duration || 'Duración no especificada';

            const reserveButton = serviceElement.querySelector('.reserve-button');
            reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', service.title));

            const moreIcon = serviceElement.querySelector('.more-icon');
            moreIcon.addEventListener('click', () => showPopup(service));

            const serviceBackground = serviceElement.querySelector('.service-background');
            if (service.backgroundImage) {
                serviceBackground.style.backgroundImage = `url(${buildImageUrl(service.backgroundImage)})`;
            }

            const serviceItem = serviceElement.querySelector('.service-item');
            if (Array.isArray(service.benefits)) {
                service.benefits.forEach(benefit => {
                    serviceItem.classList.add(benefit.toLowerCase().replace(/\s+/g, '-'));
                });
            }

            servicesList.appendChild(serviceElement);
        });
        console.log(`Rendered ${services[category].length} services`);
    }

    function renderPackages() {
        console.log('Rendering packages');
        const packageList = getElement('package-list');
        const template = getElement('package-template');
        if (!packageList || !template) {
            console.error('Package list or template not found');
            return;
        }

        packageList.innerHTML = '';
        if (!Array.isArray(services.paquetes)) {
            console.error('services.paquetes is not an array:', services.paquetes);
            packageList.innerHTML = '<p>Error al cargar los paquetes. Por favor, intente más tarde.</p>';
            return;
        }

        services.paquetes.forEach((pkg, index) => {
            console.log(`Rendering package ${index + 1}:`, pkg);
            const packageElement = template.content.cloneNode(true);
            
            packageElement.querySelector('.package-title').textContent = pkg.title || 'Sin título';
            packageElement.querySelector('.package-description').textContent = pkg.description || 'Sin descripción';
            packageElement.querySelector('.package-includes-list').textContent = Array.isArray(pkg.includes) ? pkg.includes.join(', ') : 'No especificado';
            packageElement.querySelector('.package-duration-text').textContent = pkg.duration || 'Duración no especificada';
            packageElement.querySelector('.package-benefits-list').textContent = Array.isArray(pkg.benefits) ? pkg.benefits.join(', ') : 'No especificado';

            const reserveButton = packageElement.querySelector('.reserve-button');
            reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', pkg.title));

            const moreIcon = packageElement.querySelector('.more-icon');
            moreIcon.addEventListener('click', () => showPopup(pkg));

            const packageBackground = packageElement.querySelector('.package-background');
            if (pkg.backgroundImage) {
                packageBackground.style.backgroundImage = `url(${buildImageUrl(pkg.backgroundImage)})`;
            }

            const packageItem = packageElement.querySelector('.package-item');
            if (pkg.type) {
                packageItem.classList.add(pkg.type.toLowerCase().replace(/\s+/g, '-'));
            }

            packageList.appendChild(packageElement);
        });
        console.log(`Rendered ${services.paquetes.length} packages`);
    }
    
    function showPopup(data) {
        console.log('Showing popup for:', data.title);
        const popup = getElement('popup');
        const popupTitle = getElement('popup-title');
        const popupImage = getElement('popup-image');
        const popupDescription = getElement('popup-description');
        if (!popup || !popupTitle || !popupImage || !popupDescription) return;

        popupTitle.textContent = data.title || '';
        popupImage.src = buildImageUrl(data.popupImage || data.image);
        popupImage.alt = data.title || '';
        popupImage.onerror = () => handleImageError(popupImage);
        popupDescription.textContent = data.popupDescription || data.description || '';

        popup.style.display = 'block';
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        console.log(`Sending WhatsApp message for: ${action} - ${serviceTitle}`);
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

    function changeLanguage(lang) {
        console.log(`Changing language to: ${lang}`);
        var selectField = document.querySelector('.goog-te-combo');
        if (selectField) {
            selectField.value = lang;
            selectField.dispatchEvent(new Event('change'));
        } else {
            console.error('Google Translate dropdown not found');
        }
    }

    function setupLanguageSelector() {
        const translateIcon = getElement('translate-icon');
        const languageOptions = document.querySelector('.language-options');
        if (!translateIcon || !languageOptions) return;

        translateIcon.addEventListener('click', () => {
            console.log('Translate icon clicked');
            languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (event) => {
                const lang = event.currentTarget.dataset.lang;
                console.log(`Language option clicked: ${lang}`);
                changeLanguage(lang);
                languageOptions.style.display = 'none';
            });
        });

        document.addEventListener('click', (event) => {
            if (!translateIcon.contains(event.target) && !languageOptions.contains(event.target)) {
                languageOptions.style.display = 'none';
            }
        });
    }

    function setupCategorySelector() {
        document.querySelectorAll('.choice-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                console.log(`Choice chip clicked: ${chip.dataset.category}`);
                document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                renderServices(chip.dataset.category);
            });
        });
    }

    function setupPopup() {
        const popup = getElement('popup');
        const closeButton = document.querySelector('.close');
        if (!popup || !closeButton) return;

        closeButton.addEventListener('click', () => {
            console.log('Closing popup');
            popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                console.log('Closing popup (clicked outside)');
                popup.style.display = 'none';
            }
        });
    }

    function setupGalleryAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP or ScrollTrigger not loaded. Gallery animations will not work.');
            return;
        }

        console.log('GSAP and ScrollTrigger are loaded');
        gsap.registerPlugin(ScrollTrigger);

        const gallery = document.querySelector('.gallery-container');
        if (!gallery) {
            console.error('Gallery container not found');
            return;
        }

        console.log('Gallery container found');
        const images = gsap.utils.toArray('.gallery-container img');
        
        ScrollTrigger.create({
            trigger: gallery,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
                console.log('Gallery entered viewport');
                gallery.classList.add('is-visible');
                animateImages();
            },
            onLeave: () => {
                console.log('Gallery left viewport');
                gallery.classList.remove('is-visible');
            },
            onEnterBack: () => {
                console.log('Gallery entered viewport (scrolling up)');
                gallery.classList.add('is-visible');
                animateImages();
            },
            onLeaveBack: () => {
                console.log('Gallery left viewport (scrolling up)');
                gallery.classList.remove('is-visible');
            }
        });

        function animateImages() {
            images.forEach((img, index) => {
                gsap.fromTo(img, 
                    { scale: 0.8, opacity: 0 },
                    { 
                        scale: 1, 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: "power2.out",
                        delay: index * 0.1,
                        onStart: () => console.log(`Image ${index + 1} animation started`)
                    }
                );
            });
        }

        console.log(`Found ${images.length} images in the gallery`);
    }

    function cleanupEventListeners() {
        // Implementa la limpieza de event listeners aquí si es necesario
        console.log('Cleaning up event listeners');
    }

    function init() {
        loadJSONData();
        setupLanguageSelector();
        setupPopup();
        setupGalleryAnimations();
        setupGalleryModal();
    }

    init();
});
