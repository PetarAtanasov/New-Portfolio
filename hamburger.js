// Mobile navigation toggle.
(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    const setOpen = (open) => {
        hamburger.classList.toggle('active', open);
        navMenu.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    hamburger.addEventListener('click', () => {
        setOpen(!navMenu.classList.contains('active'));
    });

    // Close the menu after a link is chosen.
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => setOpen(false));
    });

    // Close with Escape and return focus to the toggle.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            setOpen(false);
            hamburger.focus();
        }
    });

    // Close when clicking outside the navigation.
    document.addEventListener('click', (event) => {
        if (navMenu.classList.contains('active') && !event.target.closest('.navbar')) {
            setOpen(false);
        }
    });

    // Reset when switching to the desktop layout.
    window.matchMedia('(min-width: 900px)').addEventListener('change', (event) => {
        if (event.matches) setOpen(false);
    });
})();
