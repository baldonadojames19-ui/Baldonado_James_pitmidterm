// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjusts for your fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// 2. Contact Form "Fake" Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents the page from refreshing
        
        // Get the name from the input
        const name = this.querySelector('input[type="text"]').value;
        
        // Show a "Fire" success message
        alert(`Thanks for reaching out, ${name}! Your message has been "sent" (This is a demo for your BSIT project).`);
        
        this.reset(); // Clears the form after "sending"
    });
}

// 3. Welcome Prompt & Dark Mode Logic
window.addEventListener('DOMContentLoaded', () => {
    
    // --- WELCOME PROMPT ---
    setTimeout(() => {
        let visitorName = prompt("Welcome! Please enter your name:");
        if (visitorName && visitorName.trim() !== "") {
            const visitorSpan = document.getElementById('visitor-name');
            if (visitorSpan) {
                visitorSpan.textContent = visitorName.trim();
            }
        }
    }, 500);

    // Dynamic Time Greeting
    let hour = new Date().getHours();
    let greetingText = (hour < 12) ? "Good morning" : (hour < 18) ? "Good afternoon" : "Good evening";
    
    const timeSpan = document.getElementById('time-greeting');
    if (timeSpan) {
        timeSpan.textContent = greetingText;
    }

    // Set current year in footer
    const yearDisplay = document.getElementById('current-year');
    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }

    // --- DARK MODE TOGGLE (Vanilla JS) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggleBtn) {
        const icon = themeToggleBtn.querySelector('i'); // Get the moon icon

        // Check if user turned on dark mode previously
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun'); // Change to sun
            }
        }

        // Click event to toggle
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                // Currently Dark Mode
                localStorage.setItem('theme', 'dark');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            } else {
                // Currently Light Mode
                localStorage.setItem('theme', 'light');
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        });
    }
});