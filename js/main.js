document.addEventListener("DOMContentLoaded", function () {
  // Lista de doctores
  const doctors = [
    { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg", location: "Sede Central" },
    { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg", location: "Sede Central" },
    { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg", location: "Sede Central" },
    { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg", location: "Sede Central" },
    { name: "Dr. Juan Pérez", specialty: "Odontologo", image: "assets/img/doctores/doctors-1.jpg", location: "Sede Central" },
    { name: "Dra. María López", specialty: "Odontologo", image: "assets/img/doctores/doctors-2.jpg", location: "Sede Central" },
    { name: "Dr. Carlos Rodríguez", specialty: "Odontologo", image: "assets/img/doctores/doctors-3.jpg", location: "Sede Central" },
  ];

  const doctorsContainer = document.getElementById("doctors-container");

  if (doctorsContainer) {
      doctors.forEach(doctor => {
          const doctorCard = document.createElement("div");
          doctorCard.classList.add("col-md-4", "doctor-card");
          doctorCard.innerHTML = `
              <img src="${doctor.image}" alt="${doctor.name}">
              <h3>${doctor.name}</h3>
              <p>${doctor.specialty}</p>
              <p>${doctor.location}</p>
          `;
          doctorsContainer.appendChild(doctorCard);
      });
  }

  // Inicializar AOS (Animaciones al hacer scroll)
  if (typeof AOS !== "undefined") {
      AOS.init({
          duration: 1000, // Duración de la animación en milisegundos
          easing: 'ease-in-out', // Tipo de animación
          once: true // Animación solo una vez
      });
  }

  
  
});
