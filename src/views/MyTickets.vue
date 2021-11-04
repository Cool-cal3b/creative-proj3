<template>
  <div class="tickets">
    <h1>Your Tickets</h1>
    <div class="allTickets">
      <div class="concertTick" v-for="conc in allTicks" :key="conc.id">
        <h3>{{conc.location}}</h3>
        <h3>{{conc.date}}</h3>
        <button v-on:click="deleteTicket(conc.id)">Sell Ticket</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      allTicks() {
        return this.$root.$data.tickets;
      },
    },
    methods: {
      deleteTicket(id) {
        let ticks = this.$root.$data.tickets;
        let currConc = "";
        for (let artist of this.$root.$data.artistData) {for (let conc of artist.concerts) if (id === conc.id) currConc = conc;}
        currConc.tickets_left += 1;
        for (let con of ticks) {
          if (con.id === id) ticks.splice(con, 1);
        }
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
</style>
