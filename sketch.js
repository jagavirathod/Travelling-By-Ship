var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(500,400);
  background("blue");

  // Moving background
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
  //sea.velocityY = -3;
  //sea.x = -3;
  sea.velocityX = -3;
  //sea.velocityX = 3;
  

  
    
  drawSprites();
}
