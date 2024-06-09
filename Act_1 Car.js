function setup() {
createCanvas (700, 550);
}

function draw() {
background (91, 148, 205); //blue 
fill (255,0, 0); //makes the back light red
noStroke();
  
rect (92, 350, 50, 30); // back light indicator
  
fill (255, 215, 0); //yellow 
  
rect (600, 350, 8, 30); // front light indicator

fill(0,0,0); //tyres' color
  
// tyres
ellipse (200, 400, 100, 100);
ellipse (500, 400, 100, 100);
  
fill (148, 91, 205); //purple 
  
  // car structure + windows
beginShape();
vertex (100, 300);
vertex (250, 300);
vertex(250, 200);
vertex (400, 200);
vertex (500, 300);
vertex (600, 300);
vertex (600, 400);
vertex (100, 400);
vertex (100, 300);
endShape();
fill (255); //windows' color
  
// right window 
beginShape();
vertex (350, 250);
vertex (400, 250);
vertex (450, 300);
vertex (350, 300); 
vertex (350, 250);
endShape();
rect (280, 250, 50, 50);
fill(0,0,0);
  
// left door handle
ellipse (300, 330, 15, 15); 
  
// right door handle
ellipse (380, 330, 15, 15);
fill (225, 250, 0);
}
