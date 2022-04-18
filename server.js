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
const Users = require('./src/mongoose_models/UserModel');

//keys.mongodb.dbURI
//process.env.MONGODB_URI
mongoose
  .connect(process.env.MONGODB_URI || keys.mongodb.dbURI, {
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

/**
 * Google OAuth
 */
 const { OAuth2Client } = require('google-auth-library');
 const clientId = "156963401870-aq0atbcisuui6pqgcki6ap1tk3unqj6n.apps.googleusercontent.com"
 const client = new OAuth2Client(clientId);
 //TODO: use var for client id
 /*****************
 * Set up Server *
 *****************/
// app
const app = express();
const devPORT = 5000;
let server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

const session = require('express-session');
const { constants } = require('buffer');
const MongoDBStore = require("connect-mongodb-session")(session);

//TODO: move sensitive data to a config file or if in prod, key vars
const store = new MongoDBStore({
  uri: "mongodb+srv://Kamito:TarElendil1@dangan.qw3h2.mongodb.net/",
  databaseName: "dangan-twitterClone",
  collection: "danganSessions"
});

store.on("error", function(error) {
  console.log(error);
})
const oneDay = 1000 * 60 * 60 * 24;
app.use(require("express-session")({
  secret: 'omgMeGaSeCRETChangeL8tr',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneDay},
  store: store
}));

// Session verification
// This will intercept all calls to the back end and
// searches for the user in the db in the current session
// if found, we attach a new parameter to the request, "req.user" based
// on what we found, so could be a user or a null
app.use(async (req, res, next) => {

  req.user = await Users.findById(req.session.userId);
  console.log("HTTP request", req.method);
  next();
});
// The actual middleware to check for session in sensitive requests like posting
let isAuthenticated = function(req, res, next) {
  if(!req.user) return res.status(401).end("Access denied");
  next();
}

// LOGIN
app.post("/api/v1/auth/google", async function (req, res) {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId
  });
  const { name, email, picture } = ticket.getPayload();

  Users.findOneAndUpdate({username: name, email: email}, {
    avatar: picture, verified: true, email: email,
    displayName: name, username: name}, {
    new: true,
    upsert: true
    })
    .then(user => {
      req.session.userId = user._id;
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({message: err.message || "Some error occurred while authenticating"});
    })

});

app.get("/api/v1/auth/signout", function (req, res) {
  req.session.destroy(err => {
    if(err){
      console.log(err);
  } else {
      res.send({message: "logout success"});
  }
  });
})

app.post("/api/tweet", isAuthenticated, function (req, res) {
  const addTweet = async () => {
    await Tweets.create(req.body);
  }

  addTweet().then(()=> res.json({message: "tweet sent"}));
});

app.get("/api/userRefresh", isAuthenticated, function (req, res) {
  Users.findById(req.session.userId)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({message: err.message || "An unexpected user info error has occurred"});
    });
});

app.get('/api/tweets/:userId', function (req, res) {
  Tweets.find({username: req.params.userId})//.limit(10)
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

server.listen(process.env.PORT || devPORT, '0.0.0.0', function (err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", devPORT);
});