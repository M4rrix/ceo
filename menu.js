document.addEventListener("DOMContentLoaded", function () {
   
  
    // Manejo del menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
  const navbar = document.getElementById('navbar');
  const body = document.body;

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en la X
    if (closeMenu) {
        closeMenu.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll("#navbar .nav-link").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
}

      // Cerrar el menú si se hace clic fuera de él
      document.addEventListener("click", function (event) {
          if (!navbar.contains(event.target) && !menuToggle.contains(event.target) && navbar.classList.contains("active")) {
              navbar.classList.remove("active");
              menuToggle.classList.remove("open");
              body.classList.remove("no-scroll");
          }
      });
  

  // Animación de desplazamiento suave en el menú
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste por el header fijo
                behavior: "smooth"
            });
        }
    });
});
  
   
  });