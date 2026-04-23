<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HeaderButton from './HeaderButton.svelte';

	const { Story } = defineMeta({
		title: 'Components/HeaderButton',
		component: HeaderButton,
		args: {
			text: 'Button',
			linkTo: ''
		}
	});
</script>

<Story name="HeaderButton" />
