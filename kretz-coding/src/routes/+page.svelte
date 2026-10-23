<script>
    import Button from "#lib/components/Button.svelte";
</script>

<main>
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
                src="/src/lib/assets/animation.svg"
                alt="Animation of a responsive web design wireframe"
            />
        </div>
    </section>
    <section class="companies-carousel">
        <div class="carousel-track">
            <div class="carousel-group">
                <img src="/src/lib/assets/cannon-marketing.svg" alt="Cannon Marketing logo" />
                <img src="/src/lib/assets/k9-korral.svg" alt="K9 Korral logo" />
                <img src="/src/lib/assets/setapart-tax.svg" alt="Setapart Tax logo" />
                <img src="/src/lib/assets/ohio-belting.svg" alt="Ohio Belting & Transmission logo" />
                <img src="/src/lib/assets/wilmo-pickems.svg" alt="Wilmo Pick 'Ems logo" />
            </div>
            <div class="carousel-group" aria-hidden="true">
                <img src="/src/lib/assets/cannon-marketing.svg" alt="" />
                <img src="/src/lib/assets/k9-korral.svg" alt="" />
                <img src="/src/lib/assets/setapart-tax.svg" alt="" />
                <img src="/src/lib/assets/ohio-belting.svg" alt="" />
                <img src="/src/lib/assets/wilmo-pickems.svg" alt="" />
            </div>
        </div>
    </section>
    <section class="services">

    </section>
</main>

<style>
    main {
        display: grid;
        container-type: inline-size;
    }

    .hero {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 2rem;
        background-color: #1d1d1d;
        color: white;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
    }

    .left {
        padding: 3rem 3rem 0;
        justify-items: center;
    }
    
    p {
        max-width: 40ch;
        padding-block-end: 1rem;
    }

    @container (min-width: 768px) {
        .hero {
            grid-template-columns: 2fr 3fr;
            justify-content: center;
            align-items: center;
            gap: 4rem;
            padding-inline-start: 4rem;
        }

        .left {
            justify-self: start;
        }

        .right {
            background-image: url("/src/lib/assets/wavy-background.svg");
            background-size: cover;
        }
    }

    
    .companies-carousel {
        overflow: hidden;
        background-color: var(--kc-light-blue);
        border-top: 3px solid var(--kc-blue);
        border-bottom: 3px solid var(--kc-blue);
        padding-block: 1.5rem;
        white-space: nowrap;
        position: relative;

        /* Optional: Fades out the edges for a polished look */
        mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
    }

    .carousel-track {
        display: flex;
        width: max-content;
        gap: 20rem;
        animation: scroll 120s linear infinite;
    }

    .carousel-track:hover {
        animation-play-state: paused;
    }

    .carousel-group {
        display: flex;
        align-items: center;
        gap: 20rem;
    }

    .companies-carousel img {
        max-height: 3.5rem;
        object-fit: contain;
    }

    @keyframes scroll {
        to {
            transform: translateX(-50%);
        }
    }
</style>