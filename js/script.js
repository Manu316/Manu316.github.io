document.addEventListener('DOMContentLoaded', () => {
    // Almacena todas las pantallas para una navegación más fácil
    const introScreen = document.getElementById('intro-screen');
    const aboutMeScreen = document.getElementById('about-me');
    const hobbiesScreen = document.getElementById('hobbies');

    // Función para mostrar solo una pantalla a la vez
    window.showScreen = (screenId) => {
        const screens = [
            introScreen,
            aboutMeScreen,
            hobbiesScreen
        ];

        screens.forEach(screen => {
            if (screen && screen.id === screenId) {
                screen.classList.remove('hidden');
                screen.classList.add('visible');
            } else if (screen) {
                screen.classList.remove('visible');
                screen.classList.add('hidden');
            }
        });
    };

    showScreen('intro-screen');

    // Función para desvanecer la música antes de navegar
    function fadeOutMusic(url) {

        const player = document.getElementById('spotify-player');
        if (player) {
            player.style.opacity = 0.5;
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        } else {
            window.location.href = url;
        }
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                event.preventDefault();
                fadeOutMusic(href);
            }
        });
    });
});