const express = require('express')
const app = express()
const bodyParser = require('./middlewares/bodyparser');
const monitor = require('./middlewares/morgan');
require('./config/mongodb');
require('./config/passport');
const passport = require('passport');
const todo = require('./routes/Todo');
const user = require('./routes/User');

app.use(monitor);
app.use(bodyParser.parser);  // for parsing application / json

app.use('/user', user);
app.use('/todo' , passport.authenticate('jwt', { session: false }), todo);

app.listen(3000, (err) => {
  if(err) console.log(err);
  else console.log('SERVER IS RUNNING ON PORT 3000');
});
