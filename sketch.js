var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redZone;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    redZone=createSprite(400,height-45,150,10);
	redZone.shapeColor="red";

	redZonel=createSprite(320,height-85,10,80);
	redZonel.shapeColor="red";

	redZoner=createSprite(480,height-85,10,80);
	redZoner.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 redZone=Bodies.rectangle(400,640,150,10);
	 World.add(world,redZone);


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
 if (keyCode===DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    
  }
}
