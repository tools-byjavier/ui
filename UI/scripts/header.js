// header
const toggle = document.querySelector('.header-button');
const nav = document.getElementById('nav');

// Función para abrir/cerrar el menú
function toggleMenu() {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
  nav.setAttribute('aria-hidden', String(expanded));
}

// Función para cerrar el menú (usada también con Escape)
function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  nav.setAttribute('aria-hidden', 'true');
  toggle.focus();
}

// Evento para el botón de toggle
toggle.addEventListener('click', toggleMenu);

// Evento para la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});





// Imagen
const img = document.getElementById('logo');

function actualizarImagen() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    img.src = 'assets/logo.png'; // Imagen para modo oscuro
  } else {
    img.src = 'assets/logo-2.png'; // Imagen para modo claro
  }
}

// Llamar al cargar la página
actualizarImagen();

// Escuchar cambios en el tema (si el usuario cambia el modo)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', actualizarImagen);