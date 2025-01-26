 // Theme Toggle
 const themeToggle = document.querySelector(".theme-toggle");
 const themeIcon = document.querySelector(".theme-icon");
 const body = document.body;

 themeToggle.addEventListener("click", () => {
     const isDark = body.getAttribute("data-theme") !== "light";
     body.setAttribute("data-theme", isDark ? "light" : "dark");
     themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
     lucide.createIcons();
     localStorage.setItem("theme", isDark ? "light" : "dark");
 });

 // Check saved theme
 const savedTheme = localStorage.getItem("theme") || "dark";
 body.setAttribute("data-theme", savedTheme);
 themeIcon.setAttribute(
     "data-lucide",
     savedTheme === "dark" ? "moon" : "sun"
 );

 // Typing Animation
 const headline = document.querySelector(".headline");
 const roles = ["Software Dev", "Graphic Designer", "Author"];
 let roleIndex = 0;
 let charIndex = 0;

 function type() {
     if (charIndex < roles[roleIndex].length) {
         headline.innerHTML =
             roles[roleIndex].substring(0, charIndex + 1) +
             '<span class="cursor">|</span>';
         charIndex++;
         setTimeout(type, 100);
     } else {
         setTimeout(erase, 2000);
     }
 }

 function erase() {
     if (charIndex > 0) {
         headline.innerHTML =
             roles[roleIndex].substring(0, charIndex - 1) +
             '<span class="cursor">|</span>';
         charIndex--;
         setTimeout(erase, 50);
     } else {
         roleIndex = (roleIndex + 1) % roles.length;
         setTimeout(type, 500);
     }
 }

 // Initialize
 lucide.createIcons();
 type();