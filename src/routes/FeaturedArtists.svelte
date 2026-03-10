<script lang="ts">
	import type { Artist } from '$lib/interfaces/Artist.interface';

	let { artists = [] } = $props();

	const fallbackArtists: Artist[] = [
		{ id: 'fallback-1', name: 'Deftones', description: '' },
		{ id: 'fallback-2', name: 'Depresión Sonora', description: '' },
		{ id: 'fallback-3', name: 'Plini', description: '' },
		{ id: 'fallback-4', name: 'Radiohead', description: '' }
	];

	const displayArtists = $derived([
		artists[0] || fallbackArtists[0],
		artists[1] || fallbackArtists[1],
		artists[2] || fallbackArtists[2],
		artists[3] || fallbackArtists[3]
	]);

	const placeholderImages = [
		'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
		'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
		'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
		'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
		'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80'
	];
</script>

<section class="h-[700px] w-full bg-black gap-0 overflow-hidden grid grid-cols-7 relative" style="grid-template-rows: 1fr 2fr 2fr 2fr 2fr 1fr;">
	
	<div class="col-start-1 col-end-3 row-start-1 row-end-7 bg-primary relative flex flex-col justify-between p-6 md:p-10 z-0">
		<h2 class="text-white font-bold text-4xl md:text-5xl z-10 font-aulos tracking-tight uppercase">
			Artistas
		</h2>
		<p class="text-white font-light text-xl md:text-2xl z-10">
			Perfiles y sets curados
		</p>
	</div>

	<div class="row-start-1 row-end-2 col-start-3 col-end-6 bg-primary z-0" aria-hidden="true"></div>
	<div class="row-start-1 row-end-2 col-start-7 col-end-8 bg-primary z-0" aria-hidden="true"></div>

	<div class="row-start-1 row-end-2 col-start-6 col-end-7 bg-black z-30" aria-hidden="true"></div>

	<div class="row-start-3 row-end-4 col-start-2 col-end-3 bg-white/20 z-10 border-r border-white/5" aria-hidden="true"></div>
	<div class="row-start-4 row-end-5 col-start-1 col-end-2 bg-white/40 z-10 border-r border-white/5" aria-hidden="true"></div>

	<a href="/artists/{displayArtists[0].id}" class="row-start-2 row-end-4 col-start-3 col-end-4 block w-full h-full overflow-hidden group z-20">
		<img src={placeholderImages[0]} alt={displayArtists[0].name} class="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
	</a>
	<div class="row-start-4 row-end-5 col-start-3 col-end-4 bg-white z-10" aria-hidden="true"></div>
	<div class="row-start-5 row-end-7 col-start-3 col-end-4 bg-primary z-0" aria-hidden="true"></div>
	<a href="/artists/{displayArtists[0].id}" class="row-start-2 row-end-3 col-start-4 col-end-5 bg-black p-4 flex items-start z-30 hover:bg-neutral-900 transition-colors">
		<span class="text-white font-semibold text-sm md:text-lg leading-tight">{displayArtists[0].name}</span>
	</a>
	<div class="row-start-3 row-end-4 col-start-4 col-end-5 bg-white z-10" aria-hidden="true"></div>

	<a href="/artists/{displayArtists[1].id}" class="row-start-2 row-end-4 col-start-5 col-end-6 block w-full h-full overflow-hidden group z-20">
		<img src={placeholderImages[1]} alt={displayArtists[1].name} class="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
	</a>
	<a href="/artists/{displayArtists[1].id}" class="row-start-2 row-end-3 col-start-6 col-end-7 bg-black p-4 flex items-start z-30 hover:bg-neutral-900 transition-colors">
		<span class="text-white font-semibold text-sm md:text-lg leading-tight">{displayArtists[1].name}</span>
	</a>
	<div class="row-start-3 row-end-4 col-start-6 col-end-7 bg-white z-10" aria-hidden="true"></div>

	<div class="row-start-4 row-end-5 col-start-5 col-end-6 bg-white z-10" aria-hidden="true"></div>
	<div class="row-start-4 row-end-5 col-start-7 col-end-8 bg-white z-10" aria-hidden="true"></div>

	<a href="/artists/{displayArtists[2].id}" class="row-start-2 row-end-4 col-start-7 col-end-8 block w-full h-full overflow-hidden group z-20">
		<img src={placeholderImages[2]} alt={displayArtists[2].name} class="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
	</a>

	<a href="/artists/{displayArtists[3].id}" class="row-start-4 row-end-6 col-start-4 col-end-5 block w-full h-full overflow-hidden group z-20">
		<img src={placeholderImages[3]} alt={displayArtists[3].name} class="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
	</a>
	<a href="/artists/{displayArtists[3].id}" class="row-start-5 row-end-6 col-start-5 col-end-6 bg-black p-4 flex items-end justify-start text-left z-30 hover:bg-neutral-900 transition-colors">
		<span class="text-white font-semibold text-sm md:text-lg leading-tight">{displayArtists[3].name}</span>
	</a>

	<a href="/artists/{displayArtists[0].id}" class="row-start-4 row-end-6 col-start-6 col-end-7 block w-full h-full overflow-hidden group z-20">
		<img src={placeholderImages[4]} alt={displayArtists[0].name} class="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
	</a>
	<a href="/artists/{displayArtists[2].id}" class="row-start-5 row-end-6 col-start-7 col-end-8 bg-black p-4 flex items-end justify-start text-left z-30 hover:bg-neutral-900 transition-colors">
		<span class="text-white font-semibold text-sm md:text-lg leading-tight">{displayArtists[2].name}</span>
	</a>

	<div class="row-start-6 row-end-7 col-start-1 col-end-8 bg-primary z-0 flex items-center px-6 md:px-10">
		<p class="text-white font-light text-xl md:text-2xl">
			Perfiles y sets curados
		</p>
	</div>
</section>