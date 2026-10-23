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
</style>
