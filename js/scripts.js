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

Order.prototype.place = function(){
  return Order;
}

var pizza1=new Pizza ();

var order1=new Order ();






Game.prototype.switchPlayers = function() {
  if (pigGame.activePlayer.who === "player1") {
    pigGame.activePlayer = player2;
    console.log("switch to player 2")
  } else {
    pigGame.activePlayer = player1;
    console.log("switch to player 1")
  }
}


//user logic
$(function(){


});
