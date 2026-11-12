<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLDivElement> {
        variant?: "elevated" | "filled" | "outlined";
        children: Snippet;
    }

    let {
        variant = "filled",
        class: className = "",
        children
    }: Props = $props();
</script>

<div class="card {variant} {className}">
    {@render children()}
</div>

<style>
    .card {
        background-color: var(--container);
        border: 1px solid var(--outline);
        color: var(--on-container);
        display: grid;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 1rem;
    }

    .elevated {
        --container: var(--surface-container-high);
        --on-container: var(--on-surface-container);
        box-shadow: var(--elevated);
    }

    .filled {
        --container: var(--surface-container);
        --on-container: var(--on-surface-container);
    }

    .outlined {
        --container: var(--surface);
        --on-container: var(--on-surface-container);
        --outline: var(--outline-variant);
    }

</style>
