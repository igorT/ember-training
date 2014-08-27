import Ember from 'ember';

export default Ember.ArrayController.extend({
  isAnythingEditing: false,
  canEdit: function(){
    return !this.get('isAnythingEditing');
  }.property('isAnythingEditing'),
  edit: function(){
    this.set('isAnythingEditing', true);
  }
});
