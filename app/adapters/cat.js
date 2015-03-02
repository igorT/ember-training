import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  find: function(store, type, id) {
    return Ember.$.get('/api/cats/' + id).then( (cat) => {
      cat.ownerName = cat.owner_name;
      return cat;
   });
  },

  findAll: function() {
    return Ember.$.get('/api/cats').then( (cats) => {
       return cats.map( (cat) => {
          cat.ownerName = cat.owner_name;
          return cat;
        });
     });
  }
});
