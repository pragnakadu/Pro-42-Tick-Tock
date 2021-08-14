
var hr , min , sc
var scAngle , minAngle , hrAngle
var circle





function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  circle = ellipse(100 , 100 , 100)

  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  background("black");
  translate(200, 200)
  rotate (-90)

  fill("yellow")
  textSize(100)
  text("24 hour format clock" , 600 , 600) 

  fill("orange")
  arc(0 , 0 , 300 , 300 ,0 , 360 )

  hr = hour();
  min = minute();
  sc = second();

  scAngle = map(sc , 0 , 60 , 0 , 360);
  minAngle = map(min , 0 , 60 , 0 , 360);
  hrAngle = map(hr % 12 , 0 , 12 , 0 , 360 );

  //drawing seconds hand
  push()
  rotate(scAngle)
  stroke(0 , 255 , 0);
  strokeWeight(7);
  line(0 ,0 , 100 , 0);
  pop()


  //drawing minutes hand
  push()
  rotate(minAngle)
  stroke(0 , 0 , 255 )
  strokeWeight(7)
  line(0 , 0 , 75 , 0)
  pop()

  //drawing hour hand
  push()
  rotate(hrAngle)
  stroke(255 , 0 , 0)
  strokeWeight(7)
  line(0 , 0 , 75 , 0)
  pop()

  // drawing arc for second , hour and minute
  stroke(0 , 255 , 0)
  point(0 , 0 )
  strokeWeight(10)
  noFill()

  stroke(0 , 255 , 0 )
  arc(0 , 0, 300 , 300 ,  0 , scAngle)
  
  stroke(0 , 0 , 255)
  arc(0 , 0 , 280 , 280 , 0 , minAngle)
  
  stroke(255 , 0 , 0)
  arc(0 , 0 , 260 , 260 , 0 , hrAngle)
  
  //line(0 , 0  , 50 , 0)
  
  

  drawSprites();
}