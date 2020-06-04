var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
var engine,world;
var ground;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	

	Engine.run(engine);
	ground=new Ground(400,480,800,20);
	box1=new Dustbin(610,450,200,20);
	box2=new Dustbin(510,420,20,100);
	box3=new Dustbin(700,420,20,100);
    paperObject=new Paper(100,400,50);
}


function draw() {
	background(220);
  rectMode(CENTER);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});

}
}

