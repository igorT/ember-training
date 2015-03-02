import Ember from 'ember';

export default Ember.ArrayController.extend({
  isAnythingEditing: false,
  canEdit: function(){
    return !this.get('isAnythingEditing');
  }.property('isAnythingEditing'),
  edit: function(){
    this.set('isAnythingEditing', true);
  },

  actions: {
    createCat: function() {
      var newCat = this.store.createRecord('cat', {
        name: this.get('newName')
      });
      newCat.save();
    }
  }
});
