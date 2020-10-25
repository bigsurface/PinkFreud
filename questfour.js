let diameter = 2000;
let numberCircles = 1;
let xBegin = 250;
let yBegin = 250;
let bacon1 = [0,0,0];
let bacon2 = [0,0,0];
let bacon3 = [240, 205, 155];
let counter = 0;
let rotationVal = 1;
let addX = 0;
let xspacing = 20;
let w;
let theta = 2.5;
let amplitude = 200.0;
let period = 80.0;
let dx;
let yvalues;


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
}

function draw() {
  clear();
  background(38, 188, 155);
  

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

  animation(mySlug, 760, 115);
  calcWave();
  renderWave();
  renderWave2();
  renderWave3();
  renderCloud();
  renderParticle();
  renderParticle2();
  renderParticle3();

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
    fill(0,0,0);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.2 + yvalues[x], 4, 4);
    }
  }

  function renderParticle2() {
    noStroke();
    fill(0,0,0);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.4 + yvalues[x], 8, 8);
    }
  }

  function renderParticle3() {
    noStroke();
    fill(0,0,0);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 1.6 + yvalues[x], 16, 16);
    }
  }

  function renderCloud() {
    noStroke();
    fill(0,80,24);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 10 + yvalues[x], 220, 40);
    }
  }