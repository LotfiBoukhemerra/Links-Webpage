 // Theme Toggle with smooth transition
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const body = document.body;

themeToggle.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") !== "light";
    body.setAttribute("data-theme", isDark ? "light" : "dark");
    themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    lucide.createIcons();
    localStorage.setItem("theme", isDark ? "light" : "dark");

    // Add animation flash
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.backgroundColor = "white";
    flash.style.opacity = "0";
    flash.style.transition = "opacity 0.3s ease";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "1000";
    document.body.appendChild(flash);
    
    requestAnimationFrame(() => {
        flash.style.opacity = "0.1";
        setTimeout(() => {
            flash.style.opacity = "0";
            setTimeout(() => flash.remove(), 300);
        }, 50);
    });
});

// Check saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);
themeIcon.setAttribute("data-lucide", savedTheme === "dark" ? "moon" : "sun");

// Enhanced Typing Animation with smooth transitions
const headline = document.querySelector(".headline");
const roles = ["Software Dev", "Graphic Designer", "Author"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function type() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex < currentRole.length) {
        headline.innerHTML = currentRole.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        headline.innerHTML = currentRole.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
        charIndex--;
    } else if (!isWaiting) {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
            type();
        }, isDeleting ? 500 : 2000);
        return;
    }
    
    setTimeout(type, speed);
}

// Add smooth entrance animations
document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".avatar");
    const socialLinks = document.querySelectorAll(".social-link");
    
    // Animate avatar entrance
    avatar.style.opacity = "0";
    avatar.style.transform = "scale(0.5)";
    setTimeout(() => {
        avatar.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
        avatar.style.opacity = "1";
        avatar.style.transform = "scale(1)";
    }, 300);
    
    // Animate social links entrance
    socialLinks.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        setTimeout(() => {
            link.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 500 + index * 100);
    });
    
    // Start typing animation after entrance animations
    setTimeout(type, 1000);
});

// Initialize Lucide icons
lucide.createIcons();