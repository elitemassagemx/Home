const services = {
    individual: [
        {
            title: "Masaje de Aromaterapia Individual",
            description: "Disfruta de un masaje relajante con aceites esenciales personalizados para ti. Este masaje combina técnicas suaves y aromaterapia para promover la relajación y el bienestar.",
            benefits: "Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.",
            duration: "60 min"
        },
        // ... (resto de los servicios individuales)
    ],
    pareja: [
        {
            title: "Masaje en Pareja de Aromaterapia",
            description: "Disfruta de un masaje relajante mientras ambos se sumergen en una atmósfera de calma con aceites esenciales personalizados. Este masaje combina técnicas suaves y aromaterapia para promover la relajación y el bienestar.",
            benefits: "Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.",
            duration: "60 min"
        },
        // ... (resto de los servicios en pareja)
    ],
    paquetes: [
        {
            title: "Paquete Romance Total",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: "Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.",
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: "Relajación profunda, experiencia sensorial completa, y momentos de disfrute compartido."
        },
        // ... (resto de los paquetes)
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");
    console.log("Services object:", services);

    const servicesList = document.getElementById('services-list');
    console.log("Services list element:", servicesList);

    const packageList = document.getElementById('package-list');
    const choiceChips = document.querySelectorAll('.choice-chip');

    // Add color transition div
    const colorTransition = document.createElement('div');
    colorTransition.className = 'color-transition';
    document.body.appendChild(colorTransition);

    function renderServices(category) {
        servicesList.innerHTML = '';
        services[category].forEach(service => {
            const li = document.createElement('div');
            li.className = 'service-item';
            li.innerHTML = `
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <p><strong>Beneficios:</strong> ${service.benefits}</p>
                <p><strong>Duración:</strong> ${service.duration}</p>
                <div class="service-buttons">
                    <button onclick="sendWhatsAppMessage('Reservar Ahora', '${service.title}')">Reserva ahora</button>
                    <button onclick="sendWhatsAppMessage('Saber más', '${service.title}')">Saber más</button>
                </div>
            `;
            servicesList.appendChild(li);
        });
    }

    function renderPackages() {
        packageList.innerHTML = '';
        services.paquetes.forEach(pkg => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package-item';
            packageElement.innerHTML = `
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <p><strong>Incluye:</strong> ${pkg.includes}</p>
                <p><strong>Duración:</strong> ${pkg.duration}</p>
                <p><strong>Beneficios:</strong> ${pkg.benefits}</p>
                <button onclick="sendWhatsAppMessage('Reservar', '${pkg.title}')">Reservar</button>
                <button onclick="sendWhatsAppMessage('Saber más', '${pkg.title}')">Saber más</button>
            `;
            packageList.appendChild(packageElement);
        });
    }

    choiceChips.forEach(chip => {
        chip.addEventListener('click', () => {
            choiceChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    window.sendWhatsAppMessage = function(action, serviceTitle) {
        let message;
        if (action === 'Saber más') {
            message = encodeURIComponent(`Hola! Quiero saber más de ${serviceTitle}`);
        } else {
            message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        }
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    };

    // Color transition effect
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        colorTransition.style.opacity = scrollPercentage / 100;
    });

    // Inicialización
    renderServices('individual');
    renderPackages();
});
