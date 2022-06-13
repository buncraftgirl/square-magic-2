function setup() {
    video = createCapture(VIDEO);
    video.size(555, 525);

    canvas = createCanvas(555, 525);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoaseNet Is Initialized!')
}
function draw() {
    background('#DCFFFB');
}

function gotPoses(results)
{
    if(results.lengh > 0)
    {
        console.log(results);
    }
}