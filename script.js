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
    // Attempt to autoplay music with fallback button
    const music = document.getElementById('background-music');
    music.play().then(() => {
        console.log('Music started automatically');
    }).catch(error => {
        console.log('Autoplay failed:', error);

        // Create a button to manually start music
        const soundButton = document.createElement('button');
        soundButton.textContent = 'Включить звук';
        soundButton.style.position = 'fixed';
        soundButton.style.bottom = '20px';
        soundButton.style.right = '20px';
        soundButton.style.backgroundColor = '#ff0000';
        soundButton.style.color = '#fff';
        soundButton.style.border = 'none';
        soundButton.style.padding = '10px 20px';
        soundButton.style.borderRadius = '5px';
        soundButton.style.cursor = 'pointer';
        soundButton.style.fontSize = '1rem';

        document.body.appendChild(soundButton);

        soundButton.addEventListener('click', () => {
            music.play().then(() => {
                console.log('Music started by user');
                soundButton.remove(); // Remove button after music starts
            }).catch(err => console.log('Error starting music:', err));
        });
    });
});
