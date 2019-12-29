import dynamic from 'next/dynamic';
// https://p5js.org/examples/sound-oscillator-frequency.html

export default (p) => {
  const p5 = require('p5');
  const p5Sound = require("p5/lib/addons/p5.sound");

  let osc, fft;
  let width = 500;
  let height = 250;

  let randomColor = [randomRGB(), randomRGB(), randomRGB()];

  function randomRGB() {
    const min = Math.ceil(0);
    const max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  p.setup = () => {
    p.createCanvas(width, height);
    p.background(randomColor);
  
    osc = new p5.TriOsc(); // set frequency and type
    osc.amp(0.5);
  
    fft = new p5.FFT();
    osc.start();
  }

  p.draw = () => {
    p.variableEllipse(p.mouseX, p.mouseY, p.mouseX, p.mouseY);
  } 

  p.draw = () => {  
    let waveform = fft.waveform(); // analyze the waveform
    p.beginShape();
    p.stroke(randomColor);
    p.strokeWeight(5);
    for (let i = 0; i < waveform.length; i++) {
      let x = p.map(i, 0, waveform.length, 0, width);
      let y = p.map(waveform[i], -1, 1, height, 0);
      p.vertex(x, y);
    }
    p.endShape();
  
    // change oscillator frequency based on mouseX
    let freq = p.map(p.mouseX, 0, width, 40, 880);
    osc.freq(freq);
  
    let amp = p.map(p.mouseY, 0, height, 1, 0.01);
    osc.amp(amp);
  }
}