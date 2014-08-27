import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  ownerName: DS.attr(),
  catFriends: DS.hasMany('cat', {inverse: 'catFriends'}),
  bestFriend: DS.belongsTo('cat', {inverse: null})
});
