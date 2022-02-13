const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fb_user = new Schema({
    facebookId: String,
    name: String,
    email: {type: String , unique:true}
})

module.exports = mongoose.model('fb_user' , fb_user);