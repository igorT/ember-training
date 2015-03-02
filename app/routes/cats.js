import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [{name: 'cat1', image: "http://25.media.tumblr.com/tumblr_m0y17zzx0i1qjev1to1_500.jpg"},
    {name: 'cat2', image: "http://24.media.tumblr.com/x3Rmp1Hjoou8ifx3UMrV8ILfo1_500.jpg"},
    {name: 'cat3', image: "http://25.media.tumblr.com/tumblr_lvc0n6lEl41qe42cbo1_1280.png"},
    {name: 'cat4', image: "http://24.media.tumblr.com/tumblr_lx7vafr8cy1r7lwjko1_250.gif"},
    {name: 'cat5', image: "http://25.media.tumblr.com/tumblr_lp9ovcC5Id1qiatdho1_1280.jpg"},
    ];
  }
});
