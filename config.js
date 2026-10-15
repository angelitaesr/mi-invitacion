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
  lugar: "Lugar",                 // ← PENDIENTE: nombre del lugar
  maps: "",                       // ← PENDIENTE: pega aquí el link de Google Maps

  // ---- WhatsApp ----
  whatsapp: "526624055852",

  // ---- Multimedia ----
  musica: "assets/audio/musica.mp3",   // ← PENDIENTE: pon tu canción con este nombre
  video: "assets/video/video.mp4",
  videoVelocidad: 2.5,   // 1 = normal, 1.25 = un poco más rápido, 1.5 = rápido
  videoPoster: "",

  // ---- Imágenes decorativas (PNG/WEBP sin fondo) ----
  imagenes: {
    sombrero: "assets/img/sombrero.webp",
    bota: "assets/img/bota.webp",
    ramoMargaritas: "assets/img/ramo-margaritas.webp",
    ramito: "assets/img/ramito.webp",
    ramo: "assets/img/ramo.webp",
    estrella: "assets/img/estrella.webp",
    herradura: "assets/img/herradura.webp",
    cuerda: "assets/img/cuerda.webp",                  // divisor entre frases
    craneo: "assets/img/craneo.webp",
    madera: "assets/img/madera.webp",
    flor: "assets/img/flor.webp",
    piel: "assets/img/piel.webp",
    foto: "",

    // ---- NUEVAS (las usa estilos.css) ----
    fondoPapel: "assets/img/fondo-estampado.webp",         // papel acuarela crema (base)
    fondoConEstampado: "assets/img/fondoconestampado.webp", // estampado vaquero (se mezcla encima)
    cuerdaEsquina: "assets/img/cuerda-esquina.webp"    // cuerda en esquinas de tarjetas
  },

  // ---- Textos ----
  textos: {
    introFrase: "Se viene algo bueno que quiero celebrar contigo...",
    introBoton: "¡Ándale, entra!",
    portadaTitulo: "MI GRADUACIÓN",
    portadaFrase: "Una meta cumplida, mil sueños por delante",
    invitacion1: "Después de desveladas, esfuerzo y muchas ganas de salir adelante, ¡por fin llegó el momento de celebrar!",
    invitacion2: "Así que saca las botas y el sombrero, que nos vamos a festejar al puro estilo del norte.",
    vestimentaFrase: "Ponte el sombrero y las botas, que nos vamos a echar una buena bailada.",
    cierre1: "Este logro también es de mis padres. Gracias por su amor, sus sacrificios y por ayudarme a llegar hasta aquí. Sin ustedes, nada de esto sería posible.",
    cierre2: "Gracias por acompañarme en esta etapa tan importante de mi vida.",
    cierreFinal: "¡Nos vemos pa' festejar como se debe!",
    mensajeWhatsapp: "¡Qué onda, Angel! Confirmo mi asistencia a tu graduación. ¡Nos vemos pa' festejar!"
  }
};