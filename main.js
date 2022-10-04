song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    loadSound("music.mp3");
    loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
	canvas.center()

	video = createCapture(VIDEO);
	video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("O modelo PoseNet foi Carregado")
}
function draw()
{
    image(video, 0, 0, 600, 500);
	fill("blue");
	stroke("black");
}
function gotPoses(results)
{
    if(results.length > 0) {
        rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
        //console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    
        leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		//console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);	
    }
}