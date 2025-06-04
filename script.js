const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';

function toggleAOS() {
  const navLinks = document.getElementById('nav-links');
  if (window.innerWidth <= 768) {
    navLinks.removeAttribute('data-aos');
  } else {
    navLinks.setAttribute('data-aos', 'fade-down');
  }
}

// Jalankan saat pertama kali load
toggleAOS();

// Jalankan saat window di-resize
window.addEventListener('resize', toggleAOS);

});
