<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/artists">ALL ARTISTS</router-link> |
      <router-link to="/near">CONCERTS NEAR YOU</router-link> |
      <router-link to="/tickets">YOUR TICKETS</router-link>
    </div>
    <router-view/>
    <div class="imgContainer2"><img src="/images/concert2.jpg" id="image2" width = 100%></div>
    <div id = "footer">
      <h2> <em>SPONSORS</em> </h2>
      <div id="sponsors">
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "Github_link"><img src="/images/Github.png" width = 60px ></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Fender.png" width = 110px > <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor" id = "fender"><img src="/images/Coke.png" width = 100px > <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor"><img src="/images/Beats.png" width = 60px id = "beats"> <p></p></a>
        <a href = "https://github.com/Cool-cal3b/creative-proj3" target="_blank" class = "sponsor"><img src="/images/Vicfirth.png" id = "vicfirth"> <p></p></a>
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
#beats {
margin-top: 10px;
  width: 55px;
}

#footer {
  width:100%;
  padding-top: 30px;
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
#vicfirth {
  width: 200px;
}
#Github_link {
  margin-right: 20px;
}
.imgContainer2 {
overflow: hidden;
  height: 200px;
   max-height: 300px;
   position: relative;
}
#image2 {
display: block;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
}

</style>
