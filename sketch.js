var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  fill("white");
  textSize(25);
  textFont("calibri");
  text("Project By:- Debarka Ghosh",500,300);

  hr = hour();
  mn = minute();
  sc = second();
  
  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle);

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,265,265,0,mnAngle);

  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
}