<script lang="ts">
	const { data } = $props();
	import Header from '$lib/Header.svelte';
	import Hero from './Hero.svelte';
	import FeaturedArtists from './FeaturedArtists.svelte';
</script>

<div class="font-sans mx-auto w-full">
	<Header {data} />

	<main>
		<Hero />
		<FeaturedArtists artists={data.artists} />
	</main>
</div>
