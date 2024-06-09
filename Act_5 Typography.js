let customFont;

function preload() {
  customFont = loadFont('RomanticaPersonalUse-8V2J-1.ttf'); //fontspace.com
}

function setup() {
  createCanvas(800, 600);
  textFont(customFont);
  textSize(65);
}

function draw() {
  // background gradient
  setGradient(0, 0, width, height, color(244,196,48), color(135,206,250), "Y");

  // shape
  fill(32, 42, 68); // Navy blue
  noStroke();
  ellipse(width / 2, height / 2, 200, 200);
  rect(width / 4, height / 4, width / 2, height / 2);

  // text
  fill(255); // White
  textAlign(CENTER, CENTER);
  text("Bath Spa University", width / 2, height / 2);
}

//to draw gradient
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis == "Y") {
    // top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") {
    // left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
