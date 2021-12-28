name_or_text = "";
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}

function draw() {
    background("lightBlue");
    textSize(difference);
    fill("green");
    name_or_text = document.getElementById("text-of-name").value;
    text(name_or_text, 50, 275);

}

