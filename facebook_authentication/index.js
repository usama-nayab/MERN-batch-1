const express = require('express')
const app = express()
const bodyParser = require('./middlewares/bodyparser');
const monitor = require('./middlewares/morgan');
require('./config/mongodb');
const passport = require('passport');
require('./config/passport')(passport);
const cookieSession = require('cookie-session')
const auth = require('./routes/Auth');

app.use(monitor);
app.use(bodyParser.parser);  // for parsing application / json

// authentication
app.use(cookieSession({
  name: 'facebook-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());  // to initialize the passport authentication
app.use(passport.session());    // to store the session
app.use('/' , auth );



app.listen(3000, (err) => {
  if(err) console.log(err);
  else console.log('SERVER IS RUNNING ON PORT 3000');
});
