export default (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  }
  
  p.draw = () => {
    p.background(20, 220, 180);
    p.stroke('purple');
    p.quad(300, 20, 10, 100, 150, 250, 300, 400);
    p.line(0, 0, 400, 400);
    p.stroke(100);
    p.strokeWeight(30);
    p.rect(70, 120, 10, 20, 80, 90);
    p.rect(100, 50, 175, 250, 80);
    p.ellipse(100,100,55,55);
    p.point(200, 100);
    p.stroke('gold');
    p.square(30, 260, 55);
    p.stroke('pink');
    p.strokeWeight(20);
    p.triangle(130, 175, 158, 120, 186, 175);
    p.stroke('orange')
    p.arc(180, 200, 80, 80, 0, p.PI + p.QUARTER_PI);
  }
}