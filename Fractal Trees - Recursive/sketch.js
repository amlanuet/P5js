var angle;
var level = 100;
var slider;
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(300, height);
  branch(175);
}

// teken de de boom
function branch(len) {
  strokeWeight(Math.ceil(len / 5));
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 6) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    if (len < 14) {
      fill(80,random(150,255),random(0,150));
      leaf();
    }
    pop();
  }
  // line(0, 0, 0, -len * 0.67)
}

function leaf(){
  noStroke();
  ellipse(0, 0, random(6,16), 6);
  ellipse(-15, 0, random(6,16), 6);  
  ellipse(0, 15, random(6,16), 6);
}