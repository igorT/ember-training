import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
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
