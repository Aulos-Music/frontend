<script lang="ts">
	const MT_COLS = 14;
	const MT_ROWS = 9;
	// Surface row per column; a lower index is a taller peak.
	const mtProfile = [8, 7, 5, 4, 2, 1, 2, 3, 4, 5, 4, 5, 6, 7];
	const mtShades = ['#6cbf8f', '#3f9468', '#27704a', '#163f2b'];
	const mountain: (string | null)[] = [];
	for (let r = 0; r < MT_ROWS; r++) {
		for (let c = 0; c < MT_COLS; c++) {
			const surface = mtProfile[c];
			mountain.push(r >= surface ? mtShades[Math.min(r - surface, mtShades.length - 1)] : null);
		}
	}

	const WAVE_ROWS = 4;
	const WAVE_PER_ROW = 7;

	// A single flower motif from Aulos_assets_PATTERN_01.svg.
	const flowerRects = [
		[36, 0, 35, 18], [36, 53, 35, 18],
		[18, 18, 18, 35], [71, 18, 18, 35],
		[0, 53, 18, 35], [89, 53, 18, 35],
		[36, 165, 35, 18], [36, 112, 35, 18],
		[18, 130, 18, 35], [71, 130, 18, 35],
		[0, 95, 18, 35], [89, 95, 18, 35]
	];
</script>

<section class="relative w-full bg-primary-variant overflow-hidden min-h-[715px]">
	<div class="flex h-full min-h-[715px] w-full">
		<div class="relative flex w-[52%] flex-col justify-between p-6 md:p-10">
			<h2 class="font-aulos z-10 text-5xl font-bold tracking-tight text-white md:text-7xl">
				Modos de escucha
			</h2>

			<div
				class="my-8 ml-[2.5%] grid max-w-[40rem] grid-cols-3 grid-rows-4 place-items-center gap-x-2 gap-y-[5px] text-white/70 md:gap-x-3"
				aria-hidden="true"
			>
				{#each Array(12) as _}
					<svg viewBox="0 0 183 107" class="h-auto w-full max-w-[12.65rem]" fill="currentColor">
						<g transform="translate(183 0) rotate(90)">
							{#each flowerRects as [x, y, w, h]}
								<rect {x} {y} width={w} height={h} />
							{/each}
						</g>
					</svg>
				{/each}
			</div>

			<p class="z-10 max-w-lg text-2xl font-light text-white md:text-4xl">
				¡Conoce las diferentes maneras de disfrutar tu música!
			</p>
		</div>

		<div
			class="grid w-[48%] gap-0 pr-[5%]"
			style="grid-template-columns: 1fr 1.85fr 1fr; grid-template-rows: 1fr 1.43fr 1fr;"
		>
			<div class="col-start-2 col-end-3 row-start-1 row-end-2 bg-primary flex items-start p-4 md:p-6">
				<h3 class="text-2xl font-semibold leading-tight text-white md:text-3xl">Radio<br />Ambient</h3>
			</div>

			<div
				class="col-start-1 col-end-2 row-start-2 row-end-3 relative flex flex-col overflow-hidden bg-black"
			>
				<h3 class="z-10 p-3 text-xl font-semibold leading-tight text-white md:p-4 md:text-2xl">
					Selected<br />Radio
				</h3>
				<div
					class="mt-auto grid w-full"
					style="grid-template-columns: repeat({MT_COLS}, 1fr); aspect-ratio: {MT_COLS} / {MT_ROWS};"
				>
					{#each mountain as color}
						<div style={color ? `background-color:${color}` : ''}></div>
					{/each}
				</div>
			</div>

			<div
				class="col-start-2 col-end-3 row-start-2 row-end-3 bg-primary-variant flex flex-col justify-between overflow-hidden py-[21px]"
			>
				{#each Array(WAVE_ROWS) as _}
					<div class="flex items-center justify-center [--ox:0.14rem]">
						{#each Array(WAVE_PER_ROW) as _, c}
							<div
								class="wave-glyph -mr-(--ox) aspect-[925/792] w-[15%] last:mr-0 {c % 2 === 0
									? '-translate-y-[45%]'
									: 'translate-y-[45%] -scale-y-100'}"
							></div>
						{/each}
					</div>
				{/each}
			</div>

			<!-- TODO: replace placeholder image -->
			<div class="col-start-3 col-end-4 row-start-2 row-end-3 relative overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80"
					alt="Archivo Vivo"
					class="h-full w-full object-cover"
				/>
				<h3 class="absolute left-0 top-0 p-3 text-xl font-semibold leading-tight text-white md:text-2xl">
					Archivo<br />Vivo
				</h3>
			</div>

			<!-- TODO: replace placeholder image -->
			<div class="col-start-2 col-end-3 row-start-3 row-end-4 relative overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1471520201477-47a62a269a87?w=800&q=80"
					alt="Fragmentos"
					class="h-full w-full object-cover"
				/>
				<h3 class="absolute left-0 top-0 p-3 text-2xl font-bold leading-tight text-white md:p-4 md:text-3xl">
					Fragmentos
				</h3>
			</div>
		</div>
	</div>
</section>

<style>
	.wave-glyph {
		background-color: #fff;
		-webkit-mask-image: url('/assets/Aulos_assets_ISOTIPO.svg');
		mask-image: url('/assets/Aulos_assets_ISOTIPO.svg');
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}
</style>
