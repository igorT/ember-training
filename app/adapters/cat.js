import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(store, type) {
    return $.get('api/cat');
  },
  find: function(store, type, id) {
    return $.get('api/cat/' + id);
  },

  updateRecord: function(store, type, record){
    return $.ajax({
      type: 'put',
      data: record.serialize(),
      url: '/api/cat/' + record.get('id')
    });
  }
});
