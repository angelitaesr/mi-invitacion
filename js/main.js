/* ==========================================================
   MAIN.JS — Lee los datos de config.js. Normalmente no se edita.
   ========================================================== */
(function () {
  const E = EVENTO;
  const $ = (s) => document.querySelector(s);

  /* ---------- 1. Rellenar textos ---------- */
  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = E[el.dataset.bind] || "";
  });
  document.querySelectorAll("[data-txt]").forEach((el) => {
    el.textContent = E.textos[el.dataset.txt] || "";
  });
  document.title = "Mi graduación | " + E.nombre;

  /* ---------- 2. Imágenes decorativas (solo si existen) ---------- */
  document.querySelectorAll("img[data-decor]").forEach((img) => {
    const src = E.imagenes[img.dataset.decor];
    if (!src) return;
    img.onload = () => img.classList.add("ok");
    img.onerror = () => img.remove();
    img.src = src;
  });

  /* ---------- 3. Botón de ubicación ---------- */
  const btnMaps = $("#btn-maps");
  if (E.maps) {
    btnMaps.href = E.maps;
  } else {
    btnMaps.classList.add("pendiente");
    btnMaps.textContent = "Ubicación próximamente";
  }

  /* ---------- 4. Botón de WhatsApp ---------- */
  const msg = E.textos.mensajeWhatsapp.replace("{nombre}", E.nombre);
  $("#btn-wa").href = "https://wa.me/" + E.whatsapp + "?text=" + encodeURIComponent(msg);

  /* ---------- 5. Video ---------- */
  const audio = new Audio();
  let musicaActiva = false;

  if (E.video) {
    const caja = $("#video-caja");
    const v = document.createElement("video");
    const vel = E.videoVelocidad || 1;
    v.src = E.video;
    v.controls = true;
    v.playsInline = true;
    v.muted = true;
    v.loop = true;
    v.preload = "auto";
    v.defaultPlaybackRate = vel;
    v.playbackRate = vel;
    if (E.videoPoster) v.poster = E.videoPoster;
    caja.innerHTML = "";
    caja.appendChild(v);
    v.addEventListener("loadedmetadata", () => { v.playbackRate = vel; });
    v.addEventListener("play", () => { v.playbackRate = vel; });

    // Se reproduce solo al estar en pantalla y se pausa al salir
    new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.6 }).observe(caja);
  }
  
  /* ---------- 6. Música ---------- */
  const btnMusica = $("#musica");
  const icono = btnMusica.querySelector(".musica-icono");
  let musicaDisponible = false;

  if (E.musica) {
    audio.src = E.musica;
    audio.loop = true;
    audio.preload = "auto";
    audio.addEventListener("canplay", () => { musicaDisponible = true; btnMusica.hidden = false; });
    audio.addEventListener("error", () => { musicaDisponible = false; btnMusica.hidden = true; });
  }

  function pintarBoton() {
    btnMusica.classList.toggle("musica-activa", musicaActiva);
    btnMusica.setAttribute("aria-label", musicaActiva ? "Pausar música" : "Reproducir música");
  }

  btnMusica.addEventListener("click", () => {
    if (musicaActiva) { audio.pause(); musicaActiva = false; }
    else { audio.play().catch(() => {}); musicaActiva = true; }
    pintarBoton();
  });

  /* ---------- 7. Pantalla inicial: entrar + iniciar música ---------- */
  $("#intro").addEventListener("click", () => {
    if (E.musica) {
      audio.play().then(() => { musicaActiva = true; pintarBoton(); }).catch(() => {});
    }
    $("#intro").classList.add("fuera");
    document.body.classList.remove("locked");
    document.body.classList.add("entered");
    window.scrollTo(0, 0);
  });

  /* ---------- 8. Cuenta regresiva ---------- */
  const destino = new Date(E.fechaISO).getTime();
  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    let diff = destino - Date.now();
    if (isNaN(destino)) return;
    if (diff <= 0) {
      $("#reloj").hidden = true;
      $("#reloj-fin").hidden = false;
      return clearInterval(timer);
    }
    const s = Math.floor(diff / 1000);
    $("#c-dias").textContent = pad(Math.floor(s / 86400));
    $("#c-horas").textContent = pad(Math.floor((s % 86400) / 3600));
    $("#c-min").textContent = pad(Math.floor((s % 3600) / 60));
    $("#c-seg").textContent = pad(s % 60);
  }
  const timer = setInterval(tick, 1000);
  tick();

  /* ---------- 9. Aparición suave al hacer scroll ---------- */
  const rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((items) => {
      items.forEach((it) => {
        if (it.isIntersecting) { it.target.classList.add("in"); io.unobserve(it.target); }
      });
    }, { threshold: 0.15 });
    rv.forEach((el) => io.observe(el));
  } else {
    rv.forEach((el) => el.classList.add("in"));
  }
})();
