import DS from 'ember-data';

export default DS.Serializer.extend({
  serialize: function() {

  },

  normalize: function(type, hash) {
    hash.ownerName = hash.owner_name;
    return hash;
  },
  extractFindById: function(store, type, payload) {
    return this.normalize('cat', payload);
  },
  extractFindAll: function(store, type, payload, id, requestType) {
    return payload.map((cat) => {
      return this.normalize('cat', cat);
    });
  },
  extract: function(store, type, payload, id, requestType) {
    if (requestType === 'findAll') {
      return this.extractFindAll(store,type, payload, id, requestType);
    } else if (requestType === 'find') {
      return this.extractFindById(store,type, payload, id, requestType);
    }
  }
});
