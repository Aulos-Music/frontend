<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { Snippet } from 'svelte';

	const button = cva('text-white font-semilight hover:cursor-pointer', {
		variants: {
			intent: {
				primary: 'bg-primary hover:bg-primary/80',
				secondary: 'bg-secondary hover:bg-secondary/80'
			},
			size: {
				small: 'py-1.5 px-2',
				medium: 'py-2 px-3',
				large: 'py-2.5 px-4'
			}
		}
	});

	interface Props extends HTMLButtonAttributes, VariantProps<typeof button> {
		children: Snippet;
	}

	const { intent = 'primary', size, children, ...rest }: Props = $props();
</script>

<button {...rest} class={button({ intent, size, class: rest.class })}>
	{@render children?.()}
</button>
