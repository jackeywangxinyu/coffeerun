(function(window){
  'use strict';
  var FROM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var APP = window.APP;
  var Truck = APP.Truck;
  var DataStore = APP.DataStore;
  var FormHandler = APP.FormHandler;
  var CheckList = APP.CheckList;

  var myTruck = new Truck('ncc-1701',new DataStore());
  var checklist = new CheckList(CHECKLIST_SELECTOR);
  window.myTruck = myTruck;
  var formhandler = new FormHandler(FROM_SELECTOR);
  formhandler.addSubmitHandler(function(data){
    myTruck.createOrder.call(myTruck,data);
    checklist.addRow.call(checklist,data);
  });

  checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck));

})(window);
