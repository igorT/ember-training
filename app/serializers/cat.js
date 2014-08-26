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

  normalize: function(type, hash){
    hash.ownerName = hash.owner_name;
    return hash;
  },

  serialize: function(record, options) {
    return {
      id: record.get('id'),
      name: record.get('name'),
      image: record.get('image'),
      owner_name: record.get('ownerName'),
    };
  }
});
