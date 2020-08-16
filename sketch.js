const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world 

const Constraint = Matter.Constraint;

function setup() {
  

  engine = Engine.create();
  world = engine.world
  createCanvas(800,400);
  ground = new Ground(600,300,300,50);
  block1 = new Block(550,200,50,50);
  block2 = new Block(600,200,50,50);
  block3 = new Block(650,200,50,50);
  block4 = new Block(700,200,50,50);
  block5 = new Block(500,200,50,50);
  block6 = new Block(550,200,50,50);
  block7 = new Block(600,200,50,50);
  block8 = new Block(650,200,50,50);
  block9 = new Block(600,200,50,50);
  polygon = new Polygon(300,300,50);
  slingshot = new Slingshot(polygon.body,{x:300,y:200});

  ground.display();
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
   drawSprites();
}
function mouseDragged()
{
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly();
}