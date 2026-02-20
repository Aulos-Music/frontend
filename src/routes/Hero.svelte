<script lang="ts">
	const logo = [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0, 0],
		[0, 1, 0, 0, 1, 0],
		[0, 1, 0, 0, 1, 0],
		[1, 0, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 1]
	];
	const logoMap = logo.flat();

	let hovering = $state(false);

	const opacity = 0.82;
	const leftWave = [
		{ color: `rgba(176, 0, 32, ${opacity})`, up: true },      // Red
		{ color: `rgba(183, 162, 206, ${opacity})`, up: false },  // Purple
		{ color: `rgba(230, 226, 69, ${opacity})`, up: true },    // Yellow
		{ color: `rgba(255, 255, 255, ${opacity})`, up: false }   // White
	];

	const rightWave = [
		{ color: `rgba(255, 255, 255, ${opacity})`, up: true },  // White
		{ color: `rgba(183, 162, 206, ${opacity})`, up: false }, // Purple
		{ color: `rgba(176, 0, 32, ${opacity})`, up: true },     // Red
		{ color: `rgba(230, 226, 69, ${opacity})`, up: false }   // Yellow
	];
</script>

<div class="bg-black flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden">
	
	<div class="flex w-full flex-1 items-center justify-center gap-16 md:gap-24 min-h-0 px-8">
		
		<div class="hidden md:flex items-center justify-end flex-1 h-[35vh] [--overlap-x:0.3rem] [--overlap-y:14.55%]" aria-hidden="true">
			{#each leftWave as item}
				<div
					class="wave-shape h-full w-[15vw] min-w-20 max-w-40 bg-current shrink-0 transition-transform -mr-(--overlap-x) last:mr-0 {item.up ? '-translate-y-(--overlap-y)' : '-scale-y-100 translate-y-(--overlap-y)'}"
					style="color: {item.color};"
				></div>
			{/each}
		</div>

		<div class="flex flex-col items-center justify-center gap-4 shrink-0">
			<a
				class="flex flex-col items-center hover:cursor-pointer relative z-10"
				onmouseenter={() => (hovering = true)}
				onmouseleave={() => (hovering = false)}
				href="/about"
			>
				<div class="w-75 grid grid-cols-6">
					{#each logoMap as color, i}
						<div
							class="w-12.5 aspect-square"
							class:fadeIn={color}
							style="animation-delay: {i * 25}ms"
						>
							<div
								class="h-full w-full"
								class:bg-primary={color}
								class:floating={hovering}
								style="animation-delay: {i * 50}ms"
							></div>
						</div>
					{/each}
				</div>
				<h1 class="font-aulos text-white text-7xl md:text-8xl tracking-tighter mt-4">
					AULOS
				</h1>
			</a>
			<p class="text-white text-2xl md:text-3xl font-light text-center tracking-wide">
				Conecta con tus artistas favoritos
			</p>
		</div>

		<div class="hidden md:flex items-center justify-start flex-1 h-[35vh] [--overlap-x:0.3rem] [--overlap-y:14.55%]" aria-hidden="true">
			{#each rightWave as item}
				<div
					class="wave-shape h-full w-[15vw] min-w-20 max-w-40 bg-current shrink-0 transition-transform -ml-(--overlap-x) first:ml-0 {item.up ? '-translate-y-(--overlap-y)' : '-scale-y-100 translate-y-(--overlap-y)'}"
					style="color: {item.color};"
				></div>
			{/each}
		</div>

	</div>
</div>

<style>
	.wave-shape {
		mask-image: url('/assets/Aulos_assets_ISOTIPO.svg');
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;
		-webkit-mask-image: url('/assets/Aulos_assets_ISOTIPO.svg');
		-webkit-mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes float {
		0%, 100% { transform: translateY(0) translateX(0); }
		25% { transform: translateY(-1px) translateX(1px); }
		50% { transform: translateY(-1px) translateX(-1px); }
		75% { transform: translateY(-2px) translateX(0.5px); }
	}

	.fadeIn {
		opacity: 0;
		animation: fadeIn 0.5s ease-out forwards;
	}

	.floating {
		animation: float 1.5s ease-in-out infinite;
	}
</style>