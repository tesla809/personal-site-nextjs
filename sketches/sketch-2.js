export default (p) => {

  p.variableEllipse = (x, y, px, py) => {
    let speed = p.abs(x - px) + p.abs(y - py);
    p.stroke(speed);
    p.ellipse(x, y, 10, 10);
  }

  p.setup = () => {
    p.createCanvas(710, 400);
    p.background(102);
  }

  p.draw = () => {
    p.variableEllipse(p.mouseX, p.mouseY, p.mouseX, p.mouseY);
  } 
}