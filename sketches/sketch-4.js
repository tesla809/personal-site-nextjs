import dynamic from 'next/dynamic';
// https://p5js.org/examples/sound-oscillator-frequency.html

export default (p) => {
  const p5 = require('p5');
  // const p5Sound = require("p5/lib/addons/p5.sound");
  // let randomColor = [randomRGB(), randomRGB(), randomRGB()];
  // function randomRGB() {
  //   const min = Math.ceil(0);
  //   const max = Math.floor(255);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  let x = [0, 0],
      y = [0, 0],
      segLength = 50;

  function segment(x, y, a){
    p.push();
    p.translate(x, y);
    p.rotate(a);
    p.line(0, 0, segLength, 0);
    p.pop();
  }

  function dragSegment(i, xin, yin) {
    const dx = xin - x[i];
    const dy = yin - y[i];
    const angle = p.atan2(dy, dx);
    x[i] = xin - p.cos(angle) * segLength;
    y[i] = yin - p.sin(angle) * segLength;
    segment(x[i], y[i], angle);
  }
      

  p.setup = () => {
    p.createCanvas(710, 400);
    p.strokeWeight(20.0);
    p.stroke(255, 100);
  }

  p.draw = () => {
    p.background(120, 70, 90);
    dragSegment(0, p.mouseX, p.mouseY);
    dragSegment(1, x[0], y[0]);
  }
}