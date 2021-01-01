const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(140,400,60);
	bob2 = new Bob(200,400,60);
	bob3 = new Bob(260,400,60);
	bob4 = new Bob(320,400,60);
	bob5 = new Bob(380,400,60);

	roof = new Roof(250,100,400,30,PI/2);

	rope1 = new rope(roof.body,bob1.body,-120,0);
	rope2 = new rope(roof.body, bob1.body,-60,0);
	rope3 = new rope(roof.body,bob1.body,0,0);
	rope4 = new rope(roof.body,bob1.body,60,0);
	rope5 = new rope(roof.body,bob1.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-85});
	}
}



