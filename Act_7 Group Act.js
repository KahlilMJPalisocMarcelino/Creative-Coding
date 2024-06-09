let customFont;
let bgImg;

function preload() {
  customFont = loadFont('CrampsRegular-OV7od.ttf'); //fontspace.com
  bgImg = loadImage('BSU.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textFont(customFont);
  textSize(32);
}

function draw() {
  background(bgImg);

  //mouse position - the interactivity
  let mx = mouseX;
  let my = mouseY;

  //text
  fill(32,42,68); //navy blue
  textAlign(CENTER, CENTER);
  text("Welcome to Bath Spa University", mx, my);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
