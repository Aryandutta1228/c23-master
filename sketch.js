const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine,world;


function setup(){
var Canvas = createCanvas(1600,800);

engine = Engine.create();
world = engine.world;
ground = new Ground(800,800,1600,100);
pillar1 = new Pillars(660,500,125,500);
pillar2 = new Pillars(940,500,125,500);
pillar3 = new Pillars(800,300,405,100);
pillar4 = new Pillars(800,400,405,100);
pillar5 = new Pillars(725,600,25,300);
pillar6  = new Pillars(875,600,25,300);
pillar7  = new Pillars(800,480,175,60);
roof1 = new Circle(800,200,340,340);
pillar8 = new Pillars(570,525,50,450);
pillar9 = new Pillars(370,525,50,450);
pillar10 = new Pillars(410,525,30,450);
pillar11 = new Pillars(530,525,30,450);
pillar12 = new Pillars(470,338,150,75);
pillar13 = new Pillars(470,713,150,75);
pillar14 = new Pillars(470,522,150,75);
roof2 = new Circle(470,250,230,230);
pillar16 = new Pillars(1030,525,50,450);
pillar17 = new Pillars(1230,525,50,450);
pillar18 = new Pillars(1190,525,30,450);
pillar19 = new Pillars(1070,525,30,450);
pillar20 = new Pillars(1130,338,150,75);
pillar21 = new Pillars(1130,713,150,75);
pillar22 = new Pillars(1130,522,150,75);
roof3 = new Circle(1130,250,230,230);

roof4 = new Circle(100,150,40,40);
pillar23 = new Pillars(100,450,80,600);
pillar24 = new Pillars(100,200,100,50);

roof5 = new Circle(1500,150,40,40);
pillar25 = new Pillars(1500,450,80,600);
pillar26 = new Pillars(1500,200,100,50);



top1 = new Top(800,14,5,35);
top2 = new Top(100,120,5,20);
top3 = new Top(1500,120,5,20);
top4 = new Top(470,123,5,25);
top5 = new Top(1130,123,5,25);


}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  roof1.display();
  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  roof2.display();
  pillar8.display();
  pillar9.display();
  pillar10.display();
  pillar11.display();
  pillar12.display();
  pillar13.display();
  pillar14.display();
  
  roof3.display();
  pillar16.display();
  pillar17.display();
  pillar18.display();
  pillar19.display();
  pillar20.display();
  pillar21.display();
  pillar22.display();
  

  roof4.display();
  pillar23.display();
  pillar24.display();

  roof5.display();
  pillar25.display();
  pillar26.display();
  

  top1.display();
  top2.display();
  top3.display();
  top4.display();
  top5.display();
}