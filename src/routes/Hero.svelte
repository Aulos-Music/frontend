<script>
	const logo = [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0, 0],
		[0, 1, 0, 0, 1, 0],
		[0, 1, 0, 0, 1, 0],
		[1, 0, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 1]
	];
	const logoMap = logo.flat();

	let hovering = false;
</script>

<div class="bg-black gap-12.5 flex h-[80vh] w-full flex-col items-center justify-center">
	<a
		class="w-75 grid grid-cols-6 hover:cursor-pointer"
		onmouseenter={() => (hovering = true)}
		onmouseleave={() => (hovering = false)}
		href="/about"
	>
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
	</a>
	<p class="text-white text-3xl text-center">Conecta con tus artistas favoritos</p>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0) translateX(0);
		}
		25% {
			transform: translateY(-1px) translateX(1px);
		}
		50% {
			transform: translateY(-1px) translateX(-1px);
		}
		75% {
			transform: translateY(-2px) translateX(0.5px);
		}
	}

	.fadeIn {
		opacity: 0;
		animation: fadeIn 0.5s ease-out forwards;
	}

	.floating {
		animation: float 1.5s ease-in-out infinite;
	}
</style>
