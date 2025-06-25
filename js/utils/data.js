export const dataMasterVinilo = [
  // Página 1: Lanzamientos y Destacados
  {
    id: 1001, // ID numérico único
    nombre: "Melodías del Ayer",
    artista: "Los Viajeros del Sonido",
    genero: "Pop Clásico",
    formato: "LP - 180gr",
    precio: 29.99, // USD
    precioOferta: null,
    stock: 50,
    fechaLanzamiento: "2025-06-20",
    descripcionCorta:
      "El esperado regreso de Los Viajeros del Sonido con un álbum que fusiona lo clásico y lo moderno.",
    descripcionLarga:
      "Un viaje nostálgico a través de diez nuevas composiciones y dos bonus tracks remasterizados. Grabado en Abbey Road Studios, este vinilo de 180 gramos ofrece una calidad de sonido inigualable, transportándote a la época dorada de la música pop. Incluye inserto con letras y fotos exclusivas.",
    portadaUrl: "./assets/img/default-imagen.jpg",
    imagenesAdicionales: [
      "https://ejemplo.com/imagenes/vinilos/melodias-ayer-reverso.jpg",
      "https://ejemplo.com/imagenes/vinilos/melodias-ayer-detalle.jpg",
    ],
    tags: ["nuevo", "pop", "coleccion"],
    reseñas: [
      {
        usuario: "MusicLover78",
        calificacion: 5,
        comentario: "¡Simplemente espectacular! El sonido es increíble.",
      },
      {
        usuario: "VinylFanatic",
        calificacion: 4,
        comentario: "Buena música, aunque el arte de portada es simple.",
      },
    ],
    promocionId: null,
    categoria: "Lanzamientos",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo",
  },
  {
    id: 1002,
    nombre: "Ritmos Nocturnos",
    artista: "DJ Groove Master",
    genero: "Electrónica / House",
    formato: "Doble LP - 140gr",
    precio: 34.5,
    precioOferta: 29.75,
    stock: 25,
    fechaLanzamiento: "2024-11-15",
    descripcionCorta:
      "Una compilación imprescindible de los mejores ritmos electrónicos para tus noches.",
    descripcionLarga:
      "Dos discos llenos de beats hipnóticos y melodías contagiosas. 'Ritmos Nocturnos' es la banda sonora perfecta para cualquier fiesta o sesión de escucha relajada. Masterizado para vinilo, captura la profundidad y energía del sonido electrónico moderno.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/ritmos-nocturnos-portada.jpg",
    imagenesAdicionales: [],
    tags: ["electronica", "oferta"],
    reseñas: [
      {
        usuario: "PartyAnimal",
        calificacion: 5,
        comentario: "Lo pincho en todas mis fiestas, ¡un éxito total!",
      },
    ],
    promocionId: "promo-julio-2025",
    categoria: "Destacados",
    disponibilidad: "En stock",
    estadoProducto: "Destacado",
  },
  {
    id: 1003,
    nombre: "Susurros del Alma",
    artista: "Aurora Smith",
    genero: "Folk Acústico",
    formato: "LP - Edición Limitada",
    precio: 38.0,
    precioOferta: null,
    stock: 10,
    fechaLanzamiento: "2025-06-25",
    descripcionCorta:
      "El debut introspectivo de Aurora Smith, una joya del folk contemporáneo.",
    descripcionLarga:
      "Primer álbum de larga duración de la prometedora cantautora Aurora Smith. Con letras poéticas y melodías etéreas, este vinilo de edición limitada (solo 500 copias numeradas) es un testimonio de su talento. Incluye una litografía firmada por la artista.",
    portadaUrl: "https://ejemplo.com/imagenes/vinilos/aurora-smith-portada.jpg",
    imagenesAdicionales: [],
    tags: ["edicion-limitada", "folk", "imperdible"],
    reseñas: [],
    promocionId: null,
    categoria: "Lanzamientos",
    disponibilidad: "Próximamente",
    estadoProducto: "Nuevo",
  },

  {
    id: 2001,
    nombre: "La Furia Inmortal",
    artista: "Los Gigantes",
    genero: "Rock Clásico",
    formato: "LP",
    precio: 25.0,
    precioOferta: null,
    stock: 80,
    fechaLanzamiento: "1978-03-01",
    descripcionCorta:
      "El álbum que definió a Los Gigantes y el rock de una generación.",
    descripcionLarga:
      "Un clásico atemporal del rock, remasterizado para vinilo con el máximo cuidado. Contiene himnos generacionales que resuenan hoy como ayer. Perfecto para coleccionistas y nuevos oyentes.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/gigantes-furia-portada.jpg",
    imagenesAdicionales: [],
    tags: ["rock", "clasico", "imprescindible"],
    reseñas: [
      {
        usuario: "OldSchoolRocker",
        calificacion: 5,
        comentario: "¡El mejor disco de todos los tiempos!",
      },
    ],
    promocionId: null,
    categoria: "Rock",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo",
  },
  {
    id: 2002,
    nombre: "Noches de Terciopelo",
    artista: "Miles Blue Quartet",
    genero: "Jazz",
    formato: "LP - Remasterizado",
    precio: 32.0,
    precioOferta: null,
    stock: 30,
    fechaLanzamiento: "1960-07-20",
    descripcionCorta:
      "Una obra maestra del jazz, con improvisaciones que te transportarán.",
    descripcionLarga:
      "Este vinilo remasterizado captura la esencia de una noche de jazz de los años 60. Las improvisaciones magistrales de Miles Blue y su cuarteto son un deleite auditivo para cualquier amante del género. Imprescindible en tu colección.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/miles-blue-jazz-portada.jpg",
    imagenesAdicionales: [],
    tags: ["jazz", "clasico", "instrumental"],
    reseñas: [],
    promocionId: null,
    categoria: "Jazz",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo",
  },
  {
    id: 2003,
    nombre: "Conciencia Callejera",
    artista: "MC Rima",
    genero: "Hip Hop / Rap",
    formato: "Doble LP",
    precio: 28.5,
    precioOferta: null,
    stock: 40,
    fechaLanzamiento: "1995-10-10",
    descripcionCorta:
      "El álbum debut que puso a MC Rima en el mapa del hip hop underground.",
    descripcionLarga:
      "Un hito del hip hop de los 90. Las letras crudas y el flow inconfundible de MC Rima se combinan con beats que te harán mover la cabeza. Una edición en doble LP para una experiencia completa.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/mc-rima-hiphop-portada.jpg",
    imagenesAdicionales: [],
    tags: ["hiphop", "rap", "90s"],
    reseñas: [],
    promocionId: null,
    categoria: "Hip Hop",
    disponibilidad: "En stock",
    estadoProducto: "Regular", 
  },
  {
    id: 2004,
    nombre: "Ecos en el Bosque",
    artista: "Las Hojas Caídas",
    genero: "Indie Pop",
    formato: "LP",
    precio: 26.0,
    precioOferta: 22.0,
    stock: 35,
    fechaLanzamiento: "2023-08-01",
    descripcionCorta:
      "Melodías suaves y letras introspectivas de la banda revelación indie.",
    descripcionLarga:
      "El segundo álbum de Las Hojas Caídas que consolida su sonido único. Perfecto para tardes de relax y reflexión. Vinilo de alta calidad con arte de portada exclusivo.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/hojas-caidas-indie-portada.jpg",
    imagenesAdicionales: [],
    tags: ["indie", "pop", "oferta"],
    reseñas: [
      {
        usuario: "IndieLover",
        calificacion: 4,
        comentario: "Muy bueno, aunque esperaba más ritmos.",
      },
    ],
    promocionId: "promo-julio-2025",
    categoria: "Indie",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo", 
  },

 
  {
    id: 3001,
    nombre: "Grandes Éxitos de los 80s",
    artista: "Varios Artistas",
    genero: "Pop / New Wave",
    formato: "Triple LP",
    precio: 45.0,
    precioOferta: 30.0, 
    stock: 20,
    fechaLanzamiento: "2020-01-01",
    descripcionCorta:
      "Una compilación imperdible de los himnos de los años 80.",
    descripcionLarga:
      "Tres discos repletos de los mayores éxitos de la década de los 80s. Revive la nostalgia con este set de vinilos que incluye clásicos del pop, new wave y synth-pop. Edición limitada en oferta.",
    portadaUrl: "https://ejemplo.com/imagenes/vinilos/80s-exitos-portada.jpg",
    imagenesAdicionales: [],
    tags: ["oferta", "80s", "compilacion", "coleccion"],
    reseñas: [],
    promocionId: "promo-julio-2025",
    categoria: "Ofertas",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo",
  },
  {
    id: 3002,
    nombre: "Concierto Acústico en Vivo",
    artista: "El Solitario",
    genero: "Balada / Acústico",
    formato: "LP",
    precio: 20.0,
    precioOferta: 15.0, 
    stock: 15,
    fechaLanzamiento: "2021-05-10",
    descripcionCorta:
      "La emotividad de El Solitario en una íntima sesión en vivo.",
    descripcionLarga:
      "Captura la magia de El Solitario en su concierto más íntimo. Grabado en directo, este vinilo te sumerge en la profundidad de sus letras y melodías. Últimas unidades con descuento.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/solitario-acustico-portada.jpg",
    imagenesAdicionales: [],
    tags: ["oferta", "envivo", "balada"],
    reseñas: [],
    promocionId: "promo-verano-2025",
    categoria: "Ofertas",
    disponibilidad: "En stock",
    estadoProducto: "Nuevo", 
  },

  // Página 4: Ediciones Especiales / Coleccionables
  {
    id: 4001,
    nombre: "El Origen del Ruido",
    artista: "Máquina Sonora",
    genero: "Experimental / Noise",
    formato: "LP - Vinilo Transparente",
    precio: 55.0,
    precioOferta: null,
    stock: 5,
    fechaLanzamiento: "2025-01-01",
    descripcionCorta:
      "Una obra vanguardista en vinilo transparente, para los más audaces.",
    descripcionLarga:
      "La banda sonora de un futuro distópico. 'El Origen del Ruido' es una experiencia auditiva desafiante y única. Esta edición especial viene en vinilo transparente de alta calidad, empaquetado en una caja de lujo con arte exclusivo y un manifiesto del artista.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/maquina-sonora-transparente-portada.jpg",
    imagenesAdicionales: [],
    tags: [
      "edicion-especial",
      "coleccionable",
      "experimental",
      "vinilo-de-color",
    ],
    reseñas: [],
    promocionId: null,
    categoria: "Ediciones Especiales",
    disponibilidad: "Últimas unidades",
    estadoProducto: "Nuevo", 
  },
  {
    id: 4002,
    nombre: "La Sinfonía Olvidada",
    artista: "Orquesta Eterna",
    genero: "Clásica / Orquestal",
    formato: "Box Set - 4xLP",
    precio: 120.0,
    precioOferta: null,
    stock: 3,
    fechaLanzamiento: "2022-03-01",
    descripcionCorta:
      "Un box set de lujo con la obra completa de la legendaria Orquesta Eterna.",
    descripcionLarga:
      "Cuatro vinilos que recopilan grabaciones inéditas y remasterizadas de la aclamada Orquesta Eterna. Presentado en un elegante box set con un libro de tapa dura que detalla la historia y legado de la orquesta. Un tesoro para amantes de la música clásica.",
    portadaUrl:
      "https://ejemplo.com/imagenes/vinilos/sinfonia-olvidada-boxset-portada.jpg",
    imagenesAdicionales: [],
    tags: ["edicion-especial", "coleccionable", "clasica", "box-set"],
    reseñas: [
      {
        usuario: "ConductorMaestro",
        calificacion: 5,
        comentario: "Una verdadera joya, la calidad de sonido es impecable.",
      },
    ],
    promocionId: null,
    categoria: "Ediciones Especiales",
    disponibilidad: "En stock",
    estadoProducto: "Destacado", // Nuevo campo
  },
];
