const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var bt1,bt2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var options={
   restitution:0.8
 }
 ball = Bodies.circle(200, 200, 20,options)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

bt1 = createImg("right.png")
bt1.position(50,50)
bt1.size(50,50)
bt1.mouseClicked(hForce)

bt2 = createImg("up.png")
bt2.position(100,100)
bt2.size(50,50)
bt2.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function hForce() {
  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
}

function vForce() {
  Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.05})
}
