// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Lucide icons
    lucide.createIcons();
    
    // Scroll to top functionality
    const scrollTopButton = document.getElementById('scrollTop');
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for anchor links
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
    
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-content, .gallery-grid, .services-grid, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add loading state to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.error('Failed to load image:', this.src);
        });
    });
    
    // Add hover effects to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click-to-call functionality for phone numbers
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay to show the user the click was registered
            setTimeout(() => {
                // The actual call will be handled by the href
            }, 100);
        });
    });
    
    // Add WhatsApp tracking (optional - for analytics)
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp link clicked');
        });
    });
    
    // Add Instagram tracking (optional - for analytics)
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    instagramLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Instagram link clicked');
        });
    });
    
    // Prevent default behavior for sticky WhatsApp button on mobile
    const stickyWhatsApp = document.querySelector('.sticky-whatsapp');
    if (stickyWhatsApp) {
        stickyWhatsApp.addEventListener('click', function(e) {
            // Add a small delay to show the user the click was registered
            setTimeout(() => {
                // The actual WhatsApp redirect will be handled by the href
            }, 100);
        });
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close any modals (if added later)
        if (e.key === 'Escape') {
            // Handle escape key functionality
        }
        
        // Enter key on focusable elements
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('cta-button')) {
                focusedElement.click();
            }
        }
    });
    
    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            // Handle swipe gestures if needed
            if (diff > 0) {
                // Swipe up
                console.log('Swipe up detected');
            } else {
                // Swipe down
                console.log('Swipe down detected');
            }
        }
    }
    
    // Add preload for critical images
    function preloadImages() {
        const criticalImages = [
            'https://i.imgur.com/owCDXm4.png',
            'https://i.imgur.com/TeFj0D7.png',
            'https://i.imgur.com/P5U4bFh.png'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Preload critical images
    preloadImages();
    
    // Add service worker registration (optional - for PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // You can register a service worker here for offline functionality
            // navigator.serviceWorker.register('/sw.js');
        });
    }
    
    // Add meta viewport adjustment for mobile
    function adjustViewport() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            // Ensure proper scaling on mobile devices
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    }
    
    // Adjust viewport on load
    adjustViewport();
    
    // Handle orientation change on mobile
    window.addEventListener('orientationchange', function() {
        setTimeout(adjustViewport, 100);
    });
    
    console.log('Balila Barber landing page loaded successfully!');
}); 