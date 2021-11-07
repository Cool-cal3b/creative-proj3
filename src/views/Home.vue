<template>
  <div class="home">
    <div class="imgContainer"><img src="/images/concert.jpg" id="image" width = 100%></div>
    <div class="blurb">
      <div class="temp2"></div>
      <h3> Browse local concerts, local musicians, and concerts from your favorite artists here.</h3>
      <router-link to="/artists" class="des_link">Get Started</router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
  }

  .blurb {
    display: flex;
    align-items: center;
    padding: -60px;
  }

  .blurb h3 {
    text-align: center;
    width: 600px;
  }

  .temp2 {
    display: flex;
    height: 300px;
    margin: 20px;
  }

  .des_link {
  text-decoration: none;
  color: #808080;
  }

  .imgContainer {
  overflow: hidden;
    height: 700px;
     max-height: 12000px;
     position: relative;
  }

  #image {
  display: block;
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
  }
</style>
