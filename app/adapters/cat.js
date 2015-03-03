import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  find: function(store, type, id) {
    return Ember.$.get('/api/cats/' + id);
  },

  findAll: function() {
    return Ember.$.get('/api/cats');
  },

  updateRecord: function(store, type, record) {
    return Ember.$.ajax({
      type: 'put',
      url: '/api/cats/' + record.get('id'),
      data: JSON.stringify(record.serialize()),
      contentType: 'application/json',
      processData: false
   });
  },
  createRecord: function(store, type, record) {
    return Ember.$.ajax({
      type: 'post',
      url: '/api/cats/',
      data: JSON.stringify(record.serialize()),
      contentType: 'application/json',
      processData: false
   });
  }
});
