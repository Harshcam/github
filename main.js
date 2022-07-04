noseX=0;
noseY=0;

function Preload()  {
clown_nose= loadimage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas  (300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();

    poesNet = Ml5.poesNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }

function modelLoaded() {
    console.log('poesNet Is Intialized');
}


function gotPoses (results)
{
if(results.lenth > 0)
{
console.log("results");
noseX=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
     }
}
function Draw() {
image(video,0,0,300,300);
Fill (red);
storke(red);
circle(noseX, nosey, 20);
image(clown_nose, noseX, noseY, 30, 30);
}

function takesnapshot() {
    save("myFilterImage.png");
}
