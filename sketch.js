var fixedRect, movingRect;

var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  /*fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;*/

  gameObject1 = createSprite(200,300,70,60);
  gameObject1.shapeColor = "red";
  gameObject1.velocityX= 8;

  gameObject2 = createSprite(800,300,60,70);
  gameObject2.shapeColor= "blue";
  gameObject2.velocityX= -8;
}

function draw() {
  background("white");  

  bounceOff(gameObject1,gameObject2);
   
   
   drawSprites();
}
