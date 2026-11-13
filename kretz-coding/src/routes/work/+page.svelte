<script>
    import Tag from "#lib/components/Tag.svelte";
    import Card from "#lib/components/Card.svelte";
    import Button from "#lib/components/Button.svelte";
</script>

<main>
    <div class="hero-container">
        <section class="hero">
            <div class="content">
                <h2>Work</h2>
                <h1>Websites built for small businesses<br>like yours.</h1>
                <p>A closer look at the results of having a better website.</p>
            </div>
        </section>
    </div>
    <div class="k9-korral-container">
        <section class="k9-korral work">
            <header>
                <a href="https://k9korralsrq.com" class="client">K9 Korral</a>
                <p class="summary">A dog boarding and daycare in Sarasota, FL.</p>
                <div class="tags">
                    <Tag>Dog Boarding</Tag>
                    <Tag>Dog Daycare</Tag>
                    <Tag>Pet Services</Tag>
                    <Tag>2022</Tag>
                </div>
            </header>
            <div class="website">
                <img src="/k9-korral-after.png" alt="K9 Korral website">
            </div>
            <footer>
                <Card class="number-card">
                    <p class="number">+210%</p>
                    <p class="label">conversion rate</p>
                </Card>
                <Card class="number-card">
                    <p class="number">48</p>
                    <p class="label">security vulnerabilities remediated</p>
                </Card>
                <Card class="quote-card">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Mark Shambor</p>
                            <p class="position">Owner, K9 Korral</p>
                        </div>
                        <img class="logo" src="/k9-korral.svg" alt="K9 Korral logo" />
                    </div>
                </Card>
                <Card class="cta-card">
                    <p class="cta">See the finished site in action.</p>
                    <Button
                            variant="filled"
                            label="Visit live site"
                            href="https://k9korralsrq.com"
                    />
                </Card>
            </footer>
        </section>
    </div>
    <div class="cannon-marketing-container">
        <section class="cannon-marketing work">
            <header>
                <p class="client">Cannon Marketing</p>
                <p class="summary">3rd party marketing and customer service out of Toledo, OH.</p>
                <div class="tags">
                    <Tag>Marketing</Tag>
                    <Tag>Customer Service</Tag>
                    <Tag>Outside Sales</Tag>
                    <Tag>2024</Tag>
                </div>
            </header>
            <div class="website">
                <img src="/cannon-marketing-preview.png" alt="Cannon Marketing website">
            </div>
            <footer>
                <Card class="number-card">
                    <p class="number">+86%</p>
                    <p class="label">lead increase</p>
                </Card>
                <Card class="number-card">
                    <p class="number">+40</p>
                    <p class="label">more phone calls per month</p>
                </Card>
                <Card class="quote-card">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Ben Cannon</p>
                            <p class="position">Owner, Cannon Marketing</p>
                        </div>
                        <img class="logo" src="/cannon-marketing.svg" alt="Cannon Marketing logo" />
                    </div>
                </Card>
                <Card class="cta-card">
                    <p class="cta">Increase your lead conversions like Cannon Marketing.</p>
                    <Button
                            variant="filled"
                            label="Start a project like this"
                            href="/contact"
                    />
                </Card>
            </footer>
        </section>
    </div>
    <div class="wilmo-pick-em-container">
        <section class="wilmo-pick-em work">
            <header>
                <p class="client">Wilmo's Pick 'Ems</p>
                <p class="summary">Custom NFL Pick Em web application with users across the U.S.</p>
                <div class="tags">
                    <Tag>Pick 'Em League</Tag>
                    <Tag>Sports</Tag>
                    <Tag>Database</Tag>
                    <Tag>2026</Tag>
                </div>
            </header>
            <div class="website">
                <img src="/wilmo-pick-em-preview.png" alt="Cannon Marketing website">
            </div>
            <footer>
                <Card class="number-card">
                    <p class="number">50+</p>
                    <p class="label">weekly users</p>
                </Card>
                <Card class="number-card">
                    <p class="number">~48</p>
                    <p class="label">hours saved per NFL season</p>
                </Card>
                <Card class="quote-card">
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Joeseph Wilmoth</p>
                            <p class="position">Owner, Wilmo's Pick 'Ems</p>
                        </div>
                        <img class="logo" src="/wilmo-pickems.svg" alt="Wilmo's Pick 'Ems logo" />
                    </div>
                </Card>
                <Card class="cta-card">
                    <p class="cta">Automate your problems, like Wilmo's Pick 'Ems</p>
                    <Button
                            variant="filled"
                            label="Save time"
                            href="/contact"
                    />
                </Card>
            </footer>
        </section>
    </div>
</main>

<style>

    .k9-korral-container, .cannon-marketing-container, .wilmo-pick-em-container {
        container-type: inline-size;
    }

    @container (min-width: 768px) {
        footer {
            grid-template-columns: repeat(4, 1fr);
        }

        footer :global(.quote-card), footer :global(.cta-card) {
            grid-column: span 2;
        }

        footer :global(.cta-card) {
            grid-template-columns: repeat(2, 1fr);
            justify-items: end;
            align-items: center;

            p {
                justify-self: start;
            }
        }

        footer :global(.number-card) {
            grid-row: span 2;
            align-content: center;
        }
    }

    .hero {
        h1 {
            line-height: 3rem;
            padding-block: 1.25rem;
        }
        h2 {
            color: var(--primary);
            font-size: 1rem;
        }
    }
    .client {
        font-size: 3rem;
        text-decoration: none;
        color: var(--on-primary);
    }
    .work * {
        display: grid;
        gap: 1rem;
    }

    img {
        max-width: 100%;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-block: 1rem;
    }

    .number {
        font-size: 3rem;
        justify-self: center;
    }

    .label {
        justify-self: center;
    }

    .company-info {
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .person-info {
        gap: 0.25rem;
        height: fit-content;
        align-self: end;
    }

    .name {
        font-weight: bold;
    }

    .logo {
        max-height: 5rem;
        justify-self: end;
    }

    * > footer {
        display: grid;
    }
</style>