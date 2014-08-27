import DS from 'ember-data';

export default DS.Adapter.extend({
  namespace: 'api',
  pathForType: function(type) {
    return type.typeKey;
  },
  buildUrl: function(type, id, record){
    if (!id) {
      return this.namespace + '/'+ this.pathForType(type);
    }
    return this.namespace + '/'+ this.pathForType(type) + '/' + id;
  },

  findAll: function(store, type){
    var url = this.buildUrl(type);
    return $.get(url);
  },

  find: function(store, type, id, record){
    var url = this.buildUrl(type, id);
    return $.get(url);
  },

  deleteRecord: function(store, type, record){
    var url = this.buildUrl(type, record.get('id'));
    return $.ajax({
      url: url,
      type: 'delete'
    });
  },

  updateRecord: function(store, type, record){
    var url = this.buildUrl(type, record.get('id'));
    return $.ajax({
      url: url,
      type: 'put',
      data: record.serialize()
    });
  },

  createRecord: function(store, type, record) {
    var url = this.buildUrl(type, record.get('id'));
    return $.ajax({
      url: url,
      type: 'post',
      data: record.serialize()
    });
  }
});
