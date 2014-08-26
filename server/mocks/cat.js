module.exports = function(app) {
  var express = require('express');
  var catRouter = express.Router();
  catRouter.get('/', function(req, res) {
    res.send([
      {name: 'cat1', image: "http://24.media.tumblr.com/tumblr_m4j2e7Fd7M1qejbiro1_1280.jpg"},
      {name: 'cat2', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg"},
      {name: 'cat3', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg"},
      {name: 'cat4', image: "http://25.media.tumblr.com/tumblr_llnbymSwxD1qjahcpo1_400.jpg"},
      {name: 'cat5', image: "http://25.media.tumblr.com/tumblr_m2q8lrcojk1qfvoueo1_1280.jpg"},
      {name: 'cat6', image: "http://25.media.tumblr.com/tumblr_m0y17zzx0i1qjev1to1_500.jpg"},
      {name: 'cat7', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg"},
      {name: 'cat8', image: "http://25.media.tumblr.com/tumblr_lvc0n6lEl41qe42cbo1_1280.png"},
      {name: 'cat9', image: "http://24.media.tumblr.com/tumblr_lx7vafr8cy1r7lwjko1_250.gif"},
      {name: 'cat10', image: "http://25.media.tumblr.com/tumblr_lp9ovcC5Id1qiatdho1_1280.jpg"},
    ]);
  });
  app.use('/api/cat', catRouter);
};
