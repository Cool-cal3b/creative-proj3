<template>
  <div class="nearMe">
    <h1>Concerts near you</h1>
    <p>Enter Location:</p><input list="location" v-model="loc">
      <datalist  id="location">
        <option v-for="conc in concertPlaces" :key="conc" :value="conc"/>
      </datalist>
    <div class="ind_conc" v-for="conc in filtConcerts" :key="conc.id">
      <div class="artInfo">
        <h3>Artist: {{ conc.artist.name }}</h3>
        <h3>{{conc.conc.location}}</h3>
        <h3>{{conc.conc.date}}</h3>
      </div>
      <div class="tickInfo">
        <h3>Cost of tickets: ${{ conc.conc.min_price }}   ({{ conc.conc.tickets_left}} left)</h3>
        <button v-on:click="addTick(conc.artist, conc.conc)" :key="conc.id">Buy Ticket</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return { loc: ""}
  },
  methods: {
    addTick(art, conc) {
      if (!this.$root.$data.tickets.includes(conc)) {
        this.$root.$data.tickets.push(conc)
        this.$root.$data.artistData.find(el => el.id === art.id).concerts.find(el => el.id === conc.id).tickets_left -= 1;
      }
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
      if (this.loc === "") return;
      let artists = this.$root.$data.artistData;
      let concerts = [];

      for (let artist of artists) {
        for (let concert of artist.concerts) {
          if (concert.location.toLowerCase().includes(this.loc.toLowerCase())) concerts.push({ artist: artist, conc: concert});
        }
      }
      return concerts;
    }
  }
}

</script>

<style>
.nearMe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ind_conc {
  border: 2px solid black;
  margin: 10px;
  width: 500px;
}

.ind_conc * {
  margin: 15px;
}

.ind_conc button {
  width: 70px;
  height: 40px;
}

.artInfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
