<div class="footer-container">
    <footer>
        <div class="left">
            <img
                class="logo"
                src="/src/lib/assets/logo.svg"
                alt="Kretz Coding logo"
            />
            <h3>Kretz Coding</h3>
            <p class="desktop-only">
                We bring beautiful designs and strategic content together to
                grow your business.
            </p>
        </div>
        <div class="right">
            <div class="browse">
                <h3>Browse</h3>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
            <div class="services">
                <h3>Services</h3>
                <a href="/">Web development</a>
                <a href="/about">Web hosting & maintenance</a>
                <a href="/projects">Social media marketing</a>
                <a href="/services">Software development</a>
            </div>
            <div class="contact">
                <h3>Contact</h3>
                <div class="location">
                    <img
                        src="/src/lib/assets/location-icon.svg"
                        alt="Location icon"
                    />
                    <p>Warner Robins, GA</p>
                </div>
                <div class="phone">
                    <img
                        src="/src/lib/assets/phone-icon.svg"
                        alt="Phone icon"
                    />
                    <a href="tel:(123) 456-7890">(123) 456-7890</a>
                </div>
                <div class="email">
                    <img
                        src="/src/lib/assets/email-icon.svg"
                        alt="Email icon"
                    />
                    <a href="mailto:info@kretzcoding.com"
                        >info@kretzcoding.com</a
                    >
                </div>
                <div class="social-media">
                    <a
                        href="https://www.facebook.com/kretzcoding"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/src/lib/assets/facebook-icon.svg"
                            alt="Facebook icon"
                            class="social-media-icon"
                        />
                    </a>
                    <a
                        href="https://www.github.com/kretzcoding"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="social-media-icon"
                            src="/src/lib/assets/github-icon.svg"
                            alt="GitHub icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/kretzcoding"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="social-media-icon linkedin-icon"
                            src="/src/lib/assets/linkedin-icon.svg"
                            alt="LinkedIn icon"
                        />
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>
                Copyright &copy; {new Date().getFullYear()} Kretz Coding. All rights
                reserved.
            </p>
        </div>
    </footer>
</div>

<style>
    div.footer-container {
        container-type: inline-size;
        padding: 0;
        margin: 0;
    }

    footer {
        background-color: var(--kc-gray);
        color: var(--kc-white);
        display: grid;
        padding: 2rem 1rem;
        justify-items: center;
        gap: 2rem;
    }

    .left {
        display: grid;
        justify-items: center;
    }

    .right {
        display: grid;
        justify-items: center;
        gap: 1.5rem;

        h3 {
            margin-block: 0.5rem;
        }
    }

    .browse,
    .services {
        display: grid;
        justify-items: center;
        margin-bottom: 1rem;
        gap: 0.75rem;
    }

    .contact {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
    }

    .location,
    .phone,
    .email {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.5rem;

        p {
            margin: 0;
        }
    }

    a {
        color: --var(--kc-white);
    }

    .social-media {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 1rem;
        align-items: center;
        margin-block-start: 2rem;
    }

    .social-media-icon {
        aspect-ratio: 1/1;
        width: 2rem;
    }

    .linkedin-icon {
        padding: 0.25rem;
    }

    .copyright {
        text-align: center;
        margin-block-start: 1rem;
        font-size: 0.75rem;
    }

    .desktop-only {
        display: none;
    }

    @container (min-width: 768px) {
        footer {
            grid-template-columns: 2fr 3fr;
            justify-items: center;
            padding-inline: 4rem;
        }

        .left {
            justify-items: start;
            align-content: center;

            p {
                max-width: 20rem;
            }
        }

        .right {
            grid-template-columns: repeat(3, 1fr);
            justify-content: right;
        }

        .browse,
        .services,
        .contact {
            justify-items: start;
        }

        .social-media {
            margin-block-start: 0;
            justify-self: center;
        }

        .copyright {
            grid-column: span 2;
            justify-self: center;
        }

        .desktop-only {
            display: block;
        }
    }
</style>
