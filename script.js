// Toggle activities list visibility
function toggleActivities() {
    const activitiesList = document.getElementById('activitiesList');
    const expandButton = document.querySelector('.expand');
    
    // HTML button
    const buttonBack=document.querySelector('.buttonBack');
    if (buttonBack) {
        if (window.location.href.includes('music.html') || window.location.href.includes('comics.html') || window.location.href.includes('sports.html') || window.location.href.includes('lola.html') || window.location.href.includes('tv.html') || window.location.href.includes('video-games.html')) {
        buttonBack.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    
    }

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
}