// Main JavaScript for Success & Unity School Website
document.addEventListener('DOMContentLoaded', function () {
    // ===== Navbar Scroll Effect =====
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // ===== Highlight Active Nav Link =====
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.endsWith('/') || currentPath.endsWith('index.html');

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        const isLinkHome = ['/', './', 'index.html', '/index.html'].includes(linkPath);

        const isActive = (isHome && isLinkHome) ||
            (!isHome && linkPath !== '/' && linkPath !== './' && currentPath.endsWith(linkPath));

        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Hero Carousel Auto-play (Home Page) =====
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            wrap: true
        });

        // Gallery item z-index on hover (for overlay stacking)
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => item.style.zIndex = '10');
            item.addEventListener('mouseleave', () => item.style.zIndex = '1');
        });
    }

    // ===== Fade-in Animation on Scroll =====
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 150) {
                el.classList.add('visible');
            }
        });
    };
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);

    // ===== Statistics Counter Animation =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        statNumbers.forEach(stat => {
            if (stat.classList.contains('animated')) return;
            if (stat.getBoundingClientRect().top < window.innerHeight - 100) {
                stat.classList.add('animated');
                const targetText = stat.getAttribute('data-target') || stat.textContent.trim();
                const target = parseInt(targetText.replace(/\D/g, '')) || 0;
                const suffix = targetText.replace(/[0-9]/g, '');
                let current = 0;
                const increment = Math.ceil(target / 80);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, 20);
            }
        });
    };
    if (statNumbers.length > 0) {
        window.addEventListener('scroll', animateStats);
        animateStats(); // Initial check
    }

    // ===== Gallery & News Filtering (Shared Logic) =====
    function setupFilter(buttonSelector, itemSelector) {
        const buttons = document.querySelectorAll(buttonSelector);
        const items = document.querySelectorAll(itemSelector);

        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter') || 'all';

                items.forEach(item => {
                    const category = item.getAttribute('data-category') || 'all';
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    setupFilter('.news-filter-btn', '.news-item');
    setupFilter('.gallery-filter-btn', '.masonry-item, .gallery-grid .gallery-item');

    // ===== Lightbox Modal =====
    const lightboxModal = document.getElementById('lightboxModal');
    if (lightboxModal) {
        lightboxModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img');
            const title = button.getAttribute('data-title') || '';
            const category = button.getAttribute('data-category') || '';
            const description = button.querySelector('.small')?.textContent || '';

            const modalImg = document.getElementById('lightboxImage');
            const modalTitle = document.getElementById('lightboxTitle');
            const modalCat = document.getElementById('lightboxCategory');
            const modalDesc = document.getElementById('lightboxDescription');

            if (modalImg) {
                modalImg.src = imgSrc;
                modalImg.alt = title;
            }
            if (modalTitle) modalTitle.textContent = title;
            if (modalCat) modalCat.textContent = category;
            if (modalDesc) modalDesc.textContent = description;

            // Download button
            const downloadBtn = document.getElementById('downloadBtn');
            if (downloadBtn) {
                downloadBtn.onclick = () => {
                    const a = document.createElement('a');
                    a.href = imgSrc;
                    a.download = title.replace(/\s+/g, '-').toLowerCase() + '.jpg';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                };
            }
        });
    }

    // ===== YouTube Video Modal =====
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    document.querySelectorAll('.video-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const videoId = btn.getAttribute('data-video-id');
            if (videoPlayer && videoId) {
                videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                new bootstrap.Modal(videoModal).show();
            }
        });
    });

    if (videoModal) {
        videoModal.addEventListener('hidden.bs.modal', () => {
            if (videoPlayer) videoPlayer.src = '';
        });
    }

    // ===== Contact Form Submission (Demo) =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            console.log('Form data:', Object.fromEntries(new FormData(this)));
            this.reset();
        });
    }

    // ===== Back to Top Button =====
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'btn btn-primary back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; z-index: 1050;
        width: 50px; height: 50px; border-radius: 50%; display: none;
        align-items: center; justify-content: center; font-size: 1.5rem;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Form Validation (Basic Required Fields) =====
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (e) {
            let valid = true;
            this.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            if (!valid) e.preventDefault();
        });
    });

    // ===== Debounced Scroll Handler =====
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    window.addEventListener('scroll', debounce(() => {
        fadeInOnScroll();
        animateStats();
    }, 10));
});