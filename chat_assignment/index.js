const express = require('express')
const app = express()
const bodyParser = require('./middlewares/bodyparser');
const monitor = require('./middlewares/morgan');
require('./config/mongodb');
const route = require('./routes/Chat');

app.use(bodyParser.parser);  // for parsing application / json
app.use(monitor);
app.use('/' , route);

app.listen(3000, (err) => {
  if(err) console.log(err);
  else console.log('SERVER IS RUNNING ON PORT 3000');
});
