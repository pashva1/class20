function setup() {
  createCanvas(1200,800);
  frect=createSprite(200,200,50,80);
  frect.shapeColor="green";
  mrect=createSprite(400,200,80,30);
  mrect.shapeColor="green";
  frect.debug=true;
  mrect.debug=true;
}

function draw() {
  background(0,0,0);
  mrect.x= World.mouseX;
  mrect.y=World.mouseY;

if(mrect.x-frect.x<frect.width/2+mrect.width/2 
  && frect.y-mrect.y<frect.width/2+mrect.width/2
  && mrect.x-frect.x<frect.width/2+mrect.width/2
  && mrect.y-frect.y<frect.width/2+mrect.width/2){
  mrect.shapeColor="red";
  frect.shapeColor="red";
}

else{
  mrect.shapeColor="green";
  frect.shapeColor="green";
}
  drawSprites();
}