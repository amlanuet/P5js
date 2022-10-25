class Cubie {
   PMatrix3D matrix;
  constructor(PMatrix3D m) {
    matrix = m;
  }
  show() {
    fill(255);
    stroke(0);
    strokeWeight(8);
    pushMatrix();
    applyMatrix(matrix);
    box(1);
    pop();
  }
}
