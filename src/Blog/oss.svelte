<script>
	import Author from '../Components/author.svelte'
	import Banner from '../Components/banner.svelte'
	import Navigation from '../Components/navigation.svelte'
	import Event from '../Components/event.svelte'
</script>

<main>
	<Navigation />
	<section>
		<Banner image={'./images/hacktober_fest.JPG'}/>
		<Author image={'./images/jk.png'} name={'Jaya Krishna Namburu'} time={'Wednesday, 23 October 2019'}/>
		<article>
			This event holds a special place for us. Since, it's our very first event as a 
			team in association with
			<a href="http://tekclansolutions.com/" class="link" target="_blank">Tekclan</a>.
			<div class="break" />
			We have choosen October as it's the right time to start motivating
			people to contribute to Open Source Software. Thanks to 
			<a href="https://www.digitalocean.com/" class="link" target="_blank"> Digital Ocean </a> who came up with the concept of
			<a href="https://hacktoberfest.digitalocean.com/" class="link" target="_blank">Hacktober fest</a>
			which helped many individuals to start contributing to open source.
			<div class="break" />
			<h4 class="small_heading">Open Source Software</h4>
			<p>In the preset day of software development, open source plays a very important role. From building
			libraries to using the existing them, most of the work is being done using oss software. Companies starting
			to adopt oss first approach, products are being built and open-sourced and therefor it helps in reducing the 
			man power required for development and maintainace as well. A wider audience get to witness your product 
			grow and evolve over the time.</p>
			<div class="break" />
			<p>We discussed about how, why and where to get started with open source. For futher details, please follow the link
			<a href="https://slides.com/jayakrishnanamburu/deck#/">here</a></p>
		</article>

		<h4 class="small_heading">Developing your own Open Source Software</h4>
		<p>After Digital Ocean introducing Hacktoberfest, its a visual impact it had on the oss world. Not only by
		consuming and fixing bugs or writing documentation, we can contribute even by building and open-sourcing them. We took a dive
		into what are the Do's and Dont's of building and maintaining oss applications.</p>
	<section>
</main>

<style>

a {
	text-decoration: underline;
}

.break {
	height: 15px;
}

.link {
	color: #FF5D5D !important;
	font-weight: bold;
}

main {
	padding-top: 0px;
	padding-left: 35px;
	padding-right: 35px;
}

article {
	margin-top: 20px;
	font-size: 0.8rem;
	line-height: 1.6;
}

.small_heading {
	font-family: 'Roboto Slab', serif;
	line-height: 1.2;
	margin-top: 10px;
	margin-bottom: 10px;	
}

</style>