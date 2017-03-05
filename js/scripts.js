//business logic
// objects - pizza, order
function Pizza(sizeOf,crust,sauce,cheese,veggieToppings,meatToppings,cost){
  this.sizeOf=sizeOf;
  this.crust=crust;
  this.sauce=sauce;
  this.cheese=cheese,
  this.veggieToppings=veggieToppings;
  this.meatToppings=meatToppings;
  this.cost=8;
}

function Order(pizzas,totalCost,deliveryAddress){
  this.pizzas=pizzas;
  this.totalCost=0;
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
  //cost adjustment on sauce
  (this.sauce==="oil") ? (this.cost=(1+this.cost)):(this.cost);
  (this.sauce==="pesto") ? (this.cost=(2+this.cost)):(this.cost);
  //cost adjustment on cheese
  (this.cheese==="extra") ? (this.cost=(1+this.cost)):(this.cost);
  (this.cheese==="blend") ? (this.cost=(2+this.cost)):(this.cost);
  //cost adjustment on veggie toppings
  var  pizzaCost=this.cost;
  if (this.veggieToppings !== undefined){
    this.veggieToppings.forEach(function(topping){
       (/arugula|garlic|basil|olives|pepperoncini|pineapple|mushrooms|/.test(topping)) ? (pizzaCost=(1+pizzaCost)):(pizzaCost);
    });
  }
  //cost adjustment on meat toppings
  console.log(this.meatToppings);
  if (this.meatToppings !== undefined){
    this.meatToppings.forEach(function(topping){
       (/pepperoni|bacon|sausage|salami|capicollo|anchovies/.test(topping)) ? (pizzaCost=(2+pizzaCost)):(pizzaCost);
    });
  }
  this.cost=pizzaCost;
  return this.cost;
}
Order.prototype.place = function(){
  var totalCost=0;
  this.pizzas.forEach(function(pizza,index){
    totalCost=pizza.cost+totalCost;
  });
  this.totalCost = totalCost;
}



//user logic
$(function(){
  var meatToppingsList =[];
  var pizzaInOrder=[];
  var newPizza = new Pizza();
//create pizza object
  $("#startPizza").click(function(){
    $("#pizzaForm").show();
  });
//pizza size, change price
  $("#pizzaSize").change(function(){
    newPizza.sizeOf=$("#pizzaSize").val();
    $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
  });
//meat toppings, increase and decrease price.
  $("#pizzaMeatToppings input[type=checkbox]").change(function(){
    newPizza.meatToppings=[];
    $("#meatToppingsDisplay").empty();
    $("#pizzaMeatToppings input[type=checkbox]:checked").each(function(){
      newPizza.meatToppings.push($(this).val());
    });
    $("#pizzaPrice").empty().append("<h1> Pizza Cost: $"+newPizza.howMuch()+"</h1>");
  });
});
