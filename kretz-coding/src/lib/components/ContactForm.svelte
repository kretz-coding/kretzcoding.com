<script>
    let name = $state('');
    let business = $state('');
    let selected = $state([]);
    const services = [
        { id: 'website', label: 'a new website' },
        { id: 'hosting', label: 'hosting & maintenance' },
        { id: 'marketing', label: 'analytics & marketing' },
        { id: 'unsure', label: 'not sure yet' }
    ];
</script>

<form class="contact-form" onsubmit={submit}>
    <div>Hi, Kevin! My name is
        <input class="blank" type="text" placeholder="your name" required bind:value={name} />
        and I run
        <input class="blank" type="text" placeholder="your business name" aria-label="your business name" bind:value={business} />
        . I'm looking for
        {#each services as service (service.id)}
            <button
                type="button"
                class="chip"
                class:on={selected.includes(service.id)}
                aria-pressed={selected.includes(service.id)}
                onclick={() => toggle(service.id)}
            >
                {service.label}
            </button>
        {/each}
    </div>
</form>
<style>

</style>