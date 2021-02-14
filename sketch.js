
var cat,catImg1,catRunning,catImg4;
var mouse,mouseImg1,mouseTeasing,mouseImg4;
var gardenImg,garden;
function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png");
    catRunning=loadAnimation("cat2.png","cat3.png");
    catImg4=loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseteasing=loadAnimation("mouse2.png","mouse3.png");
    mouseImg4=loadAnimation("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(0,0,3000,1000);
    garden.addImage("bg",gardenImg);
cat=createSprite(400,160);
cat.addAnimation("catSitting",catImg1);
cat.scale=0.1;
cat.setCollider("rectangle",0,0,40,40);

mouse=createSprite(70,160);
mouse.addAnimation("mouseSitting",mouseImg1);
mouse.scale=0.1;
mouse.setCollider("rectangle",0,0,30,30)


}

function draw() {
    background(255);
   
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("last",catImg4);
        cat.changeAnimation("last");
        mouse.addAnimation("last1",mouseImg4);
        mouse.changeAnimation("last1"); 
        cat.velocityX=0;
    }
    
 //Write condition here to evalute if tom and jerry collide
//keyPressed();
text(mouseX+","+mouseY,10,45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("running",catRunning);
    cat.changeAnimation("running");
    mouse.addAnimation("teasing",mouseteasing);
    mouse.changeAnimation("teasing");
}

}
