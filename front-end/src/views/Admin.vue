<template>
  <div class="Admin">
    <div class="addArtist">
      <h2>Add an artist</h2>
      <div class="artSub">
        <input v-model="addArtistName">
        <input v-model="addArtistURL">
        <button v-on:click="addArtist">Submit</button>
      </div>
    </div>
    <div class="selectArtist">
      <p>Enter Artist:</p><input list="allArt" v-model="potArtName">
        <datalist id="allArt">
          <option v-for="art in allArtists" :key="art.name" :value="art.name"/>
        </datalist>
      <button v-on:click="selectArtist">Select</button>
    </div>
    <div class="addConcert" v-if="currentArt">
      <h2>Concert for {{ currentArt.name }}</h2>
      <img :src="currentArt.url">
      <h3>Location</h3><input v-model="concLoc">
      <h3>Venue</h3><input v-model="concVen">
      <h3>Minimum Price</h3><input v-model="concMin">
      <h3>Tickets Left</h3><input v-model="concTicks">
      <h3>Date</h3><input v-model="concDate">
      <button v-on:click="addConcert">Submit</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: ()=> {
      return {
        addArtistName: "",
        addArtistURL: "",
        allArtists: [],
        potArtName: "",
        currentArt: "",
        concLoc: "",
        concVen: "",
        concMin: "",
        concTicks: "",
        concDate: "",
      }
    },
    async created() {
      this.allArtists = (await axios.get("/api/artists")).data;
    },
    methods: {
      addConcert() {
        axios.post("/api/concert", {
          artist: this.currentArt.name,
          location: this.concLoc,
          venue: this.concVen,
          min_price: this.concMin,
          tickets_left: this.concTicks,
          date: this.concDate,
        });
        this.concLoc = "";
        this.concVen = "";
        this.concMin = "";
      },
      addArtist() {
        try {
          axios.post("/api/artist", {name: this.addArtistName, url: this.addArtistURL});
          this.con
        } catch(error) {
          console.log(error);
        }
      },
      selectArtist() {
        this.currentArt = this.allArtists.find((art)=> {
          if (art.name == this.potArtName) {
            return art;
          }
        });
      }
    }
  }
</script>
