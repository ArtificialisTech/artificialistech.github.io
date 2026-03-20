import translations from './i18n.js';

document.addEventListener("DOMContentLoaded", () => {
    // --- Language Switcher ---
    const langSelect = document.getElementById('langSelect');
    
    const setLanguage = (lang) => {
        if (!translations[lang]) return;
        
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
        
        localStorage.setItem("kira_lang", lang);
    };

    // Initialize language
    const savedLang = localStorage.getItem("kira_lang") || 'it';
    langSelect.value = savedLang;
    setLanguage(savedLang);

    langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // --- Sticky Navbar ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Optional: unobserve if we only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-up').forEach(el => {
        observer.observe(el);
    });
});
