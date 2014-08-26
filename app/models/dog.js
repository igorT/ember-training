import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  playsFetch: DS.attr(),
  likesCats: DS.attr()
});
