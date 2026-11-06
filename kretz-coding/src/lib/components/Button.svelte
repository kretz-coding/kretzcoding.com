<script lang="ts">
    interface Props {
        href: string;
        icon?:  string | null;
        isDisabled?: boolean;
        label: string;
        variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
    }

    let {
        href ="#",
        isDisabled = false,
        label="Button",
        variant = "filled",
        icon = null

    }: Props = $props();

</script>

<a {href} class="button {variant}" class:disabled={isDisabled}>
    {#if icon != null}
        <img src={icon} alt=""/>
    {/if}
    {label}
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
        background-color: var(--surface);
        color: var(--on-surface);
        border: 1px solid var(--outline);
    }

    img {
        align-self: center;
        margin-inline-end: -.5rem;
    }

    .elevated {
        --surface: var(--suface-container-low);
        --on-surface: var(--primary);
    }

    .filled {
        --surface: var(--primary);
        --on-surface: var(--on-primary);
    }

    .tonal {
        --surface: var(--secondary-container);
        --on-surface: var(--on-secondary_container);
    }

    .outlined {
        --on-surface: var(--primary);
        --outline: var(--primary);
    }

    .text {
        --on-surface: var(--primary);
    }

</style>
