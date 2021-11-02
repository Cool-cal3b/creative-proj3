<template>
  <div class="artists">
    <h1>All Artists</h1>
    <div class=ind_artist v-for="artist in artists" :key="artist.name" v-on:click="changeShowVal(artist.name)">
      <h2> {{ artist.name }} </h2>
      <div class="all_conc" v-if="concertShow(artist.name)">
        <div class="concerts" v-for="concert in artist.concerts" :key="concert.place">
          <h2>Location: {{ concert.location }}</h2>
        </div>
      </div>
      <div v-else><h2> Click here for more information </h2></div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      let artists = this.$root.$data.artistData;
      let temp = [];
      for (let i = 0; i < artists.length; i++) {
        temp.push({clicked: false, name: artists[i].name})
      }

      return {
        show: temp,
      }
    },
    methods: {
      concertShow(name) {
        return this.show.find(el => el.name === name).clicked
      },
      changeShowVal(name) {
        this.show.find(el => el.name === name).clicked = !(this.show.find(el => el.name === name).clicked);
      }
    },
    computed: {
      artists() {
        return this.$root.$data.artistData;
      },
    }
  }
</script>

<style>
  .ind_artist {
    display: flex;
  }

  .ind_artist h2 {
    margin: 20px;
  }

  .artists {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
