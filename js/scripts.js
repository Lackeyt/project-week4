
  //Business Logic
  function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  };

  Pizza.prototype.toppingsPriceCalc = function(){
    let toppingsPrice = 0
    for (i=0; i < this.toppings.length; i++){
      toppingsPrice +=1
    }
    return toppingsPrice
  }

  Pizza.prototype.priceCalc = function(){
    let price
    switch(this.size){
      case "Small":
        price = 10
        break;
      case "Medium":
        price = 15
        break;
      case "Large":
        price = 20;
        break;
    };
    price += this.toppingsPriceCalc()
    return price
  };

  
  function toppings(){
    let pizzaToppings = []
    $("input:checkbox[name=topping]:checked").each(function(i){
      pizzaToppings[i] = $(this).val();
    })
    return pizzaToppings
  }

  
$(document).ready(function() {
  $("#pizzaOptions").submit(function(){
    event.preventDefault()
    let pizzaSize = $("input:radio[name=size]:checked").val()
    let pizzaToppings = toppings()
    let pizzaOrder = new Pizza(pizzaSize, pizzaToppings)
    let price = pizzaOrder.priceCalc()

    $("#pizzaOptions").hide()
  })
})