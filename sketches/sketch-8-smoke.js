// SMOKE!
// A particle system. 
// A system of many individual elements that together create an effect.

export default (p) => {
  let bubbleArr = [];

  p.setup = () => {
    p.createCanvas(window.outerWidth, window.outerHeight);
    
    for (let i = 0; i < 1; i++) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      let r = p.random(10, 40);
      bubbleArr[i] = new Bubble(x, y, r);
    }
  }

  p.draw = () => {
    p.background(255);
    
    for (let bubble of bubbleArr) {
      bubble.show();
      bubble.move();
      bubble.fade();
    }
    console.log(bubbleArr.length);
  }

  p.mouseDragged = () => {
    let thickness = 15;
    for (let i = 0; i < thickness; i++) {
      let r = p.random(20, 30);
      let b = new Bubble(p.mouseX, p.mouseY, r);
      bubbleArr.push(b); 
    }
  }

  class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.opacity = 6;
    }
    
    show() {
      let smokeColor = 75;
      p.noStroke();
      p.fill(smokeColor, this.opacity);
      p.ellipse(this.x, this.y, this.r *2);
    }

    move() {
      this.x = this.x + p.random(-7, 7);
      this.y = this.y + p.random(-5, 4.5);
    }
    
    fade() {
      // if the frameCount is divisible by 60,
      // then a second has passed. it will stop at 0
      if (p.frameCount % 60 === 0 && this.opacity > 0) {
        this.opacity -= 0.25;
      }
      
      // when faded, remove
      // js has weird floating point math
      // never really 0. So needs to be less than 0.01
      if (this.opacity <= 0.01) {
        // remove element from canvas
        for (let x = 0; x < bubbleArr.length; x++) {
          bubbleArr.splice(x, 1);
        }
      } 

    }
  }

};