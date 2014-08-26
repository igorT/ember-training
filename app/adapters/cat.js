import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(){
    return $.get('api/cat').then(function(data) {
      data.forEach(function(cat) {
        cat.ownerName = cat.owner_name;
      });
      return data;
    });
  },
  find: function(store, type, id, record){
    return $.get('api/cat/' + id).then(function(cat){
      cat.ownerName = cat.owner_name;
      return cat;
    });
  },
  deleteRecord: function(store, type, record){
    return $.ajax({
      url: 'api/cat/' + record.get('id'),
      type: 'delete'
    });
  },
  updateRecord: function(store, type, record){
    return $.ajax({
      url: 'api/cat/' + record.get('id'),
      type: 'put',
      data: record.serialize()
    });
  },
  createRecord: function(store, type, record) {
    return $.ajax({
      url: 'api/cat/',
      type: 'post',
      data: record.serialize()
    });
  }
});
