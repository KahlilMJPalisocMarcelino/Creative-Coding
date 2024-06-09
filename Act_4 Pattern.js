let rez = 0.02;
let size = 50; //size of the triangles 
let colorStart;


function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  colorStart = random(260); //to generate a different color palette each time
  noLoop(); 
}

function draw() {
  background(255);
  
  //loop through each cell of the grid
  for (let i = 0; i < width; i += size) {
    for (let j = 0; j < height; j += size) {
      
      //cell noise values
      let n1 = noise(i * rez, j * rez);
      let n2 = noise(i * rez + 10000, j * rez + 10000);
      
      //first type of triangle
      if (n1 < 0.5) {
        fill(floor(n1 * 100) + colorStart, 100, 100, 100);
        triangle(i, j, i + size, j + size, i, j + size); 
        fill(floor(100 - (n1 * 100)) + colorStart, 100, 100, 100); 
        triangle(i, j, i + size, j + size, i + size, j);
      } else {
        //second type of triangle
        fill(floor(n2 * 100) + colorStart, 100, 100, 100);
        triangle(i + size, j, i, j + size, i, j);
        fill(floor(100 - (n2 * 100)) + colorStart, 100, 100, 100);
        triangle(i + size, j, i, j + size, i + size, j + size);
      }
    }
  }
}

function mousePressed() {

  rez = random(0.01, 0.05); //change the noise randomly
  size = int(random(30, 70)); //change size of the triangles randomly
  redraw(); 
}
