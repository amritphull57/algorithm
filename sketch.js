var movingRect, fixedRect 

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "green";

movingRect = createSprite(200,150,50,30);
movingRect.shapeColor = "green";

}

function draw() {
  background(0);

  movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x<movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y<fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y<movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor ="red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites()
}