// Integración con Firebase Firestore y Authentication (Solo eliminación desde Firebase Console)

// Configuración de Firebase (Reemplaza con tu configuración real)
const firebaseConfig = {
    apiKey: "AIzaSyDssOL3n0B5bDhVQM8rXqo7LAGLGmaNSX8",
    authDomain: "clinica-dental-feffd.firebaseapp.com",
    projectId: "clinica-dental-feffd",
    storageBucket: "clinica-dental-feffd.firebasestorage.app",
    messagingSenderId: "263930569112",
    appId: "1:263930569112:web:355227249edf0ae8994bed"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const testimonialForm = document.getElementById("testimonial-form");
const testimonialList = document.getElementById("testimonial-list");
const carousel = document.getElementById("testimonial-carousel");

// Función para cargar testimonios en tiempo real
firebase.firestore().collection("testimonios").onSnapshot(snapshot => {
    testimonialList.innerHTML = "";

    if (snapshot.empty) {
        testimonialList.innerHTML = "<p class='text-center'>Aún no hay testimonios.</p>";
        return;
    }
    
    snapshot.forEach((doc, index) => {
        const testimonial = doc.data();
        const testimonialItem = document.createElement("div");
        testimonialItem.classList.add("carousel-item");
        testimonialItem.innerHTML = `
            <div class="testimonial-card">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-name">- ${testimonial.name}</h4>
            </div>
        `;
        testimonialList.appendChild(testimonialItem);
    });

    // Asegurar que el primer testimonio sea activo
    const items = testimonialList.querySelectorAll(".carousel-item");
    if (items.length > 0) {
        items.forEach(item => item.classList.remove("active"));
        items[0].classList.add("active");
    }
});

testimonialForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const name = document.getElementById("testimonial-name").value;
    const text = document.getElementById("testimonial-text").value;
    
    if (name.trim() === "" || text.trim() === "") return;

    await db.collection("testimonios").add({ name, text });
    testimonialForm.reset();
});
