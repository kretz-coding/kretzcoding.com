<script lang="ts">
    interface Props {
        href: string;
        icon?: {position: "left" | "right" ; src: string} | null
        isDisabled?: boolean;
        label: string;
        size: "s" | "m" | "l" | "xl";
        style: "fill" | "outline";
        variant: "primary" | "secondary" | "accent" | "negative";
    }

    let {
        href ="#",
        isDisabled = false,
        label="Button",
        size = "m",
        style="fill",
        variant = "primary",
        icon = null

    }: Props = $props();

</script>

<a {href} class="button {style} {variant} {size}" class:disabled={isDisabled}>
    {#if icon != null && icon.position == "left"}
        <img src={icon.src} alt=""/>
    {/if}
    {label}
    {#if icon != null && icon.position == "right"}
        <img src={icon.src} alt=""/>
    {/if}
</a>

<style>
    a.button {
        padding: 0.5rem 1rem;
        border-radius: 1.25rem;
        font-weight: 500;
        width: fit-content;
        display: grid;
        grid-auto-flow: column;
        text-decoration: none;
        justify-items: center;
        align-items: center;
        height: fit-content;
    }

    img {
        align-self: center;
        margin-inline-end: -.5rem;
    }

    a.fill {
        background-color: var(--background-color);
        color: var(--text-color);
        box-shadow: var(--emphasized);
    }

    a.fill:hover {
        box-shadow: var(--emphasized-hover);
    }

    a.outline {
        border: 2px solid var(--background-color);
        color: var(--background-color);
    }

    a.primary {
        --background-color: var(--primary);
        --text-color: var(--on-primary);
    }

    a.secondary {
        --background-color: var(--secondary);
        --text-color: var(--on-secondary);
    }

    a.accent {
        --background-color: var(--accent);
        --text-color: var(--on-accent);
    }

    a.negative {
        --background-color: var(--negative);
        --text-color: var(--on-negative);
    }
</style>
