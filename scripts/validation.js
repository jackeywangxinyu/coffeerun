(function(window){
  var APP = window.APP||{};
  // var $= window.jQuery;

  var Validation={
    isCompanyEmail:function(email){
      return /.+@qq\.com$/.test(email);
    },
    isNewEmail:function(email){

    }
  }
  APP.Validation=Validation;
  window.APP = APP;
})(window);
