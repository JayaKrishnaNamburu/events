<script>
	import { Link } from 'svelte-routing'
</script>

<nav>
	<ul>
		<Link to="/">
			<li>
				Home
			</li>
		</Link>
	<ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		font-family: 'Roboto Slab', serif;
		font-size: 1rem;
		margin: 15px 0px;
		cursor: pointer;
	}

	ul {
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	li {
		padding: 5px;
	}

	li:hover {
		border-bottom: 2px solid #FF5D5D;
	}
</style>