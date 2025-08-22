// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // HTML button
    const buttonHtml = document.querySelector('.button-html');
    if (buttonHtml) {
        buttonHtml.addEventListener('click', function() {
            window.location.href = 'html-page.html';
        });
    }

    // CSS button
    const buttonCss = document.querySelector('.button-css');
    if (buttonCss) {
        buttonCss.addEventListener('click', function() {
            window.location.href = 'css-page.html';
        });
    }

    // JavaScript button
    const buttonJs = document.querySelector('.button-js');
    if (buttonJs) {
        buttonJs.addEventListener('click', function() {
            window.location.href = 'javascript-page.html';
        });
    }

    // Python button
    const buttonPython = document.querySelector('.button-python');
    if (buttonPython) {
        buttonPython.addEventListener('click', function() {
            window.location.href = 'python-page.html';
        });
    }

    // Java button
    const buttonJava = document.querySelector('.button-java');
    if (buttonJava) {
        buttonJava.addEventListener('click', function() {
            window.location.href = 'java-page.html';
        });
    }

    // Add some visual feedback when buttons are clicked
    const allButtons = document.querySelectorAll('.button-html, .button-css, .button-js, .button-python, .button-java');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a brief visual effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});