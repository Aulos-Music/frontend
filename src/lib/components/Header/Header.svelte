<script lang="ts">
	import HeaderButton from '../HeaderButton/HeaderButton.svelte';
	import BurgerButton from '../BurgerButton/BurgerButton.svelte';
	import UserHeader from '../UserHeader/UserHeader.svelte';
	import SearchHeader from '../SearchHeader/SearchHeader.svelte';

	interface Props {
		user: string;
	}

	const { user }: Props = $props();
</script>

<header class="bg-white mb-0 mt-0 px-4 md:px-8 md:py-4 flex w-full items-center justify-between">
	<h1 data-testid="nav-title" class="text-xl md:text-3xl font-bold text-black">AULOS</h1>
	<div class="md:flex gap-24 hidden w-[65%] justify-center">
		<HeaderButton text={'Explorar'} linkTo={'/explore'} />
		<HeaderButton text={'Artistas'} linkTo={'/artists'} />
		<HeaderButton text={'Destacado'} linkTo={'/featured'} />
	</div>
	<UserHeader {user} />
	<SearchHeader />
	<BurgerButton />
</header>
