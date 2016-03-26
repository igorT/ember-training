import DS from 'ember-data';

export default DS.Serializer.extend({
  keyForAttribute: function(key) {
    return key.decamelize();
  },
  serialize: function(snapshot, options) {
    var hash = {};
    hash.id = snapshot.get('id');
    snapshot.eachAttribute((key, attr) => {
      hash[this.keyForAttribute(key)] = snapshot.attr(key);
    });
    return hash;
  },

  normalize: function(type, hash) {
    }
    hash.ownerName = hash.owner_name;
    return hash;
  },
  extractFindById: function(store, type, payload) {
    return this.normalize(type, payload);
  },
  extractFindAll: function(store, type, payload, id, requestType) {
    return payload.map((cat) => {
      return this.normalize(type, cat);
    });
  },
  extract: function(store, type, payload, id, requestType) {
    if (requestType === 'findAll') {
      return this.extractFindAll(store,type, payload, id, requestType);
    } else if (requestType === 'find') {
      return this.extractFindById(store,type, payload, id, requestType);
    } else if (requestType === 'createRecord') {
      return this.extractFindById(store,type, payload, id, requestType);
    }  else if (requestType === 'updateRecord') {
      return this.extractFindById(store,type, payload, id, requestType);
    }
  }
});
