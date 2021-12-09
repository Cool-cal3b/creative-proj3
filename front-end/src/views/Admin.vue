<template>
  <div class="Admin">
    <div class="addArtist">
      <h2 id="newArtist">Add an artist:</h2>
      <div class="artSub">
        <input v-model="addArtistName" placeholder="Artist name">
        <input v-model="addArtistURL" placeholder="Image URL">
        <button v-on:click="addArtist">Submit</button>
      </div>
    </div>
    <div class="selectArtist">
      <h2 id="existingArtist">Search existing artist:</h2>
      <input list="allArt" v-model="potArtName">
      <datalist id="allArt">
        <option v-for="art in allArtists" :key="art.name" :value="art.name"/>
      </datalist>
      <button v-on:click="selectArtist">Select</button>
    </div>
    <div class="addConcert" v-if="currentArt">
      <h2>Add new concert for {{ currentArt.name }}:</h2>
      <img :src="currentArt.url" crossorigin="anonymous">
      <h3>Location</h3><input v-model="concLoc">
      <h3>Venue</h3><input v-model="concVen">
      <h3>Minimum Price</h3><input v-model="concMin">
      <h3>Tickets Left</h3><input v-model="concTicks">
      <h3>Date</h3><input v-model="concDate">
      <h3 class="buttons">
        <button v-on:click="addConcert">Submit</button>
      </h3>
      <h3>
        <button v-on:click="removeArtist">Remove {{currentArt.name}} and concerts</button>
      </h3>
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
        this.concTicks = "";
        this.concDate = "";
      },
      async addArtist() {
        try {
          axios.post("/api/artist", {name: this.addArtistName, url: this.addArtistURL});
          this.addArtistName = "";
          this.addArtistURL = "";
          this.allArtists = (await axios.get("/api/artists")).data;
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
      },
      async removeArtist() {
        await axios.delete("/api/artist/"+this.currentArt._id+"/"+this.currentArt.name);
        this.allArtists = (await axios.get("/api/artists")).data;
        this.potArtName = "";
        this.currentArt = "";
      }
    }
  }
</script>

<style scoped>

.addArtist {
  padding: 20px;
}

.selectArtist {
  padding: 20px;
  padding-bottom: 40px;
}

.addConcert {
  padding-bottom: 40px;
}

.buttons {
  padding: 10px;
}

</style>
