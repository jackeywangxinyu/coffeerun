(function(window) {
  var APP = window.APP||{};
  var $ = window.jQuery;
  var forColor = {
    '':'blue',
    'caramel':'green',
    'almond':'yellow',
    'mocha':'red'
  }
  // console.log(forColor['']);
  function CheckList(selector){
    if(!selector){
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if(this.$element.length===0){
      throw new Error("Could not find element with selector:"+seletor);
    }

  }

  function Row(coffeeOrder){
    var $div = $('<div></div>',{
      'data-coffee-order':'checkbox',
      'class':'checkbox'
    });
    $div.css('background-color',forColor[coffeeOrder.flavor]);
    var $label = $('<label></label>');
    var $checkbox = $('<input></input>',{
      'type':'checkbox',
      'value':coffeeOrder.emailAddress
    });
    var description = coffeeOrder.size+' ';
    if (coffeeOrder.flavor) {
      description+=coffeeOrder.flavor+' ';
    }
    description+=coffeeOrder.coffee+' ';
    description+=' ('+coffeeOrder.emailAddress+') ';
    description+=' ['+coffeeOrder.strength+'] ';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }
  CheckList.prototype.addRow = function(coffeeOrder){

    this.removeRow(coffeeOrder.emailAddress);
    var rowElement = new Row(coffeeOrder);

    this.$element.append(rowElement.$element);
  }
  CheckList.prototype.removeRow = function(email){
    this.$element
    .find('[value="'+email+'"]')
    .closest('[data-coffee-order="checkbox"]')
    .remove();
  }

  CheckList.prototype.addClickHandler = function(fn){
    this.$element.on('click','input',function(event){
      var email = event.target.value;

      fn(email).then(
        function(){
          this.removeRow(email);
        }.bind(this));
    }.bind(this));
  }

  APP.CheckList = CheckList;
  window.APP = APP;
})(window)
