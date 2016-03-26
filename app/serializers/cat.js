import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  keyForAttribute: function(key) {
    return key;
  },
  serialize: function(store, type, record) {
    var hash = this._super(store, type, record);
    delete hash.ownerName;
    return hash;
  },
  attrs:{
    ownerName: {serialize: false}
  }
});
