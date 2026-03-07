export const initAnimations = () => {
    // 1. Tech Background Generation
    const techBg = document.getElementById('tech-bg');
    if (techBg) {
        const shapeCount = 15;
        const colors = ['#7DD3FC', '#67E8F9', '#FDE047'];
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'tech-shape';
            
            // Randomly choose between a circle, square (circuit), or line
            const type = Math.floor(Math.random() * 3);
            const size = Math.random() * 100 + 50;
            
            shape.style.width = `${size}px`;
            shape.style.height = type === 2 ? '2px' : `${size}px`;
            shape.style.border = `1px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
            if (type === 0) shape.style.borderRadius = '50%';
            if (type === 1) shape.style.borderRadius = '12px';
            
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            
            techBg.appendChild(shape);
            
            // Animate each shape
            anime({
                targets: shape,
                translateX: () => anime.random(-100, 100),
                translateY: () => anime.random(-100, 100),
                rotate: () => anime.random(-180, 180),
                duration: () => anime.random(10000, 20000),
                delay: () => anime.random(0, 5000),
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad'
            });
        }
    }

    // 2. Reveal animations on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000,
                    easing: 'easeOutQuart'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .project-card, .matrix-cell').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // 3. Hero Logo Floating Animation
    anime({
        targets: '.hero-full-logo',
        translateY: [-10, 10],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    // 4. Background Glow Pulse
    anime({
        targets: '.bg-glow',
        opacity: [0.5, 0.8],
        duration: 5000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
};
