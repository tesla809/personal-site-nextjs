export default function sketch(p){
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(500, 500);
    p.noStroke();
  }

  p.draw = () => {
    p.background('green');
    p.ellipse(150, 100, 100, 100);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(canvas) // Make sure the canvas has been created
      p.fill(newProps.color);
  }
}