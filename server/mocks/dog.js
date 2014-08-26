module.exports = function(app) {
  var data = [
      {id:"1",  name: 'dog1', image: "e7Fd7M1qejbiro1_1280.jpg", likes_cats: true, plays_fetch: false},
      {id: "2", name: 'dog2', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg", likes_cats: false, plays_fetch: true},
      {id: "3", name: 'dog3', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg", likes_cats: true, plays_fetch: true},
    ];
  var express = require('express');
  var dogRouter = express.Router();
  dogRouter.get('/', function(req, res) {
    res.send(data);
  });
  dogRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        res.send(data[i]);
        return;
      }
    }
    //send error
  });
  dogRouter.delete('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data.splice(i, 1);
        res.send();
        return;
      }
      //send erro
      res.send();
    }
  });
  dogRouter.put('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i] =  req.body;
        res.send();
        return;
      }
      //send error
      res.send();
    }
  });
  dogRouter.post('/', function(req, res) {
    var dog = req.body;
    dog.id = data.length;
    data.push(dog);
    res.send(dog);
  });
  app.use('/api/dog', dogRouter);
};
