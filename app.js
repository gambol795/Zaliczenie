function toggleMenu() {
    const menu = document.querySelector('ul');
    menu.classList.toggle('active');
}

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
