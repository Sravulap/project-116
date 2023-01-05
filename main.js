noseX = 0;
noseY = 0;

function preload(){
moustache = loadImage("https://i.postimg.cc/CL7tqp2S/moustache-proper1.png")
}

function setup(){
    canvas = createCanvas(475, 400);
    canvas.position(475, 200);
    video = createCapture(VIDEO);
    video.size(475,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
    }

function gotPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
 }

function draw(){
    image(video, 0, 0, 475, 400);
    image(moustache, noseX-15, noseY+15, 65, 30)
}
function take_snapshot(){
    save("filtered_img.png");
 }