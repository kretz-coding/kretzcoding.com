<script>
    import Button from "./Button.svelte";

    let {
        phase = "",
        icon="",
        title="",
        subtitle="",
        body="",
        button_href="",
    } = $props();
</script>
<div class="card">
    <div class="header">
        <div class="phase">Phase {phase}</div>
        <img src="{icon}" alt="" class="icon">
    </div>
    <div class="body">
        <h3 class="title">{title}</h3>
        <h4 class="subtitle">{subtitle}</h4>
        <p class="body">{body}</p>
    </div>
    <a href="{button_href}">Learn more <img src="/chevron-right.svg"></a>
</div>

<style>
    .card {
        display: grid;
        background-color: var(--secondary-container);
        width: fit-content;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: var(--emphasized);
    }

    .header {
        display: grid;
        grid-auto-flow: column;
    }

    .phase {
        background-color: hsla(213, 90%, 51%, 0.2);
        border-radius: 0.5rem;
        width: fit-content;
        padding: 0.5rem 1rem;
        color: var(--kc-light-blue);
        font-weight: 500;
        font-size: 0.75rem;
        height: fit-content;
    }

    .icon {
        justify-self: end;
        background-color: hsla(213, 90%, 51%, 0.2);
        border-radius: 0.5rem;
        padding: 0.25rem;
        aspect-ratio: 1/1;
    }

    h3 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-block: 2rem 0.5rem;
    }

    h4 {
        color: var(--accent);
        font-weight: 400;
        text-transform: uppercase;
        font-size: 0.75rem;
        margin-block: 0.5rem;
    }

    p {
        line-height: 1.4rem;
        padding-block: 1rem;
    }

    a {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-items: center;
        width: fit-content;
        color: var(--on-surface);
        font-weight: 500;
    }
</style>