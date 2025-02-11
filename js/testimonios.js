document.addEventListener("DOMContentLoaded", function () {
    const testimonialForm = document.getElementById("testimonial-form");
    const testimonialList = document.getElementById("testimonial-list");
    const carousel = document.getElementById("testimonial-carousel");
    const clearButton = document.createElement("button");
    clearButton.textContent = "Borrar todos los testimonios";
    clearButton.classList.add("btn", "btn-danger", "mt-3");
    clearButton.style.display = "none";
    carousel.parentNode.insertBefore(clearButton, carousel.nextSibling);

    const ADMIN_PASSWORD = "admin123"; // Clave de administrador para eliminar testimonios

    if (!testimonialList || !testimonialForm || !carousel) {
        console.error("Error: No se encontró testimonialList, testimonialForm o carousel en el DOM.");
        return;
    }

    function loadTestimonials() {
        const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        testimonialList.innerHTML = "";

        if (testimonials.length === 0) {
            carousel.style.display = "none";
            clearButton.style.display = "none";
            return;
        }
        carousel.style.display = "block";
        clearButton.style.display = "none"; // El botón solo aparecerá si el usuario está autorizado

        testimonials.forEach((testimonial, index) => {
            const testimonialItem = document.createElement("div");
            testimonialItem.classList.add("carousel-item");
            if (index === 0) testimonialItem.classList.add("active");
            
            testimonialItem.innerHTML = `
                <div class="testimonial-card">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <h4 class="testimonial-name">- ${testimonial.name}</h4>
                </div>
            `;
            testimonialList.appendChild(testimonialItem);
        });

        const items = testimonialList.querySelectorAll(".carousel-item");
        items.forEach(item => item.classList.remove("active"));
        if (items.length > 0) items[0].classList.add("active");

        let bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) {
            bsCarousel.dispose();
        }
        bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            ride: "carousel"
        });
        bsCarousel.cycle();
    }

    function requestAdminAccess() {
        const userPassword = prompt("Ingrese la contraseña de administrador para borrar los testimonios:");
        if (userPassword === ADMIN_PASSWORD) {
            clearButton.style.display = "inline-block"; // Mostrar botón solo si la clave es correcta
        } else {
            alert("Contraseña incorrecta. No tiene permisos para eliminar testimonios.");
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "Delete") { // Atajo: Ctrl + Supr para ingresar clave
            requestAdminAccess();
        }
    });

    clearButton.addEventListener("click", function () {
        if (confirm("¿Está seguro de que desea borrar todos los testimonios?")) {
            localStorage.removeItem("testimonials");
            loadTestimonials();
        }
    });

    testimonialForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("testimonial-name").value;
        const text = document.getElementById("testimonial-text").value;
        
        if (name.trim() === "" || text.trim() === "") return;

        const newTestimonial = { name, text };
        const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        testimonials.push(newTestimonial);
        localStorage.setItem("testimonials", JSON.stringify(testimonials));

        loadTestimonials();
        testimonialForm.reset();
    });

    loadTestimonials();
});
