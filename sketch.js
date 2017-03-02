var newWidth = 100;
var newHeight = 100;


//setup function executes once 
function setup(){
    createCanvas(600,400);
    background(65,244,94);
}

//draw function loops forever 
function draw(){
   // background(50);
   if(mouseIsPressed){
       noStroke();
    fill(244,65,121,50);
    ellipse(mouseX,mouseY,newWidth,newHeight);
   }
   
}