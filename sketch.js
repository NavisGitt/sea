var ship, ship_moving ;
var sea ;
var seaimage ;



function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png" );
seaimage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  // creating ship
  ship = createSprite(300,160,450,30);
  ship.addAnimation("sailing", ship_moving);













}



function draw() {
  background("blue");
 
}