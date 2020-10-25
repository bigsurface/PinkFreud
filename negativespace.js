function setup() {
    createCanvas(1360, 600);
    background(30);
   
  }
  
  function randomColor() {
    var a = random(0, 255);
    var b = random(0, 255);
    var c = random(0, 255);
    background(a, b, c);
  
    
  }
  
  function draw() {
    var d = random(0, 255);
    var e = random(0, 255);
    var f = random(0, 255);
    fill(d,e,f);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  
  
  
  }
  //What happends when you click
  function mousePressed() {
    randomColor();
  }