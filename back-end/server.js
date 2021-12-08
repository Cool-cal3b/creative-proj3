const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/concerts', {
  useNewUrlParser: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const concertSchema = new mongoose.Schema({
  artist: String, location: String, venue: String, min_price: Number, tickets_left: Number, date: String, id:Number
});

const artistSchema = new mongoose.Schema({
  name: String, url: String, id: Number
});

const Concert = mongoose.model("Concert", concertSchema);
const Artist = mongoose.model("Artist", artistSchema);

app.post("/api/artist", (req, res) => {
  let artist = new Artist({
    name: req.body.name,
    url: req.body.url,
    id: req.body.id,
  });
  try {
    artist.save();
    res.sendStatus(200);
  } catch(error) {
    res.sendStatus(500);
  }
});

app.post("/api/concert", (req,res) => {
  let concert = new Concert({
    artist: req.body.artist,
    location: req.body.location,
    venue: req.body.venue,
    min_price: parseInt(req.body.min_price),
    tickets_left: parseInt(req.body.tickets_left),
    date: req.body.date,
  });
  try {
    concert.save();
    res.sendStatus(200);
  } catch(error) {
    res.sendStatus(500);
  }
});

app.get("/api/artists", (req, res)=>{
   Artist.find((err, artist)=> {
     res.json(artist);
   });
});

app.listen(3000, ()=>console.log("Listening on port 3000!"));
