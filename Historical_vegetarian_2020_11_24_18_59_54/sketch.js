var monkey, monkeyAni, ground, groundImg, invisibleGround, bananas, obstacles, bananaImg, obstacleImg, score, ground2,ground2Img, textBox ;




function preload() {
  /* preload your images here of the ball and the paddle */
  groundImg=loadImage("jungle.jpg")
  ground2Img=loadImage("jungle.jpg")
  obstacleImg=loadImage("stone.png")
  bananaImg=loadImage("banana.png")
  monkeyAni=loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png", "Monkey_10.png")
}
function setup() {
  createCanvas(401, 300);
  ground=createSprite(201,150);
  ground.scale=.4
  ground.addImage("lol", groundImg)
  ground.velocityX=-7
  ground2=createSprite(600,150);
  ground2.addImage("lolol", ground2Img)
  ground2.scale=.4
  ground2.velocityX=-7
  monkey=createSprite(100,224, 30, 50);
  monkey.addAnimation("bobs", monkeyAni);
  monkey.scale=.1
  invisibleGround=createSprite(300,250,600,10)
  bananas = createGroup();
  obstacles = createGroup();
  invisibleGround.visible=false;
  score=0;
  textBox=createSprite(210,17,100,25)
  textBox.shapeColor="black"
}



function draw() {
  background(205,153,0);
  
  if (ground.x<-200){
    ground.x=201;
  }
  if (ground2.x<200){
    ground2.x=600;
  }

 if (keyDown("space")&&monkey.y>=214) {
    monkey.velocityY=-12;                                 
  }  
  if (bananas.isTouching(monkey)) {
    score=score+1;
    bananas.destroyEach();
  }
  
    if (obstacles.isTouching(monkey)&&score>=2) {
    score=score-2;
    obstacles.destroyEach();
  }
    if (obstacles.isTouching(monkey)&&score<2) {
    obstacles.destroyEach();
  }


  // console.log(World.frameCount)
  spawnObstacles();
  spawnFood();
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  drawSprites();
  fill("white")
  text("score: "+score, 188, 20)
}



function spawnObstacles() {
  if(World.frameCount % 40 === 0) {
    var obstacle = createSprite(402,230,600,40);
    obstacle.velocityX=-7;
    obstacle.addImage("bruh",obstacleImg)
    obstacle.scale=0.1;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacles.add(obstacle);
  }
}

function spawnFood() {
  if(World.frameCount % 140 === 0) {
    var rando=Math.round(random(135,150));
    var banana = createSprite(402,rando,600,40);
    banana.addImage("dude",bananaImg)
    banana.scale=0.07;
    banana.lifetime = 70;
    banana.velocityX=-7;
    //add each obstacle to the group
    bananas.add(banana);
    
  }
}
