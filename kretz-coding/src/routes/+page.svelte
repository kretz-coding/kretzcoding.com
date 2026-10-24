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
                    type="filled"
                    color="primary"
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
    <section class="companies-carousel">
        <div class="carousel-track">
            <div class="carousel-group">
                <img
                    src="/cannon-marketing.svg"
                    alt="Cannon Marketing logo"
                />
                <img src="/k9-korral.svg" alt="K9 Korral logo" />
                <img
                    src="/setapart-tax.svg"
                    alt="Setapart Tax logo"
                />
                <img
                    src="/ohio-belting.svg"
                    alt="Ohio Belting & Transmission logo"
                />
                <img
                    src="/wilmo-pickems.svg"
                    alt="Wilmo Pick 'Ems logo"
                />
            </div>
            <div class="carousel-group" aria-hidden="true">
                <img src="/cannon-marketing.svg" alt="" />
                <img src="/k9-korral.svg" alt="" />
                <img src="/setapart-tax.svg" alt="" />
                <img src="/ohio-belting.svg" alt="" />
                <img src="/wilmo-pickems.svg" alt="" />
            </div>
        </div>
    </section>
    <div class="services-container">
        <section class="services">
            <h2>Our four-phase digital approach</h2>
            <div class="card-container">
                <ServiceCard
                    phase="1"
                    ,
                    icon="/web-icon.svg"
                    title="Web design"
                    subtitle="BUILD - Your digital foundation"
                    body="We build a sleek, mobile-optimized website tailored to reflect your brand identity and capture audience intreset immediately."
                    button_href="/services/web-design"
                />
                <ServiceCard
                    phase="2"
                    ,
                    icon="/memory-icon.svg"
                    title="Hosting & maintenance"
                    subtitle="PROTECT - Speed & Security"
                    body="We keep your infrastructure safe, fast, and always accessible with enterprise-grade hosting, active monitoring, and routine maintenance."
                    button_href="/services/maintenance"
                />
                <ServiceCard
                    phase="3"
                    ,
                    icon="/analytics-icon.svg"
                    title="Traffic analysis"
                    subtitle="MEASURE — Data & Optimization"
                    body="We monitor site traffic, analyze visitor pathways, and uncover key metrics to continuously refine user experience and increase leads."
                    button_href="/services/analytics"
                />
                <ServiceCard
                    phase="4"
                    ,
                    icon="/reviews-icon.svg"
                    title="Social Media Marketing"
                    subtitle="GROW — Audience Acquisition"
                    body="We craft strategic social campaigns to attract new prospects, build online presence, and consistently direct targeted traffic back to your site."
                    button_href="/services/social-media"
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
    }

    .hero {
        display: grid;
        justify-content: center;
        gap: 2rem;
        background-color: #1d1d1d;
        color: var(--kc-light-blue);
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

    p {
        max-width: 40ch;
        padding-block-end: 1rem;
    }

    .companies-carousel {
        overflow: hidden;
        background-color: var(--kc-light-blue);
        border-top: 3px solid var(--kc-blue);
        border-bottom: 3px solid var(--kc-blue);
        padding-block: 1.5rem;
        white-space: nowrap;
        position: relative;

        mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );

        .carousel-track {
            display: flex;
            width: max-content;
            gap: 10rem;
            animation: scroll 120s linear infinite;
        }

        .carousel-track:hover {
            animation-play-state: paused;
        }

        .carousel-group {
            display: flex;
            align-items: center;
            gap: 10rem;
        }

        img {
            max-height: 3.5rem;
            object-fit: contain;
        }
    }

    .services-container {
        container: services / inline-size;
    }

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

    @keyframes scroll {
        to {
            transform: translateX(-50%);
        }
    }
</style>
