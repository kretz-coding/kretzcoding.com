<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
    import Navbar from '#lib/components/Navbar.svelte';
	import type { LayoutProps } from './$types';
	import '../app.css';
    import Footer from '#lib/components/Footer.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Navbar />
{@render children()}
<Footer />
