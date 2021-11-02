const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var ballBeach,ball_img;
var bgImg;
var slingShot;
var score=0;
function preload(){
  ball_img=loadImage("ball.png");
  bgImg=loadImage("party.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //nivel uno
  tin1 = new Tin(300,275,30,40);
  tin2 = new Tin(330,275,30,40);
  tin3 = new Tin(360,275,30,40);
  tin4 = new Tin(390,275,30,40);
  tin5 = new Tin(420,275,30,40);
  tin6 = new Tin(450,275,30,40);
  tin7 = new Tin(480,275,30,40);
  //nivel dos
  tin8 = new Tin(330,235,30,40);
  tin9 = new Tin(360,235,30,40);
  tin10 = new Tin(390,235,30,40);
  tin11 = new Tin(420,235,30,40);
  tin12 = new Tin(450,235,30,40);
  //nivel tres
  tin13 = new Tin(360,195,30,40);
  tin14 = new Tin(390,195,30,40);
  tin15 = new Tin(420,195,30,40);
  //parte superior
  tin16 = new Tin(390,155,30,40);

  //2do conjunto
  //nivel uno
  tins1 = new Tin(640,175,30,40);
  tins2 = new Tin(670,175,30,40);
  tins3 = new Tin(700,175,30,40);
  tins4 = new Tin(730,175,30,40);
  tins5 = new Tin(760,175,30,40);
  //nivel dos
  tins6 = new Tin(670,135,30,40);
  tins7 = new Tin(700,135,30,40);
  tins8 = new Tin(730,135,30,40);
  //parte superior
  tins9 = new Tin(700,95,30,40);

  ballBeach = Bodies.circle(50,200,20);
  World.add(world,ballBeach);
  
  slingShot = new Slingshot(this.ballBeach,{x:100,y:200});
}
function draw() {
  background(bgImg);

  textSize(20);
  fill("lightyellow");
  text("Arrastra el polígono para destruir los bloques",300,30);
  textSize(10);
  text("¡Presiona la Barra Espaciadora para tener una segunda oportunidad de jugar!",650 ,350);
  fill("red");
  text("Puntos: "+score,100,100,textSize(35));
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  tin1.display();
  tin1.score();
  tin2.display();
  tin2.score();
  tin3.display();
  tin3.score();
  tin4.display();
  tin4.score();
  tin5.display();
  tin5.score();
  tin6.display();
  tin6.score();
  tin7.display();
  tin7.score();
  tin8.display();
  tin8.score();
  tin9.display();
  tin9.score();
  tin10.display();
  tin10.score();
  tin11.display();
  tin11.score();
  tin12.display();
  tin12.score();
  tin13.display();
  tin13.score();
  tin14.display();
  tin14.score();
  tin15.display();
  tin15.score();
  tin16.display();
  tin16.score();
  tins1.display();
  tins1.score();
  tins2.display();
  tins2.score();
  tins3.display();
  tins3.score();
  tins4.display();
  tins4.score();
  tins5.display();
  tins5.score();
  tins6.display();
  tins6.score();
  tins7.display();
  tins7.score();
  tins8.display();
  tins8.score();
  tins9.display();
  tins9.score();
  fill("gold");
  imageMode(CENTER)
  image(ball_img ,ballBeach.position.x,ballBeach.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ballBeach,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
//Haz que regrese la pelota
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(this.ballBeach,{x:100,y:200});
    slingShot.attach(this.ballBeach);
  }
}