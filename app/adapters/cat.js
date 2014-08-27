import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(store, type) {
    return $.get('api/cat');
  }
});
