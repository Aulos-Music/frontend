<script lang="ts">
    const { data } = $props();
    import Header from '$lib/Header.svelte';
    import Hero from './Hero.svelte';
    import ExploreSection from './ExploreSection.svelte';
    import FeaturedArtists from './FeaturedArtists.svelte';
</script>

<div class="font-sans mx-auto w-full bg-black min-h-screen">
    <Header {data} />

    <main>
        <Hero />
        <ExploreSection />
        <FeaturedArtists artists={data.artists} />
    </main>
</div>