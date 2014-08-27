import DS from 'ember-data';
import Ember from 'ember';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
    if (requestType === 'findAll') {
      return this.extractArray(type, payload);
    } else {
      return this.extractSingle(type, payload);
    }
  },

  extractArray: function(type, payload) {
    var serializer = this;
    return payload.map(function(hash){
      return serializer.normalize(type, hash);
    });
  },

  extractSingle: function(type, hash) {
    return this.normalize(type, hash);
  },

  normalizeAttributes: function(type, hash) {
    var serializer = this;
    type.eachAttribute(function(key) {
      var serverKey = serializer.serverKeyForLocalKey(key);
      if (serverKey !== key) {
        hash[key] = hash[serverKey];
        delete hash[serverKey];
      }
    });
  },

  normalizeRelationships: function(type, hash) {
    type.eachRelationship(function(key, kind) {
      var serverKey = key.decamelize();
      if (serverKey !== key) {
        hash[key] = hash[serverKey];
        delete hash[serverKey];
      }
    });
  },

  normalizeHash: function(type, hash) {
    Ember.merge(hash, hash.relationships);
    delete hash.relationships;
  },

  normalize: function(type, hash) {
    this.normalizeHash(type, hash);
    this.normalizeAttributes(type, hash);
    this.normalizeRelationships(type, hash);
    return hash;
  },

  serverKeyForLocalKey: function(key) {
    return key.decamelize();
  },

  serializeAttribute: function(record, hash, key) {
    var serverKey = this.serverKeyForLocalKey(key);
    hash[serverKey] = record.get(key);
  },

  serializeBelongsTo: function(record, hash, key) {
    var serverKey = this.serverKeyForLocalKey(key);
    var foreignKey = null;
    var foreignRecord = record.get(key);
    if (foreignRecord) {
      foreignKey = foreignRecord.get('id');
    }
    hash.relationships[serverKey] = foreignKey;
  },

  serializeHasMany: function(record, hash, key) {
    var serverKey = this.serverKeyForLocalKey(key);
    hash.relationships[serverKey] = record.get(key).map(function(foreignRecord) {
      return foreignRecord.get('id');
    });
  },

  serialize: function(record, options) {
    var hash = {};
    hash.relationships = {};
    var serializer = this;
    if (record.get('id')) {
      hash.id = record.get('id');
    }
    record.constructor.eachAttribute(function(key) {
      serializer.serializeAttribute(record, hash, key);
    });
    record.constructor.eachRelationship(function(key, rel) {
      if (rel.kind === 'hasMany') {
        serializer.serializeHasMany(record, hash, key);
      } else if (rel.kind === 'belongsTo') {
        serializer.serializeBelongsTo(record, hash, key);
      }
    });

    return hash;
  }
});
