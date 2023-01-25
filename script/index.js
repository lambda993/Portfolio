function extendNavbar() {
    items = document.getElementById('nav-items')
    items.classList.toggle('extend-navbar')
}

document.getElementById('dropdown-button').addEventListener('click', extendNavbar)
