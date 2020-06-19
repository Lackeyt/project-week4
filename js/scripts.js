$(document).ready(function() {
  //Business Logic
  function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

  Pizza.prototype.priceCalc = function(){
    let price
    switch(this.size){
      case "Small":
        price = 10
        foreach(this.toppings){
          price += 1
        }
        return price
      case "Medium":
        price = 15
        foreach(this.toppings){
          price += 1
        }
        return price
      case "Large":
        price = 20
        foreach(this.toppings){
          price += 1
        }
        return price
    };
  };


  //User Interface
})