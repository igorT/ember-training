import DS from 'ember-data';
import Ember from 'ember';

var b = "/cat/1";
var a ={ cat: { id:1, dog_friend: 5, name: 'Igor' },
  dog: {id:5, name: 'dog'},
  requestTime: '200ms',
  apiServerStatus: 'chugging along'};
alert(a+b);
