import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized === 'false') {
      return false;
    }
    return serialized;
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
