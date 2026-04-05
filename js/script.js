document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navPanel = document.querySelector('.nav-panel');
    const form = document.getElementById('contact-form');
    const formNote = document.getElementById('form-note');

    if (navToggle && navPanel) {
        navToggle.addEventListener('click', () => {
            const isOpen = navPanel.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('menu-open', isOpen);
        });

        navPanel.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navPanel.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            });
        });
    }

    if (form && formNote) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.reset();
            formNote.textContent = 'Thanks. Your message is ready for a real form integration.';
        });
    }
});
