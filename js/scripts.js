
  //Business Logic
  function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  };

  Pizza.prototype.priceCalc = function(){
    let sizePrice
    let totalPrice = this.toppings.length //$1 per topping
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
    return [sizePrice, totalPrice] //stores size and total separately for output
  };

  //User Interface
  //assembles toppings array
  function toppings(){
    let pizzaToppings = []
    $("input:checkbox[name=topping]:checked").each(function(i){
      pizzaToppings[i] = $(this).val();
    })
    return pizzaToppings
  }

  //lists toppings output on checkout screen
  function showCheckoutToppings(pizzaToppings){
    pizzaToppings.forEach(
      element => $(".toppingsChoice").append(`<li>${element}</li>`)
    )
  }

  //lists toppings output on order confirmation screen
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
  //on submission of size & topping selections
  $("#pizzaOptions").submit(function(){
    event.preventDefault()
    let pizzaOrder = new Pizza($("input:radio[name=size]:checked").val(), toppings())
    let price = pizzaOrder.priceCalc()
    $(".sizeChoice").append(`<li>${pizzaOrder.size} ($${price[0]})</li>`)
    $("#toppings").append(` ($${pizzaOrder.toppings.length})`)
    showCheckoutToppings(pizzaOrder.toppings)
    $("#total").append(` $${price[1]}`)
    $(".orderSize").text(pizzaOrder.size)
    $(".orderToppings").text(orderConfirmedToppings(pizzaOrder))
    $("#checkout").toggle()
    $("#pizzaOptions").toggle()
  })

  //reverts back to submissions screen and clears checkout output
  $("#goBack").click(function(){
    event.preventDefault()
    $(".sizeChoice").empty()
    $("#toppings").text("Toppings")
    $(".toppingsChoice").empty()
    $("#total").text("Total: ")
    $("#checkout").toggle()
    $("#pizzaOptions").show()
  })

  //confirms order and proceeds to order confirmation screen
  $("#order").click(function(){
    event.preventDefault()
    $("#checkout").hide()
    $("#orderConfirmed").show()
  })

  //reloads the page
  $("#startOver").click(function(){
    location.reload()
  })
})