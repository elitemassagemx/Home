document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const verMasBtn = document.getElementById('ver-mas-galeria');
    const galleryGrid = document.querySelector('.gallery-grid');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');
    const header = document.getElementById('sticky-header');
    let isExpanded = false;
    let lastScrollTop = 0;

    // Inicializaciones
    initDarkMode();
    initLanguageSelector();
    initGallery();
    initScrollAnimations();
    initStickyHeader();
    initImageModal();
    loadJSONData();

    // Función para inicializar el modo oscuro
    function initDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }

        darkModeToggle.addEventListener('change', function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
        });
    }

    // Función para inicializar el selector de idioma
    function initLanguageSelector() {
        translateIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageOptions.style.display = 'none';
            });
        });

        document.addEventListener('click', function() {
            languageOptions.style.display = 'none';
        });
    }

    // Función para inicializar la galería
    function initGallery() {
        verMasBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            galleryGrid.style.display = isExpanded ? 'grid' : 'none';
            this.textContent = isExpanded ? 'Ver menos' : 'Ver más';
            
            if (isExpanded) {
                galleryGrid.scrollIntoView({behavior: 'smooth'});
            }
        });

        // Inicialización del carrusel (ejemplo con Swiper)
        if (typeof Swiper !== 'undefined') {
            new Swiper('.gallery-carousel', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }

    // Función para inicializar animaciones de desplazamiento
    function initScrollAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray('.gallery-item').forEach((item, index) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }
    }

    // Función para inicializar el encabezado sticky
    function initStickyHeader() {
        window.addEventListener('scroll', function() {
            let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScrollTop > lastScrollTop) {
                // Scroll hacia abajo
                header.style.transform = 'translateY(-100%)';
} else {
                // Scroll hacia arriba
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }, false);
    }

    // Función para inicializar el modal de imágenes
    function initImageModal() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');
        const closeBtn = modal.querySelector('.close');

        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.querySelector('img').src;
                modalDescription.innerHTML = this.querySelector('.image-description').innerHTML;
            });
        });

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        var selectField = document.querySelector('.goog-te-combo');
        if (selectField) {
            selectField.value = lang;
            selectField.dispatchEvent(new Event('change'));
        } else {
            console.error('Google Translate dropdown not found');
        }
    }

    // Función para cargar datos JSON
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
                    const cleanedText = text.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
                    const data = JSON.parse(cleanedText);
                    console.log('JSON data loaded successfully:', data);
                    services = data.services;
                    renderServices('individual');
                    renderPackages();
                    setupFilters();
                    setupServiceCategories();
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    console.error('Problematic JSON:', text);
                    throw error;
                }
            })
            .catch(error => {
                console.error('Error loading or parsing the JSON file:', error);
                const servicesList = document.getElementById('services-list');
                const packageList = document.getElementById('package-list');
                if (servicesList) servicesList.innerHTML = '<p>Error al cargar los servicios. Por favor, intente más tarde.</p>';
                if (packageList) packageList.innerHTML = '<p>Error al cargar los paquetes. Por favor, intente más tarde.</p>';
            });
    }

    // Función para renderizar servicios
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
            const serviceElement = template.content.cloneNode(true);
            
            // Rellenar los detalles del servicio aquí
            // ...

            servicesList.appendChild(serviceElement);
        });
    }

    // Función para renderizar paquetes
    function renderPackages() {
        console.log('Rendering packages');
        const packageList = document.getElementById('package-list');
        const template = document.getElementById('package-template');
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
            const packageElement = template.content.cloneNode(true);
            
            // Rellenar los detalles del paquete aquí
            // ...

            packageList.appendChild(packageElement);
        });
    }

    // Función para configurar filtros
    function setupFilters() {
        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
        setupFilterButtons('.package-nav', '#package-list', '.package-item');
    }

    // Función para configurar botones de filtro
    function setupFilterButtons(navSelector, listSelector, itemSelector) {
        const filterButtons = document.querySelectorAll(`${navSelector} button`);
        const items = document.querySelectorAll(itemSelector);

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
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

    // Función para configurar categorías de servicio
    function setupServiceCategories() {
        const categoryInputs = document.querySelectorAll('.service-category-toggle input[type="radio"]');
        categoryInputs.forEach(input => {
            input.addEventListener('change', () => {
                const category = input.value;
                renderServices(category);
                setupBenefitsNav(category);
            });
        });
        setupBenefitsNav('individual');
    }

    // Función para configurar la navegación de beneficios
    function setupBenefitsNav(category) {
        // Implementar la lógica para configurar la navegación de beneficios
        // ...
    }

    // Manejo de errores de carga de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/fallback-image.png';
        });
    });
});
