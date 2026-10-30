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
                <div class="testimonial">
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
                align-self: center;
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

    }
</style>
