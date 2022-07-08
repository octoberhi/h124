noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup()
{
canvas = createCanvas(400,400);
canvas.position(800,300);
Video = createCapture(VIDEO);
poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
console.log("Model is loaded");
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;

difference = floor(leftwristX-rightwristX);
document.getElementById("name_size").innerHTML = "font size is"+difference+"px";
}
}
function draw()
{
background("gray");
fill("black");
textSize(difference);
text("Derek",noseX,noseY);
}
