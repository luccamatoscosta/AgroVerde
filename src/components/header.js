export function closeMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuButton = document.querySelector(".menu-toggle");

    if (!navLinks || !menuButton) {
        return;
    }

    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
}