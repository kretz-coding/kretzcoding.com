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
                <h1>Websites built for small businesses like yours.</h1>
                <p>A closer look at the results of having a better website.</p>
            </div>
        </section>
    </div>
    <div class="k9-korral-container">
        <section class="k9-korral">
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
                <Card>
                    <p class="number">+210%</p>
                    <p class="label">conversion rate</p>
                </Card>
                <Card>
                    <p class="number">48</p>
                    <p class="label">security vulnerabilities remediated</p>
                </Card>
                <Card>
                    <p class="cta">See the finished site in action.</p>
                    <Button
                        variant="filled"
                        label="Visit live site"
                        href="https://k9korralsrq.com"
                    />
                </Card>
                <Card>
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Mark Shambor</p>
                            <p class="position">Owner, K9 Korral</p>
                        </div>
                        <img class="logo" src="/k9-korral.svg" alt="K9 Korral logo" />
                    </div>
                </Card>
            </footer>
        </section>
    </div>
    <div class="cannon-marketing-container">
        <section class="cannon-marketing">
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
                <Card>
                    <p class="number">+86%</p>
                    <p class="label">lead increase</p>
                </Card>
                <Card>
                    <p class="number">+40</p>
                    <p class="label">phone calls per month</p>
                </Card>
                <Card>
                    <p class="cta">Increase your lead conversions like Cannon Marketing.</p>
                    <Button
                            variant="filled"
                            label="Start a project like this"
                            href="/contact"
                    />
                </Card>
                <Card>
                    <p class="quote">"Short, specific quote about the result or the experience of working with you.”</p>
                    <div class="company-info">
                        <div class="person-info">
                            <p class="name">Ben Cannon</p>
                            <p class="position">Owner, Cannon Marketing</p>
                        </div>
                        <img class="logo" src="/cannon-marketing.svg" alt="Cannon Marketing logo" />
                    </div>
                </Card>
            </footer>
        </section>
    </div>
</main>
<style>

</style>