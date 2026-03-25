<script>
	import HeaderButton from './HeaderButton.svelte';
	import BurgerButton from './BurgerButton.svelte';

	const { data } = $props();
</script>

<header class="bg-white mb-0 mt-0 px-4 md:px-8 md:py-4 flex w-full items-center justify-between">
	<h1 data-testid="nav-title" class="text-xl md:text-3xl font-bold text-black">AULOS</h1>

	<HeaderButton text={'Explorar'} linkTo={'/explore'} />
	<HeaderButton text={'Artistas'} linkTo={'/artists'} />
	<HeaderButton text={'Destacado'} linkTo={'/featured'} />

	<div class="gap-2 text-sm md:flex hidden items-center">
		<button class="md:block hidden transition-opacity hover:opacity-70" aria-label="Search">
			<img src="/assets/icons/Aulos_assets_Search_icon.svg" alt="Search" class="h-20 w-20" />
		</button>
	</div>
	<BurgerButton />
</header>

