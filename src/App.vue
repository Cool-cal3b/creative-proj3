<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/artists">ALL ARTISTS</router-link> |
      <router-link to="/near">CONCERTS NEAR YOU</router-link> |
      <router-link to="/tickets">YOUR TICKETS</router-link>
    </div>
    <router-view/>
    <h2> <em>SPONSORS</em> </h2>
    <div id="sponsors">
      <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "Github_link"><img src="/images/Github.png" width = 60px > <p>Github Repository</p></a>
      <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Fender.png" width = 60px > <p></p></a>
      <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Yamaha.png" width = 60px > <p></p></a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-style: italic;
}

#nav a.router-link-exact-active {
  color: #FF0000;
}

.sponsor {
  font-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: row;
}
#Sponsors {
  display: flex;
  flex-direction: row;
}
#Github_link p {
  font-decoration: none;
}

</style>
