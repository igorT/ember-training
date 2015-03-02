import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('application');
  this.route('cat', { path: '/cat/:cat_id' });
  this.route('cats');
  this.route('dogs');
  this.route('dog', { path: '/dog/:dog_id' });
});

export default Router;
