<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLDivElement>{
        variant?: "primary" | "secondary" | "accent" | "negative";
        children: Snippet;
    }

    let {
        variant = "primary",
        children
    }: Props = $props();

</script>

<div class="tag {variant}">{@render children()}</div>

<style>
    .tag {
        display: grid;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        border: 1px solid var(--primary);
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
    }

    .secondary {
        border-color: var(--secondary);
    }

    .accent {
        border-color: var(--tertiary);
    }

    .negative {
        border-color: var(--negative);
    }


</style>
