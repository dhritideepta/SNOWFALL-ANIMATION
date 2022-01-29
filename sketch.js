const Bodies= Matter.Bodies;
const World= Matter.World;
const Engine= Matter.Engine;

var engine,world


var bgImg,snow1Img,snow2Img;
 var snows = []
function preload(){
    bgImg=loadImage("snow3.jpg")

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
   
  for (var i =0;i<50;i++){
    snows.push (new Snow (10))
  }
}


function draw() {
  Engine.update(engine)
  background(bgImg);  
  drawSprites();
 
  for (var i =0;i<50;i++){
    if (snows[i].body.position.y>800){
      Matter.Body.setPosition(snows[i].body,{x:random(10,799),y:random(-800,0)})
    }
    snows[i].display();
    
  }
}
