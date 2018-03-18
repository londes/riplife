//server.js
'use-strict';
//first we import our dependencies…
var express = require('express');
var msgListener = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Video = require('./model/videos');
var twilio = require('twilio');
//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
var db_username = process.env.DB_USERNAME;
var db_password = process.env.DB_PASSWORD;

//set up twilio client
var twil_id = process.env.TWIL_SID;
var twil_authtoken = process.env.TWIL_TOKEN;
const twilioClient = require('twilio')(twil_id, twil_authtoken);


//db config
mongoose.connect(`mongodb://${db_username}:${db_password}@ds115446.mlab.com:15446/londes_data`, {
  useMongoClient: true,
});

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized'});
});

//adding the /videos route to our /api router
router.route('/videos')
  //retrieve all videos from db
  .get(function(req,res) {
    //looks at our Video Schema
    Video.find(function(err, videos) {
      if (err)
      res.send(err);
      //responds with a json object of our database videos.
      res.json(videos)
    });
  })
  //post new video to the Database
  .post(function(req, res) {
    console.log("....");
    var video = new Video();
    video.url = req.body.url;

    //add twilio code
     // new collection in mongo
     // mongodb has check to see if a property is unique OR "verified" boolean value
    twilioClient.messages.create({
      to: '+19784600023',
      from: '+16179968568',
      body: 'you just received a rippy clippy waguan' + video.url + '';
    }).then(message => console.log(message.sid));

    video.save(function(err) {
      if (err)
      res.send(err);
      res.json({message: 'rippy clippy added'});
    });
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
