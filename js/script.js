document.addEventListener('DOMContentLoaded', () => {

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
            
            // Verifica si el enlace no es externo (http) y no es un ancla (#)
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                // Previene la acción por defecto del enlace
                event.preventDefault(); 
                
                fadeOutMusic(href);
            }
        });
    });
});