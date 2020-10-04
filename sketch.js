
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Body = Matter.Body;

var engine, world, body;
var mango1;
var boy, boyImg;
var tree, stone;
var slingshot;
var ground;
var launchingForce = 100;

function preload() {
    boyImg = loadImage("sprites/boy.png");
}

function setup(){
	canvas = createCanvas(1300, 600);
	
    engine = Engine.create();
    world = engine.world;
    
    stone = new Stone(235, 420, 30);

    mango1 = new Mango(980, 120, 30);
    mango2 = new Mango(1060, 130, 30);
	mango3 = new Mango(900, 140, 30);
	mango4 = new Mango(900, 70, 30);
	mango5 = new Mango(1000, 40, 30);
	mango6 = new Mango(900, 230, 30);
	mango7 = new Mango(801, 200, 35);
	mango8 = new Mango(1010, 200, 30);
	mango9 = new Mango(1100, 200, 40);
	mango10 = new Mango(851, 230, 25);
    
    tree = new Tree(950, 580);

    ground = new Ground(width/2, 600, width, 20);

    slingshot = new SlingShot(stone.body, {x : 235, y : 420} );

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1300,
          height: 600,
          wireframes: false
        }
      });

      Engine.run(engine);
    //Render.run(render);
}

function draw(){

	background(230);
    
	Engine.update(engine);
	
	strokeWeight(4);
    
    textSize(25);
    text("Press Space to get a second Chance to Play!!", 50, 50);
    image(boyImg , 200, 355, 200, 300);

    tree.display(); 

	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
    mango10.display();

	ground.display();

	stone.display();

    slingshot.display();    

    detectCollision(stone, mango1)
    detectCollision(stone, mango2)
    detectCollision(stone, mango3)
    detectCollision(stone, mango4)
    detectCollision(stone, mango5)
    detectCollision(stone, mango6)
    detectCollision(stone, mango7)
    detectCollision(stone, mango8)
    detectCollision(stone, mango9)
    detectCollision(stone, mango10)

    /*if(detectCollision()){
        mango.body.isStatic = false
    }*/
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x : 235, y : 420})
        slingshot.attach(stone.body)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY} )
}

function mouseReleased(){
    slingshot.fly()
}

function detectCollision(lstone, lmango){

mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)

    if(distance <= lmango.r + lstone.r){

        Matter.Body.setStatic(lmango.body, false)

    }

}