document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for header height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate__animated:not(.animate__fadeIn)');
    
    // Initial check for elements in viewport when page loads
    checkVisibility(animateElements);
    
    // Check elements visibility on scroll
    window.addEventListener('scroll', function() {
        checkVisibility(animateElements);
    });
    
    function checkVisibility(elements) {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Adjust this value to change when element appears
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate__animated');
                
                // Check for pre-set animation class
                if (element.classList.contains('animate__fadeInUp')) {
                    element.style.visibility = 'visible';
                } else {
                    element.classList.add('animate__fadeIn');
                }
            }
        });
    }
    
    // Mobile Navigation Toggle (for responsive design)
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Cards hover effect enhancement
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

