let cam;

// UP, DOWN, RIGHT, LEFT, FRONT, BACK
const UPP = 0;
const DWN = 1;
const RGT = 2;
const LFT = 3;
const FRT = 4;
const BCK = 5;

const colors = [
  '#FFFFFF',
  '#FFFF00',
  '#FFA500',
  '#FF0000',
  '#00FF00',
  '#0000FF'
];

const dim = 3;
// const cube = []; // Cubie[dim][dim][dim]; initialized in setup()
const cube = new Cubie(dim*dim*dim);

function setup() {
  // Disable the context menu on the canvas so the camera can use the right mouse button
  createCanvas(600, 600, WEBGL).elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 400 });

  let index = 0;
  for (let x = -1; x <= dim; x++) {
    cube[i] = [];
    for (let y = -1; y <= dim; y++) {
      cube[i][j] = [];
      for (let z = -1; z <= dim; z++) {
        PMatrix3D m = new PMatrix3D();
        matrix.translate(x, y, z)
        cube[index] = new Cubie(matrix);
        index++;
      }
    }
  }
}

function draw() {
  background(51);
  scale(100);
  for (let i = 0; i < cube.length; i++) {
     cube[i].show();
  }
}
