var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1500,1500);
  
  speed=random(55,90);
  weight=random(400,150);
  car=createSprite(50,200,20,20);
  wall=createSprite(800,90,30,height/2)
  car.velocityX = 10;
thickness=random(22,83);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);
}





if(wall.x-car.x < (car.width+wall.width)/2)
{car.velocityX=0;
  var deformation= 0.5 *2260 * 60 *70/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
else
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  else
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }



function hasCollided(lbullet,lwall);

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
else

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*32*223*233/(70*40);
}

else

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

else
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
