const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var color
trajectory =[];
function preload(){
color = loadImage("black4.png");

}
function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
    world = engine.world;


}

function draw() {
  //background(255,255,255);  
  drawSprites();
}
function mouseDragged(){
  var position = [mouseX, mouseY];
  trajectory.push(position);

  for(var i=0; i<trajectory.length; i++){
    image(color, trajectory[i][0], trajectory[i][1]);
  }
}
