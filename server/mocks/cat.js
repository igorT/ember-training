module.exports = function(app) {
  var data = [
      {id:"1",  name: 'cat1', image: "http://24.media.tumblr.com/tumblr_m4j2e7Fd7M1qejbiro1_1280.jpg", owner_name: 'Igor'},
      {id: "2", name: 'cat2', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg", owner_name: 'Joachim'},
      {id: "3", name: 'cat3', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg", owner_name: 'Stefan'},
      {id: "4",  name: 'cat4', image: "http://25.media.tumblr.com/tumblr_lvc0n6lEl41qe42cbo1_1280.png", owner_name: 'Matt'},
      {id: "5",  name: 'cat5', image: "http://24.media.tumblr.com/tumblr_lx7vafr8cy1r7lwjko1_250.gif", owner_name: 'Igor'},
      {id: "6", name: 'cat6', image: "http://25.media.tumblr.com/tumblr_lp9ovcC5Id1qiatdho1_1280.jpg", owner_name: 'Igor'}
    ];
  var express = require('express');
  var catRouter = express.Router();
  catRouter.get('/', function(req, res) {
    res.send(data);
  });
  catRouter.get('/:id', function(req, res) {
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
  catRouter.delete('/:id', function(req, res) {
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
  catRouter.put('/:id', function(req, res) {
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
  catRouter.post('/', function(req, res) {
    var cat = req.body;
    cat.id = data.length;
    data.push(cat);
    res.send(cat);
  });
  app.use('/api/cat', catRouter);
};
