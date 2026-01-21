<script lang="ts">
	import ArtistCard from '$lib/ArtistCard.svelte';
	import ArtistBackground from './ArtistBackground.svelte';

	const { artists } = $props();
</script>

<section class="md:text-start relative flex h-[80vh] flex-col overflow-hidden text-center">
	<ArtistBackground />
	<h1 class="p-8 text-4xl text-white relative z-10">ARTISTAS</h1>

	<div class="md:grid-cols-2 md:self-end md:w-[50%] relative z-10 grid h-full">
		{#each artists as artist}
			<ArtistCard {artist} />
		{/each}
	</div>
</section>
