import Ember from 'ember';

export default Ember.ArrayController.extend({
  newName: '',
  newImage: '',
  actions: {
    createCat: function() {
      var cat = this.store.createRecord('cat');
      cat.set('name', this.get('newName'));
      cat.set('image', this.get('newImage'));
      this.set('newName', '');
      this.set('newImage', '');
      cat.save();
    }
  }
});
