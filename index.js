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

//HERO
let currentHeroIndex = 0;
const heroImages = document.querySelectorAll('.hero-images .slider-image');
const totalHeroImages = heroImages.length;

function changeHeroImage() {
    heroImages[currentHeroIndex].classList.remove('active');
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroImages;
    heroImages[currentHeroIndex].classList.add('active');
}

setInterval(changeHeroImage, 3000); // Cambia cada 3 segundos

//CATEGORY
let currentInvisibleIndex = 0;
const invisibleImages = document.querySelectorAll('.invisible-box .slider-image');
const totalInvisibleImages = invisibleImages.length;

function changeInvisibleImage() {
    invisibleImages[currentInvisibleIndex].classList.remove('active');
    currentInvisibleIndex = (currentInvisibleIndex + 1) % totalInvisibleImages;
    invisibleImages[currentInvisibleIndex].classList.add('active');
}

setInterval(changeInvisibleImage, 3000); // Cambia cada 3 segundos

// BRANDS 
let currentInvisible2Index = 0;
const invisible2Images = document.querySelectorAll('.invisible-box2 .slider-image');
const totalInvisible2Images = invisible2Images.length;

function changeinvisible2Image() {
    invisible2Images[currentInvisible2Index].classList.remove('active');
    currentInvisible2Index = (currentInvisible2Index + 1) % totalInvisible2Images;
    invisible2Images[currentInvisible2Index].classList.add('active');
}

setInterval(changeinvisible2Image, 3000); // Cambia cada 3 segundos

