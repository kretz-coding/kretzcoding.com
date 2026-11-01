<script>
    import Button from "#lib/components/Button.svelte";
    import ServiceCard from "#lib/components/Service-Card.svelte";
</script>
<main>
    <div class="hero-container">
        <section class="hero">
            <div class="content">
                <h2>About</h2>
                <h1>Helping small businesses reach big audiences.</h1>
                <p>I'm a one-person web design company in Warner Robins, Georgia. When you work with Kretz Coding, I'll support you from the first conversation to long after launch.</p>
                <Button
                        href="/contact"
                        label="Let's get started"
                        size="m"
                        style="fill"
                        variant="accent"
                />
            </div>
            <div class="img">
                <img src="/about-hero-img.svg" alt="web services animation" />
            </div>
        </section>
    </div>
    <div class="quick-facts-container">
        <section class="quick-facts">
            <div class="fact established">
                <h3>Since 2014</h3>
                <p>Designing and building websites professionally.</p>
            </div>
            <div class="fact solo">
                <h3>Direct and personal</h3>
                <p>When you call, you get me, not a call center.</p>
            </div>
            <div class="fact local">
                <h3>Local</h3>
                <p>Serving Warner Robins, GA and the surrounding areas.</p>
            </div>
        </section>
    </div>
    <div class="story-container">
        <section class="story">
            <div class="headers">
                <h3>My story</h3>
                <h2>A designer who also understands what's going on behind the scenes.</h2>
            </div>
            <div class="info">
                <p>I've been building websites professionally since 2014. I also come from a system administrator background, which means I'm just as comfortable in a DNS panel as I am in a design file.</p>
                <p>That mix matters for small businesses. Most website headaches aren't about the design. They're about everything behind it: a domain that quietly expired, business email landing in spam, a DNS record nobody remembers touching. I take care of all of it, so you never have to learn it.</p>
                <p>I'm a one-person company on purpose. When you call or write, you get me. No account managers, no handoffs, no ticket queue. Just someone who knows your site and picks up the phone.</p>
            </div>
        </section>
    </div>
    <div class="work-container">
        <section class="work">
            <div class="headers">
                <h3>How I work</h3>
                <h2>Friendly, straightforward, and easy to reach.</h2>
            </div>
            <div class="cards">
                <div class="card">
                    <h4>One person, start to finish</h4>
                    <p>The person who designs your site is the same one who answers your email.</p>
                </div>
                <div class="card">
                    <h4>Plain English</h4>
                    <p>No jargon and no runaround. I explain what's happening and what it means for your business.</p>
                </div>
                <div class="card">
                    <h4>The nerdy stuff, handled</h4>
                    <p>Domains, DNS, email, security. If it's confusing, it's my job, not yours.</p>
                </div>
                <div class="card">
                    <h4>Local and reachable</h4>
                    <p>I live and work here. I'm happy to meet in person around Warner Robins, or talk by phone or video.</p>
                </div>
            </div>
        </section>
    </div>
    <div class="tech-container">
        <section class="tech">
            <div class="content">
                <h3>The tech stuff</h3>
                <h2>The behind-the-scenes work that makes a website actually work.</h2>
                <p>Years as a system administrator taught me where small business websites really break. Here's what I take off your plate:</p>
                <ul>
                    <li>Domain registration and transfers</li>
                    <li>Custom business email</li>
                    <li>Hosting, backups and updates</li>
                    <li>DNS setup and troubleshooting</li>
                    <li>SSL certificates and security</li>
                    <li>Moving your site from another host</li>
                </ul>
            </div>
        </section>
    </div>
    <div class="location-container">
        <section class="location">
            <div class="content">
                <h3>Helping local businesses</h3>
                <h2>Proudly serving Warner Robins and the surrounding area.</h2>
                <p>I focus on local small businesses because that's where I can be the most useful. Being close means I can sit down with you, learn how your business actually runs, and build a site that fits it.</p>
                <p>Outside the area? I work with clients remotely too, so just ask.</p>
                <ul class="tags">
                    <li class="tag accent">Warner Robins</li>
                    <li class="tag">Centerville</li>
                    <li class="tag">Perry</li>
                    <li class="tag">Bonaire</li>
                    <li class="tag">Macon</li>
                </ul>
            </div>
            <div class="img">
                <img src="/about-location.svg" alt="location" />
            </div>
        </section>
    </div>
    <div class="services-container">
        <section class="services">
            <div class="text-container">
                <h3>How I can help you</h3>
                <h2>Built for your business. Designed for growth.</h2>
            </div>
        </section>
    </div>
</main>
<style>
    .hero-container {
        container: hero / inline-size;
    }

    section {
        padding: 4rem;
        display: grid;
        gap: 1rem;
    }

    div.content {
        display: grid;
        gap: 1rem;
        align-items: center;
    }

    h1 {
        max-width: 19ch;
        padding-block-end: 2rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    h4 {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
    }

    img {
        padding-block: 1rem;
        max-width: 100%;
    }

    .hero {
        gap: 4rem;

        h2 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--blue-80);
        }

        p {
            max-width: 45ch;
            padding-block-end:2rem;
        }
    }

    .quick-facts {
        background-color: var(--primary-container);
        display: grid;
        gap: 2rem;

        .fact {
            display: grid;
            gap: 0.5rem;

            h3 {
                font-size: 1.5rem;
            }

            p {
                color: var(--on-primary-container);
            }
        }

        .solo > h3 {
            color: var(--blue-80);
        }
    }

    .story {
        .headers {
            display: grid;
            gap: 1rem;
        }

        .info {
            display: grid;
            gap: 1rem;
        }

        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--blue-80);
        }
    }

    .work {
        gap: 2rem;
        background-color: var(--primary-container);

        .headers {
            display: grid;
            gap: 1rem;
        }

        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--blue-80);
        }

        .cards {
            display: grid;
            gap: 1rem;
        }

        .card {
            display: grid;
            gap: 1rem;
            padding: 1.5rem;
            border-radius: 1rem;
            background-color: var(--secondary-container);
        }
    }

    .tech {
        background-color: var(--blue-90);
        color: var(--gray-10);

        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--accent);
        }

        h2 {
            color: var(--gray-10);
        }

        ul {
            padding-inline-start: 2rem;
        }
    }

    .location {
        .tags {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            list-style-type: none;
            gap: 1rem;
            justify-content: start;
        }
        .tag {
            border-radius: 1rem;
            background-color: var(--tertiary-container);
            height: fit-content;
            width: fit-content;
            padding: 0.5rem 1rem;
            white-space: nowrap;
        }
        .accent {
            background-color: var(--accent);
            color: var(--on-accent);
        }

        .img {
            justify-self: center;
            align-self: center;
        }
    }

</style>