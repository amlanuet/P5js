let snow = [];
let gravity;


function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.02);
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    snow.push(new SnowFlake(x, y));
  }
}

function draw() {
  background(0);

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1)
  //   }
  // }
}