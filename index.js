// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/:date", function (req, res) {
  let param=req.params.date;
  if(!param.includes('-'))param=param*1;
  // else param=param*1;
  console.log(param);
  let utcTime=new Date(param).toString();
  console.log(utcTime)
  let unixTime=new Date(param).getTime();
  console.log(unixTime)

  res.json({unix:unixTime,utc: utcTime});
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
