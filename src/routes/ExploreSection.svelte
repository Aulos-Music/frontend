<script lang="ts">

	const wavePattern = [
		3, 5, 2, 6, 8, 4, 3, 7, 9, 2, 4, 6, 5, 3, 7, 8, 4, 2, 5, 6, 3, 4, 7, 9, 5, 2, 4, 6, 3
	];


	const playButtonPixels = [
		[1, 0, 0, 0],
		[1, 1, 0, 0],
		[1, 1, 1, 0],
		[1, 1, 1, 1],
		[1, 1, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 0, 0]
	];
</script>

<section class="relative w-full bg-black h-[500px] md:h-[600px] overflow-hidden">
		
	<div class="absolute top-0 left-0 w-[71.43%] h-[40%] bg-secondary"></div>
	
	<div class="absolute top-0 right-0 w-[14.29%] h-[40%] bg-secondary"></div>

	<div class="absolute bottom-0 left-0 w-[71.43%] h-[25%] bg-secondary"></div>
	
	<div class="absolute bottom-0 right-0 w-[14.29%] h-[25%] bg-secondary"></div>

	<div class="absolute top-0 left-0 w-[71.43%] h-full flex flex-col pl-4 md:pl-8 z-10">
		<div class="h-[40%] flex flex-col justify-center items-start">
			<span class="inline-block bg-accent text-black px-3 py-1 text-sm md:text-base font-semibold tracking-wide shadow-sm">
				Explorar
			</span>
			<h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-tight">
				Selección curada<br/>de la semana
			</h2>
		</div>

		<div class="h-[35%] flex items-center gap-[2px] md:gap-1">
			{#each wavePattern as height}
				<div class="flex flex-col gap-0 w-3 md:w-5 items-center">
					<div class="bg-primary-variant w-full" style="height: {height * 6}px;"></div>
					<div class="bg-accent w-full" style="height: {height * 6}px;"></div>
				</div>
			{/each}
		</div>

		<div class="h-[25%] flex items-center">
			<p class="text-white text-xl md:text-3xl font-light tracking-wide">
				Curado por KBZON
			</p>
		</div>
	</div>

	<div class="absolute top-[57.5%] left-[78.57%] -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[400px] md:max-w-[480px] z-50">
		<a href="#play" class="group block relative w-full aspect-square bg-[#1a1a1a] border-2 border-[#333] hover:border-white transition-colors duration-300">
			
			<img 
				src="https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop&grayscale=true" 
				alt="Lavadora Fest" 
				class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
			/>

			<div class="absolute top-0 left-0 w-full p-4 flex justify-between items-start">
				<div>
					<p class="text-white text-sm font-semibold tracking-wide">Lavadora Fest</p>
					<p class="text-white/70 text-xs mt-1">de KBZON <span class="ml-2 font-bold text-white">45 min</span></p>
				</div>
				<div class="w-12 h-14 bg-error flex flex-col items-center justify-center p-1">
					<div class="w-full h-10 bg-white/20 grid grid-cols-3 grid-rows-3 gap-px p-[2px]">
						{#each Array(9) as _, i}
							<div class="bg-white/80 {i % 2 === 0 ? 'opacity-100' : 'opacity-0'}"></div>
						{/each}
					</div>
					<span class="text-[8px] text-white mt-1 font-bold">Boletos</span>
				</div>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<div class="flex flex-col gap-[2px] transform transition-transform duration-300 group-hover:scale-110">
					{#each playButtonPixels as row}
						<div class="flex gap-[2px]">
							{#each row as pixel}
								<div class="w-3 h-3 md:w-4 md:h-4 {pixel === 1 ? 'bg-accent' : 'bg-transparent'}"></div>
							{/each}
						</div>
					{/each}
				</div>
			</div>

			<h3 class="absolute left-4 bottom-16 text-5xl md:text-7xl font-bold text-white/10 pointer-events-none tracking-tighter leading-none">
				Lavadora<br/>Fest
			</h3>
		</a>
	</div>
</section>