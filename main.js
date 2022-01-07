var song1="batman_theme.mp3";
var song2="BananaBoat_(Day-O)_HarryBelafonte.mp3";
function preload(){
song1=loadSound("batman_theme.mp3");
song2=loadSound("BananaBoat_(Day-O)_HarryBelafonte.mp3");
}
function setup(){
    canvas=createCanvas(690,690);
    canvas.center( );
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.posenet(video,modelLoaded);
    poseNet.on('pose' ,gotPoses);
}
function draw(){
image(video,0,0,690,690);
}









