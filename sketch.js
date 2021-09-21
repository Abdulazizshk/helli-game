var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg, Sound1, deathSound 
var hellicopter,helliImg

function preload(){
bgImg = loadImage("assets/bg.png")
Sound1=loadSound("assets/jump.mp3")
deathSound=loadSound("assets/die.mp3")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
helliImg= loadImage("assets/helli.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,150,20);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
hellicopter=createSprite(200,50,50,20);
hellicopter.addImage(helliImg);
hellicopter.scale=0.5;


}

function draw() {
  
  background("black");
  edges=createEdgeSprites()
        
          //making the hot air balloon jump
          balloon.bounceOff(edges);
            balloon.collide(bottomGround);
            balloon.collide(topGround);
          //adding gravity
          balloon.velocityY = balloon.velocityY +0.2;
          hellicopter.velocityX=-3
          if(hellicopter.x<-30){
            hellicopter.x=430;
          }
          if(balloon.isTouching(hellicopter)){
            balloon.bounceOff(hellicopter);
            balloon.rotation=balloon.rotation+10
          }
        drawSprites();
        //balloon.rotation=balloon.rotation+5;
}
function keyPressed(){
  if(keyCode==UP_ARROW){
    Sound1.play();
    balloon.velocityY=-6;
  }
  if(keyCode==DOWN_ARROW){
    balloon.velocityY=6;
  }
  if(keyCode==LEFT_ARROW){
    balloon.velocityX=-6;
  }
  if(keyCode==RIGHT_ARROW){
    balloon.velocityX= 4; 
  }

  if(keyCode==32){
    balloon.rotation=balloon.rotation+5;
    deathSound.play();
  }


}

