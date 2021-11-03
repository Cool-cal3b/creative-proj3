<template>
  <div class="nearMe">
    <h1>Concerts near you</h1>
    <input list="location" v-model="loc">
      <datalist  id="location">
        <option v-for="conc in concertPlaces" :key="conc" :value="conc"/>
      </datalist>
    <div class="ind_conc" v-for="conc in filtConcerts" :key="conc.id">
      <h3>{{conc.location}}</h3>
      <h3>{{conc.date}}</h3>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return { loc: ""}
  },
  computed: {
    concertPlaces() {
      let artists = this.$root.$data.artistData;
      let concertPlaces = [];

      for (let artist of artists) {
        for (let concert of artist.concerts) {
          if (!concertPlaces.includes(concert.location)) concertPlaces.push(concert.location);
        }
      }
      return concertPlaces;
    },
    filtConcerts() {
      let artists = this.$root.$data.artistData;
      let concerts = [];

      for (let artist of artists) {
        for (let concert of artist.concerts) {
          if (concert.location.includes(this.loc)) concerts.push(concert);
        }
      }
      return concerts;
    }
  }
}

</script>

<style>

.ind_conc {
  display: flex;
}

.ind_conc h3 {
  margin: 20px;
}

</style>
