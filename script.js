// ========================================
// Smooth Scroll Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Navbar Show/Hide on Scroll
// ========================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let scrollThreshold = 100;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger stat animation when stats section is visible
            if (entry.target.classList.contains('stat-card')) {
                animateStatNumber(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll('.section, .stat-card, .manifesto-card, .benefit-card, .timeline-item');
elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Animated Statistics Counter
// ========================================
const animatedStats = new Set();

function animateStatNumber(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    const target = parseInt(numberElement.getAttribute('data-target'));

    // Prevent re-animation
    if (animatedStats.has(numberElement)) return;
    animatedStats.add(numberElement);

    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            numberElement.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            numberElement.textContent = target;
        }
    };

    updateCounter();
}

// ========================================
// Form Validation and Submission
// ========================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        type: document.getElementById('type').value,
        message: document.getElementById('message').value.trim()
    };

    // Basic validation
    if (!formData.name || !formData.email) {
        showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Veuillez entrer une adresse email valide.', 'error');
        return;
    }

    // Simulate form submission (replace with actual API call)
    try {
        // In production, replace this with actual API endpoint
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

        // For now, simulate success
        await new Promise(resolve => setTimeout(resolve, 1000));

        showFormMessage('Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.', 'success');
        contactForm.reset();

        // Log to console for now (remove in production)
        console.log('Form submitted:', formData);

    } catch (error) {
        showFormMessage('Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
        console.error('Form submission error:', error);
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// Real-time Form Field Validation
// ========================================
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = '';
    }
});

emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = '';
});

// ========================================
// Add hover effects to timeline items
// ========================================
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    const content = item.querySelector('.timeline-content');
    const dot = item.querySelector('.timeline-dot');

    content.addEventListener('mouseenter', () => {
        dot.style.transform = 'scale(1.3)';
        dot.style.background = '#FFD700';
    });

    content.addEventListener('mouseleave', () => {
        dot.style.transform = 'scale(1)';
        dot.style.background = '#0066FF';
    });
});

// ========================================
// Performance: Debounce scroll events
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Add parallax effect to hero background
// ========================================
const heroBackground = document.querySelector('.hero-background');
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}, 10));

// ========================================
// Accessibility: Focus management
// ========================================
document.addEventListener('keydown', (e) => {
    // Add keyboard navigation support
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('IINE Website initialized');

    // Add smooth reveal to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========================================
// Analytics placeholder
// ========================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Replace with your analytics solution (Google Analytics, Matomo, etc.)
    console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('Engagement', 'Click', 'CTA Button');
    });
});

// Track navigation clicks
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Navigation', 'Click', link.textContent);
    });
});
