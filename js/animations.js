export const initAnimations = () => {
    // Terminal Boot Sequence
    const terminal = document.getElementById('terminal-boot');
    const bootLines = [
        "Initializing Brittany_AI_System...",
        "Loading developer modules...",
        "Loading AI integrations...",
        "Establishing neural links...",
        "System ready."
    ];

    let currentLine = 0;
    const typeLine = () => {
        if (currentLine < bootLines.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            terminal.appendChild(line);
            
            let charIndex = 0;
            const text = bootLines[currentLine];
            
            const interval = setInterval(() => {
                line.textContent += text[charIndex];
                charIndex++;
                if (charIndex === text.length) {
                    clearInterval(interval);
                    currentLine++;
                    setTimeout(typeLine, 400);
                }
            }, 30);
        }
    };

    typeLine();

    // Section Fade-ins
    anime({
        targets: '.glass-panel',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutQuad'
    });

    // Background Glow Animation
    anime({
        targets: '.bg-glow',
        opacity: [0.4, 0.7],
        duration: 5000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
};
