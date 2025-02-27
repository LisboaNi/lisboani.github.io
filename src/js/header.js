document.addEventListener("DOMContentLoaded", function() {
    // Animação de texto
    const textElements = document.querySelectorAll("#animated-text, #animated-text-h3");

    textElements.forEach(textElement => {
        const text = textElement.innerText;
        textElement.innerHTML = "";

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.style.setProperty("--char-index", index);
            span.innerText = char;
            textElement.appendChild(span);
        });
    });

    // Função de rolagem para header
    const header = document.querySelector('.header_opcoes');

    window.addEventListener("scroll", function() {
        if (window.scrollY > 10) {
            header.classList.add('shrink'); 
        } else {
            header.classList.remove('shrink'); 
        }
    });
});