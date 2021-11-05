<template>
  <div class="artists">
    <h1>All Artists</h1>
    <div class=ind_artist v-for="artist in artists" :key="artist.name" v-on:click="changeShowVal(artist.name)">
      <h2> {{ artist.name }} </h2>
      <div class="all_conc" v-if="concertShow(artist.name)">
        <div class="concerts" v-for="concert in artist.concerts" :key="concert.place">
          <div class="venue">
            <h2>Concert at {{ concert.venue }} </h2>
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
      },
      addTicket(artist, concert) {
        if (!this.$root.$data.tickets.includes(concert)) {
          this.$root.$data.tickets.push(concert);
          this.$root.$data.artistData.find(el => el.id === artist.id).concerts.find(el => el.id === concert.id).tickets_left -= 1;
        } else {
          alert("You have already purchased this ticket");
        }
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
