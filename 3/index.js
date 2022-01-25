const express = require('express')
const app = express()
const bodyParser = require('./middlewares/bodyparser');
const route = require('./routes');
const monitor = require('./middlewares/morgan');

const route_hw = require('./routes/HW_routes');


app.use(bodyParser.parser);  // for parsing application / json
app.use(monitor);
app.use('/',route);

app.use('/' , route_hw);           // homework task


app.listen(5000, (err) => {
    if(err) console.log(err);
  else console.log('Server is Healthy');
})