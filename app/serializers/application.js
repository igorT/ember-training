import Ember from 'ember';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
   var serializer = this;
   if (requestType === 'findAll') {
     return payload.map(function(cat) {
        return serializer.normalize(store, type, cat);
      });
    } else if(requestType === 'find') {
      return serializer.normalize(store, type, payload);
    }
  },

  serialize: function(record, options){
    var hash = {};
    hash.id = record.get('id');
    record.constructor.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      hash[serverKey] = record.get(key);
    });
    return hash;
  },

  normalize: function(store, type, payload){
    type.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      if (serverKey !== key) {
        payload[key] = payload[serverKey];
        delete payload[serverKey];
      }
    });
    return payload;
  }
});
