var car,wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  car.debug = true;
  wall = createSprite(1200, 200, 30, 200);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background(0);  

  deformation = ( 0.5 * weight * speed * speed ) / 22500;

  if(car.isTouching(wall)) {
    car.velocityX = 0;
  
    if(deformation < 100) {
      car.shapeColor = "red";
    }
    else if(deformation>=100 && deformation<180 ) {
      car.shapeColor = "yellow"
    }
    else if(deformation > 180) {
      car.shapeColor = "green"
    }
  }

  drawSprites();
}