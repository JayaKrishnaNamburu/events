<script>
	import { Router, Route } from 'svelte-routing'
	import Home from './Home/home.svelte'
	import OSS from './Blog/oss.svelte'
	import ChennaiJS from './Blog/chennaijs.svelte'
	import PrasanthChennaiJS from './Blog/prasanth_chennaijs.svelte'

	export let url = "";
</script>

<main>
	<Router url="{url}">
		<Route path="/oss" component="{OSS}"></Route>
		<Route path="/chennaijs" component="{ChennaiJS}"></Route>
		<Route path="/prasanth_chennaijs" component="{PrasanthChennaiJS}"></Route>
		<Route path="/"><Home /></Route>
	</Router>
</main>

<style>
	main {
		padding: 0;
		margin: 0 auto;
		border-top: 5px solid #FF5D5D;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>