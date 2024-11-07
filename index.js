// Este script controla el audio y su estado de muteo

window.addEventListener('load', function () {
    const muteButton = document.getElementById("mute-button");
    const audio = document.getElementById("background-audio");

    // Al cargar la página, restauramos el estado del audio desde localStorage
    const isMuted = localStorage.getItem('audioMuted') === 'true';  // Leemos el estado guardado
    audio.muted = isMuted;

    // Si no está silenciado, reproducimos el audio
    if (!isMuted && audio.paused) {
        audio.play().catch((error) => {
            console.log("Error al intentar reproducir el audio:", error);
        });
    }

    // Cambiar el ícono del botón dependiendo si está muteado o no
    muteButton.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';

    // Manejo del click para silenciar el audio
    muteButton.addEventListener("click", function () {
        audio.muted = !audio.muted;
        
        // Guardar el estado del muteo en localStorage
        localStorage.setItem('audioMuted', audio.muted);

        // Cambiar el ícono del botón
        muteButton.innerHTML = audio.muted 
            ? '<i class="fas fa-volume-mute"></i>' 
            : '<i class="fas fa-volume-up"></i>';

        // Reproducir o pausar el audio según el muteo
        if (!audio.muted) {
            audio.play().catch((error) => {
                console.log("Error al intentar reproducir el audio:", error);
            });
        }
    });
});