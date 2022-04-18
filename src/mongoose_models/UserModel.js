const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    displayName: String,
    username: String,
    verified: Boolean,
    avatar: String,
    email: String,
  },
  { timestamps: true}
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;