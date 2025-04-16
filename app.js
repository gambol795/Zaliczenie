function toggleMenu() {
    const menu = document.querySelector('ul');
    menu.classList.toggle('active');
}

// Close menu when a nav link is clicked (for mobile)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.querySelector('ul');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});

