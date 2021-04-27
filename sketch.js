var fixRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(200,200,50,80);
  fixRect.shapeColor="blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="blue";
}

function draw() {
  background("lightblue");
  console.log(movingRect.x-fixRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2
    &&fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2
    &&movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2
    &&fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2){
    movingRect.shapeColor="yellow";
    fixRect.shapeColor="yellow";
  } 
  else{
    movingRect.shapeColor="blue";
    fixRect.shapeColor="blue";
  }
  drawSprites();
}