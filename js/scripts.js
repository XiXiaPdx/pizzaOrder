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
  //cost adjustment on Size of pizza
  var pizzaCost = (this.sizeOf==="large") ? (this.cost=(3+pizzaCost)):(this.cost=pizzaCost);
  var pizzaCost = (this.sizeOf==="Xlarge") ? (this.cost=(6+pizzaCost)):(this.cost=pizzaCost);
  //cost adjustment on Crust of pizza
  var pizzaCost = (this.crust==="thin") ? (this.cost=(1+pizzaCost)):(this.cost=pizzaCost);
  var pizzaCost = (this.crust==="deepdish") ? (this.cost=(2+pizzaCost)):(this.cost=pizzaCost);
  return pizzaCost;
}

Order.prototype.place = function(){
  return Order;
}

var pizza1=new Pizza ("Xlarge","thin");

var order1=new Order ();

//user logic
$(function(){


});
