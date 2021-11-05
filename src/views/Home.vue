<template>
  <div class="home">
    <div class="temp"></div>
    <div class="blurb">
      <div class="temp2"></div>
      <h3> These are words.  Words are very good. ikis are enabled by wiki software,
      otherwise known as wiki engines. A wiki engine, being a form of a content management
      system, differs from other web-based systems such as blog software, in that the
      content is created without any defined owner or leader, and wikis have little inherent
      structure, allowing structure to emerge according to the needs of the users.[1] Wiki
      engines usu</h3>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

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
  }

  .blurb h3 {
    text-align: center;
    width: 600px;
  }

  .temp {
    width: 100%;
    height: 600px;
    background-color: gray;
  }

  .temp2 {
    background-color: blue;
    width: 200px;
    height: 200px;
    margin: 20px;
  }
</style>
