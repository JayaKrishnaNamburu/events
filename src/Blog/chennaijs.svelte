<script>
	import Navigation from '../Components/navigation.svelte'
	import Banner from '../Components/banner.svelte'
	import Author from '../Components/author.svelte'
</script>

<main>
	<Navigation />
	<article>
		<Banner image={'./images/chennai_js.jpg'}/>
		<Author image={'./images/jk.png'} name={'Jaya Krishna Namburu'} time={'Wednesday, 7 December 2019'}/>		
		<p> We are delighted for this event, as we got an oppurtunity to meet the like 
		minded oss people from the community. So, we decided to attend the event with two speakers
		<strong>Jaya Krishna Namburu</strong> & <strong>Sree Krishna Raja</strong>.Let's quicky dive into
		the details of the topics. </p>

		<h4 class="small_heading">Rethinking Frontend Architecture in terms of DX and UX</h4>
		<p>If we consider the front-end world, we are very privileged with the presence of huge number of 
		tools. From build tools till hosting and serving them. Some times it even feels a little overwhelming.</p>
		<p>In one way if we consider the newbies of JS, they might even feel it a little bit harder to understand
		how all these things work together to result a amazing products.</p>
		<p>Slides for this talk can be found <a href="https://elegant-noyce-68b57d.netlify.com/" target="_blank">here</a></p>
	
		<div class="break"/>

		<h4 class="small_heading">Rexy</h4>
		<p>Yes, you heard it right. Rexy is a new approach for solving the problem of implementing mathematical
		problems in our daily programing languages, with a platform independent approach.
		<strong><a href="https://twitter.com/skrthetechie" />Sree Krishna<a/></strong> is working day in day out to make this happen.
		As, he shares about the motivatin behind Rexy and the future roadmap.</p>
	</article>
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