function setup() {
    createCanvas(500, 360); //canvas size
}

function draw() {
    background(0,0,0); //set background color

    //head
  fill(255,255,255);
  strokeWeight(2);
  ellipse(230,190,100,210);
  ellipse(230,180,130,190);
  
  //eyes
  fill(0,0,0);
  noStroke();
  ellipse(200,170,45, 100);
  ellipse(260, 170,45, 100);
  
  //antennas
  stroke(255);
  strokeWeight(5);
  line(180, 100, 150, 50); // Left antenna
  line(280, 100, 310, 50); // Right antenna
  
  //mouth
  fill(0, 0, 0);
  ellipse(230, 250, 25, 10)
}
