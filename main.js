img=""
function preload(){
img=loadImage("living room.jpg");
}
function setup(){
canvas=createCanvas(640, 420);
canvas.center();
}
function draw(){
image(img, 0,0, 640, 420);
fill("red");
noFill();
stroke("red");
rect(30, 60,450, 350);
text("tv",45,75);
}