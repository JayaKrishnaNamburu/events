<script>
  export let image
  export let name
  export let time
</script>

<section class="wrapper">
  <figure class="avatar avatar-lg" style="background-color: #fff;">
    <img src="{image}" />
  </figure>
  <div class="author-details">
    <span class="written-date">{time}</span>
    <span class="author-name" aria-label="Author name is {name}">{name}</span>
  </div>
</section>

<style>
  .wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .author-details {
    display: inline-flex;
    flex-direction: column;
    margin-left: 5px;
  }

  .written-date {
    color: #999;
    font-size: 0.6rem;
    line-height: 1;
  }

  .author-name {
    font-family: 'Roboto Slab', serif;
    font-size: 0.8rem;
    vertical-align: bottom;
  }
</style>