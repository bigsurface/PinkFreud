let y = 100;

function setup() {
    createCanvas(1340, 600);
    frameRate(30);
  }
  
  function draw() {
    background(0);
    noFill();
  
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25);
  
    stroke(0, 153, 255);
    line(0, height * 0.33, width, height * 0.33);
  
    stroke(255, 153, 0);
    rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);

    for (let i = 0; i < height; i += 20) {
        fill(129, 206, 15);
        rect(0, i, width, 10);
        fill(255);
        rect(i, 0, 10, height);
      }

      y = y - 1;
      if (y < 0) {
        y = height;
      }
      line(0, y, width, y);

      drawCircle(width / 2, 280, 6);

      drawTarget(width * 0.25, height * 0.4, 200, 4);
      drawTarget(width * 0.5, height * 0.5, 300, 10);
      drawTarget(width * 0.75, height * 0.3, 120, 6);




  }
  
  function drawTarget(xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }

  function drawCircle(x, radius, level) {
    const tt = (126 * level) / 4.0;
    fill(tt);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {
      level = level - 1;
      drawCircle(x - radius / 2, radius / 2, level);
      drawCircle(x + radius / 2, radius / 2, level);
    }
  }