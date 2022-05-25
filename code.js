var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["51495104-0ebc-491f-8aae-1d8945d24b81"],"propsByKey":{"51495104-0ebc-491f-8aae-1d8945d24b81":{"name":"girl2","sourceUrl":null,"frameSize":{"x":267,"y":357},"frameCount":1,"looping":true,"frameDelay":60,"version":"Bt_HkVMZH4FSBU0q2r01wpnbNhwlQRSC","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":357},"rootRelativePath":"assets/51495104-0ebc-491f-8aae-1d8945d24b81.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(250, 130, 300, 5);

var wall2 = createSprite(150, 270, 300, 5);

var me = createSprite(20, 335, 15, 15);
me.shapeColor = "green";



var ball1 = createSprite(80, 335, 10, 10);
var ball2 = createSprite(120, 335, 10, 10);
var ball3 = createSprite(160, 335, 10, 10);
var ball4 = createSprite(200, 335, 10, 10);
ball1.shapeColor = "pink";
ball2.shapeColor = "pink";
ball3.shapeColor = "pink";
ball4.shapeColor = "pink";


var cup = createSprite(360, 75, 20, 20);
cup.shapeColor = "gold";


  ball1.velocityY = 10;
  ball2.velocityY = -10;
  ball3.velocityY = 10;
  ball4.velocityY = -10;


var sDoor1 = createSprite(360, 270, 50, 8);
var sDoor2 = createSprite(40, 130, 50, 8);
sDoor1.shapeColor = "red";
sDoor2.shapeColor = "red";

var line1 = createSprite(125, 200, 50, 7);
var line2 = createSprite(200, 200, 50, 7);
line1.shapeColor = "red";
line2.shapeColor = "red";

line1.velocityY = 5;
line2.velocityY = -5;

sDoor1.velocityX = 3;
sDoor2.velocityX = -3;



var ball5 = createSprite(200, 100, 10, 10);

var ball6 = createSprite(250, 50, 10, 10);
ball5.shapeColor = "pink";

ball6.shapeColor = "pink";

 ball5.velocityY = 10;

 ball6.velocityY = -10;
var score = 0;


var gameState = "play";





function draw() {
  
  background("#ADD8E6")
  
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball1.bounceOff(wall1);
  ball2.bounceOff(wall1);
  ball3.bounceOff(wall1);
  ball4.bounceOff(wall1);
  ball1.bounceOff(wall2);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall2);
  
  sDoor1.bounceOff(edges);
  sDoor2.bounceOff(edges);
  me.bounceOff(edges);
  sDoor1.bounceOff(wall2);
  sDoor2.bounceOff(wall1);
  
  line1.bounceOff(wall1);
  line1.bounceOff(wall2);
  line2.bounceOff(wall1);
  line2.bounceOff(wall2);
  line1.bounceOff(edges);
  line2.bounceOff(edges);

  ball5.bounceOff(edges);
  
  ball6.bounceOff(edges);
 
  ball6.bounceOff(wall1);
  ball5.bounceOff(wall1);
  
  
  me.bounceOff(wall1);
  me.bounceOff(wall2);
  
  
  if(keyDown("left")){
   me.x = me.x-3;
   gameState = "play";
  }
  if(keyDown("right")){
    me.x = me.x+3;
    gameState = "play";
  }
  if(keyDown("up")){
    me.y = me.y-3;
    gameState = "play";
  }
  if(keyDown("down")){
    me.y = me.y+3;
    gameState = "play";
  }
  
  
  text("DEATHS: "+score, 10, 10);
  
  
  if(me.collide(ball1)||me.collide(ball2)||me.collide(ball3)||me.collide(ball4)
     ||me.collide(sDoor1)||me.collide(sDoor2)||me.collide(line1)||
     me.collide(line2)||me.collide(ball5)||me.collide(ball6)){
    reset();
    score = score+1;
  }
  drawSprites()
  
}

function reset(){
  me.x = 20;
  me.y = 335;
  me.velocityX = 0;
  me.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
