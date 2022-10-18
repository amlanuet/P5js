var tree;

function setup() {
    // put setup code here
    noCanvas();
    tree = new Tree();
    for (let i = 0; i < 10; i++) {
        tree.addValue(floor(random(100)));
    }
    console.log(tree);
}

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n)
    }
}

Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function draw() {
    // put drawing code here
}