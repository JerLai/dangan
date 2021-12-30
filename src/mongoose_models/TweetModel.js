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

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;