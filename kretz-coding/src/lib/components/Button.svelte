<script lang="ts">
    let { 
        label = 'Button', 
        type = 'filled', 
        href = '', 
        color = '#3b82f6',
        ...restProps 
    } = $props();
</script>

<a href={href} class="{type} {color}">{label}</a>

<style>
    a {
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 1.25rem;
        font-weight: 500;
        width: fit-content;
    }

    a.filled {
        background-color: var(--background-color);
        color: var(--text-color);
    }

    a.outlined {
        border: 1px solid var(--background-color);
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