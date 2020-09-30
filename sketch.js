const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobj,paperObj,groundObj,world



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
	dustbinobj=new dustbin(1200,650)
	paperObj=new paper(200,450,40)
	groundObj=new ground(width/2,670,width,20)
	var Render=Render.create({
	element:document.body,
	engine=engine,
	options:{
	width:1200,
	height=700,
	wireFrames:
	}
	}
	);
	//Create the Bodies Here.


	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobj.display()
  paperObj.display()
  groundObj.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_Arrow){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position{x : 85,y : -85});
	}
}


