import DS from 'ember-data';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
    var serializer = this;
    if (requestType === 'findAll') {
      return payload.map(function(cat){
        return serializer.normalize(type, cat);
      });
    } else {
      return serializer.normalize(type, payload);
    }
  },

  normalize: function(type, hash) {
    type.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      if (serverKey !== key) {
        hash[key] = hash[serverKey];
        delete hash[serverKey];
      }
    });
    return hash;
  },

  serialize: function(record, options) {
    var hash = {};
    if (record.get('id')) {
      hash.id = record.get('id');
    }
    record.constructor.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      hash[serverKey] = record.get(key);
    });
    return hash;
  }
});
