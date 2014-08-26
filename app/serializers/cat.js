import DS from 'ember-data';

export default Ember.Object.extend({
  extract: function(store, type, payload, id, requestType) {
    var serializer = this;
    return payload.map(function(cat){
      return serializer.normalize(type, cat);
    });
  },

  normalize: function(type, hash){
    hash.ownerName = hash.owner_name;
    return hash;
  }
});
