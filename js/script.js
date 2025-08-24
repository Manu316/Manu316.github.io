document.addEventListener('DOMContentLoaded', () => {
    window.showScreen = (screenId) => {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            if (screen.id === screenId) {
                screen.classList.remove('hidden');
                screen.classList.add('visible');
            } else {
                screen.classList.remove('visible');
                screen.classList.add('hidden');
            }
        });
    };

    showScreen('intro-screen');
});