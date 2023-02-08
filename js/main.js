// Open and close nav bar menu on mobile
const navList = document.querySelector(".nav-list");
const mobileNavButton = document.querySelector("nav>button");
const menuIcon = document.querySelector(".menu_icon");
const closeIcon = document.querySelector(".close_icon");
const navLogo = document.querySelector(".logo")

mobileNavButton.addEventListener("click", () => {
    const visible = navList.getAttribute("data-visible");

    if (visible == "initial" || visible=="false") {
        navList.setAttribute("data-visible", "true");
        mobileNavButton.setAttribute("aria-expanded", "true");
        navLogo.classList.remove("fadeIn");
        navLogo.classList.add("fadeOut");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
    else if (visible == "true"){
        navList.setAttribute("data-visible", "false");
        mobileNavButton.setAttribute("aria-expanded", "false");
        navLogo.classList.remove("fadeOut");
        navLogo.classList.add("fadeIn");
        closeIcon.classList.add("hidden");
        menuIcon.classList.remove("hidden");
    }
    console.log(visible);
})

// Get year for copyright in footer.
document.getElementById("year").innerHTML = new Date().getFullYear();