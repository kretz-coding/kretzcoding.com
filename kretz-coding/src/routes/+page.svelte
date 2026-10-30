<script>
    import Button from "#lib/components/Button.svelte";
    import ServiceCard from "#lib/components/Service-Card.svelte";
</script>

<main>
    <div class="hero-container">
        <section class="hero">
            <div class="cta">
                <h1>Your website. <br /> Always evolving.</h1>
                <p>
                    Ensuring your website keeps up with the changing needs of your
                    business.
                </p>
                <div class="button-container">
                    <Button
                            label="Upgrade now"
                            href="/contact"
                            style="fill"
                            variant="accent"
                            size="m"
                    />
                </div>
            </div>
            <div class="animation">
                <img
                    class="animation"
                    src="/animation.svg"
                    alt="Animation of a responsive web design wireframe"
                />
            </div>
        </section>
    </div>
    <div class="services-container">
        <section class="services">
            <div class="text-container">
                <h2>Built for your business. Designed for growth.</h2>
                <p>Everything you need to create a stronger online presence, all in one place.</p>
            </div>
            <div class="card-container">
                <ServiceCard
                    phase="1"
                    icon="/web-icon.svg"
                    title="Web design"
                    subtitle="Stand out online"
                    body="Modern, custom websites designed to make your brand shine, engage your audience, and turn visitors into customers."
                    button_href="/services/web-design"
                />
                <ServiceCard
                    phase="2"
                    icon="/memory-icon.svg"
                    title="Maintenance & Hosting"
                    subtitle="Stay secure. Stay online."
                    body="Fast, reliable hosting and ongoing website care to keep everything running smoothly behind the scenes."
                    button_href="/services/maintenance"
                />
                <ServiceCard
                    phase="3"
                    icon="/analytics-icon.svg"
                    title="Analytics & Marketing"
                    subtitle="Don't just launch. Grow."
                    body="Analytics and marketing insights that help you understand your audience, improve performance, and reach your business goals."
                    button_href="/services/grow"
                />
            </div>
        </section>

    </div>
    <div class="clients-container">
        <section class="clients">
            <h2>Trusted by local businesses like yours</h2>
            <div class="testimonials">
                <div id="k9-korral" class="testimonial">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Mark Shambor</p>
                            <p class="position">Owner, K9 Korral</p>
                        </div>
                        <img class="logo" src="/k9-korral.svg" alt="K9 Korral logo" />
                    </div>
                </div>
                <div class="testimonial">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Ben Cannon</p>
                            <p class="position">Owner, Cannon Marketing</p>
                        </div>
                        <img class="logo" src="/cannon-marketing.svg" alt="Cannon Marketing logo" />
                    </div>
                </div>
                <div class="testimonial">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Joe Wilmoth</p>
                            <p class="position">Owner, Wilmo's Pick 'Ems</p>
                        </div>
                        <img class="logo" src="/wilmo-pickems.svg" alt="Wilmo's Pick 'Ems logo" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="about-container">
        <section class="about">
            <div class="info">
                <img class="profile-picture" src="/kevin.jpeg" alt="Kevin">
                <h2>Web design, plus the nerdy stuff.</h2>
                <h3>I'm Kevin, a solo web designer since 2014 with a background in IT.</h3>
            </div>
            <div class="tools+skills">
                <div class="tools">
                    <h4>I build with</h4>
                    <ul class="tools">
                        <li class="tag">WordPress</li>
                        <li class="tag">Shopify</li>
                        <li class="tag">Svelte</li>
                        <li class="tag">HTML / CSS</li>
                        <li class="tag">React</li>
                        <li class="tag">JavaScript</li>
                    </ul>
                </div>
                <div class="skills">
                    <h4>I also handle</h4>
                    <ul class="skills">
                        <li class="tag">Domains</li>
                        <li class="tag">Hosting</li>
                        <li class="tag">DNS</li>
                        <li class="tag">Email</li>
                    </ul>
                </div>
            </div>
            <div class="buttons">
                <Button
                        label="Start a project"
                        href="/contact"
                        style="fill"
                        variant="accent"
                        size="m"
                />
                <a class="learn-more" href="/about">More about me <img src="/chevron-right.svg"></a>
            </div>
        </section>
    </div>
</main>

