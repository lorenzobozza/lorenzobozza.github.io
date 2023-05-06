//p5.js sketch
let pos = 400
function windowResized() {
    resizeCanvas(document.body.clientWidth, window.innerHeight)
}

function mouseWheel(event) {
    pos += event.delta*2;
    if(pos<400) pos = 400
  }

function setup() {
    canvas = createCanvas(document.body.clientWidth, window.innerHeight, WEBGL)
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}
  
function draw() {
    background(0, 0)
    stroke(255, 455-pos/2)
    noFill()
    rotateY(millis() / 4000)
    sphere(pos, 9, 9)
    
}