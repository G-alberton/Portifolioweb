const typewriterElement = document.getElementById('typewriter');
// Palavras que serão digitadas (adicionei Java e Flutter também!)
const words = ["Javascript", "GO", "Java", "C++", "Python"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Apagando
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Escrevendo
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Velocidade de digitação
    let typingSpeed = isDeleting ? 100 : 150;

    // Se terminou de escrever a palavra
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pausa no final da palavra
        isDeleting = true;
    } 
    // Se terminou de apagar a palavra
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        // Volta para a primeira palavra se chegar ao final do array
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        typingSpeed = 500; // Pausa antes de começar a próxima
    }

    setTimeout(typeEffect, typingSpeed);
}

// Inicia o efeito
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});