
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof1 = new Roof(400,50,600,20)
 bob1 = new Bob(100,350,10);
 bob2 = new Bob(150,350,100);
 bob3 = new Bob(200,350,10);
 bob4 = new Bob(250,350,10);
 bob5 = new Bob(300,350,10)
 bob6 = new Bob(350,350,10)
 bob7 = new Bob(400,350,10)
 bob8 = new Bob(450,350,10)
 rope1=new rope(bob1.body,roof1.body,-250,0);
 
 rope2=new rope(bob2.body,roof1.body,-200,0)
 rope3=new rope(bob3.body,roof1.body,-150,0)
 rope4=new rope(bob4.body,roof1.body,-100,0)
 rope5=new rope(bob5.body,roof1.body,-50,0)
 rope6=new rope(bob6.body,roof1.body,0,0)
 rope7=new rope(bob7.body,roof1.body,50,0)
 rope8=new rope(bob8.body,roof1.body,100,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  
  roof1.display();
  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();

  rope6.display();
  bob6.display();

  rope7.display();
  bob7.display();

  rope8.display();
  bob8.display();

  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    
}


