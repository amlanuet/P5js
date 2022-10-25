class Cubie {
   PMatrix3D trix;
  constructor(PMatrix3D m) {
    trix = m;
  }
  show() {
    fill(255);
    stroke(0);
    strokeWeight(0.01);
    pushMatrix();
    applyMatrix(trix);
    box(1);
    pop();
  }
}
