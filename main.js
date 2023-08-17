function preload() {
}

function setup() 
{
    canvas = createCanvas(640,480);
    canvas.position(310,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,95,70,450,350);
    rect(30, 20, 10, 450);
    fill(0,128,0);
    rect(600, 20, 10, 450);
    rect(30, 20, 580, 10);
    rect(30, 460, 580, 10);
    circle(40, 40, 60);
    circle(600, 40, 60);
    circle(40, 445, 60);
    circle(600, 445, 60);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}