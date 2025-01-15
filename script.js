document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');

    // Confetti effect
    function launchConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // Add confetti effect on page load
    launchConfetti();

    // Button event listeners
    document.getElementById('yes-button').addEventListener('click', () => {
        window.location.href = 'yes.html';
    });

    document.getElementById('no-button').addEventListener('click', () => {
        window.location.href = 'no.html';
    });

    // Add confetti styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: red;
            opacity: 0.7;
            animation: fall linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Play background music with user interaction fallback
    const music = document.getElementById('background-music');
    const playMusic = () => {
        music.play().catch(error => console.log('Music autoplay failed:', error));
    };

    // Attempt to play on load
    playMusic();

    // Fallback: play music on user interaction
    //document.body.addEventListener('click', playMusic, { once: true });
});
