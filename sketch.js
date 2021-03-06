
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1, mango2, mango3, mango4, mango5, 
mango6, mango7, mango8, mango9;
var tree, boy, stone;
var launcher;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;



	tree = new Tree(900, 100, 550, 650);
  boy = new Boy(200, 510, 250, 260);
      
  mango1 = new Mango(1200, 200, 40, 40);
	mango2 = new Mango(1000, 300, 50, 50);
	mango3 = new Mango(1100, 250, 70, 70);
	mango4 = new Mango(1080, 180, 50, 50);
	mango5 = new Mango(1300, 350, 60, 60);
	mango6 = new Mango(1090, 380, 40, 40);
	mango7 = new Mango(1200, 300, 60, 60);
	mango8 = new Mango(1165, 150, 30, 30);
  mango9 = new Mango(1260, 250, 75, 75);

  stone = new Stone(200, 550, 75, 75);

  launcher = new Launcher(stone.body, {x: 200, y: 550});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  launcher.display();
  stone.display();


  

  drawSprites();

 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}




