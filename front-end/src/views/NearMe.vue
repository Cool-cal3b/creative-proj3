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
        <button v-on:click="addTick(conc)" :key="conc.id">Buy Ticket</button>
      </div>
      </div>
      <div id="empty" v-if="empty">
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loc: "",
      artists: [],
    }
  },

  methods: {
    addTick(conc) {
      if (!this.$root.$data.tickets.includes(conc.conc)) {
        this.$root.$data.tickets.push(conc.conc)
        conc.conc.tickets_left -= 1;
      }
    }
  },
  async created() {
    let artistsRes = (await axios.get("/api/artists")).data;
    for (let art of artistsRes) {
      let newArt = {name: art.name, url: art.url, clicked: false, _id: art._id}
      let url = "api/concerts/" + art.name;
      newArt.show = (await axios.get(url)).data.concerts;
      this.artists.push(newArt);
    }
  },
  computed: {
    concertPlaces() {
      let artists = this.artists;
      let concertPlaces = [];

      for (let artist of artists) {
        for (let concert of artist.show) {
          if (!concertPlaces.includes(concert.location)) concertPlaces.push(concert.location);
        }
      }
      return concertPlaces;
    },
    filtConcerts() {
      if (this.loc === "") return;
      let artists = this.artists;
      let concerts = [];

      for (let artist of artists) {
        for (let concert of artist.show) {
          if (concert.location.toLowerCase().includes(this.loc.toLowerCase())) concerts.push({ artist: artist, conc: concert});
        }
      }
      return concerts;
    },
    empty() {
      if (this.loc === "") return true;
      let artists = this.artists;

      for (let artist of artists) {
        for (let concert of artist.show) {
          if (concert.location.toLowerCase().includes(this.loc.toLowerCase())) return false;
        }
      }
      return true;
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

#empty {
  width: 100%;
  height: 400px;
}

</style>
