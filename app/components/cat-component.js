import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  hasFriends: Ember.computed.gt('cat.catFriends.length', 0),
  actions: {
    delete: function(cat){
      cat.deleteRecord();
      cat.save().then(null, function(error) {
        alert(error.responseText);
        var id = cat.get('id');
        var store = cat.get('store');
        cat.unloadRecord();
        store.find('cat', id);
      });
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
