export default (p) => {

  let randomColor = [];

  function randomRGB() {
    const min = Math.ceil(0);
    const max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  p.setup = () => {
    p.createCanvas(500, 500);
    randomColor = [randomRGB(), randomRGB(), randomRGB()];
  }

  p.draw = () => {
    p.background(randomColor[0], randomColor[1], randomColor[2]);
    if (p.mouseIsPressed) {
      p.fill(100,0,0)
    } else {
      p.fill(0,0,100)
    }
    p.rect(p.mouseX, p.mouseY, 20, 20)
    p.textSize(12)
    p.text('A template for making p5.js apps!!!\n\nSec:'+p.second(), 0, 200/2)
  } 
}