
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper1;	
var world;
var extradustbin1,extradustbin2;
var extradustbin1img,extradustbin2img;

function preload(){
	extradustbin1img = loadImage("trashcan.png");
	extradustbin2img = loadImage("trashcangreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    extradustbin1 = createSprite(150,555,40,40);
    extradustbin1.addImage(extradustbin1img);
	extradustbin1 = scale(0.5);
	extradustbin2 = createSprite(350,555,40,40);
	extradustbin2.addImage(extradustbin2img);
	extradustbin2 = scale(0.5);
	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(500,555,30);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper1.display();
  groundObject.display();
  dustbinObj.display();
  drawSprites();
}

