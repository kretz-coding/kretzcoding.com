// Open and close nav bar menu on mobile
const navList = document.querySelector("nav .list");
const navToggleButton = document.querySelector("nav .toggle-button");
const menuIcon = document.querySelector(".menu_icon");
const closeIcon = document.querySelector(".close_icon");
const navLogo = document.querySelector("nav .logo")

navToggleButton.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");

    if (visibility == "initial" || visibility=="false") {
        navList.setAttribute("data-visible", "true");
        navToggleButton.setAttribute("aria-expanded", "true");
        navLogo.classList.remove("fadeIn");
        navLogo.classList.add("fadeOut");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
    else if (visibility == "true"){
        navList.setAttribute("data-visible", "false");
        navToggleButton.setAttribute("aria-expanded", "false");
        navLogo.classList.remove("fadeOut");
        navLogo.classList.add("fadeIn");
        closeIcon.classList.add("hidden");
        menuIcon.classList.remove("hidden");
    }
})

// Get year for copyright in footer.
document.getElementById("year").innerHTML = new Date().getFullYear();
