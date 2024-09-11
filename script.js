
const services = {
    individual: [
        {
            title: "Aromaterapia",
            description: "Elige de nuestra selección de aceites esenciales pensados en tu relajación. Nuestras terapeutas combinan técnicas suaves que no te puedes perder.",
            benefits: ["Bajará tu Estrés", "Cambiará tu Ánimo", "Aliviarás Tensiones"],
            duration: "60 min",
            icon: "cfragancia2.png",
            benefitsIcon: ["cdolor espalda.png"],
            durationIcon: "duration-icon.png",
            image: "aromaterapia-image.jpg",
            popupDescription: "La aromaterapia es una terapia holística que utiliza aceites esenciales naturales para promover la salud y el bienestar. Nuestras expertas terapeutas seleccionarán cuidadosamente los aceites más adecuados para ti, creando una experiencia personalizada que no solo relaja tu cuerpo, sino que también calma tu mente y eleva tu espíritu.",
            popupImage: "aromaterapia-popup.jpg"
        },
        {
            title: "Piedras Calientes",
            description: "Disfruta el calor de nuestras piedras lisas de Origen Volcánico, mientras tu terapeuta hace un masaje profundo.",
            benefits: ["Aliviarás Dolores Musculares", "Mejorarás tu Circulación", "Relajación Profunda"],
            duration: "60 min",
            icon: "piedras-calientes-icon.png",
            benefitsIcon: ["ccirculacion.png"],
            durationIcon: "duration-icon.png",
            image: "piedras-calientes-image.jpg",
            popupDescription: "El masaje con piedras calientes es una terapia antigua que combina el masaje tradicional con el uso de piedras volcánicas lisas y calientes. El calor penetrante de las piedras ayuda a relajar los músculos en profundidad, permitiendo a nuestros terapeutas trabajar más efectivamente en las áreas de tensión. Esta terapia es particularmente efectiva para aliviar dolores musculares, mejorar la circulación y proporcionar una sensación de relajación profunda.",
            popupImage: "piedras-calientes-popup.jpg"
        },
        {
            title: "Piedras Frías",
            description: "Las manos expertas de nuestras terapeutas usarán piedras frías para estimular la circulación y reducir la inflamación.",
            benefits: ["Reducirás Inflamación", "Estrés", "Dolores Musculares"],
            duration: "60 min",
            icon: "piedras-frias-icon.png",
            benefitsIcon: ["cdolor espalda.png"],
            durationIcon: "duration-icon.png",
            image: "piedras-frias-image.jpg",
            popupDescription: "El masaje con piedras frías es una técnica refrescante que utiliza piedras de mármol enfriadas para reducir la inflamación, calmar los músculos y mejorar la circulación. Esta terapia es especialmente beneficiosa para aliviar el dolor muscular, reducir la hinchazón y proporcionar una sensación general de rejuvenecimiento.",
            popupImage: "piedras-frias-popup.jpg"
        },
        {
            title: "Espalda y Cuello",
            description: "Un enfoque especial para liberar tensiones acumuladas y relajarse profundamente.",
            benefits: ["Relajación", "Alivio de Dolores en Espalda y Cuello"],
            duration: "45 min",
            icon: "espalda-cuello-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "espalda-cuello-image.jpg",
            popupDescription: "Este masaje focalizado se centra en las áreas que más comúnmente acumulan tensión: la espalda y el cuello. Utilizando una combinación de técnicas de masaje sueco y de puntos de presión, nuestros terapeutas trabajarán para liberar los nudos musculares, mejorar la flexibilidad y proporcionar un alivio inmediato del estrés y la tensión.",
            popupImage: "espalda-cuello-popup.jpg"
        },
        {
            title: "Sueco Relajante",
            description: "Ideal para una relajación completa, nuestras especialistas usarán técnicas de presión suaves para calmar el estrés.",
            benefits: ["Relajación Total", "Mejora Circulación Sanguínea"],
            duration: "80 min",
            icon: "sueco-relajante-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "sueco-relajante-image.jpg",
            popupDescription: "El masaje sueco es conocido por su capacidad para inducir una relajación profunda y aliviar la tensión muscular. Nuestros terapeutas utilizan una combinación de movimientos largos y fluidos, amasamiento y fricción circular para mejorar la circulación, flexibilidad y bienestar general. Este masaje es perfecto para aquellos que buscan un escape relajante del estrés diario.",
            popupImage: "sueco-relajante-popup.jpg"
        },
        {
            title: "Chocolaterapia",
            description: "Disfruta de sus propiedades antioxidantes con nuestra selección de lociones hechas de chocolate.",
            benefits: ["Hidratará tu Piel", "Multisensorial", "Relajación Profunda"],
            duration: "45 min",
            icon: "choco.png",
            benefitsIcon: ["chidratacion.png"],
            durationIcon: "duration-icon.png",
            image: "chocolaterapia-image.jpg",
            popupDescription: "La chocolaterapia es un tratamiento lujoso que combina los beneficios del masaje con las propiedades nutritivas del chocolate. El cacao rico en antioxidantes ayuda a nutrir y rejuvenecer la piel, mientras que el aroma del chocolate induce una sensación de bienestar y relajación. Este tratamiento no solo es un placer para los sentidos, sino que también deja la piel suave, hidratada y con un brillo saludable.",
            popupImage: "chocolaterapia-popup.jpg"
        },
        {
            title: "Reflexología",
            description: "Centrado en tus pies, aplicando puntos de presión para estimular la salud general.",
            benefits: ["Mejorarás tu Equilibrio", "Reducirás el Estrés"],
            duration: "45 min",
            icon: "reflexologia-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "reflexologia-image.jpg",
            popupDescription: "La reflexología es una técnica terapéutica que se centra en aplicar presión en puntos específicos de los pies que se corresponden con diferentes órganos y sistemas del cuerpo. Este tratamiento no solo proporciona una profunda relajación, sino que también puede ayudar a mejorar la circulación, reducir el estrés y promover un sentido general de bienestar en todo el cuerpo.",
            popupImage: "reflexologia-popup.jpg"
        },
        {
            title: "Envoltura Corporal",
            description: "Disfruta de un masaje completo seguido de una envoltura terapéutica con algas, barro y otros ingredientes naturales.",
            benefits: ["Nutrición e Hidratación para tu Piel", "Desintoxicante"],
            duration: "90 min",
            icon: "envoltura-corporal-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "envoltura-corporal-image.jpg",
            popupDescription: "La envoltura corporal es un tratamiento de spa lujoso que comienza con un suave exfoliante para preparar la piel. Luego, se aplica una mezcla nutritiva de algas, arcilla o ingredientes botánicos en todo el cuerpo. Te envolvemos en una manta térmica para maximizar la absorción de los ingredientes beneficiosos. El tratamiento concluye con la aplicación de una loción hidratante, dejando tu piel suave, nutrida y radiante.",
            popupImage: "envoltura-corporal-popup.jpg"
        },
        {
            title: "Aromas y Cera",
            description: "Disfruta de ceras aromáticas que se derriten y se aplican como aceites tibios sobre tu piel.",
            benefits: ["Hidratará tu Piel", "Relajación Profunda", "Multisensorial"],
            duration: "60 min",
            icon: "aromas-cera-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "aromas-cera-image.jpg",
            popupDescription: "El tratamiento de Aromas y Cera es una experiencia sensorial única que combina los beneficios de la aromaterapia con las propiedades hidratantes de las ceras naturales. Las ceras aromáticas se calientan hasta convertirse en aceites tibios y se aplican suavemente sobre la piel, proporcionando una hidratación profunda y una relajación intensa. Los aromas cuidadosamente seleccionados ayudan a calmar la mente y elevar el espíritu.",
            popupImage: "aromas-cera-popup.jpg"
        },
        {
            title: "Lomi Lomi",
            description: "Masaje hawaiano con movimientos largos y fluidos, combinando estiramientos para relajar y revitalizar.",
            benefits: ["Relajación Profunda", "Aumento de Energía", "Mejora Circulación"],
            duration: "60 min",
            icon: "lomi-lomi-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "lomi-lomi-image.jpg",
            popupDescription: "El Lomi Lomi es un masaje tradicional hawaiano que utiliza movimientos largos, fluidos y rítmicos de los antebrazos y las manos para masajear el cuerpo. Esta técnica única no solo relaja profundamente los músculos, sino que también se dice que ayuda a liberar patrones de pensamiento negativos almacenados en el cuerpo. El resultado es una sensación de rejuvenecimiento tanto física como mental.",
            popupImage: "lomi-lomi-popup.jpg"
        },
        {
            title: "Shiatsu",
            description: "Inspirado en la medicina japonesa, este masaje utiliza presión de dedos y estiramientos para equilibrar la energía.",
            benefits: ["Estimulación de la Energía Vital", "Alivio de Tensiones"],
            duration: "90 min",
            icon: "shiatsu-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "shiatsu-image.jpg",
            popupDescription: "El Shiatsu es una forma de terapia de presión originaria de Japón. Utiliza presión con los dedos, palmas, codos y a veces los pies en puntos específicos del cuerpo para equilibrar el flujo de energía vital o 'chi'. Este tratamiento no solo ayuda a aliviar la tensión muscular y el estrés, sino que también puede mejorar la circulación y promover una sensación general de bienestar y vitalidad.",
            popupImage: "shiatsu-popup.jpg"
        },
        {
            title: "Aceites de CBD",
            description: "Masaje con aceites de CBD para reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: ["Alivio Dolor Muscular", "Reduce Ansiedad", "Calma Profunda"],
            duration: "60 min",
            icon: "cbd-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "cbd-image.jpg",
            popupDescription: "Nuestro masaje con aceites de CBD combina las técnicas de masaje tradicionales con los beneficios terapéuticos del cannabidiol (CBD). El CBD es conocido por sus propiedades antiinflamatorias y calmantes. Este tratamiento puede ayudar a aliviar el dolor muscular crónico, reducir la ansiedad y promover una sensación de calma y bienestar general. Es ideal para aquellos que buscan alivio del estrés y las molestias físicas.",
            popupImage: "cbd-popup.jpg"
        },
        {
            title: "Cuerpo Completo con Ventosas",
            description: "Las ventosas en puntos específicos estimularán tu circulación sanguínea y linfática, liberando toxinas.",
            benefits: ["Mejora Circulación", "Alivio de Tensiones", "Desintoxicante"],
            duration: "90 min",
            icon: "ventosas-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "ventosas-image.jpg",
            popupDescription: "El masaje con ventosas es una técnica antigua que utiliza copas de succión para crear un vacío en la piel. Esto ayuda a aumentar el flujo sanguíneo, liberar la fascia y promover la curación natural del cuerpo. Las ventosas pueden ayudar a aliviar el dolor muscular, reducir la inflamación y mejorar la circulación general. Este tratamiento de cuerpo completo combina las ventosas con técnicas de masaje tradicionales para una experiencia terapéutica integral.",
            popupImage: "ventosas-popup.jpg"
        }
    ],
    pareja: [
        {
            title: "Aromaterapia para 2",
            description: "Disfruten de un masaje relajante mientras se sumergen en una atmósfera de calma con aceites esenciales que eligieron previamente. Este masaje combina técnicas suaves y aromaterapia promoviendo la relajación y el bienestar.",
            benefits: ["Reducirán Estrés", "Mejora en Estado de Ánimo", "Alivia Tensiones Musculares"],
            duration: "60 min",
            icon: "cfragancia2.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "aromaterapia-image.jpg",
            popupDescription: "Experimenten juntos el poder relajante de la aromaterapia. En este masaje para parejas, podrán elegir entre una variedad de aceites esenciales cuidadosamente seleccionados para crear su atmósfera perfecta. Nuestros terapeutas expertos utilizarán técnicas suaves de masaje mientras los aromas elegidos envuelven sus sentidos, proporcionando una experiencia de relajación profunda y conexión mutua.",
            popupImage: "aromaterapia-pareja-popup.jpg"
        },
        {
            title: "Experiencia Piedras Calientes en Pareja",
            description: "Comparte el calor y relajación de un masaje con piedras lisas de Origen Volcánico colocadas sobre el cuerpo mientras reciben un masaje profundo. Ideal para momentos de unión, liberar tensiones y mejorar la circulación.",
            benefits: ["Alivio de dolores musculares", "mejora de la circulación sanguínea", "profundo estado de relajación"],
            duration: "60 min",
            icon: "piedras-calientes-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "piedras-calientes-image.jpg",
            popupDescription: "Sumérjanse juntos en una experiencia de calor y relajación profunda. Las piedras volcánicas calientes se colocan estratégicamente en puntos clave del cuerpo, combinadas con un masaje profundo que alivia la tensión muscular y mejora la circulación. Este tratamiento en pareja no solo proporciona beneficios físicos, sino que también crea un momento íntimo y relajante para compartir y conectar.",
            popupImage: "piedras-calientes-pareja-popup.jpg"
        },
        {
            title: "Liberan Cuello y Espalda",
            description: "Perfecto para liberar estrés y tensiones acumuladas. Masaje focalizado donde disfrutan y crean conexión.",
            benefits: ["Reducirán Rigidez", "Alivia Dolores Espalda y Cuello", "Sensación Relajación Compartida"],
            duration: "45 min",
            icon: "cuello-espalda-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "cuello-espalda-image.jpg",
            popupDescription: "Este masaje focalizado es ideal para parejas que buscan aliviar la tensión en las áreas que más lo necesitan. Nuestros terapeutas se centrarán en liberar el estrés acumulado en el cuello y la espalda, utilizando técnicas específicas para reducir la rigidez y aliviar el dolor. Disfruten juntos de esta experiencia relajante y salgan sintiéndose renovados y conectados.",
            popupImage: "cuello-espalda-pareja-popup.jpg"
        },
        {
            title: "Masaje de Piedras Frías en Pareja",
            description: "Revitaliza su piel y estimula la circulación seguido de técnicas de masaje que promueven la relajación. Ideal para una experiencia memorable de revitalización.",
            benefits: ["Mejoras en la Piel", "Reduce Inflamación Estrés", "Alivio de Dolores Musculares"],
            duration: "60 min",
            icon: "piedras-frias-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "piedras-frias-image.jpg",
            popupDescription: "Experimenten juntos la frescura revitalizante de nuestro masaje con piedras frías. Este tratamiento único combina el uso de piedras de mármol enfriadas con técnicas de masaje suave para estimular la circulación, reducir la inflamación y calmar los músculos cansados. Es especialmente refrescante después de un día caluroso o para aliviar el dolor muscular. Saldrán sintiéndose rejuvenecidos y con una sensación de frescura compartida.",
            popupImage: "piedras-frias-pareja-popup.jpg"
        },
        {
            title: "Sueco Relajante para 2",
            description: "Masaje con técnicas de presión y fricción suaves que alivian el estrés y mejoran tu circulación. Experiencia simultánea que refuerza vínculos.",
            benefits: ["Relajación General", "Mejora la Circulación", "Reduce Estrés"],
            duration: "80 min",
            icon: "sueco-relajante-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "sueco-relajante-image.jpg",
            popupDescription: "Disfruten juntos de la relajación profunda que ofrece nuestro masaje sueco en pareja. Este tratamiento utiliza movimientos largos y fluidos, amasamiento suave y fricción circular para aliviar la tensión muscular, mejorar la circulación y promover una relajación total. Es una experiencia perfecta para parejas que buscan un escape del estrés diario y un momento de conexión en un ambiente tranquilo y lujoso.",
            popupImage: "sueco-relajante-pareja-popup.jpg"
        },
        {
            title: "Chocolaterapia en Pareja",
            description: "Disfruta de un masaje indulgente con lociones a base de chocolate, conocido por sus propiedades antioxidantes. Este tratamiento es ideal para una experiencia sensorial completa.",
            benefits: ["Hidratación de la piel", "sensación de lujo", "relajación profunda"],
            duration: "45 min",
            icon: "chocolaterapia-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "chocolaterapia-image.jpg",
            popupDescription: "Sumérjanse en el lujo y el placer con nuestra chocolaterapia en pareja. Este tratamiento indulgente utiliza productos a base de chocolate rico en antioxidantes para nutrir y rejuvenecer la piel. El aroma del chocolate no solo es delicioso, sino que también estimula la liberación de endorfinas, creando una sensación de felicidad y relajación. Disfruten juntos de esta experiencia sensorial única que dejará su piel suave, hidratada y con un delicioso aroma.",
            popupImage: "chocolaterapia-pareja-popup.jpg"
        },
        {
            title: "Masaje de Reflexología en Pareja",
            description: "Un enfoque en los pies que utiliza puntos de presión específicos para estimular la salud general del cuerpo. Ambos disfrutarán de este tratamiento revitalizante.",
            benefits: ["Mejora del equilibrio corporal", "alivio del estrés", "mejora de la salud general"],
            duration: "45 min",
            icon: "reflexologia-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "reflexologia-image.jpg",
            popupDescription: "Experimenten juntos los beneficios de la reflexología, una técnica que se centra en puntos de presión específicos en los pies que corresponden a diferentes partes del cuerpo. Este tratamiento no solo proporciona una relajación profunda, sino que también puede ayudar a mejorar la circulación, reducir el estrés y promover un sentido de bienestar en todo el cuerpo. Es una forma única y relajante de cuidarse mutuamente y disfrutar de un momento de tranquilidad compartida.",
            popupImage: "reflexologia-pareja-popup.jpg"
        },
        {
            title: "Masaje de Envoltura Corporal en Pareja",
            description: "Un masaje combinado con una envoltura corporal nutritiva. Ambos recibirán un masaje y luego serán envueltos en una envoltura terapéutica que puede estar basada en algas, barro o ingredientes naturales.",
            benefits: ["Hidratación y nutrición de la piel", "desintoxicación", "relajación profunda"],
            duration: "90 min",
            icon: "envoltura-corporal-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "envoltura-corporal-image.jpg",
            popupDescription: "Disfruten juntos de una experiencia de spa verdaderamente lujosa con nuestra envoltura corporal en pareja. Comenzamos con un suave exfoliante para preparar la piel, seguido de la aplicación de una mezcla nutritiva de algas, arcilla o ingredientes botánicos en todo el cuerpo. Luego, los envolvemos en mantas térmicas para maximizar la absorción de los ingredientes beneficiosos. Mientras están envueltos, disfrutarán de un relajante masaje facial. El tratamiento concluye con la aplicación de una loción hidratante, dejando su piel suave, nutrida y radiante. Es una experiencia perfecta para parejas que buscan un momento de indulgencia y cuidado mutuo.",
            popupImage: "envoltura-corporal-pareja-popup.jpg"
        },
        {
            title: "Masaje con Aromas y Cera en Pareja",
            description: "Disfruta de un masaje acompañado de ceras aromáticas que se derriten en aceites tibios aplicados sobre la piel. Proporciona una experiencia sensorial completa con aroma, calor y tacto.",
            benefits: ["Hidratación de la piel", "relajación profunda", "experiencia sensorial enriquecida"],
            duration: "60 min",
            icon: "aromas-cera-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "aromas-cera-image.jpg",
            popupDescription: "Sumérjanse juntos en una experiencia sensorial única con nuestro masaje de aromas y cera en pareja. Las ceras aromáticas cuidadosamente seleccionadas se calientan hasta convertirse en aceites tibios y se aplican suavemente sobre la piel, proporcionando una hidratación profunda y una relajación intensa. Los aromas envolventes crean una atmósfera de calma y bienestar, mientras que el calor de la cera ayuda a relajar los músculos tensos. Este tratamiento no solo nutre la piel, sino que también crea un momento íntimo y relajante para la pareja.",
            popupImage: "aromas-cera-pareja-popup.jpg"
        },
        {
            title: "Masaje Lomi Lomi en Pareja",
            description: "Este masaje hawaiano utiliza movimientos largos y fluidos, combinados con técnicas de estiramiento para relajar y revitalizar el cuerpo. Disfruta de una experiencia de conexión y armonía mientras ambos reciben el masaje simultáneamente.",
            benefits: ["Relajación profunda", "aumento de la energía", "mejora de la circulación"],
            duration: "60 min",
            icon: "lomi-lomi-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "lomi-lomi-image.jpg",
            popupDescription: "Experimenten juntos la magia del masaje hawaiano Lomi Lomi. Este tratamiento único utiliza movimientos largos, fluidos y rítmicos que recorren todo el cuerpo, imitando las olas del océano. Los terapeutas usan no solo las manos, sino también los antebrazos para aplicar una presión profunda y relajante. El Lomi Lomi no solo relaja los músculos, sino que también se cree que ayuda a liberar patrones de pensamiento negativos almacenados en el cuerpo. Es una experiencia profundamente relajante y revitalizante que les permitirá conectar en un nivel más profundo.",
            popupImage: "lomi-lomi-pareja-popup.jpg"
        },
        {
            title: "Masaje Shiatsu en Pareja",
            description: "Basado en la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo. Se realiza en dos camillas o en una cama de masaje doble.",
            benefits: ["Estimulación de la energía vital", "alivio de tensiones", "mejora del bienestar general"],
            duration: "90 min",
            icon: "shiatsu-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "shiatsu-image.jpg",
            popupDescription: "Descubran juntos los beneficios del Shiatsu, una forma de terapia japonesa que significa 'presión con los dedos'. En este tratamiento, los terapeutas aplican presión en puntos específicos del cuerpo para equilibrar el flujo de energía vital o 'chi'. El Shiatsu se realiza a través de la ropa cómoda y no utiliza aceites. Además de aliviar la tensión muscular y el estrés, este masaje puede mejorar la circulación, aliviar dolores de cabeza y promover una sensación general de bienestar y vitalidad. Es una experiencia única que les permitirá sentirse renovados y equilibrados juntos.",
            popupImage: "shiatsu-pareja-popup.jpg"
        },
        {
            title: "Masaje con Aceites de CBD en Pareja",
            description: "Un masaje que utiliza aceites infundidos con cannabidiol (CBD) para ayudar a reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: ["Alivio del dolor muscular y articular", "reducción de la ansiedad", "relajación profunda"],
            duration: "60 min",
            icon: "cbd-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "cbd-image.jpg",
            popupDescription: "Experimenten juntos los beneficios terapéuticos del CBD con nuestro masaje en pareja. El cannabidiol (CBD) es conocido por sus propiedades antiinflamatorias y calmantes. Nuestros aceites de masaje infundidos con CBD se combinan con técnicas de masaje expertas para proporcionar un alivio profundo del dolor muscular y articular. Además de sus beneficios físicos, el CBD puede ayudar a reducir la ansiedad y promover una sensación de calma y bienestar. Este tratamiento es ideal para parejas que buscan una experiencia de relajación profunda y alivio del estrés físico y mental.",
            popupImage: "cbd-pareja-popup.jpg"
        },
        {
            title: "Masaje de Cuerpo Completo con Técnicas de Ventosas en Pareja",
            description: "Un masaje que combina técnicas tradicionales de masaje con ventosas para mejorar la circulación y aliviar la tensión muscular.",
            benefits: ["Mejora de la circulación sanguínea", "alivio de tensiones", "desintoxicación"],
            duration: "90 min",
            icon: "ventosas-icon.png",
            benefitsIcon: ["benefits-icon.png"],
            durationIcon: "duration-icon.png",
            image: "ventosas-image.jpg",
            popupDescription: "Descubran juntos los beneficios únicos de nuestro masaje con ventosas. Esta técnica antigua utiliza copas de succión para crear un vacío en la piel, lo que ayuda a aumentar el flujo sanguíneo, liberar la fascia y promover la curación natural del cuerpo. Combinamos las ventosas con técnicas de masaje tradicionales para una experiencia terapéutica integral. Los beneficios incluyen alivio del dolor muscular, reducción de la inflamación y mejora de la circulación general. Es una experiencia única y potente que les permitirá sentirse renovados y revitalizados juntos.",
            popupImage: "ventosas-pareja-popup.jpg"
        }
    ],
    paquetes: [
        {
            title: "Paquete Romance Total",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: ["Masaje en Pareja de Aromaterapia", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos Gourmet"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
            icon: "romance-total-icon.png",
            benefitsIcon: ["benefit1-icon.png", "benefit2-icon.png"],
            durationIcon: "duration-romance-icon.png",
            image: "romance-total-image.jpg",
            popupDescription: "El Paquete Romance Total es la experiencia definitiva para parejas que buscan un escape lujoso y relajante. Comienza con un masaje de aromaterapia en pareja de 90 minutos, donde los aceites esenciales cuidadosamente seleccionados crearán una atmósfera de relajación total. Después del masaje, disfruten de 30 minutos adicionales de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos gourmet. Este paquete está diseñado para nutrir tanto el cuerpo como el espíritu, ofreciendo un momento de conexión y lujo compartido.",
            popupImage: "romance-total-popup.jpg"
        },
        {
            title: "Paquete Romance Total 2",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: ["Masaje en Pareja de Aromaterapia", "Sabor de Café (Latte, Capuchino, Expreso)", "Pastel o Tarta"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
            icon: "romance-total2-icon.png",
            benefitsIcon: ["benefit1-icon.png", "benefit2-icon.png"],
            durationIcon: "duration-romance2-icon.png",
            image: "romance-total2-image.jpg",
            popupDescription: "El Paquete Romance Total 2 ofrece una experiencia única de relajación y placer para parejas. Comienza con un lujoso masaje de aromaterapia en pareja de 90 minutos, donde los aceites esenciales cuidadosamente seleccionados crearán un ambiente de tranquilidad y bienestar. Después del masaje, disfruten de 30 minutos adicionales de indulgencia con su elección de café gourmet (Latte, Capuchino o Expreso) acompañado de un delicioso pastel o tarta. Este paquete combina perfectamente la relajación profunda con los placeres culinarios, creando un momento especial para compartir y conectar.",
            popupImage: "romance-total2-popup.jpg"
        },
        {
            title: "Paquete Lujo y Sabor",
            description: "Un paquete que combina técnicas de masaje de lujo con sabores exquisitos para un día de indulgencia.",
            includes: ["Masaje de Piedras Calientes en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos y Vino"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Alivio de tensiones", "degustación de sabores refinados", "experiencia de lujo"],
            icon: "lujo-sabor-icon.png",
            benefitsIcon: ["benefit-lujo1-icon.png", "benefit-lujo2-icon.png"],
            durationIcon: "duration-lujo-icon.png",
            image: "lujo-sabor-image.jpg",
            popupDescription: "El Paquete Lujo y Sabor es una experiencia premium que combina el lujo de un masaje de piedras calientes con una degustación gourmet. Comienza con un relajante masaje de 90 minutos donde las piedras volcánicas calientes aliviarán profundamente la tensión muscular. Luego, disfruten de 30 minutos de pura indulgencia con una selección cuidadosamente curada de vinos finos, quesos artesanales y fresas bañadas en chocolate. Este paquete es perfecto para aquellos que buscan una experiencia que deleite todos los sentidos.",
            popupImage: "lujo-sabor-popup.jpg"
        },
        {
            title: "Paquete Sensaciones Inolvidables",
            description: "Un paquete pensado para ofrecer una experiencia sensorial completa con masajes, vino y sabores exquisitos.",
            includes: ["Masaje de Cuerpo Completo en Pareja", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos Artísticos"],
            duration: "90 minutos de masaje + 45 minutos para disfrutar de las delicias.",
            benefits: ["Relajación total", "degustación gourmet", "experiencia romántica"],
            icon: "sensaciones-icon.png",
            benefitsIcon: ["benefit-sensaciones1-icon.png", "benefit-sensaciones2-icon.png"],
            durationIcon: "duration-sensaciones-icon.png",
            image: "sensaciones-image.jpg",
            popupDescription: "El Paquete Sensaciones Inolvidables es una experiencia diseñada para despertar todos sus sentidos. Comienza con un lujoso masaje de cuerpo completo en pareja de 90 minutos, que les dejará completamente relajados y renovados. Después, disfruten de 45 minutos de pura indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos artísticos. Este paquete combina perfectamente la relajación profunda con una experiencia gastronómica refinada, creando recuerdos que perdurarán mucho después de que termine su visita.",
            popupImage: "sensaciones-inolvidables-popup.jpg"
        },
        {
            title: "Paquete Escape de Lujo",
            description: "Una escapada lujosa para parejas que buscan un día de relajación y disfrute.",
            includes: ["Masaje con Aromaterapia y Envoltura de Algas en Pareja", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos y Frutas"],
            duration: "90 minutos de masaje + 30 minutos para degustar las delicias.",
            benefits: ["Relajación profunda", "desintoxicación", "experiencia culinaria exquisita"],
            icon: "escape-lujo-icon.png",
            benefitsIcon: ["benefit-escape1-icon.png", "benefit-escape2-icon.png"],
            durationIcon: "duration-escape-icon.png",
            image: "escape-lujo-image.jpg",
            popupDescription: "El Paquete Escape de Lujo es la elección perfecta para parejas que buscan una experiencia de spa verdaderamente indulgente. Comienza con un masaje de aromaterapia relajante, seguido de una envoltura de algas desintoxicante. Este tratamiento de 90 minutos dejará su piel suave y su cuerpo completamente relajado. Después, disfruten de 30 minutos de placer culinario con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos y frutas frescas. Es la combinación perfecta de relajación, desintoxicación y placer gastronómico.",
            popupImage: "escape-lujo-popup.jpg"
        },
        {
            title: "Paquete Relax y Sabores",
            description: "Disfruta de un masaje relajante seguido de una experiencia gourmet para cerrar el día.",
            includes: ["Masaje de Reflexología en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos"],
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: ["Alivio del estrés", "disfrute sensorial", "conexión íntima"],
            icon: "relax-sabores-icon.png",
            benefitsIcon: ["benefit-relax1-icon.png", "benefit-relax2-icon.png"],
            durationIcon: "duration-relax-icon.png",
            image: "relax-sabores-image.jpg",
            popupDescription: "El Paquete Relax y Sabores ofrece una combinación perfecta de relajación y placer culinario. Comienza con un masaje de reflexología en pareja de 60 minutos, que alivia el estrés y promueve el bienestar general a través de la estimulación de puntos específicos en los pies. Después, disfruten de 30 minutos de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una selección de quesos gourmet. Este paquete es ideal para parejas que buscan una experiencia relajante y romántica con un toque de sofisticación culinaria.",
            popupImage: "relax-sabores-popup.jpg"
        },
        {
            title: "Paquete Tranquilidad Gourmet",
            description: "Un paquete diseñado para ofrecer relajación total y sabores exquisitos en un entorno lujoso.",
            includes: ["Masaje con Aceites de CBD en Pareja", "Sabor de Café (Latte, Capuchino, Expreso)", "Pastel o Tarta"],
            duration: "60 minutos de masaje + 30 minutos para disfrutar.",
            benefits: ["Alivio del dolor", "relajación", "experiencia gourmet"],
            icon: "tranquilidad-gourmet-icon.png",
            benefitsIcon: ["benefit-tranquilidad1-icon.png", "benefit-tranquilidad2-icon.png"],
            durationIcon: "duration-tranquilidad-icon.png",
            image: "tranquilidad-gourmet-image.jpg",
            popupDescription: "El Paquete Tranquilidad Gourmet combina los beneficios terapéuticos del CBD con una experiencia de café gourmet. Comienza con un masaje de 60 minutos utilizando aceites infundidos con CBD, conocidos por sus propiedades antiinflamatorias y relajantes. Después, disfruten de 30 minutos de placer culinario con su elección de café gourmet (Latte, Capuchino o Expreso) acompañado de un delicioso pastel o tarta. Este paquete es perfecto para parejas que buscan alivio del estrés y el dolor, junto con una experiencia de café de alta calidad.",
            popupImage: "tranquilidad-gourmet-popup.jpg"
        },
        {
            title: "Paquete Relajación y Gourmet",
            description: "Un paquete que combina técnicas de masaje para una relajación total con un toque gourmet.",
            includes: ["Masaje Sueco en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos"],
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: ["Relajación", "degustación", "toque especial"],
            icon: "relajacion-gourmet-icon.png",
            benefitsIcon: ["benefit-relajacion1-icon.png", "benefit-relajacion2-icon.png"],
            durationIcon: "duration-relajacion-icon.png",
            image: "relajacion-gourmet-image.jpg",
            popupDescription: "El Paquete Relajación y Gourmet ofrece una experiencia completa de bienestar y placer culinario. Comienza con un masaje sueco en pareja de 60 minutos, utilizando técnicas de presión suave y movimientos largos para aliviar la tensión muscular y promover la relajación. Después, disfruten de 30 minutos de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una selección de quesos finos. Este paquete es ideal para parejas que buscan una combinación perfecta de relajación física y placer gastronómico en un ambiente lujoso y romántico.",
            popupImage: "relajacion-gourmet-popup.jpg"
        }
    ]
};
// Funciones de traducción
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'es,en,fr,zh-CN,iw',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

function translatePage(lang) {
    const googleFrame = document.getElementsByClassName('goog-te-menu-frame')[0];
    if (!googleFrame) {
        setTimeout(() => translatePage(lang), 50);
        return;
    }
    const googleFrameDoc = googleFrame.contentDocument || googleFrame.contentWindow.document;
    const languageSelect = googleFrameDoc.getElementsByTagName('button');
    for (let i = 0; i < languageSelect.length; i++) {
        if (languageSelect[i].innerHTML.indexOf(lang) > -1) {
            languageSelect[i].click();
            break;
        }
    }
}

// Funciones de renderizado
function renderServices(category) {
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = '';
    services[category].forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-item';
        serviceElement.innerHTML = `
            <h3>${service.title} <img src="${service.icon}" alt="${service.title} icon" class="service-icon"></h3>
            <p>${service.description}</p>
            <p><strong>Beneficios:</strong> <img src="${service.benefitsIcon}" alt="Beneficios" class="icon"> ${service.benefits.join(', ')}</p>
            <p><strong>Duración:</strong> <img src="${service.durationIcon}" alt="Duración" class="icon"> ${service.duration}</p>
            <div class="service-buttons">
                <button class="reserve-button" data-title="${service.title}">Reserva ahora</button>
                <button class="info-button" data-service='${JSON.stringify(service)}'>Saber más</button>
            </div>
        `;
        servicesList.appendChild(serviceElement);
    });
    addEventListeners();
}

function renderPackages() {
    const packageList = document.getElementById('package-list');
    packageList.innerHTML = '';
    services.paquetes.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package-item';
        packageElement.innerHTML = `
            <h3>${pkg.title}</h3>
            <p>${pkg.description}</p>
            <p><strong>Incluye:</strong> ${pkg.includes.join(', ')}</p>
            <p><strong>Duración:</strong> ${pkg.duration}</p>
            <p><strong>Beneficios:</strong> ${pkg.benefits.join(', ')}</p>
            <button class="reserve-button" data-title="${pkg.title}">Reservar</button>
            <button class="info-button" data-service='${JSON.stringify(pkg)}'>Saber más</button>
        `;
        packageList.appendChild(packageElement);
    });
    addEventListeners();
}

// Funciones de eventos
function addEventListeners() {
    document.querySelectorAll('.reserve-button').forEach(button => {
        button.addEventListener('click', () => {
            const title = button.dataset.title;
            sendWhatsAppMessage('Reservar', title);
        });
    });

    document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', () => {
            const service = JSON.parse(button.dataset.service);
            showPopup(service);
        });
    });
}

function showPopup(data) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');

    popupTitle.textContent = data.title || '';
    popupImage.src = data.popupImage || data.image || '';
    popupImage.alt = data.title || '';
    popupDescription.textContent = data.popupDescription || data.description || '';

    popup.style.display = 'block';
}

function sendWhatsAppMessage(action, serviceTitle) {
    const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
    const url = `https://wa.me/5215640020305?text=${message}`;
    window.open(url, '_blank');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');

    translateIcon.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (event) => {
            const lang = event.currentTarget.dataset.lang;
            translatePage(lang);
            languageOptions.style.display = 'none';
        });
    });

    document.addEventListener('click', (event) => {
        if (!translateIcon.contains(event.target) && !languageOptions.contains(event.target)) {
            languageOptions.style.display = 'none';
        }
    });

    const choiceChips = document.querySelectorAll('.choice-chip');
    choiceChips.forEach(chip => {
        chip.addEventListener('click', () => {
            choiceChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    renderServices('individual');
    renderPackages();

    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
