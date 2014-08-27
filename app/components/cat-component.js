import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  hasFriends: Ember.computed.gt('cat.catFriends.length', 0),
  actions: {
    delete: function(cat){
      cat.deleteRecord();
      cat.save();
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function(cat) {
      this.set('isEditing', false);
      cat.save();
    }
  }
});
