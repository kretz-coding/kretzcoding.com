// Open and close nav bar menu on mobile
function toggleMenu() {
    var element = document.getElementById("mobile-nav-menu");
    element.classList.toggle("hidden");
}

// Get year for copyright in footer.
document.getElementById("year").innerHTML = new Date().getFullYear();