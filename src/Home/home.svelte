<script>
	import { Link } from 'svelte-routing'
</script>

<main>
	<header class="welcome_heading">
		FIDISYS - Events
		<img 
			class="landing-image" 
			src="./images/landing.svg" 
			alt="Landing Image, A picture of a illustration in speaking posture"
		/>
	</header>
	<p class="welcome_description">
		We are a team of passionate individuals who likes 
		<strong>sharing</strong> our knowledge.
		<br>
		In our efforts for bringing the community together, we are actively <strong>participating</strong> and
		<strong>organizing</strong> events in Chennai and expanding to the next tier of cities.
		<br>
		We are aiming to share all our events / talks at one place. 
		It helps as a single stop shop for all our notes and links for further reference.
	</p>

	<heading class="events_heading">Upcoming Events / Talks</heading>
	<section class="events-section">
		<div class="card clickable">
			<div class="card-image">
				<img src="https://via.placeholder.com/300x250" class="image-responsive"/>
			</div>
			<div class="card-header small_heading">
				Prasant Kumar @JSRealm
			</div>
		</div>
	</section>

	<div class="break" />

	<heading class="events_heading">Past Events / Talks</heading>
	<section class="events-section">
		<Link to="oss">
			<div class="card clickable">
				<div class="card-image">
					<img src="https://via.placeholder.com/300x250" class="image-responsive"/>
				</div>
				<div class="card-header small_heading">
					Open Source Software (Hacktoberfest)
				</div>
			</div>
		</Link>

		<Link to="chennaijs">
			<div class="card clickable">
				<div class="card-image">
					<img src="https://via.placeholder.com/300x250" class="image-responsive"/>
				</div>
				<div class="card-header small_heading">
					Chennai JS
				</div>
			</div>
		</Link>

		<div class="card clickable">
			<div class="card-image">
				<img src="https://via.placeholder.com/300x250" class="image-responsive"/>
			</div>
			<div class="card-header small_heading">
				Tech Talks (Salem)
			</div>
		</div>
		
		
	</section>
</main>

<style>
	.landing-image {
		display: block;
		max-width: 500px;
		margin: 15px auto;
	}

	.clickable {
		cursor: pointer;
	}

	.events-section {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, 300px);
	}

	.welcome_description {
		text-align: center;
		font-size: 0.8rem;
		line-height: 1.6;
		padding-bottom: 15px;
		border-bottom: 1px dotted #FF5D5D;
	}

	.welcome_heading {
		text-align: center;
		font-family: 'Roboto Slab', serif;
		font-size: 2rem;
	}

	.small_heading {
		font-family: 'Roboto Slab', serif;
		font-size: 0.8rem;
	}

	.events_heading {
		font-family: 'Roboto Slab', serif;
		font-size: 1.2rem;
		margin: 15px 0px;
		display: block;
	}

	.break {
		margin-top: 25px;
		border-bottom: 1px dotted #FF5D5D;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>