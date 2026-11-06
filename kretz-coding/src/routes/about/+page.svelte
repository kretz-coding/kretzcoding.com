<script>
    import Button from "#lib/components/Button.svelte";
    import Card from "#lib/components/Card.svelte";
    import Tag from "#lib/components/Tag.svelte";
</script>

<main>
    <div class="hero-container">
        <section class="hero">
            <header>
                <h2>About</h2>
                <h1>Helping small businesses reach big audiences.</h1>
                <p>I'm a one-person web design company in Warner Robins, Georgia. When you work with Kretz Coding, I'll support you from the first conversation to long after launch.</p>
                <Button
                        href="/contact"
                        label="Let's get started"
                        variant="filled"
                />
            </header>
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
            <div class="content">
                <header>
                    <h3>My story</h3>
                    <h2>A designer who also understands what's going on behind the scenes.</h2>
                </header>
                <div class="info">
                    <p>I've been building websites professionally since 2014. I also come from a system administrator background, which means I'm just as comfortable in a DNS panel as I am in a design file.</p>
                    <p>That mix matters for small businesses. Most website headaches aren't about the design. They're about everything behind it: a domain that quietly expired, business email landing in spam, a DNS record nobody remembers touching. I take care of all of it, so you never have to learn it.</p>
                    <p>I'm a one-person company on purpose. When you call or write, you get me. No account managers, no handoffs, no ticket queue. Just someone who knows your site and picks up the phone.</p>
                </div>
            </div>
            <div class="img">
                <img src="/my-story-animation.svg" alt="web services animation" />
            </div>
        </section>
    </div>
    <div class="work-container">
        <section class="work">
            <header>
                <h3>How I work</h3>
                <h2>Friendly, straightforward, and easy to reach.</h2>
            </header>
            <div class="cards">
                <Card>
                    <h4>One person, start to finish</h4>
                    <p>The person who designs your site is the same one who answers your email.</p>
                </Card>
                <Card>
                    <h4>Plain English</h4>
                    <p>No jargon and no runaround. I explain what's happening and what it means for your business.</p>
                </Card>
                <Card>
                    <h4>The nerdy stuff, handled</h4>
                    <p>Domains, DNS, email, security. If it's confusing, it's my job, not yours.</p>
                </Card>
                <Card>
                    <h4>Local and reachable</h4>
                    <p>I live and work here. I'm happy to meet in person around Warner Robins, or talk by phone or video.</p>
                </Card>
            </div>
        </section>
    </div>
    <div class="tech-container">
        <section class="tech">
            <header>
                <h3>The tech stuff</h3>
                <h2>The behind-the-scenes work that makes a website actually work.</h2>
            </header>
            <div>
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
            <div class="img">
                <img src="/nerdy-stuff-animation.svg" alt="dns animation" />
            </div>
        </section>
    </div>
    <div class="location-container">
        <section class="location">
            <div class="content">
                <header>
                    <h3>Helping local businesses</h3>
                    <h2>Proudly serving Warner Robins and the surrounding area.</h2>
                </header>
                <p>I focus on local small businesses because that's where I can be the most useful. Being close means I can sit down with you, learn how your business actually runs, and build a site that fits it.</p>
                <p>Outside the area? I work with clients remotely too!</p>
                <ul class="tags">
                    <Tag>Warner Robins</Tag>
                    <Tag variant="accent">Centerville</Tag>
                    <Tag variant="accent">Perry</Tag>
                    <Tag variant="accent">Bonaire</Tag>
                    <Tag variant="accent">Macon</Tag>
                </ul>
            </div>
            <div class="img">
                <img src="/about-location.svg" alt="location" />
            </div>
        </section>
    </div>
    <div class="services-container">
        <section class="services">
            <header class="content">
                <h3>How I can help</h3>
                <h2>Three services, one complete solution.</h2>
            </header>
            <div class="cards">
                <Card>
                    <h4>Web Design</h4>
                    <p>Custom sites designed around your customers and built to convert.</p>
                </Card>
                <Card>
                    <h4>Hosting & Maintenance</h4>
                    <p>Fast, secure hosting and hands-on care after launch.</p>
                </Card>
                <Card>
                    <h4>Analytics & Marketing</h4>
                    <p>Find what works, then put your effort where it pays off.</p>
                </Card>
            </div>
        </section>
    </div>
    <div class="cta-container">
        <section class="cta">
            <div class="card">
                <h2>Let's talk about your website.</h2>
                <p>Tell me about your business and what's not working. I'll tell you honestly how I can help. The first conversation is free, and there's no pressure.</p>
                <Button
                        href="/contact"
                        label="Book a free call"
                        variant="filled"
                />
            </div>
        </section>
    </div>
</main>
<style>
    .hero-container {
        container: hero / inline-size;
    }
    .quick-facts-container {
        container: quick-facts / inline-size;
    }
    .story-container {
        container: story / inline-size;
    }
    .work-container {
        container: work / inline-size;
    }
    .tech-container {
        container: tech / inline-size;
    }
    .location-container {
        container: location / inline-size;
    }
    .services-container {
        container: services / inline-size;
    }
    .cta-container {
        container: cta / inline-size;
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
    
    @container hero (min-width: 768px) {
        .hero {
            grid-template-columns: repeat(2, 1fr);
        }

        .content {
            align-content: center;
            justify-content: center;
        }

        .img {
            align-content: center;
            justify-content: center;
        }

    }

    .quick-facts {
        display: grid;
        gap: 2rem;

        .fact {
            display: grid;
            gap: 0.5rem;

            h3 {
                font-size: 1.5rem;
            }

        }

        .solo > h3 {
            color: var(--primary);
        }
    }

    @container quick-facts (min-width: 768px) {
        .quick-facts {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .story {
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

    @container story (min-width: 768px) {
        .story {
            grid-template-columns: repeat(2, 1fr);
        }

        .img {
                align-content: center;
                justify-content: center;
        }

    }

    .work {
        gap: 2rem;

        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--primary);
        }

        h4 {
            font-weight: 700;
        }

        .cards {
            display: grid;
            gap: 1rem;
        }
    }

    @container work (min-width: 768px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @container work (min-width: 1200px) {
        .cards {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .tech {
        background-color: var(--blue-100);
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

    @container tech (min-width: 768px) {
        .tech {
            grid-template-columns: repeat(2, 1fr);
        }

        .img {
            align-content: center;
            justify-content: center;
        }
    }

    .location {

        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--blue-80);
        }
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

    @container location (min-width: 768px) {
        .location {
            grid-template-columns: repeat(2, 1fr);
        }

        .img {
            order: -1;
            align-content: center;
            justify-content: center;
        }
    }


    .services {
        h3 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 400;
            color: var(--blue-80);
        }
        .cards {
            display: grid;
            gap: 2rem;
        }
    }
    @container services (min-width: 786px){
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @container services (min-width: 1200px){
        .cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .cta {

        .card {
            display: grid;
            gap: 1rem;
            background-color: var(--blue-100);
            color: var(--gray-10);
            border-radius: 1rem;
            padding: 2rem;
        }
    }
</style>