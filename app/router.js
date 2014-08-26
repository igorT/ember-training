import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTrainingENV.locationType
});

Router.map(function() {
  this.route('application');
});

export default Router;
