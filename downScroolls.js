// Reveal-on-scroll for elements with the .reveal class.
// The `.js` class is added here (not inline in the HTML) so the CSS only
// hides .reveal elements when this script has actually loaded.
(() => {
    document.documentElement.classList.add('js');

    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // No animation wanted or no IntersectionObserver support: show everything right away.
    if (reduceMotion || !('IntersectionObserver' in window)) {
        reveals.forEach((el) => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    // IntersectionObserver also reports elements that are already visible on load.
    reveals.forEach((el) => observer.observe(el));
})();
