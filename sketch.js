const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world1;

var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto;

function setup(){
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world1 = engine.world;

  sun = new Sun(400,200,70);
  mercury = new Planet(324,162,35,150,150,150);
  venus = new Planet(360,270,45,50,80,20);
  earth = new Planet(450,300,55,0,160,255);
  mars = new Planet(455,110,50,150,60,10);
  jupiter = new Planet(342,53,50,255,170,0);
  saturn = new Planet(572,180,40,180,120,100);
  uranus = new Planet(350,350,30,0,200,255);
  neptune = new Planet(176,213,40,0,50,255);
  pluto = new Planet(235,50,30,47,44,89);
}

function draw(){
  background(0);
  
  Engine.update(engine);

  mercury.display();
  venus.display();
  earth.display();
  mars.display();
  jupiter.display();
  saturn.display();
  uranus.display();
  neptune.display();
  pluto.display();
  sun.display();

  if(frameCount%10===0){
    sun.radius = sun.radius + 10;
  }

  fill("white");
  text("x:"+mouseX,50,50);
  text("y:"+mouseY,50,70);
  
}