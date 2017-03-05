//business logic
// objects - pizza, order
function Pizza(sizeOf,crust,veggieToppings,meatToppings,cost){
  this.sizeOf=sizeOf;
  this.crust=crust;
  this.veggieToppings=veggieToppings;
  this.meatToppings=meatToppings;
  this.cost=8;
}

function Order(pizzas,totalCost,deliveryAddress){
  this.pizzas=[];
  this.totalCost=totalCost;
  this.deliveryAddress=deliveryAddress;
}

Pizza.prototype.howMuch = function(){
  //cost adjustment on Size of pizza
  this.cost=8;
  (this.sizeOf==="large") ? (this.cost=(4+this.cost)):(this.cost);
  (this.sizeOf==="Xlarge") ? (this.cost=(7+this.cost)):(this.cost);
  //cost adjustment on Crust of pizza
  (this.crust==="thin") ? (this.cost=(1+this.cost)):(this.cost);
  (this.crust==="deepdish") ? (this.cost=(2+this.cost)):(this.cost);
  //cost adjustment on veggie toppings
  var  pizzaCost=this.cost;
  if (this.veggieToppings !== undefined){
    this.veggieToppings.forEach(function(topping){
       (/arugula|garlic|basil|olives|pepperoncini|pineapple|mushrooms|/.test(topping)) ? (pizzaCost=(1+pizzaCost)):(pizzaCost);
    });
  }
  //cost adjustment on meat toppings
  if (this.meatToppings !== undefined){
    this.meatToppings.forEach(function(topping){
       (/pepperoni|bacon|sausage|salami|capicollo|anchovies/.test(topping)) ? (pizzaCost=(2+pizzaCost)):(pizzaCost);
    });
  }
  this.cost=pizzaCost;
  return this.cost;
}
Order.prototype.howMuch = function(){
  var totalCost=0;
  this.pizzas.forEach(function(pizza,index){
    totalCost=pizza.cost+totalCost;
  });
  return this.totalCost = totalCost;
}



//user logic
$(function(){
  var newPizza = new Pizza();
  var yourOrder=new Order();
//create pizza object
  $("#startPizza").click(function(){
    $("#pizzaForm").show();
    $("#startPizza").toggle();
  });
//pizza size, change price
  $("#pizzaSize").change(function(){
    newPizza.sizeOf=$("#pizzaSize").val();
    $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
  });
//pizza crust
  $("#pizzaCrust").change(function(){
    newPizza.crust=$("#pizzaCrust").val();
    $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
  });
//meat toppings, increase and decrease price.
  $("#pizzaMeatToppings input[type=checkbox]").change(function(){
    newPizza.meatToppings=[];
    $("#pizzaMeatToppings input[type=checkbox]:checked").each(function(){
      newPizza.meatToppings.push($(this).val());
    });
    $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
  });
//veggie toppings, increase and decrease price.
    $("#pizzaVeggieToppings input[type=checkbox]").change(function(){
      newPizza.veggieToppings=[];
      $("#pizzaVeggieToppings input[type=checkbox]:checked").each(function(){
        newPizza.veggieToppings.push($(this).val());
      });
      $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
    });
//add to order
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    yourOrder.pizzas.push(newPizza);
    $("#firstPizza").hide();
    $("#morePizza").show();
    $("#pizzaPrice").empty();
    $("#pizzaForm").trigger("reset");
    $("#orderCart h1").append("<h3>"+"Pizza #"+(yourOrder.pizzas.length+"</h3>"));
    $("#orderPrice").empty().prepend("<h2> Order Total: $"+yourOrder.howMuch()+"</h2>");
    newPizza= new Pizza();
    console.log(yourOrder);


  });
});
