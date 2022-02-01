const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Post' , Post);