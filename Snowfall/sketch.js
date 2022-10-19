let snow = [];
let gravity;


function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
}

function draw() {
  background(0);
  snow.push(new SnowFlake);

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.render();
    flake.update();
  }
}