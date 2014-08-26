import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    delete: function(cat) {
      cat.deleteRecord();
      cat.save();
    }
  }
});
