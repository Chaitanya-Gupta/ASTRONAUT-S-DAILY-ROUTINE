var iss,issImg 
function preload() {
  issImg = loadImage("Images/iss.png")
  sleep = loadAnimation("Images/sleep.png");
  
  gym = loadAnimation("Images/gym1.png", "Images/gym2.png"); 
  eat = loadAnimation("Images/eat1.png", "Images/eat2.png"); 
  bath = loadAnimation("Images/bath1.png", "Images/bath2.png");
  move = loadAnimation("Images/move.png");
}




function setup() {
  createCanvas(1200,600);
  astronaut = createSprite(400, 200);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleep",sleep);
  astronaut.addAnimation("gym",gym);
  astronaut.addAnimation("eat",eat);
  astronaut.addAnimation("bath",bath);
}

function draw() {
  background(issImg);  
  drawSprites();
  textSize(30);
   fill("white") 
   text("Instructions:", 20, 35); 
   textSize(22); 
   text("Up Arrow = Sleeping", 20, 60); 
   text("Down Arrow = Gymming", 20, 85); 
   text("Left Arrow = Eating", 20, 110); 
   text("Right Arrow = Bathing", 20, 135); 
   text("m key = Moving", 20, 160);
   
   if(keyDown("up")) {
    astronaut.changeAnimation("sleep",sleep);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }

   if(keyDown("down")) {
    astronaut.changeAnimation("gym",gym);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("right")) {
    astronaut.changeAnimation("eat",eat);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("left")) {
    astronaut.changeAnimation("bath",bath);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("m")) {
    astronaut.changeAnimation("move",move);
    astronaut.velocityY = 2;
    astronaut.velocityX = 2;
   }

   edges = createEdgeSprites();
   astronaut.bounceOff(edges);
}



