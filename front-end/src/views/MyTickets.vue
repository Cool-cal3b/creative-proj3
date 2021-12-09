 <template>
  <div class="tickets">
    <h1>Your Tickets</h1>
    <div class="allTickets">
      <div class="concertTick" v-for="tick in tickets" :key="tick._id">
        <h3>{{getConc(tick).artist}}</h3>
        <h3>{{getConc(tick).location}}</h3>
        <h3>{{getConc(tick).date}}</h3>
        <button v-on:click="deleteTicket(tick)">Sell Ticket</button>
      </div>
      <div v-if="!tickets">
        <h2><em>You currently have no tickets</em></h2>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        artists: [],
        tickets: [],
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
      this.tickets = (await axios.get("/api/tickets")).data.tickets;
    },
    methods: {
      async deleteTicket(ticket) {
        let currConc = "";
        for (let artist of this.artists) {for (let conc of artist.show) if (ticket.concertID === conc._id) currConc = conc}
        await axios.put("/api/concert/change/1", {id: currConc._id});
        await axios.delete("/api/ticket/"+ticket._id);
        this.tickets = (await axios.get("/api/tickets")).data.tickets;
      },
      getConc(tick) {
        for (let artist of this.artists) {for (let conc of artist.show) if (tick.concertID === conc._id) return conc}
      }
    }
  }
</script>

<style>
  .concertTick {
  display: flex;
  align-items: center;
  }

  .concertTick h3 {
    margin: 20px;
  }

  .concertTick button {
    height: 30px;
  }

.allTickets {
  //display:flex;
  }
</style>
