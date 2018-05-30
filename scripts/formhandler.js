(function(window){
  'use strict';
  var APP = window.APP||{};
  var $=window.jQuery;
  function FormHandler(selector){
    if(!selector){
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector')
    }
  }
  FormHandler.prototype.addSubmitHandler = function(fn){
    this.$formElement.on('submit',function(event){
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item){
        data[item.name]=item.value;
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  }
  APP.FormHandler = FormHandler;
  window.APP = APP;
})(window);
