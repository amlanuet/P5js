var tree;

function setup() {
    // put setup code here
    noCanvas();
    tree = new Tree();
    for (let i = 0; i < 10; i++) {
        tree.addValue(floor(random(100)));
    }
    console.log(tree);
    tree.traverse();
}

function draw() {
    // put drawing code here
}