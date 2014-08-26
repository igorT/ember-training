import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(){
    return $.get('api/cat');
  }
});
