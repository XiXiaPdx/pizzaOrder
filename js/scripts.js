//business logic
// objects - pizza, order
function Pizza(sizeOf,crust,sauce,cheese,veggieToppings,meatToppings,cost){
  this.sizeOf=sizeOf;
  this.crust=crust;
  this.sauce=sauce;
  this.cheese=cheese,
  this.veggieToppings=veggieToppings;
  this.meatToppings=meatToppings;
  this.cost=cost;
}

function Order(pizzas,totalCost,deliveryAddress){
  this.pizzas=pizzas;
  this.totalCost=totalCost;
  this.deliveryAddress=deliveryAddress;
}

Pizza.prototype.make = function(){
  return Pizza;
}

Pizza.prototype.howMuch = function(){
  var pizzaCost=8;
  //cost adjustment on Size of pizza
   pizzaCost = (this.sizeOf==="large") ? (this.cost=(4+pizzaCost)):(this.cost=pizzaCost);
   pizzaCost = (this.sizeOf==="Xlarge") ? (this.cost=(7+pizzaCost)):(this.cost=pizzaCost);
  //cost adjustment on Crust of pizza
   pizzaCost = (this.crust==="thin") ? (this.cost=(1+pizzaCost)):(this.cost=pizzaCost);
   pizzaCost = (this.crust==="deepdish") ? (this.cost=(2+pizzaCost)):(this.cost=pizzaCost);
  //cost adjustment on sauce
   pizzaCost = (this.sauce==="oil") ? (this.cost=(1+pizzaCost)):(this.cost=pizzaCost);
   pizzaCost = (this.sauce==="pesto") ? (this.cost=(2+pizzaCost)):(this.cost=pizzaCost);
  //cost adjustment on cheese
   pizzaCost = (this.cheese==="extra") ? (this.cost=(1+pizzaCost)):(this.cost=pizzaCost);
   pizzaCost = (this.cheese==="blend") ? (this.cost=(2+pizzaCost)):(this.cost=pizzaCost);
  //cost adjustment on veggie toppings
  this.veggieToppings.forEach(function(topping){
     (/arugula|garlic|basil|olives|pepperoncini|pineapple|mushrooms|/.test(topping)) ? (pizzaCost=(this.cost=(1+pizzaCost))):(this.cost=pizzaCost);
  });
  //cost adjustment on meat toppings
  this.meatToppings.forEach(function(topping){
     (/pepperoni|bacon|sausage|salami|capicollo|anchovies/.test(topping)) ? (pizzaCost=(this.cost=(2+pizzaCost))):(this.cost=pizzaCost);
  });
  return pizzaCost;
}

Order.prototype.place = function(){
  return Order;
}

var pizza1=new Pizza ("Xlarge","thin","oil","blend",["mushroom"],["pepperoni"]);

var order1=new Order ();

//user logic
$(function(){


});
