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
            
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                event.preventDefault(); 
                
                fadeOutMusic(href);
            }
        });
    });

    function updateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const formattedTime = now.toLocaleDateString('es-ES', options);
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            datetimeElement.textContent = formattedTime;
        }
    }

    setInterval(updateTime, 1000);
    updateTime();

});



