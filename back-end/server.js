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

const ticketSchema = new mongoose.Schema({
  concertID: String
});

const Concert = mongoose.model("Concert", concertSchema);
const Artist = mongoose.model("Artist", artistSchema);
const Ticket = mongoose.model("Ticket", ticketSchema);

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

app.post("/api/ticket", (req, res)=> {
  let ticket = new Ticket({
    concertID: req.body.id,
  });
  try {
    ticket.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("/api/artists", (req, res)=>{
   Artist.find((err, artist)=> {
     res.json(artist);
   });
});

app.get("/api/concerts/:artist", async (req, res)=> {
  let concerts = await Concert.find({artist: req.params.artist});
  res.send({concerts: concerts});
});

app.put("/api/concert/change/:num", async (req, res)=>{
  let concert = await Concert.findOne({_id: req.body.id});
  if (req.params.num == 1) concert.tickets_left += 1;
  else concert.tickets_left -= 1;

  concert.save();
  res.sendStatus(200);
});

app.get("/api/tickets", async (req, res)=>{
  let tickets = await Ticket.find();
  res.send({tickets: tickets});
});

app.delete("/api/ticket/:id", (req, res)=> {
  let ticket = Ticket.findById(req.params.id);
  ticket.delete();
  res.sendStatus(200);
});

app.listen(3000, ()=>console.log("Listening on port 3000!"));
