export const initAnimations = () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

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

    // Hero Logo Floating Animation
    anime({
        targets: '.hero-full-logo',
        translateY: [-10, 10],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    // Background Glow Pulse
    anime({
        targets: '.bg-glow',
        opacity: [0.5, 0.8],
        duration: 5000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
};
