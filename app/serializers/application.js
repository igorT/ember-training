import DS from 'ember-data';
import Ember from 'ember';

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
    Ember.merge(hash, hash.relationships);
    delete hash.relationships;
    type.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      if (serverKey !== key) {
        hash[key] = hash[serverKey];
        delete hash[serverKey];
      }
    });

    type.eachRelationship(function(key, kind) {
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
    hash.relationships = {};
    if (record.get('id')) {
      hash.id = record.get('id');
    }
    record.constructor.eachAttribute(function(key) {
      var serverKey = key.decamelize();
      hash[serverKey] = record.get(key);
    });
    record.constructor.eachRelationship(function(key, rel) {
      var serverKey = key.decamelize();
      if (rel.kind === 'hasMany') {
        hash.relationships[serverKey] = record.get(key).map(function(foreignRecord) {
          return foreignRecord.get('id');
        });
      } else if (rel.kind === 'belongsTo') {
        var foreignKey = null;
        var foreignRecord = record.get(key);
        if (foreignRecord) {
          foreignKey = foreignRecord.get('id');
        }
       hash.relationships[serverKey] = foreignKey;
      }
    });

    return hash;
  }
});
