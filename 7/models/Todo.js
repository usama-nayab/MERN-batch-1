const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    title: String,
    list: Array
});

module.exports = mongoose.model('TodoList' , Todo);