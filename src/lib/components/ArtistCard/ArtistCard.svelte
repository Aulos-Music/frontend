<script lang="ts">
	import type { Artist } from '$lib/interfaces/Artist.interface';

	const { artist }: { artist: Artist } = $props();
</script>

<div class="group bg-black hover:shadow-md h-64 max-w-96 relative z-10 transition-shadow">
	<img
		class="text-white h-full w-full object-cover"
		src={artist.imgSrc}
		alt={artist.description}
	/>
	<div class="bg-black p-4 flex flex-col items-start justify-center">
		<h3 class="text font-semibold text-white font-aulos uppercase hover:underline">
			<a href={`/artists/${artist.id}`}>
				{artist.name}
			</a>
		</h3>
		<p class="text-sm text-white font-light line-clamp-2">
			{artist.description || 'No description available.'}
		</p>
	</div>
</div>
