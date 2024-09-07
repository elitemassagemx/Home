// Funcionalidad para el selector de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.querySelector('.language-options');

    languageSelector.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            // Aquí puedes añadir la lógica para cambiar el idioma
            console.log(`Cambiando idioma a: ${lang}`);
            languageOptions.style.display = 'none';
        });
    });

    // Cerrar el menú de idiomas si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            languageOptions.style.display = 'none';
        }
    });
});

// Resto de tu código JavaScript existente...

const services = {
    individual: [
        {
            title: "Aromaterapia",
            description: "Elige de nuestra selección de aceites esenciales pensados en tu relajación. Nuestras terapeutas combinan técnicas suaves que no te puedes perder.",
            benefits: "Bajará tu Estrés, Cambiará tu Ánimo, Aliviarás Tensiones.",
            duration: "60 min"
        },
       {
            title: "Piedras Calientes",
            description: "Disfruta el calor de nuestras piedras lisas de Origen Volcánico, mientras tu terapeuta hace un masaje profundo. Ideal para aliviar tensiones y mejorar tu circulación.",
            benefits: "Aliviarás Dolores Musculares, Mejorarás tu Circulación, Relajación Profunda.",
            duration: "60 min"
        },
        {
            title: "Piedras Frías",
            description: "Las manos expertas de nuestras terapeutas usarán piedras frías para estimular la circulación y reducir la inflamación.",
            benefits: "Reducirás: Inflamación, Estrés, Dolores Musculares con una sensacion de frescura.",
            duration: "60 min"
        },
        {
            title: "Espalda y Cuello",
            description: "Un enfoque especial para liberar tensiones acumuladas y relajarse profundamente.",
            benefits: "Relajación, Alivio de Dolores en Espalda y Cuello y Reduirás Rigidez,",
            duration: "45 min"
            
        },
        {
            title: "Sueco Relajante",
            description: "Ideal para una relajación completa, nuestras especialistas usarán técnicas de presión y fricción suaves para calmar el estrés y mejorar tu circulación.",
            benefits: "Relajación Total, Mejora Circulación Sanguínea, y Reducirás el Estrés.",
            duration: "80 min"
        },
        {
            title: "Chocolaterapia",
            description: "Disfruta de sus propiedades antioxidantes con nuestra selección de lociones hechas de chocolate. Experiencia sensorial completa.",
            benefits: "Hidratará tu Piel, Multisensorial, Relajación Profunda.",
            duration: "45 min"
        },
        {
            title: "Reflexología",
            description: "Centrado en tu centro: tus pies, apliando puntos de presión para estimular la salud general.",
            benefits: "Mejorarás tu Equilibrio, Reducirás el Estrés, y Bienestar Integral.",
            duration: "45 min"
        },
        {
            title: "Envoltura Corporal",
            description: "Disfruta de un masaje completo seguido de una envoltura terapéutica de nuestras selección de algas, barro y otros ingredientes naturales del mejor origen.",
            benefits: "Nutrición e Hidratación para tu Piel, Desintoxicante y Relajación Profunda.",
            duration: "90 min"
        },
        {
            title: "Aromas y Cera",
            description: "Disfruta de manos expertas con ceras aromáticas que se derriten para ser aplicados en aceites tibios sobre tu piel. Experiencia sensorial completa.",
            benefits: "Hiratará tu piel, Relajación Profunda, Multisensorial",
            duration: "60 min"
        },
        {
            title: "Lomi Lomi",
            description: "Masaje hawaiano con movimientos largos y fluidos, combinando técnicas especiales de estiramiento para relajar y revitalizar tu cuerpo.",
            benefits: "Relajación Profunda, Aumento de Energía, Mejora Circulación.",
            duration: "60 min"
        },
        {
            title: "Shiatsu",
            description: "Inspirado y fiel a la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo.",
            benefits: "Estimulación de la Energía Vital, Alivio de Tensiones, Bienestar Integral",
            duration: "90 min"
        },
        {
            title: "Aceites de CBD",
            description: "Experimenta de un masaje que utiliza aceites infundidos con cannabidiol (CBD) para reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: "Alivio Dolor Muscular y Articular, Reduce Ansiedad, Calma profunda",
            duration: "60 min"
        },
        {
            title: "Cuerpo Completo con Ventosas",
            description: "La succión de las ventosas en puntos específicos estimularán tu cirulación sanguinea y linfática, liberando toxinas.",
            benefits: "Mejora Circulación, Alivio de Tensiones, Desintoxicante",
            duration: "90 min"
        }
    ],
    pareja: [
        {
            title: "Aromaterapia para 2",
            description: "Disfruten de un masaje relajante mientras se sumergen en una atmósfera de calma con aceites esenciales que eligieron previamente. Este masaje combina técnicas suaves y aromaterapia promoviendo la relajación y el bienestar.",
            benefits: "Reducirán Estrés, Mejora en Estado de Ánimo, y Alivia Tensiones Musculares.",
            duration: "60 min"
        },
      {
            title: "Experiencia Piedras Calientes en Pareja",
            description: "Comparte el calor y relajación de un masaje con piedras lisas de Origen Volcánico colocadas sobre el cuerpo mientras reciben un masaje profundo. Ideal para momentos de unión, liberar tensiones y mejorar la circulación.",
            benefits: "Alivio de dolores musculares, mejora de la circulación sanguínea, y profundo estado de relajación.",
            duration: "60 min"
        },
        {
            title: "Liberan Cuello y espalda",
            description: "Perfecto para liberar estrés y tensiones acumuladas. Masaje focalizado donde disfrutan y crean conexión.",
            benefits: "Reducirán Rigidez, Alivia Dolores Espalda y Cuello, Sensación Relajación Compartida.",
            duration: "45 min"
        },
        {
            title: "Masaje de Piedras Frías en Pareja",
            description: "Revitaliza su piel y estimula la circulación seguido de técnicas de masaje que promueven la relajación. Ideal para una experiencia memorable de revitalización.",
            benefits: "Mejoras en la Piel, Reduce Inflamación Estrés, Alivio de Dolores Musculares.",
            duration: "60 min"
        },
        {
            title: "Sueco Relajante para 2",
            description: "Masaje con técnicas de presión y fricción suaves que alivian el estrés y mejoran tu circulación. Experiencia simultánea que refuerza vínculos.",
            benefits: "Relajación General, Mejora la Circulación, Reduce Estrés.",
            duration: "80 min"
        },
        {
            title: "Chocolaterapia en Pareja",
            description: "Disfruta de un masaje indulgente con lociones a base de chocolate, conocido por sus propiedades antioxidantes. Este tratamiento es ideal para una experiencia sensorial completa.",
            benefits: "Hidratación de la piel, sensación de lujo, y relajación profunda.",
            duration: "45 min"
        },
        {
            title: "Masaje de Reflexología en Pareja",
            description: "Un enfoque en los pies que utiliza puntos de presión específicos para estimular la salud general del cuerpo. Ambos disfrutarán de este tratamiento revitalizante.",
            benefits: "Mejora del equilibrio corporal, alivio del estrés, y mejora de la salud general.",
            duration: "45 min"
        },
        {
            title: "Masaje de Envoltura Corporal en Pareja",
            description: "Un masaje combinado con una envoltura corporal nutritiva. Ambos recibirán un masaje y luego serán envueltos en una envoltura terapéutica que puede estar basada en algas, barro o ingredientes naturales.",
            benefits: "Hidratación y nutrición de la piel, desintoxicación y relajación profunda.",
            duration: "90 min"
        },
        {
            title: "Masaje con Aromas y Cera en Pareja",
            description: "Disfruta de un masaje acompañado de ceras aromáticas que se derriten en aceites tibios aplicados sobre la piel. Proporciona una experiencia sensorial completa con aroma, calor y tacto.",
            benefits: "Hidratación de la piel, relajación profunda, y experiencia sensorial enriquecida.",
            duration: "60 min"
        },
        {
            title: "Masaje Lomi Lomi en Pareja",
            description: "Este masaje hawaiano utiliza movimientos largos y fluidos, combinados con técnicas de estiramiento para relajar y revitalizar el cuerpo. Disfruta de una experiencia de conexión y armonía mientras ambos reciben el masaje simultáneamente.",
            benefits: "Relajación profunda, aumento de la energía, y mejora de la circulación.",
            duration: "60 min"
        },
        {
            title: "Masaje Shiatsu en Pareja",
            description: "Basado en la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo. Se realiza en dos camillas o en una cama de masaje doble.",
            benefits: "Estimulación de la energía vital, alivio de tensiones, y mejora del bienestar general.",
            duration: "90 min"
        },
        {
            title: "Masaje con Aceites de CBD en Pareja",
            description: "Un masaje que utiliza aceites infundidos con cannabidiol (CBD) para ayudar a reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: "Alivio del dolor muscular y articular, reducción de la ansiedad, y relajación profunda.",
            duration: "60 min"
        },
        {
            title: "Masaje de Cuerpo Completo con Técnicas de Ventosas en Pareja",
            description: "Un masaje que combina técnicas tradicionales de masaje con ventosas para mejorar la circulación y aliviar la tensión muscular.",
            benefits: "Mejora de la circulación sanguínea, alivio de tensiones, y desintoxicación.",
            duration: "90 min"
        }
    ],
    paquetes: [
        {
            title: "Paquete Romance Total",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: "Masaje en Pareja de Aromaterapia, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Gourmet.",
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: "Relajación profunda, experiencia sensorial completa, y momentos de disfrute compartido."
        },
             {
            title: "Paquete Romance Total 2",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: "Masaje en Pareja de Aromaterapia, Sabor de Café (Latte, Capuchino, Expreso), y Pastel o Tarta.",
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: "Relajación profunda, experiencia sensorial completa, y momentos de disfrute compartido."
        },
        {
            title: "Paquete Lujo y Sabor",
            description: "Un paquete que combina técnicas de masaje de lujo con sabores exquisitos para un día de indulgencia.",
            includes: "Masaje de Piedras Calientes en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos y Vino.",
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: "Alivio de tensiones, degustación de sabores refinados, y una experiencia de lujo."
        },
        {
            title: "Paquete Sensaciones Inolvidables",
            description: "Un paquete pensado para ofrecer una experiencia sensorial completa con masajes, vino y sabores exquisitos.",
            includes: "Masaje de Cuerpo Completo en Pareja, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos Artísticos.",
            duration: "90 minutos de masaje + 45 minutos para disfrutar de las delicias.",
            benefits: "Relajación total, degustación gourmet, y experiencia romántica."
        },
        {
            title: "Paquete Escape de Lujo",
            description: "Una escapada lujosa para parejas que buscan un día de relajación y disfrute.",
            includes: "Masaje con Aromaterapia y Envoltura de Algas en Pareja, Copa de Vino, Fresas con Chocolate, y Tabla de Quesos y Frutas.",
            duration: "90 minutos de masaje + 30 minutos para degustar las delicias.",
            benefits: "Relajación profunda, desintoxicación, y una experiencia culinaria exquisita."
        },
        {
            title: "Paquete Relax y Sabores",
            description: "Disfruta de un masaje relajante seguido de una experiencia gourmet para cerrar el día.",
            includes: "Masaje de Reflexología en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos.",
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: "Alivio del estrés, disfrute sensorial, y conexión íntima."
        },
        {
            title: "Paquete Tranquilidad Gourmet",
            description: "Un paquete diseñado para ofrecer relajación total y sabores exquisitos en un entorno lujoso.",
            includes: "Masaje con Aceites de CBD en Pareja, Sabor de Café (Latte, Capuchino, Expreso), y Pastel o Tarta.",
            duration: "60 minutos de masaje + 30 minutos para disfrutar.",
            benefits: "Alivio del dolor, relajación, y experiencia gourmet."
        },
        {
            title: "Paquete Relajación y Gourmet",
            description: "Un paquete que combina técnicas de masaje para una relajación total con un toque gourmet.",
            includes: "Masaje Sueco en Pareja, Copa de Vino, Fresas con Chocolate, y Selección de Quesos.",
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: "Relajación, degustación, y un toque especial."
        }
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

  // Carousel variables
  let currentIndex = 0;
  const carouselWrapper = document.getElementById("carousel-wrapper");
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");

  function renderCarouselItem(category, index) {
    const service = services[category][index];
    currentOptionText1.innerText = service.title;
    currentOptionText2.innerText = `Duración: ${service.duration}`;
    
    // Ajustar la imagen para que se adapte al contenedor sin cambiar su tamaño
    if (service.image) {
      currentOptionImage.style.backgroundImage = `url(${service.image})`;
      currentOptionImage.style.backgroundSize = 'cover';
      currentOptionImage.style.backgroundPosition = 'center';
    } else {
      currentOptionImage.style.backgroundImage = 'none';
      currentOptionImage.style.backgroundColor = '#f0f0f0'; // Color de fondo por defecto
    }

    // Aplicar color de fondo al menú principal sin afectar el tamaño
    if (service.color) {
      mainMenu.style.backgroundColor = service.color;
    } else {
      mainMenu.style.backgroundColor = '#EBB9D2'; // Color por defecto
    }
  }

  function renderServices(category) {
    servicesList.innerHTML = '';
    services[category].forEach((service, index) => {
      console.log("Rendering service:", service.title);
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
    renderCarouselItem(category, 0);
  }

  // ... (el resto del código permanece igual)

  // Ajustar el tamaño del carrusel al contenedor
  function adjustCarouselSize() {
    const containerWidth = carouselWrapper.offsetWidth;
    const containerHeight = carouselWrapper.offsetHeight;
    
    currentOptionImage.style.width = '100%';
    currentOptionImage.style.height = '100%';
    
    mainMenu.style.width = '100%';
    mainMenu.style.height = '100%';
  }

  // Llamar a la función de ajuste al cargar y al cambiar el tamaño de la ventana
  window.addEventListener('load', adjustCarouselSize);
  window.addEventListener('resize', adjustCarouselSize);

  // Initialization
  renderServices('individual');
  renderPackages();
  adjustCarouselSize();
});
