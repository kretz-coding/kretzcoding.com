<script>
    import Button from "#lib/components/Button.svelte";
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
                        size="m"
                        style="fill"
                        variant="accent"
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
                    size="m"
                    style="fill"
                    variant="accent"
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
                <p>
                    Sites that aren't looked after slow down, break, and get hacked. We host your site on reliable infrastructure and handle the upkeep, so you can run your business and not your website.
                </p>
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
                    size="m"
                    style="fill"
                    variant="accent"
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
                    size="m"
                    style="fill"
                    variant="accent"
                />
            </div>
            <div class="img">
                <img src="/analytics-marketing-animation.svg" alt="analytics and marketing animation"/>
            </div>
        </section>
    </div>
    <div class="cta-container">
        <section class="cta">
            <div class="content">
                <h4>How it works</h4>
                <h2>From first conversation to a site that keeps working.</h2>
            </div>
            <div class="cards">
                <div class="card">
                    <h4>Discover</h4>
                    <p>We learn your goals, customers, and what's not working today.</p>
                </div>
                <div class="card">
                    <h4>Design</h4>
                    <p>You review layouts and give feedback before anything gets built.</p>
                </div>
                <div class="card">
                    <h4>Build & launch</h4>
                    <p>We develop, test on real devices, and take the site live.</p>
                </div>
                <div class="card">
                    <h4>Grow</h4>
                    <p>We host, maintain, measure, and improve month after month.</p>
                </div>
            </div>
            <div class="cta card">
                    <h3>Not sure which service you need?</h3>
                    <p>Tell us about your business and we'll recommend a starting point. The first conversation is free.</p>
                    <Button
                    href="/contact"
                    label="Book a free call"
                    size="m"
                    style="fill"
                    variant="primary"
                />
                </div>
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

    .hero, .maintenance-hosting, .cta {
        background-color: var(--primary-container);
    }


    .cards {
        display: grid;
        gap: 2rem;
    }

    .card {
        display: grid;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-container);

    }

    section.cta {
        gap: 2rem;
    }

    div.cta {
        display: grid;
        gap: 1rem;
        background-color: var(--accent);
        color: var(--on-accent);

        p {
            margin-block-end: 1rem;
        }
    }

</style>