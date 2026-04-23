<script lang="ts">
	const { data } = $props();
	import Header from '$lib/components/Header/Header.svelte';
	import Hero from './Hero.svelte';
	import ExploreSection from './ExploreSection.svelte';
	import FeaturedArtists from './FeaturedArtists.svelte';
</script>

<div class="font-sans bg-black mx-auto min-h-screen w-full">
	<Header {data} />

	<main>
		<Hero />
		<ExploreSection />
		<FeaturedArtists artists={data.artists} />
	</main>
</div>

