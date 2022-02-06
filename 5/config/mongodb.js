const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database' , (err) => {
  if (err){
    console.log('TODO connection failed!');
  }
  else {
    console.log('TODO connection successful');
  }
} );