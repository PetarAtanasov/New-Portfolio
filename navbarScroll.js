// Hides the header while scrolling down and shows it again when scrolling up.
(() => {
    const header = document.getElementById('navbar_scroll');
    const navMenu = document.querySelector('.nav-menu');
    if (!header) return;

    let prevScrollPos = window.scrollY;
    let ticking = false;

    const update = () => {
        const currentScrollPos = window.scrollY;
        const menuOpen = navMenu && navMenu.classList.contains('active');
        const scrollingDown = currentScrollPos > prevScrollPos;

        if (!menuOpen && scrollingDown && currentScrollPos > header.offsetHeight) {
            header.classList.add('is-hidden');
        } else if (!scrollingDown) {
            header.classList.remove('is-hidden');
        }

        prevScrollPos = currentScrollPos;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    // Never keep the header hidden while something inside it has keyboard focus.
    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
})();
