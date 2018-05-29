(function (window){
  'use strict';
  var APP = window.APP || {};
  function Truck(truckId,db){
    this.truckId = truckId;
    this.db = db;
  };

  Truck.prototype.createOrder = function(order){
    this.db.add(order.emailAddress,order);
  };

  Truck.prototype.deliverOrder= function(customerId){
    this.db.remove(customerId);
  }
  Truck.prototype.printOrders = function(){
    var customerIdArray = Object.keys(this.db.getAll());
    customerIdArray.forEach(function(id){
      console.log(this.db.get(id));
    }.bind(this));
  };
  APP.Truck = Truck;
  window.APP = APP;
})(window);
