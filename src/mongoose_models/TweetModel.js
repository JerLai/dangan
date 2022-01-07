const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  displayName: String,
  username: String,
  verified: Boolean,
  text: String,
  image: String,
  avatar: String,
});

const Tweets = mongoose.model("Tweets", tweetSchema);

module.exports = Tweets;