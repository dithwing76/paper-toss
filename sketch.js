
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var block1,block2,block3
var ball
var num =0
var bin,binimage

function preload()
{
	binimage=loadImage("bin.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	block1= new Block(650,640,10,70);
	block2= new Block(750,640,10,70);
	block3= new Block(700,690,100,10);
	//Create the Bodies Here.
	ground= new Ground(400,700,800,10);
	ball= new Ball(30,690,20,20);
	
	Engine.run(engine);

	bin = createSprite(700,650,20,20)
	bin.addImage(binimage)
	bin.scale =0.1
}


function draw() {
  rectMode(CENTER);
  background("white");
  block1.display();
  block2.display();
  block3.display();

  ball.display();
  
  
  ground.display();


  if (keyWentDown("up")&&num==0){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-25});
	  num=1
  }
  drawSprites();
 
}



