//business logic
// objects - pizza, order
function Pizza(sizeOf,crust,sauce,cheese,toppings,cost){
  this.sizeOf=sizeOf;
  this.crust=crust;
  this.sauce=sauce;
  this.cheese=cheese,
  this.toppings=toppings;
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
  var pizzaCost = (this.sizeOf==="large") ? (3+pizzaCost):pizzaCost;
  var pizzaCost = (this.sizeOf==="Xlarge") ? (6+pizzaCost):pizzaCost;
  return pizzaCost;
}

Order.prototype.place = function(){
  return Order;
}

var pizza1=new Pizza ();

var order1=new Order ();

//user logic
$(function(){


});
