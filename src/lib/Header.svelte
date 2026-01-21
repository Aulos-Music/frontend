<script>
	import HeaderButton from './HeaderButton.svelte';
	import BurgerButton from './BurgerButton.svelte';

	const { data } = $props();
</script>

<header class="mx-4 mb-2 mt-4 md:py-4 flex items-center justify-between">
	<h1 class="text-xl md:text-3xl font-bold text-black">AULOS</h1>

	<HeaderButton text={'Explorar'} linkTo={'/explore'} />
	<HeaderButton text={'Artistas'} linkTo={'/artists'} />
	<HeaderButton text={'Destacado'} linkTo={'/featured'} />

	<div class="gap-2 text-sm md:flex hidden items-center">
		<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">System:</span>
		{#if data.health === 'ok'}
			<span class="font-medium text-emerald-600 flex items-center">
				<span class="mr-2 h-2 w-2 bg-emerald-500 rounded-full"></span>
				Operational
			</span>
		{:else}
			<span class="font-medium text-red-600 flex items-center">
				<span class="mr-2 h-2 w-2 bg-red-500 rounded-full"></span>
				Offline
			</span>
		{/if}
	</div>
	<BurgerButton />
</header>
