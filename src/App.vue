<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/artists">ALL ARTISTS</router-link> |
      <router-link to="/near">CONCERTS NEAR YOU</router-link> |
      <router-link to="/tickets">YOUR TICKETS</router-link>
    </div>
    <router-view/>
    <div id = "footer">
      <h2> <em>SPONSORS</em> </h2>
      <div id="sponsors">
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "Github_link"><img src="/images/Github.png" width = 60px ></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Fender.png" width = 110px > <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Coke.png" width = 100px > <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "beats"><img src="/images/Beats.png" width = 60px > <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "vicfirth"><img src="/images/Vicfirth.png" width = 200px > <p></p></a>
      </div>
    </div>
  </div>
</template>

<style>

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background-color: black;
}


#nav {
  padding: 30px;
  background-color: black;
  text-align: left;
  margin-left: -20px
}

#footer {
  width:100%;
  bottom: 0;
  margin-bottom: -30px;
}

#nav a {
  font-weight: bold;
  color: white;
  font-style: italic;
}

#nav a.router-link-exact-active {
  color: #FF0000;
}

#sponsors {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#fender {
  margin-bottom: -15px;
}
#Github_link {
  margin-right: 20px;
}


</style>
