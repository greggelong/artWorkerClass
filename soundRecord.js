//let classifier;
//let video;
let label = "art worker";
let speech
let cnv
let conf =0;
let bard;
let cbard;

const wordMap = {
    "world": "世界",
    "steel": "钢铁",
    "bone": "骨头",
    "art worker": "艺术工人"
  };




function setup() {
  createCanvas(640, 480);

  cnv = createCanvas(640, 480); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
    let cx = windowWidth / 2 - cnv.width / 2;
    let cy = windowHeight / 2 - cnv.width / 2;
    cnv.position(cx, cy);
  
  // Initialize speech synthesis
  bard = new p5.Speech(); // speech synthesis object
  cbard = new p5.Speech();
  cbard.setLang("zh-CN");
  //bard.listVoices()
  bard.onLoad = loaded;

  cbard.onLoad = loaded;
  
}

function draw() {
  background(220);
  //image(video, 0, 0, width, height);

  rectMode(CENTER);
  fill(0);
  rect(width / 2, height - 50, width, 50);
  textSize(32);
  fill(255,255,0);
  textAlign(CENTER, CENTER);
  noStroke();
  text(label+" "+wordMap[label], width / 2, height - 50);
  //text("confidence: " + nf(conf, 0, 2), 200, height - 12)

  speakit()
  

}




function speakit() {
   // print("hello");
    cbard.setLang("zh-CN");
  
    //bard.setVoice("Microsoft YaoYao - Chinese (Simplified, PRC)")
  
    cbard.speak("我看到" +wordMap[label]);
    //bard.setVoice("Microsoft Mark - English (United States)")
    bard.setLang("en-US");
    bard.speak("I see the "+label);
  }

  function loaded() {
    print("loaded");
    //bard.listVoices();
  }
  