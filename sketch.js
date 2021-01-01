var PLAY = 1;
var END = 0;
var gameState = PLAY;

var car
var ground
var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score=0;
var backgroundImg

localStorage["HighestScore"] = 0;

function preload(){
 
  backgroundImg=loadImage("Race track.jpg")
 
 }

function setup() {
  createCanvas(1600, 800);
  
  car = createSprite(100,800,40,40);
  
  
  invisibleGround = createSprite(800,860,10000,10);
  invisibleGround.visible = true;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
}

function draw() {

  background(38,38,38);
  image(backgroundImg, 400, 0, 3200, 1200)

    if(keyDown("space") && car.y >= 159) {
      car.velocityY = -12;
    }
    car.velocityY = car.velocityY + 0.8
    car.velocityX = 6;
 
    camera.position.x = car.position.x
    camera.position.y = car.position.y

  
    car.collide(invisibleGround);
    spawnObstacles();
  
  
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(3000,830,50,20);
    obstacle.velocityX = -15
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
