import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  buildURL: function(type, id) {
    if (id !== undefined && id !== null) {
      return '/api/cats/' + id;
    } else {
      return '/api/cats/';
    }
  },
  find: function(store, type, id) {
    var url = this.buildURL(type, id);
    return Ember.$.get(url);
  },

  findAll: function(store, type) {
    var url = this.buildURL(type);
    return Ember.$.get(url);
  },

  updateRecord: function(store, type, record) {
    var url = this.buildURL(type, record.get('id'));
    return Ember.$.ajax({
      type: 'put',
      url: url,
      data: JSON.stringify(record.serialize()),
      contentType: 'application/json',
      processData: false
   });
  },
  createRecord: function(store, type, record) {
    var url = this.buildURL(type);
    return Ember.$.ajax({
      type: 'post',
      url: url,
      data: JSON.stringify(record.serialize()),
      contentType: 'application/json',
      processData: false
   });
  }
});
