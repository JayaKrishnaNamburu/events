<script>
	export let name;
	export let initials;
	export let image;
</script>

<section>
	<div class="chip break">
		{#if image}
			<img src="./images/{image}.png" class="avatar avatar-sm" alt={name} style="background-color: transparent"/>
		{:else}
			<figure data-initial="{initials}" class="avatar avatar-sm" />
		{/if}
		{name}
	</div>
</section>

<style>
	section {
		margin: 10px 0px;
	}
	figure {
		background-color: transperant;
	}
</style>