const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chat = new Schema({
    name: String,
    message: Array
});

module.exports = mongoose.model('Chat' , Chat);