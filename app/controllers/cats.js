import Ember from 'ember';

export default Ember.ArrayController.extend({
  newName: '',
  newImage: '',
  actions: {
    createDog: function() {
      var dog = this.store.createRecord('dog');
      dog.set('name', this.get('newName'));
      dog.set('image', this.get('newImage'));
      this.set('newName', '');
      this.set('newImage', '');
      dog.save();
    }
  }
});
