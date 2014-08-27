import DS from 'ember-data';
import Ember from 'ember';

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
    return this.ajax(url, 'get');
  },

  find: function(store, type, id, record){
    var url = this.buildUrl(type, id);
    return this.ajax(url, 'get');
  },

  deleteRecord: function(store, type, record){
    var url = this.buildUrl(type, record.get('id'));
    return this.ajax(url, 'delete');
  },

  updateRecord: function(store, type, record){
    var url = this.buildUrl(type, record.get('id'));
    return this.ajax(url, 'put', record.serialize());
  },

  createRecord: function(store, type, record) {
    var url = this.buildUrl(type, record.get('id'));
    return this.ajax(url, 'post', record.serialize());
  },

  ajax: function(url, type, data) {

    return new Ember.RSVP.Promise(function(resolve, reject) {
      var options = { type: type, url: url};
      if (data) {
        options.data = data;
      }

      options.success = function(json) {
        Ember.run(null, resolve, json);
      };

      options.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, jqXHR);
      };

      $.ajax(options);
    }, "DS: RESTAdapter#ajax " + type + " to " + url);
  },


});
