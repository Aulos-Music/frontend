<script lang="ts">
	import Button from '../Button/Button.svelte';
	interface Props {
		user: string;
	}

	const { user }: Props = $props();
</script>

{#if user}
	<Button size="large" class="md:flex hidden">
		<a href={`/users/${user}`}>
			{user}
		</a>
	</Button>
{:else}{/if}
