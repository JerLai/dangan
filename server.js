/* jshint esversion: 6 */

/************************
 * Import *
 ************************/

const express = require('express');
const http = require('http');
const path = require('path');

/***********
 * MongoDB *
 ***********/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const keys = require('./src/config/keys');
const Tweets = require('./src/mongoose_models/TweetModel');

//keys.mongodb.dbURI
//process.env.MONGODB_URI
mongoose
  .connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

/*****************
 * Set up Server *
 *****************/
// app
const app = express();
const PORT = 8080;
let server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

app.post("/api/tweet", function (req, res) {
  //TODO: add createdAt field to tweet
  const addTweet = async () => {
    await Tweets.create(req.body);
  }

  addTweet().then(()=> res.json({message: "tweet sent"}));
});

app.get('/api/tweets', function (req, res) {
  Tweets.find({})//.limit(10)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message: err.message || "Some error occurred while retrieving tweets"});
    })
});
app.get('/ping', function (req, res) {
  res.json({message: "received ping"});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*',function (req, res) {
  res.redirect('/');
});

server.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});