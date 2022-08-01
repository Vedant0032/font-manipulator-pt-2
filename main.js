function setup(){
canvas = createCanvas(550,500);
canvas.position(800,200);
video = createCapture(VIDEO);
video.size(550, 500)
video.position(100, 150);
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotposes);
}

function preload(){

}

function draw(){
background('#F9F6EA')
}

function modelLoaded(){
    console.log("model loaded");
}

function gotposes(results){
    if(results.length > 0){
    console.log(results);
    }
}