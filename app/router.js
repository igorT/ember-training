import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTrainingENV.locationType
});

Router.map(function() {
  this.route('application');
  this.route('cat', { path: '/cat/:cat_id' });
  this.route('cats');
  this.route('dogs');
  this.route('dog', { path: '/dog/:dog_id' });
});

export default Router;
