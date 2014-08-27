import DS from 'ember-data';
import Ember from 'ember';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
   if (requestType === 'findAll') {
     return payload.map(function(cat) {
        return {id: cat.id, name: cat.name, image:cat.image};
      });
    } else if(requestType === 'find') {
      return {id: payload.id, name: payload.name, image:payload.image};
    }
  },

  serialize: function(record, options){
    return {id: record.get('id'), name: record.get('name'), image:record.get('image')};
  }
});
