import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  findAll: function() {
    return Ember.$.get('/api/cats').then( (cats) => {
       return cats.map( (cat) => {
          cat.ownerName = cat.owner_name;
          return cat;
        });
     });
  }
});
