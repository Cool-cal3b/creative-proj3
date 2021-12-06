const express = require("express");
const bodyParser = require("bodyParser");

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
  artist: String, url: String, id: Number
});

const Concert = mongoose.model("Concert", concertSchema);
const Artist = mongoose.model("Artist", artistSchema);
