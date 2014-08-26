module.exports = function(app) {
  var express = require('express');
  var catRouter = express.Router();
  catRouter.get('/', function(req, res) {
    res.send([
      {id:"1",  name: 'cat1', image: "http://24.media.tumblr.com/tumblr_m4j2e7Fd7M1qejbiro1_1280.jpg"},
      {id: "2", name: 'cat2', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg"},
      {id: "3", name: 'cat3', image: "http://24.media.tumblr.com/tumblr_mc1qt6y4ks1qhwmnpo1_500.jpg"},
      {id: "4",  name: 'cat4', image: "http://25.media.tumblr.com/tumblr_lyxwfwf4AF1r6b7kmo1_500.jpg"},
      {id: "5",  name: 'cat5', image: "http://25.media.tumblr.com/tumblr_m2q8lrcojk1qfvoueo1_1280.jpg"},
      {id: "6", name: 'cat6', image: "http://25.media.tumblr.com/tumblr_m0y17zzx0i1qjev1to1_500.jpg"},
      {id: "7", name: 'cat7', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg"},
      {id: "8",  name: 'cat8', image: "http://25.media.tumblr.com/tumblr_lvc0n6lEl41qe42cbo1_1280.png"},
      {id: "9",  name: 'cat9', image: "http://24.media.tumblr.com/tumblr_lx7vafr8cy1r7lwjko1_250.gif"},
      {id: "10", name: 'cat10', image: "http://25.media.tumblr.com/tumblr_lp9ovcC5Id1qiatdho1_1280.jpg"},
    ]);
  });
  app.use('/api/cat', catRouter);
};
