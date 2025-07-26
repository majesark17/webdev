document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Article filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');
    
    if (filterButtons.length && articleCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                articleCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = nameInput.nextElementSibling;
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = emailInput.nextElementSibling;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Validate subject
            const subjectInput = document.getElementById('subject');
            const subjectError = subjectInput.nextElementSibling;
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
                isValid = false;
            } else {
                subjectError.textContent = '';
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = messageInput.nextElementSibling;
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Thank you for your message! I appreciate your thoughts and will respond if appropriate.');
                contactForm.reset();
            }
        });
    }
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() !== '') {
                alert('Thank you for subscribing to The Free Mind newsletter!');
                emailInput.value = '';
            }
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.post-card, .value-card, .contact-form-container, .info-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.post-card, .value-card, .contact-form-container, .info-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on page load
    animateOnScroll();
});