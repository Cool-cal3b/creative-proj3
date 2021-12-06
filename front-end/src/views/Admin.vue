<template>
  <div class="Admin">
    <div class="addArtist">
      <input v-model="addArtistName">
      <input v-model="addArtistURL">
      <button v-on:click="addArtist">Submit</button>
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
      }
    },
    methods: {
      addArtist() {
        axios.post()
      }
    }
  }
</script>
