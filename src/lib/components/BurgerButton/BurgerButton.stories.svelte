<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BurgerButton from './BurgerButton.svelte';

	const { Story } = defineMeta({
		title: 'Components/BurgerButton',
		component: BurgerButton,
		globals: {
			viewport: {
				value: 'mobile1'
			}
		}
	});
</script>

<Story name="BurgerButton" />
