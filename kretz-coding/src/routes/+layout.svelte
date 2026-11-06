<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
	import type { LayoutProps } from './$types';
	import '../app.css';
	import Footer from '#lib/components/Footer.svelte';

	let { children }: LayoutProps = $props();
</script>

<Navbar />
{@render children()}
<Footer />