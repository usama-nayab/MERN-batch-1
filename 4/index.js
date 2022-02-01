const express = require('express')
const app = express()
const bodyParser = require('./middlewares/bodyparser');
const route = require('./routes');
const monitor = require('./middlewares/morgan');
const route_hw = require('./routes/HW_routes');

require('./config/mongodb');
const Post = require('./models/post');


// adding data to database
const post = new Post({
  title:'Its A MERN Class',
  description:'this is a learning class a mongodb'
});
post.save();

// get single data from database
// Post.findOne({title:'Its A MERN Class'}).then((post) => {
//   console.log(post);
// })

// get all data from database
// Post.find({title:'Its A MERN Class'}).then((post) => {
//   console.log(post);
// })

// update single data that is the first one
// Post.updateOne({title:"hello world1"} , {title:'hello world1 is now updated'}).then((post) => {
//   console.log(post);
// })

// update all data
// Post.updateMany({title:"hello world"} , {title:'hello worldsssss is now updated'}).then((post) => {
//   console.log(post);
// })


// delete only single row of data
// Post.deleteOne({title:"hello world"}).then((post)=>{
//   console.log(post);
// })


// delete all rows of data
// Post.deleteMany({title:"Its A MERN Class"}).then((post)=>{
//   console.log(post);
// })

app.use(bodyParser.parser);  // for parsing application / json
app.use(monitor);
app.use('/',route);

app.use('/' , route_hw);           // homework task


app.listen(5000, (err) => {
    if(err) console.log(err);
  else console.log('Server is Healthy');
})