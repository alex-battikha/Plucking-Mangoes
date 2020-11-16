const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObject, treeObject, stoneObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var launcherObject;

var boyImage;

function preload(){
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new Ground(width/2, height-50, width, 10);

	treeObject = new Tree(880, 440, 650, 650);

	stoneObject = new Stone(200, 200, 30);

	mango1 = new Mango(650, 340, 30);
	mango2 = new Mango(800, 240, 30);
	mango3 = new Mango(910, 340, 30);
	mango4 = new Mango(945, 190, 30);
	mango5 = new Mango(1055, 280, 30);
	mango6 = new Mango(1125, 375, 30);
	mango7 = new Mango(765, 400, 30);

	launcherObject = new Launcher(stoneObject.body, {x:165, y:600});

	Engine.run(engine);
}


function draw() {
  background(240);
  textSize(30);
  fill("gray");
  textFont("Broadway");
  text("Press Space to get a second chance to play!", 50, 50);
  image(boyImage, 125, 520, 200, 300);

  groundObject.display();

  treeObject.display();

  stoneObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  launcherObject.display();

  detectCollsion(stoneObject, mango1);
  detectCollsion(stoneObject, mango2);
  detectCollsion(stoneObject, mango3);
  detectCollsion(stoneObject, mango4);
  detectCollsion(stoneObject, mango5);
  detectCollsion(stoneObject, mango6);
  detectCollsion(stoneObject, mango7);

  drawSprites();
}

function keyPressed() {
	if(keyCode == 32){
		Matter.Body.setPosition(stoneObject.body, {x:165, y:600});
		launcherObject.attach(stoneObject.body);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	launcherObject.fly();
}

function detectCollsion(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	//console.log(distance);
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}

}