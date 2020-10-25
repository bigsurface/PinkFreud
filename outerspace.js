let diameter = 1000;
let numberCircles = 2;
let xBegin = 400;
let yBegin = 30;
let bacon1 = [0,0,250];
let bacon2 = [200,5,245];
let bacon3 = [10,10,10];
let counter = 0;
let rotationVal = 0;
let addX = 0;
let xspacing = 200;
let w;
let theta = 1.0;
let amplitude = 400.0;
let period = 1000.0;
let dx;
let yvalues;
let numSegments = 10;
let direction = 'right';

const xStart = 0;
const yStart = 250;
const diff = 10;

let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;
let scoreElem;

let bg;

const numImgs = 30;
const imgPaths = Array.from({ length: numImgs });
        imgPaths.forEach((e,i) => {
            imgPaths[i]=`img/${i}.jpg`;
            });


function preload() {
  myMovingslug = loadSpriteSheet('abstract/PinkDolphin.png', 100, 100, 48);
  mySlug = loadAnimation(myMovingslug);
}

function setup() {
  createCanvas(1350, 550);
  noStroke();
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  scoreElem = createDiv('Well that was fun!');
  scoreElem.position(610, 200);
  scoreElem.id = 'score';
  scoreElem.style('color', 'black');
  scoreElem.style('background-color', 'pink');

  bg = loadImage('img/0.jpg');

  frameRate(15);
  stroke(113, 204, 81);
  strokeWeight(10);
  updateFruitCoordinates();

  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }

}

function draw() {
  clear();
  calcWave();
  renderWave();
  renderWave2();
  renderWave3();
  renderCloud();
  renderParticle();
  renderParticle2();
  renderParticle3();


  for(let i = 0; i < numberCircles; i++){
    for(let j = 0; j < numberCircles; j++){
    

      let addX = 0;
    
   if(i%2==0){
       rotationVal = 0;
       

   } else {
       rotationVal = PI;   

     }
      
  if(j%2 == 0){
    rotationVal = rotationVal - 0;
    thisColor = bacon1;
    addX = diameter/2;
  }else{
    rotationVal = rotationVal - PI/2;
    thisColor = bacon2;
  }
      
   if(j%4 == 0){
   rotationVal = rotationVal + PI;
   }   
      
    let x = diameter * i + addX;
    let y = diameter*j*0.95;
      
    push();
    
      translate(x,y);    
      rotate(rotationVal+counter/500);
      translate(-x, -y);
    
      fill(bacon1);
      arc(x , y, diameter, diameter, 0, PI/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI/4, PI/2);
      fill(bacon2);
      arc(x , y, diameter, diameter, PI/2, PI*3/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*3/4, PI);
      fill(bacon1);
      arc(x , y, diameter, diameter, PI, PI*5/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*5/4, PI*3/2);
      fill(bacon2);
      arc(x , y, diameter, diameter, PI*3/2, PI*7/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*7/4, TWO_PI);
    pop();

    

    }
  }

  counter+=10

//   animation(mySlug, 760, 115);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();
  checkForFruit();


}

function calcWave() {
    theta += 0.02;
  
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
  }
  
  function renderWave() {
    noStroke();
    fill(100,200,220);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 2 + yvalues[x], 40, 4);
    }
  }

  function renderWave2() {
    noStroke();
    fill(100,200,220);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.9 + yvalues[x], 40, 4);
    }
  }

  function renderWave3() {
    noStroke();
    fill(100,200,220);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.8 + yvalues[x], 40, 4);
    }
  }

  function renderParticle() {
    noStroke();
    fill(200,200,220);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.2 + yvalues[x], 4, 4);
    }
  }

  function renderParticle2() {
    noStroke();
    fill(100,100,120);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.4 + yvalues[x], 8, 8);
    }
  }

  function renderParticle3() {
    noStroke();
    fill(0,0,240);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.6 + yvalues[x], 16, 16);
    }
  }

  function renderCloud() {
    noStroke();
    fill(0,5,10);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 10 + yvalues[x], 220, 40);
    }
  }

  function updateSnakeCoordinates() {
    for (let i = 0; i < numSegments - 1; i++) {
      xCor[i] = xCor[i + 1];
      yCor[i] = yCor[i + 1];
    }
    switch (direction) {
      case 'right':
        xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'up':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
        break;
      case 'left':
        xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'down':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
        break;
    }
  }
  
  /*
   I always check the snake's head position xCor[xCor.length - 1] and
   yCor[yCor.length - 1] to see if it touches the game's boundaries
   or if the snake hits itself.
  */
  function checkGameStatus() {
    if (
      xCor[xCor.length - 1] > width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > height ||
      yCor[yCor.length - 1] < 0 ||
      checkSnakeCollision()
    ) {
      noLoop();
      const scoreVal = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Thanks for playing!!');
    }
  }
  
  /*
   If the snake hits itself, that means the snake head's (x,y) coordinate
   has to be the same as one of its own segment's (x,y) coordinate.
  */
  function checkSnakeCollision() {
    const snakeHeadX = xCor[xCor.length - 1];
    const snakeHeadY = yCor[yCor.length - 1];
    for (let i = 0; i < xCor.length - 1; i++) {
      if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
        return true;
      }
    }
  }
  
  /*
   Whenever the snake consumes a fruit, I increment the number of segments,
   and just insert the tail segment again at the start of the array (basically
   I add the last segment again at the tail, thereby extending the tail)
  */
  function checkForFruit() {
    point(xFruit, yFruit);
    if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
      const prevScore = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Score = ' + (prevScore + 1));
      xCor.unshift(xCor[0]);
      yCor.unshift(yCor[0]);
      numSegments++;
      updateFruitCoordinates();
    }
  }
  
  function updateFruitCoordinates() {
    /*
      The complex math logic is because I wanted the point to lie
      in between 100 and width-100, and be rounded off to the nearest
      number divisible by 10, since I move the snake in multiples of 10.
    */
  
    xFruit = floor(random(10, (width - 100) / 10)) * 10;
    yFruit = floor(random(10, (height - 100) / 10)) * 10;
  }
  
  function keyPressed() {
    switch (keyCode) {
      case 65:
        if (direction !== 'right') {
          direction = 'left';
        }
        break;
      case 68:
        if (direction !== 'left') {
          direction = 'right';
        }
        break;
      case 87:
        if (direction !== 'down') {
          direction = 'up';
        }
        break;
      case 83:
        if (direction !== 'up') {
          direction = 'down';
        }
        break;
    }
  }