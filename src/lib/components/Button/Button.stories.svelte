<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		args: {
			intent: 'primary',
			size: 'medium',
			children: defaultButtonTag
		}
	});
</script>

{#snippet defaultButtonTag()}
	Button
{/snippet}

<Story name="Primary" />
<Story name="Secondary" args={{ intent: 'secondary' }} />
