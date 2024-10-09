setupBenefitsNav('individual');
        setupPackageNav();
    }

    function setupBenefitsNav(category) {
        const benefitsNav = document.querySelector('.benefits-nav');
        if (!benefitsNav) return;

        benefitsNav.innerHTML = '';
        const allBenefitsIcons = new Set();

        if (services[category]) {
            services[category].forEach(service => {
                if (Array.isArray(service.benefitsIcons)) {
                    service.benefitsIcons.forEach(icon => allBenefitsIcons.add(icon));
                }
            });
        }

        const allButton = document.createElement('button');
        allButton.classList.add('benefit-btn', 'active');
        allButton.dataset.filter = 'all';
        allButton.innerHTML = `
            <img src="${BASE_URL}todos.png" alt="Todos">
            <span>Todos</span>
        `;
        benefitsNav.appendChild(allButton);

        allBenefitsIcons.forEach(icon => {
            const button = document.createElement('button');
            button.classList.add('benefit-btn');
            button.dataset.filter = icon.replace(/\.[^/.]+$/, "").toLowerCase();
            button.innerHTML = `
                <img src="${buildImageUrl(icon)}" alt="Beneficio">
            `;
            benefitsNav.appendChild(button);
        });

        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
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
            <img src="${BASE_URL}todos.png" alt="Todos">
            <span>Todos</span>
        `;
        packageNav.appendChild(allButton);

        allPackages.forEach(packageTitle => {
            const button = document.createElement('button');
            button.classList.add('package-btn');
            button.dataset.filter = packageTitle.toLowerCase().replace(/\s+/g, '-');
            button.innerHTML = `
                <img src="${BASE_URL}${packageTitle.toLowerCase().replace(/\s+/g, '-')}-icon.png" alt="${packageTitle}">
                <span>${packageTitle}</span>
            `;
            packageNav.appendChild(button);
        });

        setupFilterButtons('.package-nav', '#package-list', '.package-item');
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

    function setupGallery() {
        const galleryCarousel = document.querySelector('.gallery-carousel');
        const galleryGrid = document.querySelector('.gallery-grid');
        const verMasButton = getElement('ver-mas-galeria');

        if (!galleryCarousel || !galleryGrid || !verMasButton) {
            console.error('Gallery elements not found');
            return;
        }

        // Aquí deberías cargar las imágenes de la galería desde tu fuente de datos
        const galleryImages = [
            { src: 'imagen1.jpg', title: 'Título 1', description: 'Descripción 1' },
            { src: 'imagen2.jpg', title: 'Título 2', description: 'Descripción 2' },
            // ... más imágenes
        ];

        // Configurar el carrusel
        galleryImages.forEach(image => {
            const img = document.createElement('img');
            img.src = buildImageUrl(image.src);
            img.alt = image.title;
            galleryCarousel.appendChild(img);
        });

        // Configurar la cuadrícula
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${buildImageUrl(image.src)}" alt="${image.title}">
                <div class="image-overlay">
                    <h3 class="image-title">${image.title}</h3>
                    <p class="image-description">${image.description}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });

        verMasButton.addEventListener('click', () => {
            galleryGrid.style.display = galleryGrid.style.display === 'none' ? 'grid' : 'none';
            verMasButton.textContent = galleryGrid.style.display === 'none' ? 'Ver más' : 'Ver menos';
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

    function setupGalleryModal() {
        const modal = getElement('imageModal');
        const modalImg = getElement('modalImage');
        const modalDescription = getElement('modalDescription');
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

    function setupFilters() {
        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
        setupFilterButtons('.package-nav', '#package-list', '.package-item');
    }

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
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    function setupDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
            }
        });
    }

    function setupScrollHandling() {
        const header = document.querySelector('.header-controls');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.top = '-50px';
            } else {
                // Scrolling up
                header.style.top = '10px';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

    // Manejo de errores de carga de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/fallback-image.png';
        });
    });
});
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
        setupBenefitsNav('individual');
        setupPackageNav();
    }

    function setupBenefitsNav(category) {
        const benefitsNav = document.querySelector('.benefits-nav');
        if (!benefitsNav) return;

        benefitsNav.innerHTML = '';
        const allBenefitsIcons = new Set();

        if (services[category]) {
            services[category].forEach(service => {
                if (Array.isArray(service.benefitsIcons)) {
                    service.benefitsIcons.forEach(icon => allBenefitsIcons.add(icon));
                }
            });
        }

        const allButton = document.createElement('button');
        allButton.classList.add('benefit-btn', 'active');
        allButton.dataset.filter = 'all';
        allButton.innerHTML = `
            <img src="${BASE_URL}todos.png" alt="Todos">
            <span>Todos</span>
        `;
        benefitsNav.appendChild(allButton);

        allBenefitsIcons.forEach(icon => {
            const button = document.createElement('button');
            button.classList.add('benefit-btn');
            button.dataset.filter = icon.replace(/\.[^/.]+$/, "").toLowerCase();
            button.innerHTML = `
                <img src="${buildImageUrl(icon)}" alt="Beneficio">
            `;
            benefitsNav.appendChild(button);
        });

        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
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
            <img src="${BASE_URL}todos.png" alt="Todos">
            <span>Todos</span>
        `;
        packageNav.appendChild(allButton);

        allPackages.forEach(packageTitle => {
            const button = document.createElement('button');
            button.classList.add('package-btn');
            button.dataset.filter = packageTitle.toLowerCase().replace(/\s+/g, '-');
            button.innerHTML = `
                <img src="${BASE_URL}${packageTitle.toLowerCase().replace(/\s+/g, '-')}-icon.png" alt="${packageTitle}">
                <span>${packageTitle}</span>
            `;
            packageNav.appendChild(button);
        });

        setupFilterButtons('.package-nav', '#package-list', '.package-item');
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

    function setupGallery() {
        const galleryCarousel = document.querySelector('.gallery-carousel');
        const galleryGrid = document.querySelector('.gallery-grid');
        const verMasButton = getElement('ver-mas-galeria');

        if (!galleryCarousel || !galleryGrid || !verMasButton) {
            console.error('Gallery elements not found');
            return;
        }

        // Aquí deberías cargar las imágenes de la galería desde tu fuente de datos
        const galleryImages = [
            { src: 'imagen1.jpg', title: 'Título 1', description: 'Descripción 1' },
            { src: 'imagen2.jpg', title: 'Título 2', description: 'Descripción 2' },
            // ... más imágenes
        ];

        // Configurar el carrusel
        galleryImages.forEach(image => {
            const img = document.createElement('img');
            img.src = buildImageUrl(image.src);
            img.alt = image.title;
            galleryCarousel.appendChild(img);
        });

        // Configurar la cuadrícula
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${buildImageUrl(image.src)}" alt="${image.title}">
                <div class="image-overlay">
                    <h3 class="image-title">${image.title}</h3>
                    <p class="image-description">${image.description}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });

        verMasButton.addEventListener('click', () => {
            galleryGrid.style.display = galleryGrid.style.display === 'none' ? 'grid' : 'none';
            verMasButton.textContent = galleryGrid.style.display === 'none' ? 'Ver más' : 'Ver menos';
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

    function setupGalleryModal() {
        const modal = getElement('imageModal');
        const modalImg = getElement('modalImage');
        const modalDescription = getElement('modalDescription');
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

    function setupFilters() {
        setupFilterButtons('.benefits-nav', '#services-list', '.service-item');
        setupFilterButtons('.package-nav', '#package-list', '.package-item');
    }

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
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    function setupDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
            }
        });
    }

    function setupScrollHandling() {
        const header = document.querySelector('.header-controls');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.top = '-50px';
            } else {
                // Scrolling up
                header.style.top = '10px';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

    // Manejo de errores de carga de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/fallback-image.png';
        });
    });
});
