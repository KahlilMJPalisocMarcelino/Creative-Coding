//PIXEL DATA
var img, x, y;

function preload() {

img = loadImage("dates.jpg");

}



function setup() {

createCanvas (900, 700);

background(0);

noStroke();

}



function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0);

var c = get(x, y); //where you get the mouse position

fill(c); //c = mouse

ellipse (x, y, 100, 100); //shape ellipse

}

//Pointellism Effect
var img, x, y;

function preload() {

img = loadImage("city.jpg");

}



function setup() {

createCanvas (700, 600);

background(0);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y); //c = color at the specified (x, y) location in the image

fill(c[0], c[1], c[2], 50);

ellipse (x, y, 30, 30);

}

//Posterize Filter
var img;

function preload() {

img = loadImage("facepaint.jpg");

}



function setup () {

createCanvas (700, 700);

background(0);

}



function draw() {

background(0);

image(img, 0, 0);

var v = map(mouseX, 0, width, 2, 20);

filter(POSTERIZE, v);

}

//Clip & Mask Function
let img;

function preload() {
  img = loadImage("water.jpg");
}

function setup() {
  createCanvas(600, 500);
  background(190, 220, 250);

  // Circle using clip function
  let imgCircle = img.get();
  imgCircle.resize(200, 200);
  let cnvCircle = createGraphics(200, 200);
  cnvCircle.circle(100, 100, 190);
  let ctxCircle = cnvCircle.canvas.getContext("2d");
  ctxCircle.save();
  ctxCircle.clip();
  cnvCircle.image(imgCircle, 0, 0, 200, 200); 
  ctxCircle.restore();
  image(cnvCircle, 25, 25);

  // Triangle using mask function
  let imgTriangle = img.get(); 
  imgTriangle.resize(200, 200);
  let cnvTriangle = createGraphics(200, 200);
  cnvTriangle.triangle(10, 190, 190, 190, 100, 10);
  imgTriangle.mask(cnvTriangle);
  image(imgTriangle, 300, 25);

  // Rectangle using clip function
  let imgRectangle = img.get(); 
  imgRectangle.resize(200, 200);
  let cnvRectangle = createGraphics(200, 200);
  cnvRectangle.rect(10, 10, 180, 180);
  let ctxRectangle = cnvRectangle.canvas.getContext("2d");
  ctxRectangle.save();
  ctxRectangle.clip();
  cnvRectangle.image(imgRectangle, 0, 0);
  ctxRectangle.restore();
  image(cnvRectangle, 25, 250);

  // Apply watercolor effect
  waterColor();
}

function waterColor() {
  // Watercolor effect inside circle
  push();
  translate(125, 125); // Adjust position to center inside the circle
  circle(0, 0, 180);
  let ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clip();
  
  noStroke();
  let r = 0;
  let g = 50;
  let b = 255;
  let vary = 10;
  for (let n = 0; n < 700; n++) {
    let i = random(-100, 100);
    let j = random(-100, 100);
    fill(
      r + random(-vary, vary),
      g + random(-vary, vary),
      b + random(-vary, vary),
      10
    );
    circle(i, j, 45);
  }
  
  ctx.restore();
  pop();
}




//Clip with Text

let img;

function preload() {
  img = loadImage("texture.jpg");
}

function setup() {
  createCanvas(700, 700);
  background (232, 232, 232);

  // Show drawings inside of text using clip and erase functions

  // Create the first canvas with the circle behind the text
  let cnv4 = createGraphics(width, height); // creating sub canvas - the same size of the main canvas 
  let ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(250, 250, 200, 200); // size of the rectangle 
  ctx2.clip(); // clipping or getting the context 
  cnv4.fill(0, 200, 0); // circle color 
  cnv4.circle(350, 350, 100); // the position and size
  image(cnv4, 0, 0); // putting the sub canvas inside the main canvas 
  
  // Create the second canvas for the text with the image inside
  let cnv3 = createGraphics(width, height);
  cnv3.fill(200, 0, 0);  
  cnv3.rect(250, 250, 200, 200); // x, y, width and height 

  // Create a mask with the text
  let maskCanvas = createGraphics(width, height);
  maskCanvas.fill(255); // Set the fill to white
  maskCanvas.textSize(50);
  maskCanvas.textAlign(CENTER, CENTER); // Align text to the center
  maskCanvas.text('Creative', 350, 300); // text, x, y
  maskCanvas.text('Coding', 350, 350); // text, x, y
 
  
  // Draw the image on the canvas
  cnv3.image(img, 250, 250, 200, 200); // Draw the image
  cnv3.image(maskCanvas, 0, 0); // Apply the mask
  
  image(cnv3, 0, 0); // putting the sub canvas inside the main canvas 
}



