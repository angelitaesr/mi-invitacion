/* ==========================================================
   CONFIG.JS  →  AQUÍ CAMBIAS TODO (textos, fecha, links, etc.)
   No necesitas tocar ningún otro archivo para actualizar datos.
   ========================================================== */

const EVENTO = {
  // ---- Datos de la graduada/o ----
  nombre: "Angel Saavedra",
  carrera: "Un sueño cumplido, un futuro por conquistar",          // ← PENDIENTE: escribe tu carrera
  generacion: "Generación 2022 - 2026",  // ← PENDIENTE: escribe tu generación

  // ---- Fecha y hora ----
  fechaTexto: "14 de noviembre de 2026",
  horaTexto: "9:00 PM",
  // Sonora = -07:00. Si cambias fecha/hora, cámbialas también aquí.
  fechaISO: "2026-11-14T21:00:00-07:00",

  // ---- Lugar ----
  lugar: "LAS HECTÁREAS DE MI TESORO",                 // ← PENDIENTE: nombre del lugar
  maps: "https://maps.app.goo.gl/vHvSx24e2nbi8rsLA",                       // ← PENDIENTE: pega aquí el link de Google Maps

  // ---- WhatsApp ----
  whatsapp: "526624055852",

  // ---- Multimedia ----
  musica: "invitacion/assets/audio/musica.mp3",   // ← PENDIENTE: pon tu canción con este nombre
  video: "video/video.mp4",
  videoVelocidad: 2.5,   // 1 = normal, 1.25 = un poco más rápido, 1.5 = rápido
  videoPoster: "",

  // ---- Imágenes decorativas (PNG/WEBP sin fondo) ----
  imagenes: {
    sombrero: "invitacion/assets/img/sombrero.webp",
    bota: "invitacion/assets/img/bota.webp",
    ramoMargaritas: "invitacion/assets/img/ramo-margaritas.webp",
    ramito: "invitacion/assets/img/ramito.webp",
    ramo: "invitacion/assets/img/ramo.webp",
    estrella: "invitacion/assets/img/estrella.webp",
    herradura: "invitacion/assets/img/herradura.webp",
    cuerda: "invitacion/assets/img/cuerda.webp",                  // divisor entre frases
    craneo: "invitacion/assets/img/craneo.webp",
    madera: "invitacion/assets/img/madera.webp",
    flor: "invitacion/assets/img/flor.webp",
    piel: "invitacion/assets/img/piel.webp",
    foto: "",

    // ---- NUEVAS (las usa estilos.css) ----
    fondoPapel: "invitacion/assets/img/fondo-estampado.webp",         // papel acuarela crema (base)
    fondoConEstampado: "invitacion/assets/img/fondoconestampado.webp", // estampado vaquero (se mezcla encima)
    cuerdaEsquina: "invitacion/assets/img/cuerda-esquina.webp"    // cuerda en esquinas de tarjetas
  },

  // ---- Textos ----
  textos: {
    introFrase: "Se viene algo bueno que quiero celebrar contigo...",
    introBoton: "¡Ándale, entra!",
    portadaTitulo: "MI GRADUACIÓN",
    portadaFrase: "Una meta cumplida, mil sueños por delante",
    invitacion1: "Después de desveladas, esfuerzo y muchas ganas de salir adelante, ¡por fin llegó el momento de celebrar!",
    invitacion2: "Así que saca las botas y el sombrero, que nos vamos a festejar al puro estilo del norte.",
    vestimentaFrase: "Ponte el sombrero y las botas, y no olvides traer tus vicios.",
    cierre1: "Este logro también es de mis padres. Gracias por su amor, sus sacrificios y por ayudarme a llegar hasta aquí. Sin ustedes, nada de esto sería posible.",
    cierre2: "Gracias por acompañarme en esta etapa tan importante de mi vida.",
    cierreFinal: "¡Nos vemos pa' festejar como se debe!",
    mensajeWhatsapp: "¡Qué onda, Angel! Confirmo mi asistencia a tu graduación. ¡Nos vemos pa' festejar!"
  }
};
