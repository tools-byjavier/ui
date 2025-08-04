// Obtenemos el botón que abre/cierra el menú
const toggle = document.querySelector('.header-button');

// Obtenemos el elemento del menú de navegación
const nav = document.getElementById('nav');

// Obtenemos el elemento <main>
const main = document.getElementById('main');

// Función para abrir o cerrar el menú
function toggleMenu() {
  // Alterna la clase 'open' en el menú
  nav.classList.toggle('open');

  // Alterna la clase que oculta el <main>
  main.classList.toggle('main-hidden');
}

// Función para cerrar el menú
function closeMenu() {
  // Asegura que se quite la clase 'open' del menú
  nav.classList.remove('open');

  // Asegura que se muestre el <main>
  main.classList.remove('main-hidden');

  // Devuelve el enfoque al botón
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

// Evento que detecta cambios en el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    // Asegura que el menú esté cerrado y el main visible
    nav.classList.remove('open');
    main.classList.remove('main-hidden');
  }
});
