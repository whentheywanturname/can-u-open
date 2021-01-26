const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engnie, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var bruh, bro;
var sling;
function preload() {

}
function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
fill("blue");
b1 = new Coco(330,235,30,40);
b2 = new Coco(360,235,30,40);
b3 = new Coco(390,235,30,40);
b4 = new Coco(420,235,30,40);
b5 = new Coco(450,235,30,40);
b6 = new Coco(360,195,30,40);
b7 = new Coco(390,195,30,40);
b8 = new Coco(420,195,30,40);
bro = new Ground(390,340,180,50)   
bruh = new Ground(700,370,1400,60);

    }
function draw() {
    engine = Engine.create();
    world = engine.world;
}
function draw() {
    background("lightblue");
    Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    bro.display();
     bruh.display();
     ;
}
