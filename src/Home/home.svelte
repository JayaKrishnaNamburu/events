<script>
	import { Link } from 'svelte-routing'
	import NameChip from '../Components/name_chip.svelte'
</script>

<main>
	<header class="welcome_heading">
	<div class="welcome_logo">
		<img src="./images/logo.png" class="credits_logo" alt="Fidisys logo" /> <span>@Meetups</span>
	</div>
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

	<heading class="events_heading">Upcoming Talks</heading>
	<p>All the list of all upcoming talks where our team is going to participate.</p>
	<section class="events-section">
		<div class="card clickable">
			<div class="card-header small_heading">
				<p>Rethinking Frontend Architecutre <strong> @React-Bangalore</strong></p>
				<custom-date date="1579967846"></custom-date>
					<NameChip name="Jaya Krishna Namburu" initials="JK" image="jk" />
			</div>
		</div>

		<div class="card clickable">
			<div class="card-header small_heading">
				<p>Why should we develop Mobile Applications?<strong> @Tirupati</strong></p>
				<custom-date date="1579967846"></custom-date>
				<NameChip name="Prasanth Kumar" initials="PK" />
			</div>
		</div>

		<div class="card clickable">
			<div class="card-header small_heading">
				<p>Frontend as a Service (FaaS) <strong> @JSRealmChennai</strong></p>
				<custom-date date="1580572646"></custom-date>
				<NameChip name="Prasanth Kumar" initials="PK" />
			</div>
		</div>

	</section>

	<div class="break" />

	<!-- <section>
		<heading class="events_heading">Upcoming Events</heading>
		<div class="break" />
	</section> -->

	<heading class="events_heading">Past Events / Talks</heading>
	<section class="events-section">
		<Link to="oss">
			<div class="card clickable">
				<div class="card-image">
					<img
						src="./images/hacktober_fest.jpg"
						class="card-image-wrapper"
						alt="Hacktoberfest Event of Fidisys"
					/>
				</div>
				<div class="card-header small_heading">
					Hacktoberfest
				</div>
			</div>
		</Link>

		<Link to="prasanth_chennaijs">
			<div class="card clickable">
				<div class="card-image">
					<img src="https://via.placeholder.com/300x250" class="image-responsive"/>
				</div>
				<div class="card-header small_heading">
					Desing Thinking <strong>@Chennai JS</strong>
				</div>
			</div>
		</Link>

		<Link to="chennaijs">
			<div class="card clickable">
				<div class="card-image">
					<img src="./images/chennai_js.jpg" class="card-image-wrapper"/>
				</div>
				<div class="card-header small_heading">
					Tech-Talks <strong>@Chennai JS</strong>
				</div>
			</div>
		</Link>

		<div class="card clickable">
			<div class="card-image">
				<img src="./images/tech_talk_salem.jpg" class="card-image-wrapper"/>
			</div>
			<div class="card-header small_heading">
				Tech-Talks <strong>@Salem</strong>
			</div>
		</div>
	</section>

	<div class="break" />

	<section class="credits">
		<h5 class="credits_heading">Our Friends</h5>
		<heading>People who joined us in the mission of bringing the community together.</heading>
		<section class="credits_gallery">
			<img src="./images/tekclan-logo.png" alt="Tekclan Logo" class="credits_logo"/>
			<!-- <img src="./images/gdg.png" alt="Google Developers Group Logo" class="credits_logo" /> -->
		</section>
	</section>
</main>
<footer class="home_footer">
	Copyright © 2019 Fidisys Technologies. 
</footer>

<style>
	.card-image-wrapper {
		width: 300px;
		height: 250px;
		object-fit: cover;
	}

	main {
		padding: 1em;	
	}

	.home_footer {
		padding: 12px;
		font-size: 0.6rem;
		text-align: center;
		background-color: #F5F7F8;
		border: 1px solid #e6e6e6;
	}

	.welcome_logo {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}

	.credits {
		margin-top: 20px;
		text-align: center;
	}

	.credits_logo {
		width: 150px;
		height: auto;
	}

	.credits_heading {
		font-family: 'Roboto Slab', serif;
		font-size: 1.2rem;
		line-height: 1.2;
	}

	.landing-image {
		display: block;
		margin: 20px auto;
		height: 200px;
		width: 100%;
	}

	.clickable {
		cursor: pointer;
	}

	.events-section {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, 300px);
	}

	.credits_gallery {
		/* display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, 150px); */
		margin-top: 20px;
		text-align: center;
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
		font-size: 1.5rem;
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

		.landing-image {
			display: block;
			margin: 15px auto;
			height: 400px;
			width: 100%;
		}
	}
</style>