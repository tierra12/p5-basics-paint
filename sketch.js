var newWidth = 50;
var newHeight = 50;


//setup function executes once 
function setup(){
    createCanvas(600,400);
    background(244,65,208);
}

//draw function loops forever 
function draw(){
    var diameter = random(2,250);
    frameRate(65);
   // background(50);
   if(mouseIsPressed){
       noStroke();
    fill(random(100,255),65, 71, 244);
    triangle(mouseX,mouseY-50,mouseX-50,mouseY+50,mouseX+50,mouseY+50);
   
    fill(random(0,255),random(0,255),random(2,255));
    ellipse(mouseX,mouseY,diameter, diameter);       
   }
   
}