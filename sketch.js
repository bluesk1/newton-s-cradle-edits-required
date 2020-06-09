var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,circle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options = {
		weight: 3000
	}
	circle = Bodies.circle(400,600,50,options);
	World.add(world, circle);
	circle2 = Bodies.circle(300,600,50, options);
	World.add(world, circle2);
	hanger = new Ground(400,200,400,10);
	World.add(world, hanger);
	

	constraint1 = new constrain({x: 200, y: 200},circle.body);
	constraint2 = new constrain({x: 400, y: 200},circle2.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hanger.display();
  ellipse(circle.position.x,circle.position.y,50,50,0,0,0);
  ellipse(circle2.position.x,circle2.position.y,50,50,0,0,0);
  constraint1.display();
  constraint2.display();
  drawSprites();
 
}



