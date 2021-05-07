function preload(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(150,200);
    video=createCapture(VIDEO);
    video.hide();
    tintcolor="";
}

function draw(){
    image(video,150,100,300,200);
    fill('#03befc');
  stroke('#0f0f0f')
  rect(70,40,450,15);

  rect(550,40,15,300);

  rect(40,40,15,300);

  rect(70,350,450,15);

  fill('#aa48f0');
  stroke('#f0487d');
  circle(50,50,70);
  circle(50,350,70);
  circle(550,50,70);
  circle(550,350,70);
  
}

function take_snapshot(){
    save('My_selfi.png');
}