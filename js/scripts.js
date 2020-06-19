
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
    let sizePrice
    let totalPrice = this.toppingsPriceCalc()
    switch(this.size){
      case "Small":
        sizePrice = 10
        break;
      case "Medium":
        sizePrice = 15
        break;
      case "Large":
        sizePrice = 20;
        break;
    };
    totalPrice += sizePrice
    return [sizePrice, totalPrice]
  };

  //User Interface
  function toppings(){
    let pizzaToppings = []
    $("input:checkbox[name=topping]:checked").each(function(i){
      pizzaToppings[i] = $(this).val();
    })
    return pizzaToppings
  }

  function showCheckoutToppings(pizzaToppings){
    pizzaToppings.forEach(
      element => $(".toppingsChoice").append(`<li>${element}</li>`)
    )
  }

  function orderConfirmedToppings(pizzaOrder){
    let output
    if (pizzaOrder.toppings.length === 0) {
      output = "nothing but cheese and sadness"
    } else {
      output = pizzaOrder.toppings.join(", ")
    }
    return output
  }
  
$(document).ready(function() {
  $("#pizzaOptions").submit(function(){
    event.preventDefault()
    let pizzaOrder = new Pizza($("input:radio[name=size]:checked").val(), toppings())
    let price = pizzaOrder.priceCalc()
    $(".sizeChoice").append(`<li>${pizzaOrder.size} ($${price[0]})</li>`)
    $("#toppings").append(` ($${pizzaOrder.toppingsPriceCalc()})`)
    showCheckoutToppings(pizzaOrder.toppings)
    $("#total").append(` $${price[1]}`)
    $(".orderSize").text(pizzaOrder.size)
    $(".orderToppings").text(orderConfirmedToppings(pizzaOrder))
    $("#checkout").toggle()
    $("#pizzaOptions").toggle()
  })

  $("#goBack").click(function(){
    event.preventDefault()
    $(".sizeChoice").empty()
    $("#toppings").text("Toppings")
    $(".toppingsChoice").empty()
    $("#total").text("Total: ")
    $("#checkout").toggle()
    $("#pizzaOptions").show()
  })

  $("#order").click(function(){
    event.preventDefault()
    $("#checkout").hide()
    $("#orderConfirmed").show()
  })

  $("#startOver").click(function(){
    location.reload()
  })
})