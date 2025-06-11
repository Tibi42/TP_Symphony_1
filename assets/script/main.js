// Gestion du menu burger pour mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle de la navigation
    nav.classList.toggle('nav-active');
    
    // Animation des liens
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Animation du burger
    burger.classList.toggle('toggle');
});

// Animation au scroll
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Sélectionner tous les éléments à animer
document.querySelectorAll('.mission-card, .project-card').forEach(el => observer.observe(el));

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fermer le menu mobile si ouvert
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
    try {
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simuler un délai d'envoi
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Réinitialiser le formulaire
        contactForm.reset();
        alert('Message envoyé avec succès !');
        
        submitBtn.textContent = 'Envoyer';
        submitBtn.disabled = false;
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
    }
});

// Animation du header au scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll vers le bas
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll vers le haut
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
}); 