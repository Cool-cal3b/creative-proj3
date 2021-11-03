<template>
  <div class="nearMe">
    <h1>Concerts near you</h1>
    <p>Enter Location:</p><input list="location" v-model="loc">
      <datalist  id="location">
        <option v-for="conc in concertPlaces" :key="conc" :value="conc"/>
      </datalist>
    <div class="ind_conc" v-for="conc in filtConcerts" :key="conc.id">
      <h3>{{conc.location}}</h3>
      <h3>{{conc.date}}</h3>
      <button v-on:click="addTick(conc)" :key="conc.id">Buy Ticket</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return { loc: ""}
  },
  methods: {
    addTick(conc) {
      if (!this.$root.$data.tickets.includes(conc)) this.$root.$data.tickets.push(conc)
    }
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
          if (concert.location.toLowerCase().includes(this.loc.toLowerCase())) concerts.push(concert);
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
  align-items: center;
  justify-content: center;
}

.ind_conc h3 {
  margin: 20px;
}

.ind_conc button {
  width: 70px;
  height: 40px;
}

</style>
