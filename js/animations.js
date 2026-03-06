export const initAnimations = () => {
    // Terminal Boot Sequence - Updated for V2.0
    const terminal = document.getElementById('terminal-boot');
    const bootLines = [
        "> INITIALIZING_PRISMATIC_CORE...",
        "> LOADING_BIOMETRICS: BRITTANY_PARKER",
        "> SYNCING_AUTONATE_AI_MODULES...",
        "> ESTABLISHING_NEURAL_LINK...",
        "> SYSTEM_V2.0_ONLINE."
    ];

    let currentLine = 0;
    const typeLine = () => {
        if (currentLine < bootLines.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            line.style.marginBottom = '4px';
            terminal.appendChild(line);
            
            let charIndex = 0;
            const text = bootLines[currentLine];
            
            const interval = setInterval(() => {
                line.textContent += text[charIndex];
                charIndex++;
                if (charIndex === text.length) {
                    clearInterval(interval);
                    currentLine++;
                    setTimeout(typeLine, 300);
                }
            }, 25);
        }
    };

    if (terminal) typeLine();

    // Section Staggered Reveal
    anime({
        targets: '.glass-panel',
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.98, 1],
        delay: anime.stagger(150),
        duration: 1200,
        easing: 'easeOutElastic(1, .8)'
    });

    // Prismatic Background Pulse
    anime({
        targets: '.bg-glow',
        opacity: [0.5, 0.8],
        duration: 4000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });
};
