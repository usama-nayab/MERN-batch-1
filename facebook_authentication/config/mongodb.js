const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database' , (err) => {
  if (err){
    console.log('connection failed!');
  }
  else {
    console.log('connection successful');
  }
} );