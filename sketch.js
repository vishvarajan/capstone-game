var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG
var diamondsG
var jwelleryG
var swordGroup
var gameover,loose



//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
loose=loadAnimation("gameOver.png");



}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 15;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.y=525  
  
gameover= createSprite(width-700,300);
gameover.addAnimation("fail",loose)
gameover.scale=0.5



cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();


boy.debug=false
boy.setCollider("circle",0,0,270);


}

function draw() {

  if(gameState===PLAY){
  background(0);
  if(boy.x = World.mouseX||touches.length>0){

    touches=[]
  }
  

gameover.visible=false

  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y >height  ){
    path.y = height/50;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+250;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection =treasureCollection+150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END
  
    }
  }


if(gameState==END){



  
boy.X=350
boy.Y=200


  
  jwelleryG.destroyEach();
  cashG.destroyEach();
  diamondsG.destroyEach();
  diamondsG.setVelocityEach(0)
  cashG.setVelocityEach(0)
  jwelleryG.setVelocityEach(0)
  swordGroup.setVelocityEach(0)

  

gameover.visible=true


}


  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 15;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 50;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 25;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),0, 0, 0));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 25;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}