document.addEventListener('DOMContentLoaded', () => {
    const servicesList = document.getElementById('services-list');
    const choiceChips = document.querySelectorAll('.choice-chip');
    const services = {
        individual: [
            {
                title: 'Masaje de Aromaterapia Individual',
                description: 'Disfruta de un masaje relajante con aceites esenciales personalizados para ti.',
                benefits: 'Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.',
                duration: '60 min'
            },
            // Agrega más servicios individuales aquí
        ],
        pareja: [
            {
                title: 'Masaje en Pareja de Aromaterapia',
                description: 'Disfruta de un masaje relajante mientras ambos se sumergen en una atmósfera de calma con aceites esenciales personalizados.',
                benefits: 'Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.',
                duration: '60 min'
            },
            // Agrega más servicios en pareja aquí
        ]
    };

    function renderServices(category) {
        servicesList.innerHTML = '';
        services[category].forEach(service => {
            const li = document.createElement('li');
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

    choiceChips.forEach(chip => {
        chip.addEventListener('click', () => {
            choiceChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    // Mostrar servicios individuales por defecto
    renderServices('individual');

    // Función para enviar mensaje a WhatsApp
    window.sendWhatsAppMessage = function(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    };
const packages = [
    {
        title: 'Paquete Romance Total',
        description: 'Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.',
        duration: '90 min',
        price: '$2000'
    },
    {
        title: 'Paquete Lujo y Sabor',
        description: 'Masaje de Piedras Calientes en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos y Vino.',
        duration: '120 min',
        price: '$2500'
    }
];

function renderPackages() {
    const packageList = document.querySelector('.package-list');
    if (packageList) {
        packageList.innerHTML = '';
        packages.forEach(pkg => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package';
            packageElement.innerHTML = `
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <p><strong>Duración:</strong> ${pkg.duration}</p>
                <p><strong>Precio:</strong> ${pkg.price}</p>
                <button onclick="sendWhatsAppMessage('Reservar', '${pkg.title}')">Reservar</button>
            `;
            packageList.appendChild(packageElement);
        });
    }
}

// Llamar a esta función cuando se cargue el documento
document.addEventListener('DOMContentLoaded', renderPackages);
    
    // Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para enviar el formulario
        // Por ahora, solo mostraremos un mensaje de éxito
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
    // Manejo del formulario de newsletter
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = this.email.value;
        // Aquí puedes agregar el código para procesar la suscripción
        // Por ahora, solo mostraremos un mensaje de éxito
        alert(`Gracias por suscribirte con el correo: ${email}. Recibirás nuestras novedades pronto.`);
        this.reset();
    });
}
}
