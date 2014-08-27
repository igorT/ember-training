import ApplicationSerializer from 'application';

export default ApplicationSerializer.extend({
  serialize: function(){
    debugger
    this._super.apply(this, arguments);
  }
});


