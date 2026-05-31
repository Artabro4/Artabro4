/**
 * i18n — Alojamiento Castro de Untia
 * Idiomas: ES · EN · FR · DE · PT
 */
(function () {
  var STORAGE_KEY = 'lang';

  var t = {
    es: {
      /* Hero */
      hero_title: 'Piso turístico en el centro de Betanzos | Castro de Untia',
      hero_discover: '¡Descúbrelo!',
      hero_book: 'Reservar',

      /* El espacio */
      space_title: 'El espacio',
      space_capacity: 'Máx. 5 personas - 100 m²',
      space_rooms: '3 dormitorios | 2 baños | Salón - comedor | Cocina completa',
      space_seo: 'El apartamento turístico Castro de Untia se encuentra en pleno centro de Betanzos (A Coruña), a pocos pasos del casco histórico, comercios y principales zonas de interés de la ciudad. Este alojamiento en Betanzos dispone de 3 habitaciones, 2 baños, cocina totalmente equipada, conexión Wi-Fi y aparcamiento gratuito. Es una opción ideal para familias, parejas y viajeros que buscan un alojamiento turístico cómodo, bien ubicado y tranquilo en Betanzos.',

      /* Galería — pies de foto */
      gallery_expand: 'Ampliar',
      cap_salon: 'Salón',
      cap_comedor: 'Comedor',
      cap_cocina: 'Cocina',
      cap_hab_principal: 'Habitación principal',
      cap_habitacion: 'Habitación',
      cap_hab_individual: 'Habitación individual',
      cap_bano_principal: 'Baño principal',
      cap_bano: 'Baño',

      /* Frase central */
      quote: 'Esta vivienda ofrece un estilo minimalista, combinando con elegancia muebles tradicionales que aportan un toque de historia y calidez a su decoración. Con una abundante luz natural, este espacio se convierte en el lugar perfecto para relajarse después de un día visitando la comarca de Betanzos.',

      /* Estancias */
      salon_title: 'Salón - comedor',
      salon_p1: 'La vivienda cuenta con un gran salón, donde la comodidad y la luminosidad se unen para ofrecerte un espacio acogedor durante toda tu estancia.',
      salon_p2: 'Este salón acoje una zona de comedor donde podrás disfrutar de tus comidas.',

      dorm_title: 'Dormitorios',
      dorm_p1: 'Dispone de tres espaciosas habitaciones: dos con cama de matrimonio (1.50 m y 1.35 m) y, una tercera con cama individual de 90 cm. Todas ellas cuentan con armarios para almacenar tus pertenencias.',
      dorm_p2: 'La habitación principal también incluye un baño privado para tu comodidad.',

      cocina_title: 'Cocina',
      cocina_p1: 'El piso ofrece una amplia cocina con acceso a una despensa y a un balcón orientado al patio de luces del edificio. También encontrarás una pequeña zona de desayuno para comenzar el día con energía.',

      cocina_eq_title: 'Equipamiento de la cocina',
      cocina_eq_sub: 'Está dotada con los siguientes electrodomésticos',
      cocina_item1: 'Vitrocerámica',
      cocina_item2: 'Horno',
      cocina_item3: 'Campana extractora',
      cocina_item4: 'Microondas',
      cocina_item5: 'Nevera',
      cocina_item6: 'Congelador',
      cocina_item7: 'Cafetera',
      cocina_item8: 'Hervidor de agua',

      banos_title: 'Baños',
      banos_p1: 'Tiene dos baños completos, uno de ellos recién renovado y el otro, aunque sin reformar, conserva un encanto único que te enamorará.',

      lectura_title: 'Rincón de lectura',
      lectura_p1: 'En la habitación individual encontrarás un rinconcito de lectura, donde podrás sumergirte en tu libro favorito y disfrutar de momentos de tranquilidad.',

      trabajo_title: 'Espacio de trabajo',
      trabajo_p1: 'Para aquellos que necesiten trabajar durante su estancia, ofrecemos una amplia zona de trabajo con Wi-Fi donde poder concentrarse.',

      /* Servicios */
      services_title: 'Servicios',
      services_intro: 'La vivienda ha sido equipada con todo lo necesario para disfrutar al máximo de tu visita.',
      serv_parking_title: 'Aparcamiento',
      serv_parking_p: 'Disponible plaza de aparcamiento gratuita a 150 metros del alojamiento.',
      serv_lift_title: 'Ascensor',
      serv_lift_p: 'Los huéspedes pueden hacer uso del ascensor comunitario. El acceso a la vivienda no tiene escalones de más de 5 cm.',
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: 'Conexión de calidad a internet en todo el alojamiento.',
      serv_heat_title: 'Calefacción centralizada',
      serv_heat_p: 'Calefacción de gas natural.',
      serv_tv_title: 'Televisión',
      serv_tv_p: 'La vivienda dispone de televisión.',
      serv_kitchen_title: 'Menaje de cocina',
      serv_kitchen_p: 'Se incluyen utensilios básicos de cocina.',
      serv_laundry_title: 'Lavandería',
      serv_laundry_p: 'Para mayor comodidad, nuestros huéspedes tienen acceso gratuito a plancha, lavadora y tendal (tanto interior como exterior).',
      serv_clean_title: 'Productos de limpieza',
      serv_clean_p: 'Ofrecemos detergente para platos y ropa, paños de limpieza, escoba, aspirador...',
      serv_dryer_title: 'Secador de pelo',
      serv_dryer_p: 'Se incluye secador de pelo.',

      /* Seguridad */
      safety_title: 'Seguridad',
      safety_intro: 'La vivienda incorpora el siguiente equipo de protección contra incendios:',
      safety_ext_title: 'Extintor',
      safety_ext_p: 'Imprescindible en situaciones de emergencia para controlar fuegos.',
      safety_smoke_title: 'Detector de humos',
      safety_smoke_p: 'Detector del humo visible producido como consecuencia de la mayoría de los fuegos de combustión.',
      safety_blanket_title: 'Manta ignífuga',
      safety_blanket_p: 'Útil para apagar pequeños incendios en la cocina.',

      /* Betanzos */
      betanzos_title: 'Descubriendo Betanzos',
      betanzos_intro: 'Si lo deseas, estamos encantados de ayudarte en la planificación de tu visita, asegurándonos de que aproveches al máximo tu estancia en Galicia. También, puedes investigar por tu cuenta en el siguiente enlace.',
      betanzos_btn: 'Más información',
      cap_01: 'Convento de San Francisco',
      cap_02: 'Río Mandeo',
      cap_03: 'Iglesia de Santa María do Azougue',
      cap_04: 'Estatua de los hermanos García Naveira',
      cap_05: 'Soportales',
      cap_06: 'Centro Internacional de la Estampa Contemporánea',
      cap_07: "Plaza de Fernán Pérez de Andrade 'O Boo'",

      /* Contacto */
      contact_title: 'Contacto',

      /* Reservar */
      book_title: 'Reservar',
      book_intro: 'Selecciona las fechas para comprobar disponibilidad. También puedes reservar en',
      book_airbnb: 'nuestro perfil de Airbnb',
      book_price_from: 'Desde', book_price_night: '/ noche',
      lbl_entrada: 'Fecha de entrada', lbl_salida: 'Fecha de salida',
      lbl_nombre: 'Nombre y apellidos', lbl_telefono: 'Teléfono',
      lbl_correo: 'Correo electrónico', lbl_personas: 'Número de personas', lbl_mensaje: 'Mensaje',
      ph_entrada: 'Fecha de entrada*', ph_entrada_short: 'dd/mm/aaaa',
      ph_salida: 'Fecha de salida*', ph_salida_short: 'dd/mm/aaaa',
      ph_nombre: 'Nombre y apellidos*', ph_nombre_short: 'Nombre y apellidos',
      ph_telefono: 'Teléfono*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Correo electrónico*', ph_correo_short: 'tu@email.com',
      ph_personas: 'Número de personas*',
      ph_mensaje: 'Mensaje (opcional)',
      success_sent_to: 'Se ha enviado una copia a',
      success_time: 'Recibirás respuesta en menos de 24 horas.',
      opt_personas_1: '1 persona',
      opt_personas_2: '2 personas',
      opt_personas_3: '3 personas',
      opt_personas_4: '4 personas',
      opt_personas_5: '5 personas',
      aviso_solapamiento: '⚠ Alguna de las fechas seleccionadas no está disponible. Por favor elige otras fechas.',
      legal_note: '*Campos obligatorios. Al enviar aceptas la',
      legal_link: 'política de privacidad',
      btn_enviar: 'Solicitar disponibilidad',
      success_title: '¡Solicitud enviada!',
      success_p: 'Hemos recibido tu petición. Te confirmaremos la reserva lo antes posible.',
      btn_otra: 'Nueva solicitud',

      /* Footer */
      footer_cookies: 'Política de cookies',
      footer_legal: 'Aviso legal',
      footer_privacy: 'Política de privacidad',

      /* Cookie banner */
      cookie_text: 'Usamos cookies propias para que el sitio funcione correctamente y, opcionalmente, para mejorar tu experiencia. Puedes aceptar o rechazar su uso. Para más información consulta nuestra',
      cookie_link: 'Política de cookies',
      cookie_accept: 'Aceptar',
      cookie_reject: 'Rechazar',
    },

    en: {
      hero_title: 'Tourist apartment in the centre of Betanzos | Castro de Untia',
      hero_discover: 'Discover it!',
      hero_book: 'Book',

      space_title: 'The space',
      space_capacity: 'Max. 5 guests · 100 m²',
      space_rooms: '3 bedrooms | 2 bathrooms | Living-dining room | Full kitchen',
      space_seo: 'The Castro de Untia tourist apartment is located in the very centre of Betanzos (A Coruña), just a few steps from the historic quarter, shops and main points of interest in the city. This Betanzos accommodation has 3 bedrooms, 2 bathrooms, a fully equipped kitchen, Wi-Fi and free parking. It is an ideal option for families, couples and travellers looking for a comfortable, well-located and peaceful tourist accommodation in Betanzos.',

      gallery_expand: 'Enlarge',
      cap_salon: 'Living room',
      cap_comedor: 'Dining room',
      cap_cocina: 'Kitchen',
      cap_hab_principal: 'Master bedroom',
      cap_habitacion: 'Bedroom',
      cap_hab_individual: 'Single bedroom',
      cap_bano_principal: 'Master bathroom',
      cap_bano: 'Bathroom',

      quote: 'This home offers a minimalist style, elegantly combining traditional furniture that adds a touch of history and warmth to its décor. With abundant natural light, this space becomes the perfect place to relax after a day exploring the Betanzos area.',

      salon_title: 'Living-dining room',
      salon_p1: 'The apartment features a spacious living room where comfort and brightness come together to offer you a welcoming space throughout your stay.',
      salon_p2: 'The living room includes a dining area where you can enjoy your meals.',

      dorm_title: 'Bedrooms',
      dorm_p1: 'There are three spacious bedrooms: two with double beds (1.50 m and 1.35 m) and a third with a single bed of 90 cm. All of them have wardrobes to store your belongings.',
      dorm_p2: 'The master bedroom also includes a private bathroom for your comfort.',

      cocina_title: 'Kitchen',
      cocina_p1: "The apartment offers a large kitchen with access to a pantry and a balcony facing the building's inner courtyard. You will also find a small breakfast area to start the day with energy.",

      cocina_eq_title: 'Kitchen equipment',
      cocina_eq_sub: 'It is equipped with the following appliances',
      cocina_item1: 'Ceramic hob',
      cocina_item2: 'Oven',
      cocina_item3: 'Extractor hood',
      cocina_item4: 'Microwave',
      cocina_item5: 'Fridge',
      cocina_item6: 'Freezer',
      cocina_item7: 'Coffee maker',
      cocina_item8: 'Kettle',

      banos_title: 'Bathrooms',
      banos_p1: 'There are two full bathrooms, one of them recently renovated and the other, although not refurbished, retains a unique charm that will win you over.',

      lectura_title: 'Reading corner',
      lectura_p1: 'In the single bedroom you will find a small reading nook where you can lose yourself in your favourite book and enjoy moments of peace.',

      trabajo_title: 'Workspace',
      trabajo_p1: 'For those who need to work during their stay, we offer a large workspace with Wi-Fi where you can concentrate.',

      services_title: 'Amenities',
      services_intro: 'The apartment has been equipped with everything you need to make the most of your visit.',
      serv_parking_title: 'Parking',
      serv_parking_p: 'Free parking space available 150 metres from the accommodation.',
      serv_lift_title: 'Lift',
      serv_lift_p: 'Guests can use the communal lift. Access to the apartment has no steps higher than 5 cm.',
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: 'Quality internet connection throughout the accommodation.',
      serv_heat_title: 'Central heating',
      serv_heat_p: 'Natural gas heating.',
      serv_tv_title: 'Television',
      serv_tv_p: 'The apartment has a television.',
      serv_kitchen_title: 'Kitchen utensils',
      serv_kitchen_p: 'Basic kitchen utensils included.',
      serv_laundry_title: 'Laundry',
      serv_laundry_p: 'For your convenience, guests have free access to an iron, washing machine and drying rack (both indoor and outdoor).',
      serv_clean_title: 'Cleaning products',
      serv_clean_p: 'We provide dish and laundry detergent, cleaning cloths, broom, vacuum cleaner…',
      serv_dryer_title: 'Hair dryer',
      serv_dryer_p: 'A hair dryer is included.',

      safety_title: 'Safety',
      safety_intro: 'The apartment includes the following fire protection equipment:',
      safety_ext_title: 'Fire extinguisher',
      safety_ext_p: 'Essential in emergency situations to control fires.',
      safety_smoke_title: 'Smoke detector',
      safety_smoke_p: 'Detects visible smoke produced by most combustion fires.',
      safety_blanket_title: 'Fire blanket',
      safety_blanket_p: 'Useful for putting out small fires in the kitchen.',

      betanzos_title: 'Discovering Betanzos',
      betanzos_intro: 'If you wish, we are delighted to help you plan your visit, making sure you make the most of your stay in Galicia. You can also explore on your own at the link below.',
      betanzos_btn: 'More information',
      cap_01: 'Convent of San Francisco',
      cap_02: 'Mandeo River',
      cap_03: 'Church of Santa María do Azougue',
      cap_04: 'Statue of the García Naveira brothers',
      cap_05: 'Arcades',
      cap_06: 'International Centre of Contemporary Printmaking',
      cap_07: "Plaza de Fernán Pérez de Andrade 'O Boo'",

      contact_title: 'Contact',

      book_title: 'Book',
      book_intro: 'Select your dates to check availability. You can also book on',
      book_airbnb: 'our Airbnb profile',
      book_price_from: 'From', book_price_night: '/ night',
      lbl_entrada: 'Check-in date', lbl_salida: 'Check-out date',
      lbl_nombre: 'Full name', lbl_telefono: 'Phone',
      lbl_correo: 'Email address', lbl_personas: 'Number of guests', lbl_mensaje: 'Message',
      ph_entrada: 'Check-in date*', ph_entrada_short: 'dd/mm/yyyy',
      ph_salida: 'Check-out date*', ph_salida_short: 'dd/mm/yyyy',
      ph_nombre: 'Full name*', ph_nombre_short: 'Full name',
      ph_telefono: 'Phone*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Email address*', ph_correo_short: 'you@email.com',
      ph_personas: 'Number of guests*',
      ph_mensaje: 'Message (optional)',
      success_sent_to: 'A copy has been sent to',
      success_time: 'You will receive a reply within 24 hours.',
      opt_personas_1: '1 person',
      opt_personas_2: '2 people',
      opt_personas_3: '3 people',
      opt_personas_4: '4 people',
      opt_personas_5: '5 people',
      aviso_solapamiento: '⚠ Some of the selected dates are not available. Please choose different dates.',
      legal_note: '*Required fields. By submitting you accept our',
      legal_link: 'privacy policy',
      btn_enviar: 'Check availability',
      success_title: 'Request sent!',
      success_p: 'We have received your enquiry. We will confirm your booking as soon as possible.',
      btn_otra: 'New request',

      footer_cookies: 'Cookie policy',
      footer_legal: 'Legal notice',
      footer_privacy: 'Privacy policy',

      cookie_text: 'We use our own cookies so that the site works properly and, optionally, to improve your experience. You can accept or decline their use. For more information see our',
      cookie_link: 'Cookie policy',
      cookie_accept: 'Accept',
      cookie_reject: 'Decline',
    },

    fr: {
      hero_title: 'Appartement touristique au centre de Betanzos | Castro de Untia',
      hero_discover: 'Découvrez-le !',
      hero_book: 'Réserver',

      space_title: "L'espace",
      space_capacity: 'Max. 5 personnes · 100 m²',
      space_rooms: '3 chambres | 2 salles de bain | Salon-salle à manger | Cuisine complète',
      space_seo: "L'appartement touristique Castro de Untia est situé en plein centre de Betanzos (A Coruña), à quelques pas du quartier historique, des commerces et des principaux sites d'intérêt de la ville. Ce logement à Betanzos dispose de 3 chambres, 2 salles de bain, d'une cuisine entièrement équipée, du Wi-Fi et d'un parking gratuit. C'est une option idéale pour les familles, les couples et les voyageurs à la recherche d'un hébergement touristique confortable, bien situé et tranquille à Betanzos.",

      gallery_expand: 'Agrandir',
      cap_salon: 'Salon',
      cap_comedor: 'Salle à manger',
      cap_cocina: 'Cuisine',
      cap_hab_principal: 'Chambre principale',
      cap_habitacion: 'Chambre',
      cap_hab_individual: 'Chambre individuelle',
      cap_bano_principal: 'Salle de bain principale',
      cap_bano: 'Salle de bain',

      quote: "Ce logement offre un style minimaliste, alliant avec élégance des meubles traditionnels qui apportent une touche d'histoire et de chaleur à sa décoration. Avec une lumière naturelle abondante, cet espace devient l'endroit idéal pour se détendre après une journée à explorer la région de Betanzos.",

      salon_title: 'Salon - salle à manger',
      salon_p1: "Le logement dispose d'un grand salon où confort et luminosité se réunissent pour vous offrir un espace accueillant tout au long de votre séjour.",
      salon_p2: 'Ce salon comprend une salle à manger où vous pourrez profiter de vos repas.',

      dorm_title: 'Chambres',
      dorm_p1: 'Il dispose de trois chambres spacieuses : deux avec un lit double (1,50 m et 1,35 m) et une troisième avec un lit simple de 90 cm. Toutes sont équipées de placards pour ranger vos affaires.',
      dorm_p2: 'La chambre principale comprend également une salle de bain privée pour votre confort.',

      cocina_title: 'Cuisine',
      cocina_p1: "L'appartement offre une grande cuisine avec accès à un cellier et un balcon donnant sur la cour intérieure de l'immeuble. Vous trouverez également un petit coin petit-déjeuner pour commencer la journée avec énergie.",

      cocina_eq_title: 'Équipement de la cuisine',
      cocina_eq_sub: 'Elle est équipée des appareils électroménagers suivants',
      cocina_item1: 'Plaque vitrocéramique',
      cocina_item2: 'Four',
      cocina_item3: 'Hotte aspirante',
      cocina_item4: 'Micro-ondes',
      cocina_item5: 'Réfrigérateur',
      cocina_item6: 'Congélateur',
      cocina_item7: 'Cafetière',
      cocina_item8: "Bouilloire",

      banos_title: 'Salles de bain',
      banos_p1: "Il y a deux salles de bain complètes, l'une récemment rénovée et l'autre, bien que non réformée, conserve un charme unique qui vous séduira.",

      lectura_title: 'Coin lecture',
      lectura_p1: 'Dans la chambre individuelle, vous trouverez un petit coin lecture où vous pourrez vous plonger dans votre livre préféré et profiter de moments de tranquillité.',

      trabajo_title: 'Espace de travail',
      trabajo_p1: "Pour ceux qui ont besoin de travailler pendant leur séjour, nous offrons un grand espace de travail avec Wi-Fi pour se concentrer.",

      services_title: 'Services',
      services_intro: 'Le logement a été équipé de tout le nécessaire pour profiter au maximum de votre visite.',
      serv_parking_title: 'Parking',
      serv_parking_p: 'Place de parking gratuite disponible à 150 mètres du logement.',
      serv_lift_title: 'Ascenseur',
      serv_lift_p: "Les hôtes peuvent utiliser l'ascenseur commun. L'accès au logement ne comporte pas de marches de plus de 5 cm.",
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: 'Connexion internet de qualité dans tout le logement.',
      serv_heat_title: 'Chauffage central',
      serv_heat_p: 'Chauffage au gaz naturel.',
      serv_tv_title: 'Télévision',
      serv_tv_p: 'Le logement dispose d\'une télévision.',
      serv_kitchen_title: 'Ustensiles de cuisine',
      serv_kitchen_p: 'Ustensiles de cuisine de base inclus.',
      serv_laundry_title: 'Blanchisserie',
      serv_laundry_p: "Pour plus de commodité, nos hôtes ont accès gratuitement à un fer à repasser, une machine à laver et un séchoir (intérieur et extérieur).",
      serv_clean_title: 'Produits de nettoyage',
      serv_clean_p: 'Nous fournissons du détergent vaisselle et lessive, des chiffons, un balai, un aspirateur...',
      serv_dryer_title: 'Sèche-cheveux',
      serv_dryer_p: 'Un sèche-cheveux est inclus.',

      safety_title: 'Sécurité',
      safety_intro: "Le logement dispose du matériel de protection incendie suivant :",
      safety_ext_title: 'Extincteur',
      safety_ext_p: "Indispensable en situation d'urgence pour maîtriser les incendies.",
      safety_smoke_title: 'Détecteur de fumée',
      safety_smoke_p: 'Détecte la fumée visible produite par la plupart des feux de combustion.',
      safety_blanket_title: 'Couverture anti-feu',
      safety_blanket_p: 'Utile pour éteindre les petits incendies en cuisine.',

      betanzos_title: 'Découvrir Betanzos',
      betanzos_intro: 'Si vous le souhaitez, nous serons ravis de vous aider à planifier votre visite, en veillant à ce que vous profitiez au maximum de votre séjour en Galice. Vous pouvez également vous renseigner par vous-même via le lien suivant.',
      betanzos_btn: 'Plus d\'informations',
      cap_01: 'Couvent de San Francisco',
      cap_02: 'Rivière Mandeo',
      cap_03: "Église Santa María do Azougue",
      cap_04: 'Statue des frères García Naveira',
      cap_05: 'Arcades',
      cap_06: "Centre International de l'Estampe Contemporaine",
      cap_07: "Place de Fernán Pérez de Andrade 'O Boo'",

      contact_title: 'Contact',

      book_title: 'Réserver',
      book_intro: 'Sélectionnez vos dates pour vérifier la disponibilité. Vous pouvez aussi réserver sur',
      book_airbnb: 'notre profil Airbnb',
      book_price_from: 'À partir de', book_price_night: '/ nuit',
      lbl_entrada: "Date d'arrivée", lbl_salida: 'Date de départ',
      lbl_nombre: 'Nom et prénoms', lbl_telefono: 'Téléphone',
      lbl_correo: 'Adresse e-mail', lbl_personas: 'Nombre de personnes', lbl_mensaje: 'Message',
      ph_entrada: "Date d'arrivée*", ph_entrada_short: 'jj/mm/aaaa',
      ph_salida: 'Date de départ*', ph_salida_short: 'jj/mm/aaaa',
      ph_nombre: 'Nom et prénoms*', ph_nombre_short: 'Nom et prénoms',
      ph_telefono: 'Téléphone*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Adresse e-mail*', ph_correo_short: 'vous@email.com',
      ph_personas: 'Nombre de personnes*',
      ph_mensaje: 'Message (optionnel)',
      success_sent_to: 'Une copie a été envoyée à',
      success_time: 'Vous recevrez une réponse dans moins de 24 heures.',
      opt_personas_1: '1 personne',
      opt_personas_2: '2 personnes',
      opt_personas_3: '3 personnes',
      opt_personas_4: '4 personnes',
      opt_personas_5: '5 personnes',
      aviso_solapamiento: '⚠ Certaines des dates sélectionnées ne sont pas disponibles. Veuillez choisir d\'autres dates.',
      legal_note: '*Champs obligatoires. En envoyant, vous acceptez notre',
      legal_link: 'politique de confidentialité',
      btn_enviar: 'Vérifier la disponibilité',
      success_title: 'Demande envoyée !',
      success_p: 'Nous avons bien reçu votre demande. Nous vous confirmerons la réservation dès que possible.',
      btn_otra: 'Nouvelle demande',

      footer_cookies: 'Politique de cookies',
      footer_legal: 'Mentions légales',
      footer_privacy: 'Politique de confidentialité',

      cookie_text: 'Nous utilisons des cookies pour assurer le bon fonctionnement du site et, optionnellement, pour améliorer votre expérience. Vous pouvez les accepter ou les refuser. Pour plus d\'informations, consultez notre',
      cookie_link: 'politique de cookies',
      cookie_accept: 'Accepter',
      cookie_reject: 'Refuser',
    },

    de: {
      hero_title: 'Ferienwohnung im Zentrum von Betanzos | Castro de Untia',
      hero_discover: 'Entdecken!',
      hero_book: 'Buchen',

      space_title: 'Der Raum',
      space_capacity: 'Max. 5 Personen · 100 m²',
      space_rooms: '3 Schlafzimmer | 2 Badezimmer | Wohn-Esszimmer | Vollausgestattete Küche',
      space_seo: 'Die Ferienwohnung Castro de Untia befindet sich im Herzen von Betanzos (A Coruña), nur wenige Schritte von der Altstadt, Geschäften und wichtigen Sehenswürdigkeiten der Stadt entfernt. Diese Unterkunft in Betanzos verfügt über 3 Schlafzimmer, 2 Badezimmer, eine voll ausgestattete Küche, WLAN und kostenlosen Parkplatz. Sie ist ideal für Familien, Paare und Reisende, die eine komfortable, gut gelegene und ruhige touristische Unterkunft in Betanzos suchen.',

      gallery_expand: 'Vergrößern',
      cap_salon: 'Wohnzimmer',
      cap_comedor: 'Esszimmer',
      cap_cocina: 'Küche',
      cap_hab_principal: 'Hauptschlafzimmer',
      cap_habitacion: 'Schlafzimmer',
      cap_hab_individual: 'Einzelzimmer',
      cap_bano_principal: 'Hauptbadezimmer',
      cap_bano: 'Badezimmer',

      quote: 'Diese Wohnung bietet einen minimalistischen Stil und verbindet geschickt traditionelle Möbel, die der Dekoration einen Hauch von Geschichte und Wärme verleihen. Mit reichlich Tageslicht wird dieser Raum zum perfekten Ort zum Entspannen nach einem Tag voller Erkundungen rund um Betanzos.',

      salon_title: 'Wohn-Esszimmer',
      salon_p1: 'Die Wohnung verfügt über ein großes Wohnzimmer, in dem Komfort und Helligkeit zusammenkommen, um Ihnen während Ihres gesamten Aufenthalts einen gemütlichen Raum zu bieten.',
      salon_p2: 'Das Wohnzimmer beherbergt einen Essbereich, in dem Sie Ihre Mahlzeiten genießen können.',

      dorm_title: 'Schlafzimmer',
      dorm_p1: 'Es gibt drei geräumige Schlafzimmer: zwei mit Doppelbett (1,50 m und 1,35 m) und ein drittes mit einem Einzelbett (90 cm). Alle verfügen über Schränke zur Aufbewahrung Ihres Gepäcks.',
      dorm_p2: 'Das Hauptschlafzimmer verfügt außerdem über ein eigenes Bad für Ihren Komfort.',

      cocina_title: 'Küche',
      cocina_p1: 'Die Wohnung bietet eine große Küche mit Zugang zu einer Speisekammer und einem Balkon zum Innenhof des Gebäudes. Außerdem gibt es einen kleinen Frühstücksbereich für einen energiereichen Start in den Tag.',

      cocina_eq_title: 'Küchenausstattung',
      cocina_eq_sub: 'Ausgestattet mit folgenden Elektrogeräten',
      cocina_item1: 'Kochfeld',
      cocina_item2: 'Backofen',
      cocina_item3: 'Dunstabzugshaube',
      cocina_item4: 'Mikrowelle',
      cocina_item5: 'Kühlschrank',
      cocina_item6: 'Gefrierschrank',
      cocina_item7: 'Kaffeemaschine',
      cocina_item8: 'Wasserkocher',

      banos_title: 'Badezimmer',
      banos_p1: 'Es gibt zwei vollständige Badezimmer, eines davon wurde kürzlich renoviert, das andere hat trotz fehlender Renovierung einen einzigartigen Charme, der Sie begeistern wird.',

      lectura_title: 'Leseecke',
      lectura_p1: 'Im Einzelzimmer finden Sie eine gemütliche Leseecke, in der Sie sich in Ihr Lieblingsbuch vertiefen und Momente der Ruhe genießen können.',

      trabajo_title: 'Arbeitsbereich',
      trabajo_p1: 'Für diejenigen, die während ihres Aufenthalts arbeiten müssen, bieten wir einen geräumigen Arbeitsbereich mit WLAN.',

      services_title: 'Ausstattung',
      services_intro: 'Die Wohnung wurde mit allem ausgestattet, was Sie brauchen, um Ihren Besuch in vollen Zügen zu genießen.',
      serv_parking_title: 'Parkplatz',
      serv_parking_p: 'Kostenloser Parkplatz 150 Meter von der Unterkunft entfernt.',
      serv_lift_title: 'Aufzug',
      serv_lift_p: 'Die Gäste können den Gemeinschaftsaufzug nutzen. Der Zugang zur Wohnung hat keine Stufen über 5 cm.',
      serv_wifi_title: 'WLAN',
      serv_wifi_p: 'Qualitätsinternet in der gesamten Unterkunft.',
      serv_heat_title: 'Zentralheizung',
      serv_heat_p: 'Erdgasheizung.',
      serv_tv_title: 'Fernseher',
      serv_tv_p: 'Die Wohnung verfügt über einen Fernseher.',
      serv_kitchen_title: 'Küchenutensilien',
      serv_kitchen_p: 'Grundlegende Küchenutensilien inklusive.',
      serv_laundry_title: 'Wäschepflege',
      serv_laundry_p: 'Für mehr Komfort haben unsere Gäste kostenfreien Zugang zu Bügeleisen, Waschmaschine und Wäscheständer (innen und außen).',
      serv_clean_title: 'Reinigungsprodukte',
      serv_clean_p: 'Wir stellen Geschirrspül- und Waschmittel, Reinigungstücher, Besen und Staubsauger zur Verfügung...',
      serv_dryer_title: 'Haartrockner',
      serv_dryer_p: 'Ein Haartrockner ist vorhanden.',

      safety_title: 'Sicherheit',
      safety_intro: 'Die Wohnung ist mit folgender Brandschutzausrüstung ausgestattet:',
      safety_ext_title: 'Feuerlöscher',
      safety_ext_p: 'Unverzichtbar in Notsituationen zur Brandbekämpfung.',
      safety_smoke_title: 'Rauchmelder',
      safety_smoke_p: 'Erkennt sichtbaren Rauch, der bei den meisten Verbrennungsbränden entsteht.',
      safety_blanket_title: 'Löschdecke',
      safety_blanket_p: 'Nützlich zum Löschen kleiner Brände in der Küche.',

      betanzos_title: 'Betanzos entdecken',
      betanzos_intro: 'Wenn Sie möchten, helfen wir Ihnen gerne bei der Planung Ihres Besuchs, damit Sie Ihren Aufenthalt in Galicien optimal nutzen. Sie können sich auch über den folgenden Link selbst informieren.',
      betanzos_btn: 'Mehr Informationen',
      cap_01: 'Kloster San Francisco',
      cap_02: 'Fluss Mandeo',
      cap_03: 'Kirche Santa María do Azougue',
      cap_04: 'Statue der Brüder García Naveira',
      cap_05: 'Arkaden',
      cap_06: 'Internationales Zentrum für zeitgenössischen Druck',
      cap_07: "Plaza de Fernán Pérez de Andrade 'O Boo'",

      contact_title: 'Kontakt',

      book_title: 'Buchen',
      book_intro: 'Wählen Sie Ihre Daten, um die Verfügbarkeit zu prüfen. Sie können auch über',
      book_airbnb: 'unser Airbnb-Profil buchen',
      book_price_from: 'Ab', book_price_night: '/ Nacht',
      lbl_entrada: 'Anreisedatum', lbl_salida: 'Abreisedatum',
      lbl_nombre: 'Vor- und Nachname', lbl_telefono: 'Telefon',
      lbl_correo: 'E-Mail-Adresse', lbl_personas: 'Anzahl der Personen', lbl_mensaje: 'Nachricht',
      ph_entrada: 'Anreisedatum*', ph_entrada_short: 'TT/MM/JJJJ',
      ph_salida: 'Abreisedatum*', ph_salida_short: 'TT/MM/JJJJ',
      ph_nombre: 'Vor- und Nachname*', ph_nombre_short: 'Vor- und Nachname',
      ph_telefono: 'Telefon*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'E-Mail-Adresse*', ph_correo_short: 'sie@email.com',
      ph_personas: 'Anzahl der Personen*',
      ph_mensaje: 'Nachricht (optional)',
      success_sent_to: 'Eine Kopie wurde gesendet an',
      success_time: 'Sie erhalten innerhalb von 24 Stunden eine Antwort.',
      opt_personas_1: '1 Person',
      opt_personas_2: '2 Personen',
      opt_personas_3: '3 Personen',
      opt_personas_4: '4 Personen',
      opt_personas_5: '5 Personen',
      aviso_solapamiento: '⚠ Einige der ausgewählten Daten sind nicht verfügbar. Bitte wählen Sie andere Daten.',
      legal_note: '*Pflichtfelder. Mit dem Absenden stimmen Sie unserer',
      legal_link: 'Datenschutzrichtlinie',
      btn_enviar: 'Verfügbarkeit prüfen',
      success_title: 'Anfrage gesendet!',
      success_p: 'Wir haben Ihre Anfrage erhalten. Wir werden Ihre Buchung so schnell wie möglich bestätigen.',
      btn_otra: 'Neue Anfrage',

      footer_cookies: 'Cookie-Richtlinie',
      footer_legal: 'Impressum',
      footer_privacy: 'Datenschutz',

      cookie_text: 'Wir verwenden eigene Cookies, damit die Website korrekt funktioniert und optional Ihre Erfahrung verbessert wird. Sie können deren Nutzung akzeptieren oder ablehnen. Weitere Informationen finden Sie in unserer',
      cookie_link: 'Cookie-Richtlinie',
      cookie_accept: 'Akzeptieren',
      cookie_reject: 'Ablehnen',
    },

    pt: {
      hero_title: 'Apartamento turístico no centro de Betanzos | Castro de Untia',
      hero_discover: 'Descubra!',
      hero_book: 'Reservar',

      space_title: 'O espaço',
      space_capacity: 'Máx. 5 pessoas · 100 m²',
      space_rooms: '3 quartos | 2 casas de banho | Sala de estar e jantar | Cozinha completa',
      space_seo: 'O apartamento turístico Castro de Untia está situado no coração de Betanzos (A Coruña), a poucos passos do centro histórico, comércio e principais pontos de interesse da cidade. Este alojamento em Betanzos dispõe de 3 quartos, 2 casas de banho, cozinha totalmente equipada, Wi-Fi e estacionamento gratuito. É uma opção ideal para famílias, casais e viajantes que procuram um alojamento turístico confortável, bem localizado e tranquilo em Betanzos.',

      gallery_expand: 'Ampliar',
      cap_salon: 'Sala de estar',
      cap_comedor: 'Sala de jantar',
      cap_cocina: 'Cozinha',
      cap_hab_principal: 'Quarto principal',
      cap_habitacion: 'Quarto',
      cap_hab_individual: 'Quarto individual',
      cap_bano_principal: 'Casa de banho principal',
      cap_bano: 'Casa de banho',

      quote: 'Esta habitação oferece um estilo minimalista, combinando elegantemente mobiliário tradicional que confere um toque de história e calor à sua decoração. Com muita luz natural, este espaço torna-se o lugar perfeito para relaxar após um dia a explorar a região de Betanzos.',

      salon_title: 'Sala de estar e jantar',
      salon_p1: 'O apartamento tem uma ampla sala de estar onde conforto e luminosidade se unem para lhe oferecer um espaço acolhedor durante toda a sua estada.',
      salon_p2: 'A sala inclui uma zona de jantar onde poderá desfrutar das suas refeições.',

      dorm_title: 'Quartos',
      dorm_p1: 'Dispõe de três quartos espaçosos: dois com cama de casal (1,50 m e 1,35 m) e um terceiro com cama individual de 90 cm. Todos têm roupeiros para guardar os seus pertences.',
      dorm_p2: 'O quarto principal inclui também uma casa de banho privada para o seu conforto.',

      cocina_title: 'Cozinha',
      cocina_p1: 'O apartamento oferece uma cozinha ampla com acesso a uma despensa e a uma varanda orientada para o pátio interior do edifício. Encontrará também uma pequena zona de pequeno-almoço para começar o dia com energia.',

      cocina_eq_title: 'Equipamento da cozinha',
      cocina_eq_sub: 'Está equipada com os seguintes eletrodomésticos',
      cocina_item1: 'Placa vitrocerâmica',
      cocina_item2: 'Forno',
      cocina_item3: 'Exaustor',
      cocina_item4: 'Micro-ondas',
      cocina_item5: 'Frigorífico',
      cocina_item6: 'Congelador',
      cocina_item7: 'Cafeteira',
      cocina_item8: 'Chaleira',

      banos_title: 'Casas de banho',
      banos_p1: 'Tem duas casas de banho completas, uma delas recentemente renovada e a outra, embora sem reformar, conserva um charme único que irá encantá-lo.',

      lectura_title: 'Cantinho de leitura',
      lectura_p1: 'No quarto individual encontrará um cantinho de leitura onde poderá mergulhar no seu livro favorito e desfrutar de momentos de tranquilidade.',

      trabajo_title: 'Espaço de trabalho',
      trabajo_p1: 'Para quem precisar de trabalhar durante a estada, oferecemos uma ampla zona de trabalho com Wi-Fi para se concentrar.',

      services_title: 'Serviços',
      services_intro: 'O apartamento foi equipado com tudo o que é necessário para desfrutar ao máximo da sua visita.',
      serv_parking_title: 'Estacionamento',
      serv_parking_p: 'Lugar de estacionamento gratuito disponível a 150 metros do alojamento.',
      serv_lift_title: 'Elevador',
      serv_lift_p: 'Os hóspedes podem usar o elevador comunitário. O acesso ao apartamento não tem degraus superiores a 5 cm.',
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: 'Ligação à internet de qualidade em todo o alojamento.',
      serv_heat_title: 'Aquecimento central',
      serv_heat_p: 'Aquecimento a gás natural.',
      serv_tv_title: 'Televisão',
      serv_tv_p: 'O apartamento dispõe de televisão.',
      serv_kitchen_title: 'Utensílios de cozinha',
      serv_kitchen_p: 'Utensílios básicos de cozinha incluídos.',
      serv_laundry_title: 'Lavandaria',
      serv_laundry_p: 'Para maior comodidade, os nossos hóspedes têm acesso gratuito a ferro de engomar, máquina de lavar e estendal (interior e exterior).',
      serv_clean_title: 'Produtos de limpeza',
      serv_clean_p: 'Fornecemos detergente para loiça e roupa, panos de limpeza, vassoura, aspirador...',
      serv_dryer_title: 'Secador de cabelo',
      serv_dryer_p: 'Secador de cabelo incluído.',

      safety_title: 'Segurança',
      safety_intro: 'O apartamento incorpora o seguinte equipamento de proteção contra incêndios:',
      safety_ext_title: 'Extintor',
      safety_ext_p: 'Indispensável em situações de emergência para controlar incêndios.',
      safety_smoke_title: 'Detetor de fumo',
      safety_smoke_p: 'Deteta o fumo visível produzido pela maioria dos fogos de combustão.',
      safety_blanket_title: 'Manta ignífuga',
      safety_blanket_p: 'Útil para apagar pequenos incêndios na cozinha.',

      betanzos_title: 'Descobrir Betanzos',
      betanzos_intro: 'Se desejar, temos todo o gosto em ajudá-lo a planear a sua visita, garantindo que aproveita ao máximo a sua estada na Galiza. Pode também explorar por conta própria através do link abaixo.',
      betanzos_btn: 'Mais informações',
      cap_01: 'Convento de San Francisco',
      cap_02: 'Rio Mandeo',
      cap_03: 'Igreja de Santa María do Azougue',
      cap_04: 'Estátua dos irmãos García Naveira',
      cap_05: 'Arcadas',
      cap_06: 'Centro Internacional da Estampa Contemporânea',
      cap_07: "Praça de Fernán Pérez de Andrade 'O Boo'",

      contact_title: 'Contacto',

      book_title: 'Reservar',
      book_intro: 'Selecione as datas para verificar a disponibilidade. Também pode reservar no',
      book_airbnb: 'nosso perfil do Airbnb',
      book_price_from: 'A partir de', book_price_night: '/ noite',
      lbl_entrada: 'Data de entrada', lbl_salida: 'Data de saída',
      lbl_nombre: 'Nome e apelidos', lbl_telefono: 'Telefone',
      lbl_correo: 'Endereço de e-mail', lbl_personas: 'Número de pessoas', lbl_mensaje: 'Mensagem',
      ph_entrada: 'Data de entrada*', ph_entrada_short: 'dd/mm/aaaa',
      ph_salida: 'Data de saída*', ph_salida_short: 'dd/mm/aaaa',
      ph_nombre: 'Nome e apelidos*', ph_nombre_short: 'Nome e apelidos',
      ph_telefono: 'Telefone*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Endereço de e-mail*', ph_correo_short: 'voce@email.com',
      ph_personas: 'Número de pessoas*',
      ph_mensaje: 'Mensagem (opcional)',
      success_sent_to: 'Foi enviada uma cópia para',
      success_time: 'Receberá uma resposta em menos de 24 horas.',
      opt_personas_1: '1 pessoa',
      opt_personas_2: '2 pessoas',
      opt_personas_3: '3 pessoas',
      opt_personas_4: '4 pessoas',
      opt_personas_5: '5 pessoas',
      aviso_solapamiento: '⚠ Algumas das datas selecionadas não estão disponíveis. Por favor escolha outras datas.',
      legal_note: '*Campos obrigatórios. Ao enviar, aceita a nossa',
      legal_link: 'política de privacidade',
      btn_enviar: 'Verificar disponibilidade',
      success_title: 'Pedido enviado!',
      success_p: 'Recebemos o seu pedido. Confirmaremos a reserva o mais brevemente possível.',
      btn_otra: 'Novo pedido',

      footer_cookies: 'Política de cookies',
      footer_legal: 'Aviso legal',
      footer_privacy: 'Política de privacidade',

      cookie_text: 'Utilizamos cookies próprios para que o site funcione corretamente e, opcionalmente, para melhorar a sua experiência. Pode aceitar ou recusar a sua utilização. Para mais informações consulte a nossa',
      cookie_link: 'política de cookies',
      cookie_accept: 'Aceitar',
      cookie_reject: 'Recusar',
    },

    eu: {
      hero_title: 'Apartamentu turistikoa Betanzosen erdigunean | Castro de Untia',
      hero_discover: 'Ezagutu!',
      hero_book: 'Erreserbatu',

      space_title: 'Espazioa',
      space_capacity: 'Geh. 5 pertsona · 100 m²',
      space_rooms: '3 logela | 2 bainugela | Egongela-jangela | Sukalde osoa',
      space_seo: 'Castro de Untia apartamentu turistikoa Betanzosen (A Coruña) erdigunean dago, hiri historikoaren, dendaren eta interes guneen ondoan. Betanzosen kokatutako ostatua honek 3 logela, 2 bainugela, sukalde guztiz ekipatua, Wi-Fi eta dohaineko aparkalekua ditu. Familia, bikote eta bidaiarientzako aukera paregabea da, erosotasun, kokaleku on eta lasaitasuna bilatzen dutenentzat.',

      gallery_expand: 'Handitu',
      cap_salon: 'Egongela',
      cap_comedor: 'Jangela',
      cap_cocina: 'Sukaldea',
      cap_hab_principal: 'Logela nagusia',
      cap_habitacion: 'Logela',
      cap_hab_individual: 'Logela indibidualak',
      cap_bano_principal: 'Bainugela nagusia',
      cap_bano: 'Bainugela',

      quote: 'Etxebizitza honek estilo minimalista bat eskaintzen du, altzari tradizionalen elegantziarekin konbinatuz, historia eta beroaren ukitua ematen diona dekorazioari. Argi natural ugarirekin, espazio hau Betanzos eskualdea ezagutzen eman ondorengo atsedenaldirik onena da.',

      salon_title: 'Egongela - jangela',
      salon_p1: 'Etxebizitzak egongela handi bat du, non erosotasuna eta argiztapena elkartzen diren egonaldi osoan giro atsegina eskaintzeko.',
      salon_p2: 'Egongelak jangela eremu bat dauka, non otorduak gozatu ahal izango dituzun.',

      dorm_title: 'Logelak',
      dorm_p1: 'Hiru logela espaziosos ditu: bi matrimonio ohearekin (1,50 m eta 1,35 m) eta hirugarren bat 90 cm-ko ohe indibidualarekin. Guztiek armairuak dituzte zure gauzak gordetzeko.',
      dorm_p2: 'Logela nagusiak bainugela pribatu bat ere badu zure erosotasunerako.',

      cocina_title: 'Sukaldea',
      cocina_p1: 'Pisua sukalde zabal bat eskaintzen du, despentsa batera eta eraikinaren patio batera begira dagoen balkoira sarbidearekin. Gosaltzeko txoko txiki bat ere aurkituko duzu egunak energiaz hasteko.',

      cocina_eq_title: 'Sukaldeko ekipamendua',
      cocina_eq_sub: 'Honako etxetresna elektrikoekin hornitua dago',
      cocina_item1: 'Zeramikazko plaka',
      cocina_item2: 'Labea',
      cocina_item3: 'Kanpaia',
      cocina_item4: 'Mikrouhinak',
      cocina_item5: 'Hozkailua',
      cocina_item6: 'Izozkailua',
      cocina_item7: 'Kafetegia',
      cocina_item8: 'Ur-irakingailua',

      banos_title: 'Bainugelak',
      banos_p1: 'Bi bainugela oso ditu, bat berriki berritu eta bestea, berrikuntza gabe egon arren, bereizgarria den xarma du.',

      lectura_title: 'Irakurketa txokoa',
      lectura_p1: 'Logela indibidualean irakurketa txoko bat aurkituko duzu, zure liburu gogokoenean murgiltzeko eta lasaitasun uneak gozatzeko.',

      trabajo_title: 'Lan espazioa',
      trabajo_p1: 'Egonaldian lan egin behar dutenentzat, Wi-Fi duen lan eremu zabala eskaintzen dugu.',

      services_title: 'Zerbitzuak',
      services_intro: 'Etxebizitza zure bisitaldia ahalik eta gehien gozatzeko beharrezkoa guztiz hornitua dago.',
      serv_parking_title: 'Aparkalekua',
      serv_parking_p: 'Dohaineko aparkaleku plaza 150 metrora ostatutik.',
      serv_lift_title: 'Igogailua',
      serv_lift_p: 'Ostalariek igogailu komunitarioa erabil dezakete. Etxebizitzarako sarbideak ez du 5 cm-tik gorako mailarak.',
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: 'Kalitate handiko internet konexioa ostatuan zehar.',
      serv_heat_title: 'Berogailu zentrala',
      serv_heat_p: 'Gas naturaleko berogailua.',
      serv_tv_title: 'Telebista',
      serv_tv_p: 'Etxebizitzak telebista du.',
      serv_kitchen_title: 'Sukaldeko tresnak',
      serv_kitchen_p: 'Oinarrizko sukaldeko tresnak barne.',
      serv_laundry_title: 'Garbitegia',
      serv_laundry_p: 'Erosotasun handiagoa lortzeko, gure ostalariek dohainean sartzeko aukera dute lisabidea, garbigailua eta arropa-tendela (barru eta kanpo).',
      serv_clean_title: 'Garbiketa produktuak',
      serv_clean_p: 'Plater eta arropa garbigailua, garbiketa zapia, erratz eta xurgagailua eskaintzen ditugu...',
      serv_dryer_title: 'Ile-lehorgailua',
      serv_dryer_p: 'Ile-lehorgailua barne.',

      safety_title: 'Segurtasuna',
      safety_intro: 'Etxebizitzak suen aurkako babes ekipamendu hau du:',
      safety_ext_title: 'Su-itzalgailua',
      safety_ext_p: 'Ezinbestekoa larrialdiko egoeretan suak kontrolatzeko.',
      safety_smoke_title: 'Ke-detektore',
      safety_smoke_p: 'Errekuntza su gehienek sortutako ke ikusgaia detektatzen du.',
      safety_blanket_title: 'Su-manta',
      safety_blanket_p: 'Sukaldean su txikiak itzaltzeko lagungarria.',

      betanzos_title: 'Betanzos ezagutzen',
      betanzos_intro: 'Nahi izanez gero, pozik lagunduko dizugu bisitaldia planifikatzen, Galizian egonaldiaz ahalik eta gehien balia zaitezen. Era berean, ondorengo estekan zure kabuz ikertu dezakezu.',
      betanzos_btn: 'Informazio gehiago',
      cap_01: 'San Frantziskoren komentua',
      cap_02: 'Mandeo ibaia',
      cap_03: 'Santa María do Azougue eliza',
      cap_04: 'García Naveira anaien estatua',
      cap_05: 'Arkupeak',
      cap_06: 'Estanpa Garaikidearen Nazioarteko Zentroa',
      cap_07: "Fernán Pérez de Andrade 'O Boo' plaza",

      contact_title: 'Kontaktua',

      book_title: 'Erreserbatu',
      book_intro: 'Hautatu datak erabilgarritasuna egiaztatzeko. Era berean, erreserbatu dezakezu',
      book_airbnb: 'gure Airbnb profilean',
      book_price_from: 'Hasi', book_price_night: '/ gau',
      lbl_entrada: 'Sarrera data', lbl_salida: 'Irteera data',
      lbl_nombre: 'Izena eta abizenak', lbl_telefono: 'Telefonoa',
      lbl_correo: 'Helbide elektronikoa', lbl_personas: 'Pertsona kopurua', lbl_mensaje: 'Mezua',
      ph_entrada: 'Sarrera data*', ph_entrada_short: 'ee/hh/uuuu',
      ph_salida: 'Irteera data*', ph_salida_short: 'ee/hh/uuuu',
      ph_nombre: 'Izena eta abizenak*', ph_nombre_short: 'Izena eta abizenak',
      ph_telefono: 'Telefonoa*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Helbide elektronikoa*', ph_correo_short: 'zu@email.com',
      ph_personas: 'Pertsona kopurua*',
      ph_mensaje: 'Mezua (aukerakoa)',
      success_sent_to: 'Kopia bat bidali da hona:',
      success_time: '24 ordutan baino lehen erantzuna jasoko duzu.',
      opt_personas_1: '1 pertsona',
      opt_personas_2: '2 pertsona',
      opt_personas_3: '3 pertsona',
      opt_personas_4: '4 pertsona',
      opt_personas_5: '5 pertsona',
      aviso_solapamiento: '⚠ Hautatutako data batzuk ez daude erabilgarri. Mesedez, beste data batzuk aukeratu.',
      legal_note: '*Eremu derrigorrezkoak. Bidaltzean, gure',
      legal_link: 'pribatutasun politika',
      btn_enviar: 'Erabilgarritasuna egiaztatu',
      success_title: 'Eskaera bidalia!',
      success_p: 'Zure eskaera jaso dugu. Ahalik eta lasterren erreserba berretsiko dizugu.',
      btn_otra: 'Eskaera berria',

      footer_cookies: 'Cookie politika',
      footer_legal: 'Lege-oharra',
      footer_privacy: 'Pribatutasun politika',

      cookie_text: 'Gure cookie propioak erabiltzen ditugu gunea behar bezala funtziona dezan eta, hautazko moduan, zure esperientzia hobetzeko. Haien erabilera onartu edo ukatu dezakezu. Informazio gehiagorako kontsultatu gure',
      cookie_link: 'cookie politika',
      cookie_accept: 'Onartu',
      cookie_reject: 'Ukatu',
    },

    ca: {
      hero_title: 'Apartament turístic al centre de Betanzos | Castro de Untia',
      hero_discover: 'Descobreix-lo!',
      hero_book: 'Reservar',

      space_title: "L'espai",
      space_capacity: 'Màx. 5 persones · 100 m²',
      space_rooms: '3 habitacions | 2 banys | Sala d\'estar i menjador | Cuina completa',
      space_seo: "L'apartament turístic Castro de Untia es troba al cor de Betanzos (A Coruña), a pocs passos del casc històric, comerços i principals punts d'interès de la ciutat. Aquest allotjament a Betanzos disposa de 3 habitacions, 2 banys, cuina totalment equipada, Wi-Fi i aparcament gratuït. És una opció ideal per a famílies, parelles i viatgers que busquen un allotjament turístic còmode, ben situat i tranquil a Betanzos.",

      gallery_expand: 'Ampliar',
      cap_salon: 'Sala d\'estar',
      cap_comedor: 'Menjador',
      cap_cocina: 'Cuina',
      cap_hab_principal: 'Habitació principal',
      cap_habitacion: 'Habitació',
      cap_hab_individual: 'Habitació individual',
      cap_bano_principal: 'Bany principal',
      cap_bano: 'Bany',

      quote: "Aquest habitatge ofereix un estil minimalista, combinant amb elegància mobles tradicionals que aporten un toc d'història i calidesa a la seva decoració. Amb una llum natural abundant, aquest espai es converteix en el lloc perfecte per relaxar-se després d'un dia visitant la comarca de Betanzos.",

      salon_title: 'Sala d\'estar - menjador',
      salon_p1: "L'habitatge disposa d'una gran sala d'estar, on la comoditat i la lluminositat s'uneixen per oferir-te un espai acollidor durant tota la teva estada.",
      salon_p2: 'Aquesta sala inclou una zona de menjador on podràs gaudir dels teus àpats.',

      dorm_title: 'Habitacions',
      dorm_p1: "Disposa de tres habitacions espaioses: dues amb llit de matrimoni (1,50 m i 1,35 m) i una tercera amb llit individual de 90 cm. Totes elles compten amb armaris per guardar les teves pertinences.",
      dorm_p2: "L'habitació principal també inclou un bany privat per a la teva comoditat.",

      cocina_title: 'Cuina',
      cocina_p1: "El pis ofereix una àmplia cuina amb accés a un rebost i a un balcó orientat al pati de llums de l'edifici. També hi trobaràs una petita zona d'esmorzar per començar el dia amb energia.",

      cocina_eq_title: 'Equipament de la cuina',
      cocina_eq_sub: 'Està dotada amb els següents electrodomèstics',
      cocina_item1: 'Vitroceràmica',
      cocina_item2: 'Forn',
      cocina_item3: 'Campana extractora',
      cocina_item4: 'Microones',
      cocina_item5: 'Nevera',
      cocina_item6: 'Congelador',
      cocina_item7: 'Cafetera',
      cocina_item8: 'Bullidor d\'aigua',

      banos_title: 'Banys',
      banos_p1: "Té dos banys complets, un d'ells recentment renovat i l'altre, tot i que sense reformar, conserva un encant únic que t'enamorarà.",

      lectura_title: 'Racó de lectura',
      lectura_p1: "A l'habitació individual trobaràs un racó de lectura on podràs endinsar-te en el teu llibre preferit i gaudir de moments de tranquil·litat.",

      trabajo_title: 'Espai de treball',
      trabajo_p1: "Per als que necessitin treballar durant l'estada, oferim una àmplia zona de treball amb Wi-Fi on poder concentrar-se.",

      services_title: 'Serveis',
      services_intro: "L'habitatge ha estat equipat amb tot el necessari per gaudir al màxim de la teva visita.",
      serv_parking_title: 'Aparcament',
      serv_parking_p: 'Plaça d\'aparcament gratuïta disponible a 150 metres de l\'allotjament.',
      serv_lift_title: 'Ascensor',
      serv_lift_p: "Els hostes poden fer ús de l'ascensor comunitari. L'accés a l'habitatge no té graons de més de 5 cm.",
      serv_wifi_title: 'Wi-Fi',
      serv_wifi_p: "Connexió d'internet de qualitat a tot l'allotjament.",
      serv_heat_title: 'Calefacció centralitzada',
      serv_heat_p: 'Calefacció de gas natural.',
      serv_tv_title: 'Televisió',
      serv_tv_p: "L'habitatge disposa de televisió.",
      serv_kitchen_title: 'Parament de cuina',
      serv_kitchen_p: "S'inclouen estris bàsics de cuina.",
      serv_laundry_title: 'Bugaderia',
      serv_laundry_p: "Per a més comoditat, els nostres hostes tenen accés gratuït a planxa, rentadora i tendal (tant interior com exterior).",
      serv_clean_title: 'Productes de neteja',
      serv_clean_p: "Oferim detergent per a plats i roba, draps de neteja, escombra, aspiradora...",
      serv_dryer_title: 'Assecador de cabell',
      serv_dryer_p: "S'inclou assecador de cabell.",

      safety_title: 'Seguretat',
      safety_intro: "L'habitatge incorpora el següent equip de protecció contra incendis:",
      safety_ext_title: 'Extintor',
      safety_ext_p: "Imprescindible en situacions d'emergència per controlar focs.",
      safety_smoke_title: 'Detector de fums',
      safety_smoke_p: "Detector del fum visible produït com a conseqüència de la majoria dels focs de combustió.",
      safety_blanket_title: 'Manta ignífuga',
      safety_blanket_p: "Útil per apagar petits incendis a la cuina.",

      betanzos_title: 'Descobrint Betanzos',
      betanzos_intro: "Si ho desitges, estem encantats d'ajudar-te a planificar la teva visita, assegurant-nos que aprofitis al màxim la teva estada a Galícia. També pots investigar pel teu compte a l'enllaç següent.",
      betanzos_btn: 'Més informació',
      cap_01: 'Convent de San Francisco',
      cap_02: 'Riu Mandeo',
      cap_03: 'Església de Santa María do Azougue',
      cap_04: 'Estàtua dels germans García Naveira',
      cap_05: 'Porxos',
      cap_06: "Centre Internacional de l'Estampa Contemporània",
      cap_07: "Plaça de Fernán Pérez de Andrade 'O Boo'",

      contact_title: 'Contacte',

      book_title: 'Reservar',
      book_intro: 'Selecciona les dates per comprovar la disponibilitat. També pots reservar a',
      book_airbnb: 'el nostre perfil d\'Airbnb',
      book_price_from: 'Des de', book_price_night: '/ nit',
      lbl_entrada: "Data d'entrada", lbl_salida: 'Data de sortida',
      lbl_nombre: 'Nom i cognoms', lbl_telefono: 'Telèfon',
      lbl_correo: 'Adreça electrònica', lbl_personas: 'Nombre de persones', lbl_mensaje: 'Missatge',
      ph_entrada: "Data d'entrada*", ph_entrada_short: 'dd/mm/aaaa',
      ph_salida: 'Data de sortida*', ph_salida_short: 'dd/mm/aaaa',
      ph_nombre: 'Nom i cognoms*', ph_nombre_short: 'Nom i cognoms',
      ph_telefono: 'Telèfon*', ph_telefono_short: '+34 600 000 000',
      ph_correo: 'Adreça electrònica*', ph_correo_short: 'tu@email.com',
      ph_personas: 'Nombre de persones*',
      ph_mensaje: 'Missatge (opcional)',
      success_sent_to: "S'ha enviat una còpia a",
      success_time: 'Rebràs resposta en menys de 24 hores.',
      opt_personas_1: '1 persona',
      opt_personas_2: '2 persones',
      opt_personas_3: '3 persones',
      opt_personas_4: '4 persones',
      opt_personas_5: '5 persones',
      aviso_solapamiento: '⚠ Alguna de les dates seleccionades no està disponible. Si us plau, tria altres dates.',
      legal_note: '*Camps obligatoris. En enviar acceptes la',
      legal_link: 'política de privacitat',
      btn_enviar: 'Sol·licitar disponibilitat',
      success_title: 'Sol·licitud enviada!',
      success_p: 'Hem rebut la teva petició. Et confirmarem la reserva el més aviat possible.',
      btn_otra: 'Nova sol·licitud',

      footer_cookies: 'Política de cookies',
      footer_legal: 'Avís legal',
      footer_privacy: 'Política de privacitat',

      cookie_text: "Usem cookies pròpies perquè el lloc funcioni correctament i, opcionalment, per millorar la teva experiència. Pots acceptar o rebutjar el seu ús. Per a més informació consulta la nostra",
      cookie_link: 'política de cookies',
      cookie_accept: 'Acceptar',
      cookie_reject: 'Rebutjar',
    },
  };

  /* ── Flatpickr locale map ── */
  var fpLocales = { es: 'es', en: 'default', fr: 'fr', de: 'de', pt: 'pt', eu: 'default', ca: 'cat' };

  /* ── Apply translations ── */
  function applyLang(lang) {
    var tr = t[lang] || t['es'];
    document.documentElement.lang = lang;

    /* innerHTML nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (tr[key] !== undefined) el.innerHTML = tr[key];
    });

    /* placeholder / title attributes */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (tr[key] !== undefined) el.placeholder = tr[key];
    });

    /* select option text */
    document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-opt');
      if (tr[key] !== undefined) el.textContent = tr[key];
    });

    /* Language button label update */
    var currentBtn = document.getElementById('lang-current');
    if (currentBtn) currentBtn.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Close dropdown after selection */
    var dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');

    /* flatpickr locale reload if calendars exist */
    if (window._fpEntrada && window._fpSalida) {
      var loc = fpLocales[lang] || 'default';
      var locData = (loc === 'default') ? {} : (flatpickr.l10ns[loc] || {});
      window._fpEntrada.set('locale', locData);
      window._fpSalida.set('locale', locData);
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── Build switcher DOM & inject into body as last child ── */
  function buildSwitcher() {
    var style = document.createElement('style');
    style.textContent = [
      '#lang-switcher{position:absolute;top:16px;left:16px;z-index:9999;}',
      '#lang-current{height:34px;padding:0 14px;border-radius:17px;border:1px solid rgba(255,255,255,.55);background:rgba(0,0,0,.45);backdrop-filter:blur(6px);cursor:pointer;font-size:.72em;font-weight:700;letter-spacing:.08em;color:#fff;display:flex;align-items:center;gap:6px;box-shadow:0 2px 10px rgba(0,0,0,.25);transition:background .2s;white-space:nowrap;}',
      '#lang-current:hover{background:rgba(0,0,0,.6);}',
      '#lang-current::after{content:"▾";font-size:.9em;opacity:.8;}',
      '#lang-dropdown{display:none;flex-direction:column;gap:4px;margin-top:6px;}',
      '#lang-dropdown.open{display:flex;}',
      '.lang-opt{height:32px;padding:0 14px;border-radius:16px;border:1px solid rgba(255,255,255,.4);background:rgba(0,0,0,.45);backdrop-filter:blur(6px);cursor:pointer;font-size:.72em;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,.85);display:flex;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,.2);transition:background .15s,color .15s,border-color .15s;white-space:nowrap;opacity:0;animation:fadeInOpt .15s forwards;}',
      '.lang-opt:hover{background:rgba(0,0,0,.65);color:#fff;border-color:rgba(255,255,255,.75);}',
      '.lang-opt.active{border-color:#fff;color:#fff;}',
      '@keyframes fadeInOpt{to{opacity:1;}}'
    ].join('');
    document.head.appendChild(style);

    var langs = [
      { code: 'es', label: 'ES · Español' },
      { code: 'en', label: 'EN · English' },
      { code: 'fr', label: 'FR · Français' },
      { code: 'de', label: 'DE · Deutsch' },
      { code: 'pt', label: 'PT · Português' },
      { code: 'eu', label: 'EU · Euskera' },
      { code: 'ca', label: 'CA · Català' },
    ];

    var switcher = document.createElement('div');
    switcher.id = 'lang-switcher';

    var currentBtn = document.createElement('button');
    currentBtn.id = 'lang-current';
    currentBtn.title = 'Cambiar idioma / Change language';
    currentBtn.textContent = 'ES';
    switcher.appendChild(currentBtn);

    var dropdown = document.createElement('div');
    dropdown.id = 'lang-dropdown';
    langs.forEach(function (l) {
      var btn = document.createElement('button');
      btn.className = 'lang-opt';
      btn.dataset.lang = l.code;
      btn.title = l.label;
      btn.textContent = l.label;
      btn.addEventListener('click', function () { applyLang(l.code); });
      dropdown.appendChild(btn);
    });
    switcher.appendChild(dropdown);

    /* Insert inside the hero banner section so it scrolls away with it */
    var hero = document.querySelector('section.banner');
    if (hero) {
      hero.style.position = 'relative';
      hero.appendChild(switcher);
    } else {
      document.body.appendChild(switcher);
    }

    currentBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
    });
  }

  /* ── Init ── */
  function init() {
    buildSwitcher();
    var saved = localStorage.getItem(STORAGE_KEY);
    var lang = (saved && t[saved]) ? saved : 'es';
    applyLang(lang);
  }

  /* ── Expose globally ── */
  window.i18nApply = applyLang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
