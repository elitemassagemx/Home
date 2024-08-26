// Swiper.js para el slider de imágenes
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// ScrollReveal.js para animaciones de scroll
ScrollReveal().reveal('.services li', { delay: 200, distance: '20px', duration: 500, easing: 'ease-out', origin: 'bottom' });
ScrollReveal().reveal('.about', { delay: 200, distance: '20px', duration: 500, easing: 'ease-out', origin: 'bottom' });
ScrollReveal().reveal('.contact', { delay: 200, distance: '20px', duration: 500, easing: 'ease-out', origin: 'bottom' });

// Formulario de contacto con validación y envío asincrónico
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        // Aquí puedes agregar el código para enviar el formulario via AJAX
        const formData = new FormData(form);
        fetch('tu-endpoint-de-envio', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Formulario enviado correctamente');
            form.reset();
        })
        .catch(error => {
            alert('Hubo un error al enviar el formulario');
        });
    } else {
        form.reportValidity();
    }
});


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
const services = {
    individual: [
        {
            title: 'Masaje de Aromaterapia Individual',
            description: 'Disfruta de un masaje relajante con aceites esenciales personalizados para ti. Este masaje combina técnicas suaves y aromaterapia para promover la relajación y el bienestar.',
            benefits: 'Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.',
            duration: '60 min'
        },
        {
            title: 'Masaje de Piedras Calientes Individual',
            description: 'Relájate con el calor reconfortante de piedras lisas y calientes colocadas sobre el cuerpo mientras el terapeuta realiza un masaje profundo. Ideal para aliviar tensiones y mejorar la circulación.',
            benefits: 'Alivio de dolores musculares, mejora de la circulación sanguínea, y profundo estado de relajación.',
            duration: '60 min'
        },
        {
            title: 'Masaje de Espalda y Cuello Individual',
            description: 'Un enfoque especial en la espalda y el cuello, ideal para liberar tensiones acumuladas y relajarse profundamente.',
            benefits: 'Reducción de rigidez, alivio de dolores en la espalda y el cuello, y sensación de relajación.',
            duration: '45 min'
        },
        {
            title: 'Masaje de Piedras Frías Individual',
            description: 'Utiliza piedras frías para estimular la circulación y reducir la inflamación, seguido de técnicas de masaje que promueven la relajación.',
            benefits: 'Reducción de inflamación y estrés, alivio de dolores musculares, y sensación de frescura.',
            duration: '60 min'
        },
        {
            title: 'Masaje Sueco o Relajante Individual',
            description: 'Un masaje clásico que utiliza técnicas de presión y fricción suaves para aliviar el estrés y mejorar la circulación. Ideal para una relajación completa.',
            benefits: 'Relajación general, mejora de la circulación sanguínea, y reducción del estrés.',
            duration: '80 min'
        },
        {
            title: 'Masaje con Chocolaterapia Individual',
            description: 'Un masaje indulgente con lociones a base de chocolate, conocido por sus propiedades antioxidantes. Proporciona una experiencia sensorial completa.',
            benefits: 'Hidratación de la piel, sensación de lujo, y relajación profunda.',
            duration: '45 min'
        },
        {
            title: 'Masaje de Reflexología Individual',
            description: 'Un enfoque en los pies que utiliza puntos de presión específicos para estimular la salud general del cuerpo.',
            benefits: 'Mejora del equilibrio corporal, alivio del estrés, y mejora de la salud general.',
            duration: '45 min'
        },
        {
            title: 'Masaje de Envoltura Corporal Individual',
            description: 'Un masaje combinado con una envoltura corporal nutritiva. Disfruta de un masaje seguido de una envoltura terapéutica basada en algas, barro u otros ingredientes naturales.',
            benefits: 'Hidratación y nutrición de la piel, desintoxicación y relajación profunda.',
            duration: '90 min'
        },
        {
            title: 'Masaje con Aromas y Cera Individual',
            description: 'Un masaje acompañado de ceras aromáticas que se derriten en aceites tibios aplicados sobre la piel, proporcionando una experiencia sensorial completa.',
            benefits: 'Hidratación de la piel, relajación profunda, y experiencia sensorial enriquecida.',
            duration: '60 min'
        },
        {
            title: 'Masaje Lomi Lomi Individual',
            description: 'Un masaje hawaiano que utiliza movimientos largos y fluidos, combinados con técnicas de estiramiento para relajar y revitalizar el cuerpo.',
            benefits: 'Relajación profunda, aumento de la energía, y mejora de la circulación.',
            duration: '60 min'
        },
        {
            title: 'Masaje Shiatsu Individual',
            description: 'Basado en la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo.',
            benefits: 'Estimulación de la energía vital, alivio de tensiones, y mejora del bienestar general.',
            duration: '90 min'
        },
        {
            title: 'Masaje con Aceites de CBD Individual',
            description: 'Un masaje que utiliza aceites infundidos con cannabidiol (CBD) para reducir la inflamación, aliviar el dolor y promover la relajación.',
            benefits: 'Alivio del dolor muscular y articular, reducción de la ansiedad, y relajación profunda.',
            duration: '60 min'
        },
        {
            title: 'Masaje de Cuerpo Completo con Técnicas de Ventosas Individual',
            description: 'Un masaje que combina técnicas tradicionales de masaje con ventosas para mejorar la circulación y aliviar la tensión muscular.',
            benefits: 'Mejora de la circulación sanguínea, alivio de tensiones, y desintoxicación.',
            duration: '90 min'
        }
    ],
    pareja: [
        {
            title: 'Masaje en Pareja de Aromaterapia',
            description: 'Disfruta de un masaje relajante mientras ambos se sumergen en una atmósfera de calma con aceites esenciales personalizados. Este masaje combina técnicas suaves y aromaterapia para promover la relajación y el bienestar.',
            benefits: 'Reducción del estrés, mejora del estado de ánimo, y alivio de tensiones musculares.',
            duration: '60 min'
        },
        {
            title: 'Masaje de Piedras Calientes en Pareja',
            description: 'Relájate con el calor reconfortante de piedras lisas y calientes colocadas sobre el cuerpo mientras los terapeutas realizan un masaje profundo. Ideal para aliviar tensiones y mejorar la circulación.',
            benefits: 'Alivio de dolores musculares, mejora de la circulación sanguínea, y profundo estado de relajación.',
            duration: '60 min'
        },
        {
            title: 'Masaje de Espalda y Cuello en Pareja',
            description: 'Un enfoque especial en la espalda y el cuello, donde ambos reciben un masaje simultáneo. Perfecto para liberar tensiones acumuladas y relajarse en conjunto.',
            benefits: 'Reducción de rigidez, alivio de dolores en la espalda y el cuello, y sensación de relajación compartida.',
            duration: '45 min'
        },
        {
            title: 'Masaje de Piedras Frías en Pareja',
            description: 'Utiliza piedras frías para estimular la circulación y reducir la inflamación, seguido de técnicas de masaje que promueven la relajación. Ideal para una experiencia de enfriamiento y revitalización.',
            benefits: 'Reducción de inflamación y estrés, alivio de dolores musculares, y sensación de frescura compartida.',
            duration: '60 min'
        }
    ],
    paquetes: [
        {
            title: 'Paquete Romance Total',
            description: 'Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.',
            includes: 'Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.',
            duration: '90 minutos de masaje + 30 minutos para disfrutar de las delicias.',
            benefits: 'Relajación profunda, experiencia sensorial completa, y momentos de disfrute compartido.'
        },
        // Agrega más paquetes aquí
    ]
};
const services = {
    individual: [
        // Masajes individuales (ya incluidos)
    ],
    pareja: [
        // Masajes en pareja (ya incluidos)
    ],
    paquetes: [
        {
            title: 'Paquete Romance Total',
            description: 'Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.',
            includes: 'Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.',
            duration: '90 minutos de masaje + 30 minutos para disfrutar de las delicias.',
            benefits: 'Relajación profunda, experiencia sensorial completa, y momentos de disfrute compartido.'
        },
        {
            title: 'Paquete Día de Spa para Parejas',
            description: 'Disfruta de un día completo de relajación y conexión con tu pareja. Incluye una variedad de tratamientos diseñados para revitalizar y relajar.',
            includes: 'Masaje de Aromaterapia, Facial Rejuvenecedor, Pedicura de Spa, y Almuerzo Saludable.',
            duration: '4 horas',
            benefits: 'Rejuvenecimiento total, mejora de la piel, y conexión emocional.'
        },
        {
            title: 'Paquete Detox',
            description: 'Un paquete diseñado para desintoxicar y revitalizar el cuerpo. Ideal para quienes buscan un reset completo.',
            includes: 'Masaje con Técnicas de Ventosas, Envoltura Corporal Desintoxicante, y Bebida Detox.',
            duration: '3 horas',
            benefits: 'Desintoxicación profunda, mejora de la circulación, y relajación total.'
        },
        {
            title: 'Paquete Bienestar Total',
            description: 'Un paquete integral que combina lo mejor de nuestros tratamientos para lograr un estado de bienestar total.',
            includes: 'Masaje Sueco, Facial Hidratante, Reflexología, y Sesión de Aromaterapia.',
            duration: '5 horas',
            benefits: 'Bienestar completo, hidratación de la piel, y alivio de tensiones.'
        },
        {
            title: 'Paquete Spa & Belleza',
            description: 'Este paquete está diseñado para quienes buscan verse y sentirse bien. Combinamos tratamientos de spa con servicios de belleza.',
            includes: 'Masaje Relajante, Manicura y Pedicura, Facial de Limpieza Profunda, y Peinado.',
            duration: '4 horas',
            benefits: 'Belleza mejorada, piel más saludable, y relajación profunda.'
        },
        {
            title: 'Paquete Energía Renovada',
            description: 'Recarga tu energía con este paquete que combina técnicas de masaje revitalizantes y tratamientos de spa.',
            includes: 'Masaje Energético, Exfoliación Corporal, y Sesión de Acupuntura.',
            duration: '3 horas',
            benefits: 'Aumento de la energía, renovación de la piel, y alivio de la fatiga.'
        },
        {
            title: 'Paquete Spa Express',
            description: 'Perfecto para quienes tienen poco tiempo pero desean una experiencia de spa completa.',
            includes: 'Masaje Relajante Exprés, Facial Exprés, y Manicura Exprés.',
            duration: '2 horas',
            benefits: 'Relajación rápida, mejora instantánea de la piel, y uñas impecables.'
        },
        {
            title: 'Paquete Serenidad',
            description: 'Un paquete diseñado para promover la calma y la tranquilidad mental.',
            includes: 'Masaje de Piedras Calientes, Sesión de Meditación Guiada, y Té Relajante.',
            duration: '3 horas',
            benefits: 'Relajación profunda, calma mental, y equilibrio emocional.'
        },
        {
            title: 'Paquete Rejuvenecimiento Total',
            description: 'Disfruta de una experiencia rejuvenecedora que incluye tratamientos diseñados para revitalizar el cuerpo y la mente.',
            includes: 'Masaje Anti-Envejecimiento, Envoltura Corporal Reafirmante, y Facial Anti-Envejecimiento.',
            duration: '4 horas',
            benefits: 'Rejuvenecimiento visible, piel más firme, y bienestar general.'
        },
        {
            title: 'Paquete Mamá Radiante',
            description: 'Diseñado específicamente para las futuras mamás, este paquete ofrece tratamientos seguros y relajantes durante el embarazo.',
            includes: 'Masaje Prenatal, Facial Hidratante, y Pedicura Especial para Embarazadas.',
            duration: '3 horas',
            benefits: 'Alivio de molestias del embarazo, hidratación de la piel, y relajación.'
        },
        {
            title: 'Paquete Desconexión Digital',
            description: 'Desconéctate del mundo digital y relájate con este paquete diseñado para aliviar el estrés tecnológico.',
            includes: 'Masaje de Desintoxicación Digital, Sesión de Yoga, y Baño de Hierbas.',
            duration: '3 horas',
            benefits: 'Alivio del estrés digital, relajación profunda, y reequilibrio del cuerpo y la mente.'
        }
    ]
};

    // Mostrar servicios individuales por defecto
    renderServices('individual');

    // Función para enviar mensaje a WhatsApp
    window.sendWhatsAppMessage = function(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    };
});
