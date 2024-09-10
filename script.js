document.addEventListener('DOMContentLoaded', () => {
    const services = {
        individual: [
            {
                "title": "Aromaterapia",
                "description": "Elige de nuestra selección de aceites esenciales pensados en tu relajación. Nuestras terapeutas combinan técnicas suaves que no te puedes perder.",
                "benefits": "Bajará tu Estrés, Cambiará tu Ánimo, Aliviarás Tensiones.",
                "duration": "60 min",
                "icon": "cfragancia2.png",
                "benefitsIcon": "cdolor espalda.png",
                "durationIcon": "duration-icon.png",
                "image": "aromaterapia-image.jpg"
            },
            {
                "title": "Piedras Calientes",
                "description": "Disfruta el calor de nuestras piedras lisas de Origen Volcánico, mientras tu terapeuta hace un masaje profundo.",
                "benefits": "Aliviarás Dolores Musculares, Mejorarás tu Circulación, Relajación Profunda.",
                "duration": "60 min",
                "icon": "piedras-calientes-icon.png",
                "benefitsIcon": "ccirculacion.png",
                "durationIcon": "duration-icon.png",
                "image": "piedras-calientes-image.jpg"
            },
            {
                "title": "Piedras Frías",
                "description": "Las manos expertas de nuestras terapeutas usarán piedras frías para estimular la circulación y reducir la inflamación.",
                "benefits": "Reducirás: Inflamación, Estrés, Dolores Musculares.",
                "duration": "60 min",
                "icon": "piedras-frias-icon.png",
                "benefitsIcon": "cdolor espalda.png",
                "durationIcon": "duration-icon.png",
                "image": "piedras-frias-image.jpg"
            },
            {
                "title": "Espalda y Cuello",
                "description": "Un enfoque especial para liberar tensiones acumuladas y relajarse profundamente.",
                "benefits": "Relajación, Alivio de Dolores en Espalda y Cuello.",
                "duration": "45 min",
                "icon": "espalda-cuello-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "espalda-cuello-image.jpg"
            },
            {
                "title": "Sueco Relajante",
                "description": "Ideal para una relajación completa, nuestras especialistas usarán técnicas de presión suaves para calmar el estrés.",
                "benefits": "Relajación Total, Mejora Circulación Sanguínea.",
                "duration": "80 min",
                "icon": "sueco-relajante-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "sueco-relajante-image.jpg"
            },
            {
                "title": "Chocolaterapia",
                "description": "Disfruta de sus propiedades antioxidantes con nuestra selección de lociones hechas de chocolate.",
                "benefits": "Hidratará tu Piel, Multisensorial, Relajación Profunda.",
                "duration": "45 min",
                "icon": "choco.png",
                "benefitsIcon": "chidratacion.png",
                "durationIcon": "duration-icon.png",
                "image": "chocolaterapia-image.jpg"
            },
            {
                "title": "Reflexología",
                "description": "Centrado en tus pies, aplicando puntos de presión para estimular la salud general.",
                "benefits": "Mejorarás tu Equilibrio, Reducirás el Estrés.",
                "duration": "45 min",
                "icon": "reflexologia-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "reflexologia-image.jpg"
            },
            {
                "title": "Envoltura Corporal",
                "description": "Disfruta de un masaje completo seguido de una envoltura terapéutica con algas, barro y otros ingredientes naturales.",
                "benefits": "Nutrición e Hidratación para tu Piel, Desintoxicante.",
                "duration": "90 min",
                "icon": "envoltura-corporal-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "envoltura-corporal-image.jpg"
            },
            {
                "title": "Aromas y Cera",
                "description": "Disfruta de ceras aromáticas que se derriten y se aplican como aceites tibios sobre tu piel.",
                "benefits": "Hidratará tu Piel, Relajación Profunda, Multisensorial.",
                "duration": "60 min",
                "icon": "aromas-cera-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "aromas-cera-image.jpg"
            },
            {
                "title": "Lomi Lomi",
                "description": "Masaje hawaiano con movimientos largos y fluidos, combinando estiramientos para relajar y revitalizar.",
                "benefits": "Relajación Profunda, Aumento de Energía, Mejora Circulación.",
                "duration": "60 min",
                "icon": "lomi-lomi-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "lomi-lomi-image.jpg"
            },
            {
                "title": "Shiatsu",
                "description": "Inspirado en la medicina japonesa, este masaje utiliza presión de dedos y estiramientos para equilibrar la energía.",
                "benefits": "Estimulación de la Energía Vital, Alivio de Tensiones.",
                "duration": "90 min",
                "icon": "shiatsu-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "shiatsu-image.jpg"
            },
            {
                "title": "Aceites de CBD",
                "description": "Masaje con aceites de CBD para reducir la inflamación, aliviar el dolor y promover la relajación.",
                "benefits": "Alivio Dolor Muscular, Reduce Ansiedad, Calma Profunda.",
                "duration": "60 min",
                "icon": "cbd-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "cbd-image.jpg"
            },
            {
                "title": "Cuerpo Completo con Ventosas",
                "description": "Las ventosas en puntos específicos estimularán tu circulación sanguínea y linfática, liberando toxinas.",
                "benefits": "Mejora Circulación, Alivio de Tensiones, Desintoxicante.",
                "duration": "90 min",
                "icon": "ventosas-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "ventosas-image.jpg"
            }
        ],
        pareja: [
            {
                "title": "Aromaterapia para 2",
                "description": "Disfruten de un masaje relajante mientras se sumergen en una atmósfera de calma con aceites esenciales que eligieron previamente. Este masaje combina técnicas suaves y aromaterapia promoviendo la relajación y el bienestar.",
                "benefits": "Reducirán Estrés, Mejora en Estado de Ánimo, y Alivia Tensiones Musculares.",
                "duration": "60 min",
                "icon": "cfragancia2.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "aromaterapia-image.jpg"
            },
            {
                "title": "Experiencia Piedras Calientes en Pareja",
                "description": "Comparte el calor y relajación de un masaje con piedras lisas de Origen Volcánico colocadas sobre el cuerpo mientras reciben un masaje profundo. Ideal para momentos de unión, liberar tensiones y mejorar la circulación.",
                "benefits": "Alivio de dolores musculares, mejora de la circulación sanguínea, y profundo estado de relajación.",
                "duration": "60 min",
                "icon": "piedras-calientes-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "piedras-calientes-image.jpg"
            },
            {
                "title": "Liberan Cuello y Espalda",
                "description": "Perfecto para liberar estrés y tensiones acumuladas. Masaje focalizado donde disfrutan y crean conexión.",
                "benefits": "Reducirán Rigidez, Alivia Dolores Espalda y Cuello, Sensación Relajación Compartida.",
                "duration": "45 min",
                "icon": "cuello-espalda-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "cuello-espalda-image.jpg"
            },
            {
                "title": "Masaje de Piedras Frías en Pareja",
                "description": "Revitaliza su piel y estimula la circulación seguido de técnicas de masaje que promueven la relajación. Ideal para una experiencia memorable de revitalización.",
                "benefits": "Mejoras en la Piel, Reduce Inflamación Estrés, Alivio de Dolores Musculares.",
                "duration": "60 min",
                "icon": "piedras-frias-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "piedras-frias-image.jpg"
            },
            {
                "title": "Sueco Relajante para 2",
                "description": "Masaje con técnicas de presión y fricción suaves que alivian el estrés y mejoran tu circulación. Experiencia simultánea que refuerza vínculos.",
                "benefits": "Relajación General, Mejora la Circulación, Reduce Estrés.",
                "duration": "80 min",
                "icon": "sueco-relajante-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "sueco-relajante-image.jpg"
            },
            {
                "title": "Chocolaterapia en Pareja",
                "description": "Disfruta de un masaje indulgente con lociones a base de chocolate, conocido por sus propiedades antioxidantes. Este tratamiento es ideal para una experiencia sensorial completa.",
                "benefits": "Hidratación de la piel, sensación de lujo, y relajación profunda.",
                "duration": "45 min",
                "icon": "chocolaterapia-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "chocolaterapia-image.jpg"
            },
            {
                "title": "Masaje de Reflexología en Pareja",
                "description": "Un enfoque en los pies que utiliza puntos de presión específicos para estimular la salud general del cuerpo. Ambos disfrutarán de este tratamiento revitalizante.",
                "benefits": "Mejora del equilibrio corporal, alivio del estrés, y mejora de la salud general.",
                "duration": "45 min",
                "icon": "reflexologia-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "reflexologia-image.jpg"
            },
            {
                "title": "Masaje de Envoltura Corporal en Pareja",
                "description": "Un masaje combinado con una envoltura corporal nutritiva. Ambos recibirán un masaje y luego serán envueltos en una envoltura terapéutica que puede estar basada en algas, barro o ingredientes naturales.",
                "benefits": "Hidratación y nutrición de la piel, desintoxicación y relajación profunda.",
                "duration": "90 min",
                "icon": "envoltura-corporal-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "envoltura-corporal-image.jpg"
            },
            {
                "title": "Masaje con Aromas y Cera en Pareja",
                "description": "Disfruta de un masaje acompañado de ceras aromáticas que se derriten en aceites tibios aplicados sobre la piel. Proporciona una experiencia sensorial completa con aroma, calor y tacto.",
                "benefits": "Hidratación de la piel, relajación profunda, y experiencia sensorial enriquecida.",
                "duration": "60 min",
                "icon": "aromas-cera-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "aromas-cera-image.jpg"
            },
            {
                "title": "Masaje Lomi Lomi en Pareja",
                "description": "Este masaje hawaiano utiliza movimientos largos y fluidos, combinados con técnicas de estiramiento para relajar y revitalizar el cuerpo. Disfruta de una experiencia de conexión y armonía mientras ambos reciben el masaje simultáneamente.",
                "benefits": "Relajación profunda, aumento de la energía, y mejora de la circulación.",
                "duration": "60 min",
                "icon": "lomi-lomi-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "lomi-lomi-image.jpg"
            },
            {
                "title": "Masaje Shiatsu en Pareja",
                "description": "Basado en la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo. Se realiza en dos camillas o en una cama de masaje doble.",
                "benefits": "Estimulación de la energía vital, alivio de tensiones, y mejora del bienestar general.",
                "duration": "90 min",
                "icon": "shiatsu-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "shiatsu-image.jpg"
            },
            {
                "title": "Masaje con Aceites de CBD en Pareja",
                "description": "Un masaje que utiliza aceites infundidos con cannabidiol (CBD) para ayudar a reducir la inflamación, aliviar el dolor y promover la relajación.",
                "benefits": "Alivio del dolor muscular y articular, reducción de la ansiedad, y relajación profunda.",
                "duration": "60 min",
                "icon": "cbd-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "cbd-image.jpg"
            },
            {
                "title": "Masaje de Cuerpo Completo con Técnicas de Ventosas en Pareja",
                "description": "Un masaje que combina técnicas tradicionales de masaje con ventosas para mejorar la circulación y aliviar la tensión muscular.",
                "benefits": "Mejora de la circulación sanguínea, alivio de tensiones, y desintoxicación.",
                "duration": "90 min",
                "icon": "ventosas-icon.png",
                "benefitsIcon": "benefits-icon.png",
                "durationIcon": "duration-icon.png",
                "image": "ventosas-image.jpg"
            }
        ],
        "paquetes": [
            {
                "title": "Paquete Romance Total",
                "description": "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
                "includes": "Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.",
                "duration": "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
                "benefits": ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
                "icon": "romance-total-icon.png",
                "benefitsIcon": ["benefit1-icon.png", "benefit2-icon.png"],
                "durationIcon": "duration-romance-icon.png",
                "image": "romance-total-image.jpg"
            },
            {
                "title": "Paquete Romance Total 2",
                "description": "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
                "includes": "Masaje en Pareja de Aromaterapia, Sabor de Café (Latte, Capuchino, Expreso), y Pastel o Tarta.",
                "duration": "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
                "benefits": ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
                "icon": "romance-total2-icon.png",
                "benefitsIcon": ["benefit1-icon.png", "benefit2-icon.png"],
                "durationIcon": "duration-romance2-icon.png",
                "image": "romance-total2-image.jpg"
            },
            {
                "title": "Paquete Lujo y Sabor",
                "description": "Un paquete que combina técnicas de masaje de lujo con sabores exquisitos para un día de indulgencia.",
                "includes": "Masaje de Piedras Calientes en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos y Vino.",
                "duration": "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
                "benefits": ["Alivio de tensiones", "degustación de sabores refinados", "experiencia de lujo"],
                "icon": "lujo-sabor-icon.png",
                "benefitsIcon": ["benefit-lujo1-icon.png", "benefit-lujo2-icon.png"],
                "durationIcon": "duration-lujo-icon.png",
                "image": "lujo-sabor-image.jpg"
            },
            {
                "title": "Paquete Sensaciones Inolvidables",
                "description": "Un paquete pensado para ofrecer una experiencia sensorial completa con masajes, vino y sabores exquisitos.",
                "includes": "Masaje de Cuerpo Completo en Pareja, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Artísticos.",
                "duration": "90 minutos de masaje + 45 minutos para disfrutar de las delicias.",
                "benefits": ["Relajación total", "degustación gourmet", "experiencia romántica"],
                "icon": "sensaciones-icon.png",
                "benefitsIcon": ["benefit-sensaciones1-icon.png", "benefit-sensaciones2-icon.png"],
                "durationIcon": "duration-sensaciones-icon.png",
                "image": "sensaciones-image.jpg"
            },
            {
                "title": "Paquete Escape de Lujo",
                "description": "Una escapada lujosa para parejas que buscan un día de relajación y disfrute.",
                "includes": "Masaje con Aromaterapia y Envoltura de Algas en Pareja, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos y Frutas.",
                "duration": "90 minutos de masaje + 30 minutos para degustar las delicias.",
                "benefits": ["Relajación profunda", "desintoxicación", "experiencia culinaria exquisita"],
                "icon": "escape-lujo-icon.png",
                "benefitsIcon": ["benefit-escape1-icon.png", "benefit-escape2-icon.png"],
                "durationIcon": "duration-escape-icon.png",
                "image": "escape-lujo-image.jpg"
            },
            {
                "title": "Paquete Relax y Sabores",
                "description": "Disfruta de un masaje relajante seguido de una experiencia gourmet para cerrar el día.",
                "includes": "Masaje de Reflexología en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos.",
                "duration": "60 minutos de masaje + 30 minutos para degustar.",
                "benefits": ["Alivio del estrés", "disfrute sensorial", "conexión íntima"],
                "icon": "relax-sabores-icon.png",
                "benefitsIcon": ["benefit-relax1-icon.png", "benefit-relax2-icon.png"],
                "durationIcon": "duration-relax-icon.png",
                "image": "relax-sabores-image.jpg"
            },
            {
                "title": "Paquete Tranquilidad Gourmet",
                "description": "Un paquete diseñado para ofrecer relajación total y sabores exquisitos en un entorno lujoso.",
                "includes": "Masaje con Aceites de CBD en Pareja, Sabor de Café (Latte, Capuchino, Expreso), y Pastel o Tarta.",
                "duration": "60 minutos de masaje + 30 minutos para disfrutar.",
                "benefits": ["Alivio del dolor", "relajación", "experiencia gourmet"],
                "icon": "tranquilidad-gourmet-icon.png",
                "benefitsIcon": ["benefit-tranquilidad1-icon.png", "benefit-tranquilidad2-icon.png"],
                "durationIcon": "duration-tranquilidad-icon.png",
                "image": "tranquilidad-gourmet-image.jpg"
            },
            {
                "title": "Paquete Relajación y Gourmet",
                "description": "Un paquete que combina técnicas de masaje para una relajación total con un toque gourmet.",
                "includes": "Masaje Sueco en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos.",
                "duration": "60 minutos de masaje + 30 minutos para degustar.",
                "benefits": ["Relajación", "degustación", "toque especial"],
                "icon": "relajacion-gourmet-icon.png",
                "benefitsIcon": ["benefit-relajacion1-icon.png", "benefit-relajacion2-icon.png"],
                "durationIcon": "duration-relajacion-icon.png",
                "image": "relajacion-gourmet-image.jpg"
            }
        ]
    };
      const header = document.getElementById('sticky-header');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > headerHeight) {
            if (scrollTop > lastScrollTop) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
                header.classList.add('sticky');
            }
        } else {
            header.classList.remove('sticky');
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.querySelector('.language-options');

    languageSelector.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            console.log(`Cambiando idioma a: ${lang}`);
            languageOptions.style.display = 'none';
        });
    });

    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            languageOptions.style.display = 'none';
        }
    });

    const choiceChips = document.querySelectorAll('.choice-chip');
    const servicesList = document.getElementById('services-list');

    function renderServices(category) {
        servicesList.innerHTML = '';
        services[category].forEach(service => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'service-item';
            serviceElement.innerHTML = `
                <h3>${service.title} <img src="${service.icon}" alt="${service.title} icon" class="service-icon"></h3>
                <p>${service.description}</p>
                <p><strong>Beneficios:</strong> <img src="${service.benefitsIcon}" alt="Beneficios" class="icon"> ${service.benefits}</p>
                <p><strong>Duración:</strong> <img src="${service.durationIcon}" alt="Duración" class="icon"> ${service.duration}</p>
                <div class="service-buttons">
                    <button onclick="sendWhatsAppMessage('Reservar Ahora', '${service.title}')">Reserva ahora</button>
                    <button onclick="showPopup(${JSON.stringify(service)})">Saber más</button>
                </div>
            `;
            servicesList.appendChild(serviceElement);
        });
    }

    choiceChips.forEach(chip => {
        chip.addEventListener('click', () => {
            choiceChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    // Render initial services (individual)
    renderServices('individual');

    // Render packages
    const packageList = document.getElementById('package-list');
    services.paquetes.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package-item';
        packageElement.innerHTML = `
            <h3>${pkg.title}</h3>
            <p>${pkg.description}</p>
            <p><strong>Incluye:</strong> ${pkg.includes}</p>
            <p><strong>Duración:</strong> ${pkg.duration}</p>
            <p><strong>Beneficios:</strong> ${pkg.benefits.join(', ')}</p>
            <button onclick="sendWhatsAppMessage('Reservar', '${pkg.title}')">Reservar</button>
            <button onclick='showPopup(${JSON.stringify(pkg)})'>Saber más</button>
        `;
        packageList.appendChild(packageElement);
    });
});

function showPopup(data) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');

    popupTitle.textContent = data.title;
    popupImage.src = data.popupImage;
    popupImage.alt = data.title;
    popupDescription.textContent = data.popupDescription;

    popup.style.display = 'block';
}

// Cerrar el pop-up
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

// Cerrar el pop-up si se hace clic fuera de él
window.addEventListener('click', (e) => {
    const popup = document.getElementById('popup');
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

function sendWhatsAppMessage(action, serviceTitle) {
    let message;
    if (action === 'Saber más') {
        message = encodeURIComponent(`Hola! Quiero saber más de ${serviceTitle}`);
    } else {
        message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
    }
    const url = `https://wa.me/5215640020305?text=${message}`;
    window.open(url, '_blank');
}
