let song; //audio file
let playing; //true = playing, false = paused
let fr; //frame rate
let a, b; //a = rotation, b = increment
let fft; //to analyze the audio
let layer;

function preload(){
  // for the audio file to load
  song = loadSound("Franz Schubert String Quartet E flat major Op 125 2 Scherzo Prestissimo.mp3");
  playing = false;
  
  //when song ends, it will reset
  song.onended(() => {
    playing = false; 
    document.getElementById("audio").innerText = "Play"; 
    a = 0;
  });
  
  //frame rate to 60
  fr = 60;
}

function setup() {
  createCanvas(500, 500);
  layer = createGraphics(width, height);
  background('black');
  
  //audio analysis
  fft = new p5.FFT(0, 256);
  
  //to calculate rotation based on song duration and frame rate
  a = 360 / (song.duration() * fr);
  b = a;
  frameRate(fr);
}

function draw() {
  background(0);
  
  //configure graphics layer
  layer.noFill();
  layer.colorMode(RGB);
  
  //frequency spectrum
  let spectrumA = fft.analyze();
  
  //reverse and trim the spectrum
  let spectrumB = spectrumA.reverse();
  spectrumB.splice(0, 40);
  
  //for the specturm to be a shape
  push();
  translate(250, 250);
  noFill();
  stroke('#FF9800');
  
  beginShape();
  for(let i = 0; i < spectrumB.length; i++){
    let amp = spectrumB[i];
    let x = map(amp, 0, 256, -2, 2);
    let y = map(i, 0, spectrumB.length, 30, 215);
    vertex(x, y);
  }
  endShape();
  pop();
  
  // rotate and draw lines based on the spectrum
  push();
  translate(width/2, height/2);
  rotate(radians(a));
  
  layer.push();
  layer.translate(width/2, height/2);
  layer.rotate(radians(-a));
  
  for(let i = 0; i < spectrumB.length; i++){
    layer.strokeWeight(0.018 * spectrumB[i]);
    layer.stroke(245, 132, 255 - spectrumB[i], spectrumB[i] / 40);
    layer.line(0, i, 0, i);
  }
  
  layer.pop();
  
  //graphics layer
  image(layer, -width/2, -height/2);
  pop();
  
  //rotation if song is playing
  if (playing) a += b;
}

  //audio playback
  function toggleAudio(){
  if (!playing){
    song.play();
    document.getElementById("audio").innerText = "Pause";
  } else {
    song.pause();
    document.getElementById("audio").innerText = "Play";
  }
  playing = !playing;
}
