var fixedRect;
var movingRect;
var sprite1,sprite2;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(600,200,50,100);
  fixedRect.shapeColor = "green";
  
  sprite1 = createSprite(100, 300, 50, 50);
  sprite1.shapeColor = "green";
  sprite1.velocityX = 3;
  sprite2 = createSprite(700,300,50,100);
  sprite2.shapeColor = "green";
  sprite2.velocityX = -3;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor = "red";
    }else{
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }
    if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2 &&
      sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2 &&
      sprite1.y - sprite2.y <= sprite1.height/2 + sprite2.height/2 &&
      sprite2.y - sprite1.y <= sprite1.height/2 + sprite2.height/2){

      sprite1.velocityX= sprite1.velocityX * (-1);
      sprite2.velocityX= sprite2.velocityX * (-1);

      }
  drawSprites();
}