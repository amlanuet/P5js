class Cubie {
  constructor(m) {
    matrix = m;
  }
  show() {
    fill(255);
    stroke(0);
    strokeWeight(0.01);
    pushMatrix();
    applyMatrix(matrix);
    box(1);
    pop();
  }
}
