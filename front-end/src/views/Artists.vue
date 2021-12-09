<template>
  <div class="artists">
    <h1 id="allArtists">All Artists</h1>
    <div class=ind_artist v-for="artist in artists" :key="artist.name" v-on:click="changeShowVal(artist)">
      <h2> {{ artist.name }} </h2>
      <div class="all_conc" v-if="artist.clicked">
        <img class="artist_image" :src="artist.url" width=400px>
        <div class="concerts" v-for="concert in artist.show" :key="concert.place">
          <div class="venue">
            <h2>{{ concert.venue }} </h2>
            <p>Date: {{ concert.date }}</p>
          </div>
          <h2>Location: {{ concert.location }}</h2>
          <div class="tickInfo">
            <h2>Price: ${{ concert.min_price }}</h2>
            <button @click.stop.prevent="addTicket(artist, concert)">Buy Ticket</button>
            <p>({{ concert.tickets_left }} tickets left)</p>
          </div>
        </div>
      </div>
      <div v-else><h2> <em>Click to show more</em> </h2></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        artists: [],
      }
    },
    async created() {
      this.getInfo();
    },
    methods: {
      async getInfo() {
        this.artists = [];
        let artistsRes = (await axios.get("/api/artists")).data;
        for (let art of artistsRes) {
          let newArt = {name: art.name, url: art.url, clicked: false, _id: art._id}
          let url = "api/concerts/" + art.name;
          newArt.show = (await axios.get(url)).data.concerts;
          this.artists.push(newArt);
        }
      },
      changeShowVal(artist) {
        artist.clicked = !(artist.clicked);
      },
      async addTicket(artist, concert) {
        let allTicks = (await axios.get("/api/tickets")).data.tickets;
        if (!allTicks.find(el=>el.concertID == concert._id)) {
          await axios.post("/api/ticket", {id: concert._id});
          await axios.put("/api/concert/change/0", {id: concert._id});
          this.getInfo();
        } else {
          alert("You have already purchased this ticket");
        }
      },
    },
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
    justify-content: center;
    align-items: center;
  }

  .concerts {
    border: 2px solid black;
  }

  .tickInfo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tickInfo * {
    margin: 10px;
  }

  .venue {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .venue * {
    margin: 10px;
  }
</style>

<style scoped>

em {
  color: #808080;
  font-weight: 200;
}

artists {
  border: 100px black;
}

.all_conc {
  padding-bottom: 30px;
}

#allArtists {
  padding: 20px;
  padding-bottom: 15px;
  color: black;
}

</style>
