<script>
    import Button from "#lib/components/Button.svelte";
    import Card from "#lib/components/Card.svelte";
</script>

<main>
    <div class="hero-container">
        <section class="hero">
            <div class="content">
                <h2>Services</h2>
                <h1>A website that's built well, stays running, and keeps improving.</h1>
                <p>Three services, one point of contact. Hire for the whole journey or just the part you need.</p>
                <Button
                        href="/contact"
                        label="Start a project"
                        variant="filled"
                />
            </div>
            <div class="animation">
                <img src="/services-hero.svg" alt="web services animation" />
            </div>

        </section>
    </div>
    <div class="web-design-container">
        <section class="web-design">
            <div class="content">
                <h4>01 / Web Design</h4>
                <h2>
                    Design that looks like your business and works like a
                    salesperson.
                </h2>
                <p>
                    We design and build custom websites from scratch. No
                    templates dressed up as custom work. Every page is planned
                    around who visits, what they need, and what you want them to
                    do next.
                </p>
                <ul>
                    <li>Custom design and layout</li>
                    <li>Mobile-first, responsive build</li>
                    <li>Copy and content guidance</li>
                    <li>Built for speed and SEO</li>
                    <li>Accessible by default</li>
                </ul>
                <Button
                    href="/contact"
                    label="Plan your new site"
                    variant="filled"
                />
            </div>
            <div class="img">
                <img src="/web-design-animation.svg" alt="web design animation"/>
            </div>
        </section>
    </div>
    <div class="maintenance-hosting-container">
        <section class="maintenance-hosting">
            <div class="content">
                <h4>02 / Hosting & Maintenance</h4>
                <h2>
                    Launch is the start. We keep it fast, safe, and current.
                </h2>
                <p>Sites that aren't looked after slow down, break, and get hacked. We host your site on reliable infrastructure and handle the upkeep, so you can run your business and not your website.</p>
                <ul>
                    <li>Managed, secure hosting</li>
                    <li>Software and security updates</li>
                    <li>Regular backups</li>
                    <li>Uptime monitoring</li>
                    <li>Content changes on request</li>
                </ul>
                <Button
                    href="/contact"
                    label="Ask about care plans"
                    variant="filled"
                />
            </div>
            <div class="img">
                <img src="/hosting-maintenance-animation.svg" alt="hosting and maintenance animation"/>
            </div>
        </section>
    </div>
    <div class="analytics-marketing-container">
        <section class="analytics-marketing">
            <div class="content">
                <h4>03 / Analytics & Marketing</h4>
                <h2>Know who visits, what they do, and what to do next.</h2>
                <p>
                    A website should bring you leads and increase sales. We set up tracking, turn the numbers into simple reports, and use what we learn to bring in more of the right visitors.
                </p>
                <ul>
                    <li>Analytics and goal tracking setup</li>
                    <li>Search engine optimization</li>
                    <li>Conversion improvements</li>
                    <li>Monthly web reports</li>
                    <li>Email and campaign support</li>
                </ul>
                <Button
                    href="/contact"
                    label="Talk about growth"
                    variant="filled"
                />
            </div>
            <div class="img">
                <img src="/analytics-marketing-animation.svg" alt="analytics and marketing animation"/>
            </div>
        </section>
    </div>
    <div class="cta-container">
        <section class="cta">
            <header>
                <h4>How it works</h4>
                <h2>From first conversation to a site that keeps working.</h2>
            </header>
            <div class="cards">
                <Card variant="filled">
                        <p class="title">Discover</p>
                    <p class="body">We learn your goals, customers, and what's not working today.</p>
                </Card>
                <Card variant="filled">
                    <p class="title">Design</p>
                    <p class="body">You review layouts and give feedback before anything gets built.</p>
                </Card>
                <Card variant="filled">
                    <p class="title">Build & launch</p>
                    <p class="body">We develop, test on real devices, and take the site live.</p>
                </Card>
                <Card variant="filled">
                    <p class="title">Grow</p>
                    <p class="body">We host, maintain, measure, and improve month after month.</p>
                </Card>
            </div>
            <footer>
                <Card class="cta" variant="filled">
                    <h3>Not sure which service you need?</h3>
                    <p>Tell us about your business and we'll recommend a starting point. The first conversation is free.</p>
                    <Button
                            href="/contact"
                            label="Book a free call"
                            variant="filled"
                    />
                </Card>
            </footer>
        </section>
    </div>
</main>
<style>
    .hero-container {
        container: hero / inline-size;
    }
    .web-design-container {
        container: web-design / inline-size;
    }
    .maintenance-hosting-container {
        container: maintenance-hosting / inline-size;
    }
    .analytics-marketing-container {
        container: analytics-marketing / inline-size;
    }
    .cta-container {
        container: cta / inline-size;
    }

    section {
        padding: 4rem;
        display: grid;
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

    ul {
        padding: 0 0 0.5rem 2rem;
    }

    img {
        padding-block: 1rem;
        max-width: 100%;
    }

    .hero {
        h2 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 500;
        }

        p {
            max-width: 45ch;
            padding-block-end:2rem;
        }
    }

    .cards {
        display: grid;
        gap: 2rem;
    }

    section.cta {
        gap: 2rem;
    }

    div.cta {
        display: grid;
        gap: 1rem;
        align-content: center;

        h3 {
            font-size: 2rem;
        }

        p {
            margin-block-end: 1rem;
        }
    }

    @container hero (min-width: 768px) {
        .hero {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
        }
    }

    @container web-design (min-width: 768px) {
        .web-design {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
        }
    }

    @container maintenance-hosting (min-width: 768px) {
        .maintenance-hosting {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
        }

        .img {
            order: -1;
        }
    }

    @container analytics-marketing (min-width: 768px) {
        .analytics-marketing {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
        }
    }

    @container cta (min-width: 768px) {
        header {
            grid-column: span 2;
        }

        .cards {
            grid-template-columns: repeat(2, 1fr);
        }

        footer {
            grid-column: span 2;
        }
    }

    @container cta (min-width: 1200px) {
        header {
            grid-column: span 4;
        }

        section.cta {
            grid-template-columns: repeat(4, 1fr);
        }

        .content {
            grid-column: span 4;
        }

        .cards {
            grid-column: span 2;
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>