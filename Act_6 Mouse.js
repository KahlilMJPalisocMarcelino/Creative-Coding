let trails = []; // array to store the positions of the mouse trail

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke(); 
}

function draw() {
  background(0, 0, 0); // Black

  trails.push(createVector(mouseX, mouseY)); // the current x & y coordinates of the mouse 

  // keeps the last 100 positions and removes if it exceeds 100
  if (trails.length > 100) {
    trails.shift();
  }

  // loop through the trails array to draw the trail
  for (let i = 0; i < trails.length; i++) {
    let pos = trails[i]; // the position from the trails array
    fill(255, 255 - i * 2.5, 0); // trail color (changes over time)
    // as i increases, the color gradually changes from yellow to red
    ellipse(pos.x, pos.y, i / 2); // draw an ellipse at the position with a size based on its index
  }
}
