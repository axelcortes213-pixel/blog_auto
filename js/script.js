document.addEventListener("DOMContentLoaded", () => {
    const subtitleElement = document.querySelector(".subtitle");
    
    // Si por alguna razón no encuentra el elemento, el código se detiene y no rompe la página
    if (!subtitleElement) return;

    // Lista de frases que se irán escribiendo de forma cíclica
    const phrases = [
        "Velocidad, estrategia y resistencia pura.",
        "La era dorada de los Hypercars.",
        "Pasión por las 24 Horas de Le Mans.",
        "Donde la ingeniería desafía al tiempo."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Borra letras
            subtitleElement.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
            typingSpeed = 50; // Más rápido al borrar
        } else {
            // Escribe letras
            subtitleElement.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
            typingSpeed = 100; // Velocidad normal al escribir
        }

        // Si terminó de escribir la frase completa
        if (!isDeleting && characterIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pausa de 2 segundos antes de empezar a borrar
            isDeleting = true;
        } 
        // Si terminó de borrar la frase completa
        else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Pasa a la siguiente frase
            typingSpeed = 500; // Pausa de medio segundo antes de escribir la nueva
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Inicia el efecto de animación
    typeEffect();
});