import DS from 'ember-data';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
   if (requestType === 'findAll') {
     return payload.map(function(cat) {
        return {id: cat.id, name: cat.name, image:cat.image};
      });
    } else {

    }
  }
});
