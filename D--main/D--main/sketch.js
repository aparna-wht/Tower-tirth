const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    polygon=new Polygon(200,50,50,50);



}
function draw(){
    background(255);
    Engine.update(engine);
    polygon.display();



}

