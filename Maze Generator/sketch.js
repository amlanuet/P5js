var cols, rows;
var w = 40;
var grid = [];

function setup() {
    // put setup code here
    colorMode(HSB);
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}
function draw() {
    // put drawing code here
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        this.walls = [true, false, false, false]
        stroke(255);
        if (this.walls[0]) {
            // line from top left of each cell to the top right of each cell
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            // line from top right of each cell to the bottom right of each cell
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            // line from bottom right of each cell to the bottom left of each cell
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            // line from bottom left of each cell to the top left of each cell
            line(x, y + w, x, y);
        }


        // noFill();
        // rect(x, y, w, w);
    }
}