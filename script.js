// ===================== DROPDOWN MENU =====================
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

function closeMenu() {
    dropdownMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
}

function openMenu() {
    dropdownMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
}

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
});

// Close the menu when a link inside it is clicked
dropdownMenu.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', closeMenu);
});

// Close the menu when clicking anywhere outside it
document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== menuToggle) {
        closeMenu();
    }
});

// Close the menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});