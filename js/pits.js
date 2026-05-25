document.addEventListener("DOMContentLoaded", () => {
    // Buscamos todos los títulos de las noticias dentro del muro
    const noticiaTitulos = document.querySelectorAll(".texto-noticia h3");

    noticiaTitulos.forEach((titulo) => {
        // Guardamos el texto original de cada noticia y limpiamos el contenedor
        const textoOriginal = titulo.textContent;
        titulo.textContent = "";

        let characterIndex = 0;
        const typingSpeed = 70; // Velocidad de escritura (en milisegundos por letra)

        function escribirTitulo() {
            if (characterIndex < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(characterIndex);
                characterIndex++;
                setTimeout(escribirTitulo, typingSpeed);
            }
        }

        // Iniciamos el efecto para este título individual
        escribirTitulo();
    });
});