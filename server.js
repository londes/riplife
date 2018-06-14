//server.js
'use-strict';
//first we import our dependencies…
var express = require('express');
var msgListener = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Video = require('./model/videos');
var twilio = require('twilio');
var md5 = require('md5');
var fs = require('fs');
//and create our instances
var app = express();
var router = express.Router();

// parse our local-settings.json to pull in appropriate credentials
// var localSettingsContents = fs.readFileSync("local-settings.json");
var localSettingsJson = process.env;

// set up server port and db creds
var port = localSettingsJson.PORT || 3001;
var db_username = localSettingsJson.DB_USERNAME;
var db_password = localSettingsJson.DB_PASSWORD;

//set up twilio client
var twil_id = localSettingsJson.TWIL_SID;
var twil_authtoken = localSettingsJson.TWIL_AUTHTOKEN;
const twilioClient = require('twilio')(twil_id, twil_authtoken);


//db config
mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${db_username}:${db_password}@ds115446.mlab.com:15446/londes_data`, {
  useMongoClient: true,
});

//configure the API to use bodyParser and look for
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
 //res.json({ message: 'API Initialized'}); // send index.html
 res.sendFile('./build/index.html');
});

//adding the /videos route to our /api router
router.route('/videos')
  //retrieve all videos from db

  // 2018-03-29 -- this is where we may be able to filter the get request by checking for verified
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
    console.dir(req.body);
    var {
      embedUrl,
      clipUrl,
      clipId
    } = req.body;
    var clipId = md5(clipId).substring(0,4);
    var video = new Video({
      embedUrl: embedUrl,
      clipUrl: clipUrl,
      clipId: clipId,
      checked: false,
      rip: false
    });

    twilioClient.messages.create({
      to: '+19784600023',
      from: '+16179968568',
      body: 'you just received a rippy clippy ' + clipUrl + '. Reply RIP '+ clipId +' to verify this video, or FAKE '+ clipId +' to ignore.'
    }).then(message => console.log(message.sid));

    video.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'rippy clippy added'});
    });
  });

  router.route('/messages')
    .post(function(req,res) {
      var message = req.body.Body;
      console.log(message);
      var messagesStrings = message.split(' ');
      var ripOrFake = messagesStrings[0].toLowerCase();
      if ((ripOrFake === 'rip' || ripOrFake === 'fake') && (messagesStrings.length > 1)){
        var vidId = messagesStrings[1];
        console.log("rip or fake: " + ripOrFake + ", vid id: " + vidId);
        Video.findOne({clipId: vidId}, function(err, video){
          if (ripOrFake === 'rip'){
              video.set({
                checked: true,
                rip: true
              });
              video.save(function(err) {
                if (err) {
                  res.send(err);
                }
                res.json(video);
              });
            }
          else if (ripOrFake === 'fake') {
              video.set({
                checked: true,
                rip: false
              });
              video.remove();
          }
          console.log('updated video: ' + video);
        });
      }
    })

    router.route('/last5rips')
      .get(function(req,res) {
        console.log(process.env.DB_USERNAME);
        console.log('fkn reeep');
        res.json({
          status: "alive"
        });
        // Video.
        //   find({
        //     rip: true
        //   }).
        //   limit(5).
        //   sort([['_id', -1]]).
        //   exec(function(err, videos) {
        //     if (err)
        //     res.send(err);
        //     //responds with a json object of our database videos.
        //     res.json(videos)
        //   });
      })
//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
