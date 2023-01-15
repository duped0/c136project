status = "";
object="";
function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting object";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  document.getElementById("object_name").object;
  console.log("object");
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
}