const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/IMG/";
let services = {};
let currentPopupIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    // Elementos del DOM
    const verMasBtn = document.getElementById('ver-mas-galeria');
    const galleryGrid = document.querySelector('.gallery-grid');
    const body = document.body;
    const header = document.getElementById('main-header');
    let isExpanded = false;

    // Inicializaciones
    init();

    function init() {
        loadJSONData();
        setupPopup();
        setupGalleryAnimations();
        setupGalleryModal();
        setupGallery();
    }

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
                return response.text();
            })
            .then(text => {
                try {
                    text = text.replace(/\$\{BASE_URL\}/g, BASE_URL);
                    const cleanedText = text.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
                    const data = JSON.parse(cleanedText);
                    console.log('JSON data loaded successfully:', data);
                    services = data.services;
                    renderServices('masajes');
                    renderPackages();
                    setupFilters();
                    setupServiceCategories();
                    setupGallery();
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    console.error('Problematic JSON:', text);
                    throw error;
                }
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
        const servicesList = document.getElementById('services-list');
        const template = document.getElementById('service-template');
        if (!servicesList || !template) {
            console.error('services-list or service-template not found');
            return;
        }

        servicesList.innerHTML = '';

        if (!Array.isArray(services[category])) {
            console.error(`services[${category}] is not an array:`, services[category]);
            servicesList.innerHTML = '<p>Error al cargar los servicios. Por favor, intente más tarde.</p>';
            return;
        }

        services[category].forEach((service, index) => {
            console.log(`Rendering service ${index + 1}:`, service);
            const serviceElement = template.content.cloneNode(true);
            
            const titleElement = serviceElement.querySelector('.service-title');
            if (titleElement) titleElement.textContent = service.title || 'Sin título';
            
            const serviceIcon = serviceElement.querySelector('.service-icon');
            if (serviceIcon && service.icon) {
                serviceIcon.src = buildImageUrl(service.icon);
                serviceIcon.onerror = () => handleImageError(serviceIcon);
            }
            
            const descriptionElement = serviceElement.querySelector('.service-description');
            if (descriptionElement) descriptionElement.textContent = service.description || 'Sin descripción';
            
            const benefitsContainer = serviceElement.querySelector('.benefits-container');
            if (benefitsContainer && Array.isArray(service.benefitsIcons)) {
                service.benefitsIcons.forEach((iconUrl, index) => {
                    const benefitItem = document.createElement('div');
                    benefitItem.classList.add('benefit-item');
                    const img = document.createElement('img');
                    img.src = buildImageUrl(iconUrl);
                    img.alt = 'Benefit icon';
                    img.classList.add('benefit-icon');
                    img.style.width = '48px';
                    img.style.height = '48px';
                    img.onerror = () => handleImageError(img);
                    const span = document.createElement('span');
                    span.textContent = service.benefits[index] || '';
                    benefitItem.appendChild(img);
                    benefitItem.appendChild(span);
                    benefitsContainer.appendChild(benefitItem);
                });
            }
            
            const durationIcon = serviceElement.querySelector('.duration-icon');
            if (durationIcon && service.durationIcon) {
                durationIcon.src = buildImageUrl(service.durationIcon);
                durationIcon.onerror = () => handleImageError(durationIcon);
            }
            
            const durationElement = serviceElement.querySelector('.service-duration');
            if (durationElement) durationElement.textContent = service.duration || 'Duración no especificada';

            const saberMasButton = serviceElement.querySelector('.saber-mas-button');
            if (saberMasButton) {
                saberMasButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showPopup(service, index);
                });
            }

            const serviceItem = serviceElement.querySelector('.service-item');
            if (serviceItem) {
                if (Array.isArray(service.benefits)) {
                    service.benefits.forEach(benefit => {
                        serviceItem.classList.add(benefit.toLowerCase().replace(/\s+/g, '-'));
                    });
                }
            }

            const serviceBackground = serviceElement.querySelector('.service-background');
            if (serviceBackground && service.backgroundImage) {
                serviceBackground.style.backgroundImage = `url(${buildImageUrl(service.backgroundImage)})`;
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
            
            const includesList = packageElement.querySelector('.package-includes-list');
            if (includesList && Array.isArray(pkg.includes)) {
                pkg.includes.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    includesList.appendChild(li);
                });
            }
            
            packageElement.querySelector('.package-duration-text').textContent = pkg.duration || 'Duración no especificada';
            
            const benefitsContainer = packageElement.querySelector('.package-benefits');
            if (benefitsContainer && Array.isArray(pkg.benefitsIcons)) {
                pkg.benefitsIcons.forEach((iconUrl, index) => {
                    const benefitItem = document.createElement('div');
                    benefitItem.classList.add('benefit-item');
                    const img = document.createElement('img');
                    img.src = buildImageUrl(iconUrl);
                    img.alt = 'Benefit icon';
                    img.classList.add('benefit-icon');
                    img.style.width = '48px';
                    img.style.height = '48px';
                    img.onerror = () => handleImageError(img);
                    const span = document.createElement('span');
                    span.textContent = pkg.benefits[index] || '';
                    benefitItem.appendChild(img);
                    benefitItem.appendChild(span);
                    benefitsContainer.appendChild(benefitItem);
                });
            }

            const saberMasButton = packageElement.querySelector('.saber-mas-button');
            if (saberMasButton) {
                saberMasButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showPopup(pkg, index, true);
                });
            }

            const packageItem = packageElement.querySelector('.package-item');
            if (packageItem && pkg.type) {
                packageItem.classList.add(pkg.type.toLowerCase().replace(/\s+/g, '-'));
            }

            const packageBackground = packageElement.querySelector('.package-background');
            if (packageBackground && pkg.backgroundImage) {
                packageBackground.style.backgroundImage = `url(${buildImageUrl(pkg.backgroundImage)})`;
            }

            packageList.appendChild(packageElement);
        });
        console.log(`Rendered ${services.paquetes.length} packages`);
    }

    function showPopup(data, index, isPackage = false) {
        console.log('Showing popup for:', data.title);
        const popup = getElement('popup');
        const popupContent = popup.querySelector('.popup-content');
        const popupTitle = getElement('popup-title');
        const popupImage = getElement('popup-image');
        const popupDescription = getElement('popup-description');
        const popupBenefits = popup.querySelector('.popup-benefits');
        const popupIncludes = popup.querySelector('.popup-includes');
        const popupDuration = getElement('popup-duration');
        const whatsappButton = getElement('whatsapp-button');
        if (!popup || !popupContent || !popupTitle || !popupImage || !popupDescription || !popupBenefits || !popupIncludes || !popupDuration || !whatsappButton) {
            console.error('One or more popup elements not found');
            return;
        }

        currentPopupIndex = index;

        popupTitle.textContent = data.title || '';
        popupImage.src = buildImageUrl(data.popupImage || data.image);
        popupImage.alt = data.title || '';
        popupImage.onerror = () => handleImageError(popupImage);
        popupDescription.textContent = data.popupDescription || data.description || '';
        
        // Limpiar contenedores existentes
        popupBenefits.innerHTML = '';
        popupIncludes.innerHTML = '';

        // Añadir beneficios
        if (Array.isArray(data.benefits) && Array.isArray(data.benefitsIcons)) {
            data.benefits.forEach((benefit, index) => {
                const benefitItem = document.createElement('div');
                benefitItem.classList.add('popup-benefits-item');
                const img = document.createElement('img');
                img.src = buildImageUrl(data.benefitsIcons[index]);
                img.alt = benefit;
                const span = document.createElement('span');
                span.textContent = benefit;
                benefitItem.appendChild(img);
                benefitItem.appendChild(span);
                popupBenefits.appendChild(benefitItem);
            });
        }

        // Añadir incluye (solo para paquetes)
        if (isPackage && Array.isArray(data.includes)) {
            data.includes.forEach(item => {
                const includeItem = document.createElement('div');
                includeItem.classList.add('popup-includes-item');
                const img = document.createElement('img');
                img.src = buildImageUrl('check-icon.webp');
                img.alt = 'Incluido';
                const span = document.createElement('span');
                span.textContent = item;
                includeItem.appendChild(img);
                includeItem.appendChild(span);
                popupIncludes.appendChild(includeItem);
            });
        }

        popupDuration.textContent = data.duration || '';

        whatsappButton.onclick = () => sendWhatsAppMessage('Reservar', data.title);

        setupPopupCarousel(isPackage);

        popup.style.display = 'block';
    }

    function setupPopupCarousel(isPackage) {
        const popupContent = document.querySelector('.popup-content');
        let startX, currentX;

        popupContent.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        popupContent.addEventListener('touchmove', (e) => {
            if (!startX) return;
            currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                navigatePopup(diff > 0 ? 1 : -1, isPackage);
                startX = null;
            }
        });

        popupContent.addEventListener('touchend', () => {
            startX = null;
        });
    }

    function navigatePopup(direction, isPackage) {
        const items = isPackage ? services.paquetes : services[getCurrentCategory()];
        currentPopupIndex = (currentPopupIndex + direction + items.length) % items.length;
        showPopup(items[currentPopupIndex], currentPopupIndex, isPackage);
    }

    function getCurrentCategory() {
        const checkedRadio = document.querySelector('.service-category-toggle input[type="radio"]:checked');
        return checkedRadio ? checkedRadio.value : 'masajes';
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        console.log(`Sending WhatsApp message for: ${action} - ${serviceTitle}`);
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

    function setupServiceCategories() {
        const categoryInputs = document.querySelectorAll('.service-category-toggle input[type="radio"]');
        categoryInputs.forEach(input => {
            input.addEventListener('change', () => {
                const category = input.value;
                renderServices(category);
                setupBenefitsNav(category);
                setupPackageNav();
            });
        });
        setupBenefitsNav('masajes');
        setupPackageNav();
    }

    function setupBenefitsNav(category) {
        const benefitsNav = document.querySelector('.benefits-nav');
        if (!benefitsNav) return;

        benefitsNav.innerHTML = '';
        const allBenefits = new Set();
        const benefitIcons = new Map();
        const benefitAlternativeText = new Map();

        if (services[category]) {
            services[category].forEach(service => {
                if (Array.isArray(service.benefits) && Array.isArray(service.benefitsIcons)) {                        
                    service.benefits.forEach((benefit, index) => {
                        if (!allBenefits.has(benefit)) {
                            allBenefits.add(benefit);
                            benefitIcons.set(benefit, service.benefitsIcons[index]);
                            benefitAlternativeText.set(benefit, getAlternativeText(benefit));
                        }
                    });
                }
            });
        }

        const allButton = document.createElement('button');
        allButton.classList.add('benefit-btn', 'active');
        allButton.dataset.filter = 'all';
        allButton.innerHTML = `
            <img src="${BASE_URL}todos.webp" alt="Todos" style="width: 48px; height: 48px;">
            <span class="visible-text">Todos</span>
            <span class="hidden-text visually-hidden">all</span>
        `;
        benefitsNav.appendChild(allButton);

        allBenefits.forEach(benefit => {
            const button = document.createElement('button');
            button.classList.add('benefit-btn');
            button.dataset.filter = benefit.toLowerCase().replace(/\s+/g, '-');
            
            const iconUrl = benefitIcons.get(benefit) || `${BASE_URL}${benefit.toLowerCase().replace(/\s+/g, '-')}.webp`;
            const alternativeText = benefitAlternativeText.get(benefit);
            
            button.innerHTML = `
                <img src="${buildImageUrl(iconUrl)}" alt="${benefit}" style="width: 48px; height: 48px;">
                <span class="visible-text">${alternativeText}</span>
                <span class="hidden-text visually-hidden">${benefit}</span>
            `;
            benefitsNav.appendChild(button);
        });

        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
    }

    function getAlternativeText(benefit) {
        const alternativeTexts = {
            "Bajará tu Estrés": "Relax",
            "Cambiará tu Ánimo": "Ánimo",
            "Aliviarás Tensiones": "Alivio",
            "Aliviarás Dolores Musculares": "Músculos",
            "Mejorarás tu Circulación": "Circula",
            "Relajación Profunda": "Profundo",
            "Relajación": "Relax",
            "Alivio de Dolores en Espalda y Cuello": "Espalda",
            "Relajación Total": "Total",
            "Mejora Circulación Sanguínea": "Sangre",
            "Hidratará tu Piel": "Hidrata",
            "Multisensorial": "Sentidos",
            "Mejorarás tu Equilibrio": "Balance",
            "Reducirás el Estrés": "Anti-estrés",
            "Aumento de Energía": "Energía",
            "Alivio Dolor Muscular": "No dolor",
            "Reduce Ansiedad": "Calma",
            "Calma Profunda": "Sereno"
        };
        return alternativeTexts[benefit] || benefit;
    }

    function setupPackageNav() {
        const packageNav = document.querySelector('.package-nav');
        if (!packageNav) return;

        packageNav.innerHTML = '';
        const allPackages = new Set();

        if (services.paquetes) {
            services.paquetes.forEach(pkg => {
                allPackages.add(pkg.title);
            });
        }

        const allButton = document.createElement('button');
        allButton.classList.add('package-btn', 'active');
        allButton.dataset.filter = 'all';
        allButton.innerHTML = `
            <img src="${BASE_URL}todos.webp" alt="Todos" style="width: 48px; height: 48px;">
            <span>Todos</span>
        `;
        packageNav.appendChild(allButton);

        allPackages.forEach(packageTitle => {
            const button = document.createElement('button');
            button.classList.add('package-btn');
            button.dataset.filter = packageTitle.toLowerCase().replace(/\s+/g, '-');
            button.innerHTML = `
                <img src="${BASE_URL}${packageTitle.toLowerCase().replace(/\s+/g, '-')}-icon.webp" alt="${packageTitle}" style="width: 48px; height: 48px;">
                <span>${packageTitle}</span>
            `;
            packageNav.appendChild(button);
        });

        setupFilterButtons('.package-nav', '#package-list', '.package-item');
    }

    function setupPopup() {
        const popup = getElement('popup');
        const closeButton = popup.querySelector('.close');
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

    function setupGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        const verMasButton = getElement('ver-mas-galeria');

        if (!galleryGrid || !verMasButton) {
            console.error('Gallery elements not found');
            return;
        }

        // Aquí deberías cargar las imágenes de la galería desde tu fuente de datos
        const galleryImages = [
            { src: 'QUESOSAHM.webp', title: 'Tabla Gourmet', description: 'Después de tu masaje en pareja saborea una exquisita selección de jamón curado, quesos gourmet, fresas cubiertas de chocolate y copas de vino. Un toque de lujo y placer compartido para complementar tu visita' },
            { src: 'choco2.webp', title: 'choco2', description: 'LLENAR' },
            { src: 'chococ.webp', title: 'chococ', description: 'LLENAR' },
            { src: 'chococc.webp', title: 'chococc', description: 'LLENAR' },
            { src: 'FRESASC.webp', title: 'fresasc', description: 'LLENAR' },
            { src: 'QUESOS.webp', title: 'quesos', description: 'LLENAR' },
            { src: 'QUESOSH.webp', title: 'quesosh', description: 'LLENAR' },
            { src: 'QUESOSHM.webp', title: 'quesoshm', description: 'LLENAR' },
            { src: 'QUESOSM.webp', title: 'quesosm', description: 'LLENAR' },
            { src: 'QUESOSIG.webp', title: 'quesosig', description: 'LLENAR' },
            { src: 'SILLAS.webp', title: 'sillas', description: 'LLENAR' },
            { src: 'SILLASH.webp', title: 'sillash', description: 'LLENAR' },
            { src: 'chen.webp', title: 'chen', description: 'LLENAR' },
            { src: 'copas.webp', title: 'copas', description: 'LLENAR' },
            { src: 'dif.webp', title: 'dif', description: 'LLENAR' },
            { src: 'QUESOSAHM.webp', title: 'quesosahm', description: 'LLENAR' },
            { src: 'jamc.webp', title: 'jamc', description: 'LLENAR' },
            { src: 'jam.webp', title: 'jam', description: 'LLENAR' },
            { src: 'lujo.webp', title: 'lujo', description: 'LLENAR' },
            { src: 'lujo2.webp', title: 'lujo2', description: 'LLENAR' },
            { src: 'noche.webp', title: 'noche', description: 'LLENAR' },
            { src: 'noche1.webp', title: 'noche1', description: 'LLENAR' },
            { src: 'paq1.webp', title: 'paq1', description: 'LLENAR' },
            { src: 'paq2.webp', title: 'paq2', description: 'LLENAR' },            
            { src: 'paq41.webp', title: 'paq41', description: 'LLENAR' },
            { src: 'rosa.webp', title: 'rosa', description: 'LLENAR' },
            { src: 'rosal.webp', title: 'rosal', description: 'LLENAR' },
            { src: 'rosao.webp', title: 'rosao', description: 'LLENAR' },
            { src: 'semillas.webp', title: 'semillas', description: 'LLENAR' },
            { src: 'sub.webp', title: 'sub', description: 'LLENAR' },
            { src: 'spa.webp', title: 'spa', description: 'LLENAR' },
            { src: 'buda2.webp', title: 'buda2', description: 'LLENAR' },
            { src: 'mesap2.webp', title: 'mesap2', description: 'LLENAR' },
            { src: 'papas.webp', title: 'papas', description: 'LLENAR' },
            { src: 'mesa.webp', title: 'mesa', description: 'LLENAR' },
            { src: 'buda.webp', title: 'Buda', description: 'LLENAR' },
        ];

        // Configurar la cuadrícula
        const gridImages = galleryImages.slice(0, 12); // Mostrar solo las primeras 12 imágenes en la cuadrícula
        gridImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${buildImageUrl(image.src)}" alt="${image.title}">
                <div class="image-overlay">
                    <h3 class="image-title">${image.title}</h3>
                    <p class="image-description">${image.description}</p>
                </div>
            `;
            galleryItem.addEventListener('click', () => {
                showImageDetails(image);
            });
            galleryGrid.appendChild(galleryItem);
        });

        verMasButton.addEventListener('click', () => {
            window.location.href = 'galeria.html';
        });
    }

    function showImageDetails(image) {
        const modal = getElement('imageModal');
        const modalImg = getElement('modalImage');
        const modalDescription = getElement('modalDescription');

        if (!modal || !modalImg || !modalDescription) {
            console.error('Modal elements not found');
            return;
        }

        modalImg.src = buildImageUrl(image.src);
        modalImg.alt = image.title;
        modalDescription.innerHTML = `<h3>${image.title}</h3><p>${image.description}</p>`;
        modal.style.display = 'block';
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

    function setupGalleryModal() {
        const modal = getElement('imageModal');
        const closeBtn = modal.querySelector('.close');

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function setupFilters() {
        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
        setupFilterButtons('.package-nav', '#package-list', '.package-item');
    }

    function setupFilterButtons(navSelector, listSelector, itemSelector) {
        const filterButtons = document.querySelectorAll(`${navSelector} button`);
        const items = document.querySelectorAll(itemSelector);

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.querySelector('.hidden-text').textContent.toLowerCase().replace(/\s+/g, '-');
                
                // Actualizar botones activos
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filtrar elementos
                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Manejo de errores de carga de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/IMG/error.webp';
        });
    });
});
