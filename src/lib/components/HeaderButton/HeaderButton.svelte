<script>
	const { text, linkTo } = $props();
</script>

<div class="md:flex hidden">
	<a class="text-black text-xl hover:cursor-pointer hover:underline" href={linkTo}>{text}</a>
</div>
