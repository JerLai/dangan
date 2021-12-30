/* jshint esversion: 6 */

/************************
 * Import *
 ************************/

const express = require('express');
const http = require('http');
const path = require('path');


/*******************
 * Set up firebase *
 *******************/
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAFPt25K17BJ6bgP2sOv_xJHwJStB9WuhY",
  authDomain: "dangan-5544a.firebaseapp.com",
  projectId: "dangan-5544a",
  storageBucket: "dangan-5544a.appspot.com",
  messagingSenderId: "233185299592",
  appId: "1:233185299592:web:6107552963227c5af7233d",
  measurementId: "G-CY9N2C0MM2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


/***********
 * MongoDB *
 ***********/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const keys = require('./src/config/keys');
const Tweet = require('./src/mongoose_models/TweetModel');

mongoose
  .connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!")
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  })
 /****************
 * Set up Server *
 ****************/
// app
const app = express();
const PORT = 8080;
let server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

app.post("/api/tweet", function (req, res) {
  console.log(req.body);
  const addTweet = async () => {
    await Tweet.create(req.body);
  }

  addTweet().then(()=> res.json({message: "tweet sent"}));
});

app.get('/ping', function (req, res) {
  res.json({message: "received ping"});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});