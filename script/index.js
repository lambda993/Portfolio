function extendNavbar() {
    let items = document.getElementById('nav-items')
    items.classList.toggle('extend-navbar')
}

document
    .querySelector('.dropdown-button')
    .addEventListener('click', extendNavbar)
