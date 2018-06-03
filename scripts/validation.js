(function(window){
  var APP = window.APP||{};

  var Validation={
    isCompanyEmail:function(email){
      return /.+@qq\.com$/.test(email);
    }
  }
  APP.Validation=Validation;
  window.APP = APP;
})(window);
