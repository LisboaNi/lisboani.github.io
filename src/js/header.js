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
});