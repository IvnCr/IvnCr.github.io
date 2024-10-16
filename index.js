// Función para aplicar la animación de salida
function applyFadeOut(event) {
    event.preventDefault(); // Previene la redirección instantánea
    const link = event.currentTarget.href; // Obtiene el enlace del clic

    // Aplica la clase de fade-out al body
    document.body.classList.add('fade-out');

    // Redirige después de la animación
    setTimeout(function () {
        window.location.href = link;
    }, 500); // El retraso coincide con la duración de la transición en el CSS (0.5s)
}

// Agregar el evento a los enlaces
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Selecciona todos los enlaces
    links.forEach(link => {
        link.addEventListener('click', applyFadeOut);
    });
});

// Pantalla de carga
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none"; // Oculta el loader
});

