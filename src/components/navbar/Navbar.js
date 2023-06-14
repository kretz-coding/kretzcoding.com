import "./navbar.css";
import KretzCodingLogo from "../../assets/images/Kretz-Coding-Logo-Dark.svg";
import Button from "../buttons/Button.js";

export default function Navbar() {
    return (
        <nav>
            <a className="logo-link" href="/" title="Kretz Coding logo">
                <img className="logo" alt="Kretz Coding logo" src={KretzCodingLogo} />
            </a>
            <ul className="list" data-visible="initial">
                <li className="item">
                    <a className="link active" href="/">Home</a>
                </li>
                <li className="item">
                    <a className="link" href="./services.html">Services</a>
                </li>
                <li className="item">
                    <a className="link" href="./about.html">About</a>
                </li>
                <li className="item">
                    <a className="link" href="./contact.html">Contact</a>
                </li>
                <Button classes={"button filled cta"} urlLink={"https://www.google.com"} text={"Get started"} />
            </ul>
            <button className="toggle-button" title="menu" aria-controls="list" aria-expanded="false" onClick={toggleMenu}>
                <span className="sr-only">Menu</span>
                <div className="menu_icon">
                    <svg height="2rem" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h33q.65 0 1.075.425Q42 33.85 42 34.5q0 .65-.425 1.075Q41.15 36 40.5 36Zm0-10.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5h33q.65 0 1.075.425Q42 23.35 42 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.5q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Z" />
                    </svg>
                </div>
                <div className="close_icon hidden">
                    <svg height="2rem" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                    </svg>
                </div>
            </button>
        </nav>
    );
}

function toggleMenu() {
    const navList = document.querySelector("nav .list");
    const navToggleButton = document.querySelector("nav .toggle-button");
    const menuIcon = document.querySelector(".menu_icon");
    const closeIcon = document.querySelector(".close_icon");
    const navLogo = document.querySelector("nav .logo");
    const visibility = navList.getAttribute("data-visible");

    if (visibility === "initial" || visibility === "false") {
        navList.setAttribute("data-visible", "true");
        navToggleButton.setAttribute("aria-expanded", "true");
        navLogo.classList.remove("fadeIn");
        navLogo.classList.add("fadeOut");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
    else if (visibility === "true"){
        navList.setAttribute("data-visible", "false");
        navToggleButton.setAttribute("aria-expanded", "false");
        navLogo.classList.remove("fadeOut");
        navLogo.classList.add("fadeIn");
        closeIcon.classList.add("hidden");
        menuIcon.classList.remove("hidden");
    }
}