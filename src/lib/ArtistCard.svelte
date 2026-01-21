<script lang="ts">
	import type { Artist } from './interfaces/Artist.interface';

	const { artist }: { artist: Artist } = $props();
</script>

<div class="group hover:shadow-md relative z-10 h-full transition-shadow">
	<img src="" alt={artist.description} />
	<div class="bg-black p-4 flex flex-col items-start justify-center">
		<h3 class="text font-semibold text-white">
			{artist.name}
		</h3>
		<p class="text-sm text-white line-clamp-2">
			{artist.description || 'No description available.'}
		</p>
	</div>
</div>
