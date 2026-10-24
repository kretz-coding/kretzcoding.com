<script lang="ts">
    let {
        label = "Button",
        type = "filled",
        href = "",
        color = "",
        icon = "",
        alt= "",
        ...restProps
    } = $props();
</script>

<a {href} class="button {type} {color}">{label} {#if icon != ""}<img src={icon} alt={alt}>{/if}</a>

<style>
    a.button {
        padding: 0.5rem 1rem;
        border-radius: 1.25rem;
        font-weight: 500;
        width: fit-content;
        display: grid;
        grid-auto-flow: column;
    }

    a.underlined {
        color: var(--text-color);
        margin: 0;
        padding: 0;
    }

    a.filled {
        text-decoration: none;
        background-color: var(--background-color);
        color: var(--text-color);
    }

    a.outlined {
        text-decoration: none;
        border: 2px solid var(--background-color);
        color: var(--background-color);
    }

    a.primary {
        --background-color: var(--kc-blue);
        --text-color: var(--kc-white);
    }

    a.secondary {
        --background-color: var(--kc-light-blue);
        --text-color: var(--kc-blue);
    }
</style>
