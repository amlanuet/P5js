let snow = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  snow.push(new SnowFlake);
  
  for (flake of snow) {
    flake.render();
  }
}