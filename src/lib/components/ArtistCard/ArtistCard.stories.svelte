<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ArtistCard from './ArtistCard.svelte';

	const { Story } = defineMeta({
		title: 'Components/ArtistCard',
		component: ArtistCard
	});
</script>

<Story
	name="ArtistCard"
	args={{
		artist: {
			id: '39e26e85-eb5a-441f-8d82-e80e8f1ec968',
			name: 'some name',
			description: 'some description',
			imgSrc: 'https://images.unsplash.com/photo-1605722243979-fe0be8158232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYzNjR8MHwxfGFsbHx8fHx8fHx8fDE3NzQ1MDEwMjd8&ixlib=rb-4.1.0&q=80&w=1080'
		}
	}}
/>

<Story
	name="ArtistCardNoImage"
	args={{
		artist: {
			id: '39e26e85-eb5a-441f-8d82-e80e8f1ec968',
			name: 'some name',
			description: 'some description'
		}
	}}
/>
