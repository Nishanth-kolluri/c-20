var fixedrectangle,movingrectangle ; 


function setup() {
  createCanvas(1200,800);
  fixedrectangle = createSprite(200,200,50,80);
  fixedrectangle.shapeColor = 'green';
  movingrectangle = createSprite(400,200,80,30);
  movingrectangle.shapeColor = 'green';
  
}

function draw() {
  background('pink');  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  if(movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 
    && fixedrectangle.x - movingrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 
    && movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2
    && fixedrectangle.y - movingrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2){

    movingrectangle.shapeColor = 'red';
    fixedrectangle.shapeColor = 'black';
  }
  else{
    fixedrectangle.shapeColor = 'green';
    movingrectangle.shapeColor = 'green';
  }
  drawSprites();
}