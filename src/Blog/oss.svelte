<script>
	import Author from '../Components/author.svelte'
	import Banner from '../Components/banner.svelte'
	import Navigation from '../Components/navigation.svelte'
	import Event from '../Components/event.svelte'
</script>

<main>
	<Navigation />
	<section>
		<article>
			<Banner image={'./images/hacktober_fest.JPG'}/>
			<Author image={'./images/jk.png'} name={'Jaya Krishna Namburu'} time={'Wednesday, 23 October 2019'}/>
			This event holds a special place for us. It's our very first event as a 
			team in association with
			<a href="http://tekclansolutions.com/" class="link" target="_blank">Tekclan</a>.
			<div class="break" />
			We have choosen October as it's the right time to start motivating
			people to contribute for Open Source Software. Thanks to 
			<a href="https://www.digitalocean.com/" class="link" target="_blank"> Digital Ocean </a> for coming up with the concept of
			<a href="https://hacktoberfest.digitalocean.com/" class="link" target="_blank">Hacktoberfest</a>
			which motivated many individuals to start contributing to open source.
			<div class="break" />
			<h4 class="small_heading">Open Source Software</h4>
			<p>In the preset day of software development, open-source plays a very important role. From building
			libraries to using the existing one, most of the work is being done using oss software. Companies starting
			to adopt oss first approach, products are being built and open-sourced and therefor it helps in reducing the 
			man power required for development and maintainace as well. A wider audience get to witness your product 
			grow and evolve over the time.</p>
			<div class="break" />
			<p>In this talk we discussed about how, why and where to get started with open source. And how we as a team
			started building some great results in less amount of time, by taking the advantage of some awesome
			oss applications which are already present. For futher details, please follow the link
			<a href="https://slides.com/jayakrishnanamburu/deck#/">here</a></p>
		</article>

		<h4 class="small_heading">Building Open Source Software</h4>
		<p>Hacktoberfest, had a visual impact on the oss world. When we talk about oss, most of the people 
		think its all about contributing to the existing libraries or projects. Oss is not only about
		consuming and fixing bugs or writing documentation, we can contribute even by building and open-sourcing them.
		 We took a dive into what are the Do's and Dont's of building and maintaining oss applications.</p>
		<div class="break" />
		<p>The hard part of oss is <strong>maintainace</strong>. And mainly when it comes to Javascript applications, 
		we have a wide range of platforms to support. </p>

		<p><strong><a href="https://twitter.com/skrthetechie" target="_blank">Sree Krishna Raja</a></strong> shares his story about how he started building his own libraires and
		open-sourcing them.</p>
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