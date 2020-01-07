export default (p) => {

  let spot = {
    x: 100,
    y: 50
  };
  
  let col = {
    r: 255,
    g: 0,
    b: 0,
    a: 0
  };
  
  let dotSize = {
    h: 0,
    w: 0
  }

  let extraCanvas;

  p.setup = () => {
    // set to browser window's dimensions
    p.createCanvas(window.outerWidth, window.outerHeight);
    p.background(255);

    // extra layer on top of canvas
    // off screen canvas is a Graphics Object.
    // so called createGraphics();
    extraCanvas = p.createGraphics(p.width, p.height);
    extraCanvas.clear();
  }

  p.draw = () => {
    // random color for dots
    col.r = p.random(0, 255);
    // col.g = random(0, 255);
    col.b = p.random(0, 190);
    col.a = p.random(0, 100);
    
    // random size for dot
    dotSize.h = p.random(24, 50);
    dotSize.w = dotSize.h;
    
    // width = createCanvas's width 
    // assing random spot
    spot.x = p.random(0, p.width);
    spot.y = p.random(0, p.height);
  
    // create dots
    p.noStroke();
    p.fill(col.r, col.g, col.b, col.a);
    p.ellipse(spot.x, spot.y, dotSize.h, dotSize.w);
    
    if (p.mouseIsPressed) {
      p.fill(255);
      // add noStroke to ellipse on extraCanvas
      // if removed has outlined shown
      extraCanvas.noStroke();
      // if extraCanvas.ellipse(...)
      // then wil draw on canvas and 
      // dots won't repopulate
      p.ellipse(p.mouseX, p.mouseY, 100, 100)
    }
  } 
}