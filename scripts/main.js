(function(window){
  'use strict';
  var FROM_SELECTOR = '[data-coffee-order="form"]';
  var APP = window.APP;
  var Truck = APP.Truck;
  var DataStore = APP.DataStore;
  var FormHandler = APP.FormHandler;

  var myTruck = new Truck('ncc-1701',new DataStore());
  window.myTruck = myTruck;
  var formhandler = new FormHandler(FROM_SELECTOR);
  formhandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

})(window);
