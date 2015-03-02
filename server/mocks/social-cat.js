module.exports = function(app) {
  var cats = [
      {id:"1",  name: 'cat1', image: "http://24.media.tumblr.com/tumblr_m4j2e7Fd7M1qejbiro1_1280.jpg", owner_name: 'Paul', relationships: { cat_friends:[2,3], best_friend:3}},
      {id: "2", name: 'cat2', image: "http://24.media.tumblr.com/tumblr_lxrexcSVCh1qbd47zo1_1280.jpg", owner_name: 'Joachim',  relationships: { cat_friends: [1,5], best_friend:null}},
      {id: "3", name: 'cat3', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg", owner_name: 'Stefan', relationships: { cat_friends: [1], best_friend:1}},
      {id: "4",  name: 'cat4', image: "http://25.media.tumblr.com/tumblr_lvc0n6lEl41qe42cbo1_1280.png", owner_name: 'Matt', relationships: { cat_friends: [5], best_friend:5}},
      {id: "5",  name: 'cat5', image: "http://24.media.tumblr.com/tumblr_lx7vafr8cy1r7lwjko1_250.gif", owner_name: 'Igor', relationships: { cat_friends: [4,2], best_friend: 4}},
      {id: "6", name: 'cat6', image: "http://25.media.tumblr.com/tumblr_lp9ovcC5Id1qiatdho1_1280.jpg", owner_name: 'Igor', relationships: {cat_friends:[], best_friend: null}}
    ];

  var dogs = [
      {id:"1",  name: 'dog1', image: "http://i3.kym-cdn.com/photos/images/newsfeed/000/217/040/48ACD.png", likes_cats: true, plays_fetch: false},
      {id: "2", name: 'dog2', image: "http://www.ljplus.ru/img4/m/i/mister_trash/tumblr_lht7cvv39S1qamjl2o1_1280.jpg_AWSAccessKeyId_AKIAJ6IHWSU3BX3X7X3Q-Expires_1302934942-Signature_T1_2B9PPWHwEePu4hsLHTosJKnli4_3D", likes_cats: false, plays_fetch: true},
      {id: "3", name: 'dog3', image: "http://i.imgur.com/sCcYF.jpg", likes_cats: true, plays_fetch: true},
      {id: "4", name: 'dog4', image: "http://i.imgur.com/bRwvu16.jpg", likes_cats: true, plays_fetch: true}
    ];

  var express = require('express');
  var catRouter = express.Router();
  cats = cats.map(function(cat,i) {
    cat.relationships.dog_friend = i+1;
    return cat;
  });

  var data = cats.map(function(cat, i) {
    return { cat: cat, dogs: [dogs[i]]};
  });

  catRouter.get('/', function(req, res) {
    res.send({cats: cats, dogs: dogs});
  });

  catRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].cat.id == id) {
        res.send(data[i]);
        return;
      }
    }
    res.status(404).end();
  });

  catRouter.delete('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        if (data[i].owner_name === 'Igor') {
          res.status(403).send("Don't touch Igor's cats");
          return;
        }
        for(var j = 0; j < data.length; j++) {
          var catFriends = data[j].relationships.cat_friends;
          for (var k = 0; k < catFriends.length; k++) {
            if (catFriends[k] == id) {
              catFriends.splice(k,1);
            }
          }
          if (data[j].best_friend == id) {
            data[j].best_friend = null;
          }
        }
        data.splice(i, 1);
        res.send();
        return;
      }
    }
    res.status(400).end();
  });

  catRouter.put('/:id', function(req, res) {
    console.log(req);
    var id = req.params.id;
    id = parseInt(id);
    if(!req.body.name) {
      res.status(422).send({errors: {name: 'Name cannot be null'}});
      return;
    }
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i] =  req.body;
        res.send();
        return;
      }
    }
    res.status(400).end();
  });

  catRouter.post('/', function(req, res) {
    if(!req.body.name) {
      res.status(422).send({errors: {name: 'Name cannot be null'}});
      return;
    }
  for(var i = 0; i < data.length; i++) {
    var cat = req.body;
    cat.id = data.length;
    data.push(cat);
    res.send(cat);
  }
  });
  app.use('/api/social_cats', catRouter);
};
