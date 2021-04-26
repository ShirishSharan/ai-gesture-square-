noseY=0;
noseX=0;

diffrence=0;
leftWristX=0;
rightWristX=0;
   



function setup(){
 video = createCapture(VIDEO);
 video.size(360,340);
 canvas = createCanvas(800,400);
 canvas.position(500,200);
 pose = ml5.poseNet(video , modelLoaded);
 pose.on('pose' , gotPoses);

}
 

function modelLoaded(){
    console.log('Intialize Model Loaded !');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX +  "noseY = " + noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diffrence= leftWristX - rightWristX;
    }

        
    
}


function draw() {
    background("black");
    fill("red");
    stroke("yellow");
    //shade("blue");
    square(noseX , noseY, diffrence);

}