<style>
    main {
        display: grid;
        container-type: inline-size;
    }
    
    .hero-container {
        container: hero / inline-size;

        .hero {
            display: grid;
            justify-content: center;
            gap: 2rem;
            background-color: var(--surface-container-low);
            color: var(--kc-light-blue);
            padding: 4rem 2rem;

            p {
                padding-block: 2rem;
            }

            .cta {
                display: grid;

                .button-container {
                    justify-self: center;
                }
            }
        }

        @container hero (min-width: 768px) {
            .hero {
                grid-template-columns: 2fr 3fr;
                justify-content: center;
                align-items: center;
                gap: 4rem;
                padding: 0 0 0 4rem;

                .cta {
                    justify-self: start;
                    padding: 3rem;

                    .button-container {
                        justify-self: start;
                    }
                }

                .animation {
                    background-image: url("/wavy-background.svg");
                    height: 100%;
                    align-content: center;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .services-container {
        container: services / inline-size;

        .services {
            background-color: var(--primary-container);
            color: var(--kc-light-blue);
            display: grid;
            padding: 4rem 2rem;
        }

        .card-container {
            display: grid;
            gap: 2rem;
        }

        p {
            margin-block: 1rem 3rem;
        }

        @container services (min-width: 768px) {
            .services {
                padding: 4rem ;
            }

            .card-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        @container services (min-width: 1200px) {
            .card-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }

    .clients-container {
        container: clients / inline-size;

        .clients {
            display: grid;
            gap: 3rem;

            img {
                max-width: 10rem;
                max-height: 5rem;
                justify-self: end;
                align-self: end;
            }

            .testimonials {
                display: grid;
                gap: 2rem;
            }

            .testimonial {
                display: grid;
                padding: 2rem;
                border-radius: 3rem;
                gap: 1rem;
                border-radius: 1.5rem;
                background-color: var(--surface-bright);
            }
            .quote {
                margin-block-end: 1rem;
                font-size: 1.5rem;
            }

            .company-info {
                display: grid;
                grid-auto-flow: column;
            }

            .person-info {
                align-self: end;
            }

            .name {
                font-weight: 700;
            }
        }

        @container clients (min-width: 768px) {
            .clients {
                padding: 4rem ;
            }

            .testimonials {
                grid-template-columns: 1fr 1fr;
            }
        }

        @container clients (min-width: 1200px) {
            #k9-korral {
                grid-row: span 2;
            }
        }
    }

    .about-container{
        container: about / inline-size;

        .about {
            background-color: var(--primary-container);
            display: grid;
        }

        .info {
            display: grid;
        }

        .profile-picture{
            max-width: 10rem;
            border-radius: 100%;
            justify-self: center;
            box-shadow: var(--emphasized);
        }

        h2 {
            margin-block: 2rem 1rem;
        }
        h3 {
            font-weight: 400;
        }

        h4 {
            text-transform: uppercase;
            justify-self: center;
            margin-block: 2rem 1rem;
        }

        ul {
            list-style: none;
            display: grid;
        }

        ul.tools {
            grid-template-columns: repeat(3, auto);
            width: fit-content;
            justify-self: center;
            gap: 1rem;
        }
        ul.skills {
            grid-template-columns: repeat(4, auto);
            width: fit-content;
            justify-self: center;
            gap: 1rem;
        }

        .tag {
            background-color: var(--primary);
            color: var(--on-primary);
            width: fit-content;
            border-radius: 0.5rem;
            padding: 0.25rem 0.75rem;
            font-weight: 500;
            align-content: center;
            justify-content: center;
            justify-self: center;
            align-self: center;
        }

        .buttons {
            padding-block-start: 5rem;
            display: grid;
            grid-auto-flow: column;
            justify-self: center;
            gap: 1rem;
        }

        .learn-more {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            justify-items: center;
            width: fit-content;
            color: var(--on-surface);
            font-weight: 500;
        }

        @container about (min-width: 768px) {
            .about {
                padding: 4rem ;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
            }

            .about > * {
                padding-inline: 2rem;
                align-self: center;
            }

            .info {
                border-right: 1px solid var(--outline-variant);
                padding-inline: 1rem;
                text-align: center;
                width: 100%;
            }

            .buttons {
                align-items: center;
                padding: 0;
            }
        }
    }
</style>
