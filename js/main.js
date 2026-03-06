import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('BRITTANY_SYSTEM :: INITIALIZED');
    
    // Initialize Animations
    initAnimations();

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Placeholder
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'TRANSMITTING...';
            btn.style.opacity = '0.5';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'TRANSMISSION_COMPLETE';
                btn.classList.add('btn-outline');
                btn.classList.remove('btn-primary');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('btn-outline');
                    btn.classList.add('btn-primary');
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
