var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box, boxright, boxleft
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	//boxright=createSprite(490, 610, 20, 100);
	//boxleft=createSprite(310, 610, 20, 100);

	
	//boxleft.shapeColor=("red");
	//boxright.shapeColor=("red");

	

	
	 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//box=createSprite(width/2, 200, 10,10);
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxSprite=createSprite(width/2, height-100, width, 20);
	boxSprite.shapeColor=("red");


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageSprite_options ={
		restitution: 0.5
	}

	

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageSprite_options);
	World.add(world, packageBody);
	
	


	box = Bodies.rectangle(width/2, 650, width, 10,box_options);
	World.add(world, box);

	var ground_options={
		isStatic: true
	}

	var box_options ={
		isStatic: true
}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,ground_options);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 	
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	
	

	
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



