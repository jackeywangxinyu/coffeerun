(function(window){
  'use strict';
  var FROM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var APP = window.APP;
  var Truck = APP.Truck;
  var DataStore = APP.DataStore;
  var FormHandler = APP.FormHandler;
  var CheckList = APP.CheckList;
  var RemoteDataStore = APP.RemoteDataStore;
  var Validation=APP.Validation;

  var remoteDS=new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701',remoteDS);

  var checklist = new CheckList(CHECKLIST_SELECTOR);
  window.myTruck = myTruck;
  var formhandler = new FormHandler(FROM_SELECTOR);
  formhandler.addSubmitHandler(function(data){
    return myTruck.createOrder.call(myTruck,data)
      .then(function(){
        checklist.addRow.call(checklist,data);
      })
  });
  formhandler.addInputHandler(Validation.isCompanyEmail);

  myTruck.printOrders(checklist.addRow.bind(checklist));
  checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck));



})(window);
