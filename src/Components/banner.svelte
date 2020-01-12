<script>
 export let image
</script>

<figure>
	<img src="{image}" class="banner"/>
</figure>

<style>
	figure {
		margin: 0px;
	}

	.banner {
		width: 100%;
		height: 350px;
		max-height: 350px;
		border-radius: 10px;
		object-fit: cover;
	}

</style>