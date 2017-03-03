//business logic
// objects - pizza, order
function Pizza(sizeOf,crust,sauce,cheese,veggieToppings,meatToppings,cost){
  this.sizeOf=sizeOf;
  this.crust=crust;
  this.sauce=sauce;
  this.cheese=cheese,
  this.veggieToppings=[];
  this.meatToppings=[];
  this.cost=8;
}

function Order(pizzas,totalCost,deliveryAddress){
  this.pizzas=pizzas;
  this.totalCost=0;
  this.deliveryAddress=deliveryAddress;
}

Pizza.prototype.howMuch = function(){
  var pizzaCost;
  //cost adjustment on Size of pizza
  pizzaCost =(this.sizeOf==="large") ? (this.cost=(4+this.cost)):(this.cost);
  pizzaCost =(this.sizeOf==="Xlarge") ? (this.cost=(7+this.cost)):(this.cost);
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
}
Order.prototype.place = function(){
  var totalCost=0;
  this.pizzas.forEach(function(pizza,index){
    totalCost=pizza.cost+totalCost;
  });
  this.totalCost = totalCost;
}

var pizza1=new Pizza ();
var pizza2=new Pizza ();


//user logic
$(function(){


});
