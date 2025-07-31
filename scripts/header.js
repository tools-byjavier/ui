// Obtenemos el botón que abre/cierra el menú
const toggle = document.querySelector('.header-button');

// Obtenemos el elemento del menú de navegación
const nav = document.getElementById('nav');

// Función para abrir o cerrar el menú
function toggleMenu() {
  // Alterna la clase 'open' en el menú. Si la tiene, la quita; si no la tiene, la agrega
  nav.classList.toggle('open');
}

// Función para cerrar el menú
function closeMenu() {
  // Asegura que se quite la clase 'open' del menú
  nav.classList.remove('open');

  // Devuelve el enfoque al botón (opcional, se puede quitar si no es necesario)
  toggle.focus();
}

// Evento que se activa al hacer clic en el botón del menú
toggle.addEventListener('click', toggleMenu);

// Evento que detecta si se presiona la tecla Escape
document.addEventListener('keydown', (e) => {
  // Si la tecla presionada es Escape, se cierra el menú
  if (e.key === 'Escape') {
    closeMenu();
  }
});
