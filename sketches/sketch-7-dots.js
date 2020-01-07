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
  
  let triShape = {
    x: 0,
    y: 0,
    size: 0,
  }

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(255);
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
    
    // triangle shape
    triShape.x = p.random(0, p.width);
    triShape.y = p.random(0, p.height);
    triShape.size = p.random(24, 50);
    
    // create dots
    p.noStroke();
    p.fill(col.r, col.g, col.b, col.a);
    p.ellipse(spot.x, spot.y, dotSize.h, dotSize.w);
    
    p.triangle(triShape.x, triShape.y, 
            triShape.x + triShape.size, 
            triShape.y + triShape.size, 
            triShape.x + triShape.size + 20, 
            triShape.y + triShape.size - 20);
  } 
}