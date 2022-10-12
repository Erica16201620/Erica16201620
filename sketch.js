function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0)
}

function draw() {
  background(0);
  stroke(255)//框限顏色(255為白色)
  noFill()//不要充滿顏色
  rectMode(CENTER)//以方框中心點為座標

  for(var j=0;j<(height/50);j++){
    for(var i=0;i<width/50;i=i+1)//i++==>i=i+1
  {
  ellipse(25+(i*50),25+(j*50),70+mouseX/10)
  stroke("#778da9")
  rect(25+(i*50),25+(j*50),50)//在座標(25,25)
  stroke("118ab2")
  ellipse(50+(i*50),50+(j*50),25+mouseY/5)//方塊座標
  stroke("#d5bdaf")
  }

  }
}

