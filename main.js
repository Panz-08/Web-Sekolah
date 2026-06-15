// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const screen = document.getElementById('loadingScreen');
        if (screen) {
            screen.classList.add('fade-out');
            setTimeout(() => screen.remove(), 700);
        }
    }, 900);
});


// AOS Init
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }
});


// Navbar: scroll class + active link
(function () {
    const navbar     = document.getElementById('mainNav');
    const navLinks   = document.querySelectorAll('.nav-link[href^="#"]');
    const sections   = document.querySelectorAll('section[id], div[id]');

    function onScroll() {
        // shrink navbar 
        navbar?.classList.toggle('scrolled', window.scrollY > 80);

        // scroll-to-top button 
        const btn = document.getElementById('scrollTop');
        btn?.classList.toggle('show', window.scrollY > 320);

        // active nav link 
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${current}`;
            link.classList.toggle('active', isActive);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();


// Smooth scroll for all anchor links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 78;
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // close mobile menu 
    const collapse = document.querySelector('.navbar-collapse');
    if (collapse?.classList.contains('show')) {
        collapse.classList.remove('show');
    }
});


// Scroll to Top button
document.getElementById('scrollTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Counter Animation
(function () {
    const counters = document.querySelectorAll('.counter');
    let started    = false;

    function runCounters() {
        counters.forEach(el => {
            const target   = parseInt(el.dataset.target, 10);
            const duration = 1800;
            const step     = target / (duration / 16);
            let current    = 0;

            const tick = () => {
                current += step;
                if (current < target) {
                    el.textContent = Math.floor(current);
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = target;
                }
            };

            requestAnimationFrame(tick);
        });
    }

    window.addEventListener('scroll', function check() {
        if (started) return;

        const statsEl = document.querySelector('.stats');
        if (!statsEl) return;

        const rect = statsEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            started = true;
            runCounters();
            window.removeEventListener('scroll', check);
        }
    }, { passive: true });
})();


// Program Detail Modal
function showProgramDetail(program) {
    const map = { tkj: 'tkjModal', tkr: 'tkrModal', akl: 'aklModal' };
    const id  = map[program];
    if (!id || typeof bootstrap === 'undefined') return;

    const modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
}


// Gallery: open full image on click
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const src = item.querySelector('img')?.src;
        if (src) window.open(src, '_blank');
    });
});
