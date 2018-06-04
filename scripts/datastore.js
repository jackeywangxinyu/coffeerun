(function(window) {
  'use strict';
  var APP = window.APP || {};
  var Promise = window.Promise;

  function DataStore() {
    this.data = {};
  }

  function promiseResolveWith(value) {
    var promise = new Promise(function(resolve, reject) {

      resolve(value);
    }.bind(this));
    return promise;
  }
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
    return promiseResolveWith(null);
  }
  DataStore.prototype.get = function(key) {
    return promiseResolveWith(this.data[key]);
  }
  DataStore.prototype.getAll = function() {

    return promiseResolveWith(this.data);

  }
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
    return promiseResolveWith(null);
  }
  APP.DataStore = DataStore;
  window.APP = APP;
})(window);
