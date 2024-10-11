let classifier;
let video;
let label = "world";
let speech
let cnv

function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/inQ7Q6S_2/"
  );
}

function gotResults(results) {
  //console.log(results);
  label = results[0].label;
}

function setup() {
  createCanvas(640, 480);

  cnv = createCanvas(640, 480); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
    let cx = windowWidth / 2 - cnv.width / 2;
    let cy = windowHeight / 2 - cnv.width / 2;
    cnv.position(cx, cy);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  classifier.classifyStart(video, gotResults);
  // Initialize speech synthesis
  speech = new p5.Speech();
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  rectMode(CENTER);
  fill(0);
  rect(width / 2, height - 50, width, 50);
  textSize(32);
  fill(255,255,0);
  textAlign(CENTER, CENTER);
  noStroke();
  text(label, width / 2, height - 50);
  speech.speak("I see the"+label)

   
}
