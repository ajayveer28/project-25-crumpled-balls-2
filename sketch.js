var paper,dustbin,ground;
var wood1,wood2,wood3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;
    paper=new Paper(100,450,70);
	 
    ground=new Ground(width/2,670,width,20); 
    wood1=new Dustbin(500,height-70,200,170);
   // wood2=createSprite(400,height-120,20,150);
    // wood3=createSprite(600,height-120,20,150);
  
	Engine.run(engine);
  
}


function draw() {
 
  background("120")

  
Engine.update(engine);
 
  
  paper.display();
 // dustbin.display();
  ground.display();
wood1.display()
//wood2.display()
//wood3.display()

  drawSprites();
 
}

function keyPressed(){
 if (keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-500});

  }
  }