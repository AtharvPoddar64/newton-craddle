
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(700,320,20);
	ball2 = new Ball(700,320,20);
	ball3 = new Ball(700,320,20);

	rope1 = new rope(ball1.body,{x:200, y:50});
	rope2 = new rope(ball2.body,{x:250, y:50});
	rope3 = new rope(ball3.body,{x:300, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 ball1.display()
 ball2.display()
 ball3.display()
}



