<script>
    import Button from "#lib/components/Button.svelte";
    import ServiceCard from "#lib/components/Service-Card.svelte";
</script>

<main>
    <div class="hero-container">
        <section class="hero">
            <div class="left">
                <h1>Your website. <br /> Always evolving.</h1>
                <p>
                    Ensuring your website keeps up with the changing needs of your
                    business.
                </p>
                <Button
                    label="Upgrade now"
                    href="/contact"
                    style="fill"
                    variant="accent"
                    isDisabled={false}
                    size="m"
                />
            </div>
            <div class="right">
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
            background-color: #1d1d1d;
            color: var(--kc-light-blue);

            p {
                max-width: 40ch;
                padding-block-end: 1rem;
            }

            h1 {
                font-size: 3rem;
                font-weight: 700;
                line-height: 1.2;
            }

            .left {
                padding: 3rem;
                justify-items: center;
            }
        }

        @container hero (min-width: 768px) {
            .hero {
                grid-template-columns: 2fr 3fr;
                justify-content: center;
                align-items: center;
                gap: 4rem;
                padding-inline-start: 4rem;

                .left {
                    justify-self: start;
                }

                .right {
                    background-image: url("/wavy-background.svg");
                    height: 100%;
                    align-content: center;
                }
            }
        }
    }



    .services-container {
        container: services / inline-size;

        .services {
            background-color: #1d1d1d;
            color: var(--kc-light-blue);
            display: grid;
            padding: 4rem 2rem;
        }

        .card-container {
            display: grid;
            gap: 2rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        @container services (min-width: 768px) {
            .card-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        @container services (min-width: 1200px) {
            .card-container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
</style>
