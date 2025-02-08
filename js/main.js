document.addEventListener("DOMContentLoaded", function () {
    const doctors = [
      { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg" },
      { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg" },
      { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg" },
      { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg" },
      { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg" },
      { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg" },
      { name: "Dr. Carlos Rodríguez", specialty: "Odontologo", image: "assets/img/doctores/doctors-3.jpg" },
    ];
  
    const doctorsContainer = document.getElementById("doctors-container");
  
    doctors.forEach(doctor => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("col-md-4", "doctor-card");
      doctorCard.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialty}</p>
      `;
      doctorsContainer.appendChild(doctorCard);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Inicializar AOS (Animaciones al hacer scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'ease-in-out', // Tipo de animación
        once: true // Animación solo una vez
      });
  
    // Manejo del menú hamburguesa
    document.getElementById('menu-toggle').addEventListener('click', function() {
      document.getElementById('navbar').classList.add('active');
    });
  
    document.getElementById('close-menu').addEventListener('click', function() {
      document.getElementById('navbar').classList.remove('active');
    });
  });


        // Animación de desplazamiento suave en el menú sin jQuery
        document.querySelectorAll("a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", function(event) {
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