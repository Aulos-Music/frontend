<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-4xl p-8 font-sans">
	<header class="mb-12 flex items-center justify-between border-b border-gray-200 pb-4">
		<div>
			<h1 class="text-3xl font-bold tracking-tight text-gray-900">Aulos</h1>
			<p class="text-gray-500">From and to Music Enthusiasts</p>
		</div>

		<div class="flex items-center gap-2 text-sm">
			<span class="text-xs font-semibold uppercase tracking-wider text-gray-400">System:</span>
			{#if data.health === 'ok'}
				<span class="flex items-center font-medium text-emerald-600">
					<span class="mr-2 h-2 w-2 rounded-full bg-emerald-500"></span>
					Operational
				</span>
			{:else}
				<span class="flex items-center font-medium text-red-600">
					<span class="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
					Offline
				</span>
			{/if}
		</div>
	</header>

	<main>
		<h2 class="mb-6 text-xl font-semibold">Featured Artists</h2>

		{#if data.artists.length === 0}
			<div
				class="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500"
			>
				No artists found. Try adding one via the GraphiQL playground!
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each data.artists as artist}
					<div
						class="group relative block rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
					>
						<h3
							class="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600"
						>
							{artist.name}
						</h3>
						<p class="mt-2 line-clamp-2 text-gray-600">
							{artist.description || 'No description available.'}
						</p>
						<div class="mt-4 flex items-center font-mono text-xs text-gray-400">
							ID: {artist.id.slice(0, 8)}...
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</main>
</div>
