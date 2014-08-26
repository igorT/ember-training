import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(){
    return $.get('api/cat');
  },
  find: function(store, type, id, record){
    return $.get('api/cat/' + id);
  }
});
