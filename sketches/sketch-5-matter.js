export default (p) => {
  const p5 = require('p5');
  const Matter = require("matter-js");

  console.log(Matter);

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Body = Matter.Body;
  const Bodies = Matter.Bodies;
  const Composite = Matter.Composite;
  const Composites = Matter.Composites;
  const Constraint = Matter.Constraint;
  
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;
  
  let engine;
  let world;
  let bodies;
  
  let canvas;
  let constraint;
  
  let mouseConstraint;

  p.setup = () => {
    canvas = p.createCanvas(800, 600);

    // create an engine
    engine = Engine.create();
    world = engine.world;

    var mouse = Mouse.create(p.canvas.elt);
    var mouseParams = {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
      }
    }
    mouseConstraint = MouseConstraint.create(engine, mouseParams);
    mouseConstraint.mouse.pixelRatio = p.pixelDensity();
    World.add(world, mouseConstraint);

    var group = Body.nextGroup(true);

    // Make a single rectangle
    function makeRect(x, y) {
      var params = {
        collisionFilter: {
          group: group
        }
      }
      var body = Bodies.rectangle(x, y, 50, 20, params);
      // adding properties that I can pick up later
      body.w = 50;
      body.h = 20;
      return body;
    }

    // Create a stack of rectangles
    // x, y, columns, rows, column gap, row gap
    var ropeA = Composites.stack(p.width / 2, 100, 1, 9, 0, 25, makeRect);
    bodies = ropeA.bodies;

    // Connect them as a chain
    var params = {
      stiffness: 0.8,
      length: 2
    }
    Composites.chain(ropeA, 0.5, 0, -0.5, 0, params);

    var params = {
      bodyB: ropeA.bodies[0],
      pointB: {
        x: -25,
        y: 0
      },
      pointA: {
        x: p.width / 2,
        y: 100
      },
      stiffness: 0.5
    };

    constraint = Constraint.create(params);
    Composite.add(ropeA, constraint);

    // add all of the bodies to the world
    World.add(world, ropeA);

    // run the engine
    Engine.run(engine);
  }

  p.draw = () => {
    p.background(51);
    p.stroke(255);
    p.strokeWeight(1);
    p.fill(255, 50);
    for (var i = 0; i < bodies.length; i++) {
      let circle = bodies[i];
      let pos = circle.position;
      let r = circle.circleRadius;
      let angle = circle.angle;
      p.push();
      p.translate(pos.x, pos.y);
      p.rectMode(p.CENTER);
      p.rotate(angle);
      p.rect(0, 0, 50, 20);
      p.line(0, 0, 25, 0);
      p.pop();
    }
  
    var a = constraint.pointA;
    var b = constraint.pointB;
    var pos = constraint.bodyB.position;
    p.stroke(255);
    p.fill(255);
    p.line(a.x, a.y, pos.x + b.x, pos.y + b.y);
    p.ellipse(a.x, a.y, 4, 4);
    p.ellipse(pos.x + b.x, pos.y + b.y, 4, 4);
  
    a = mouseConstraint.constraint.pointA;
    b = mouseConstraint.constraint.pointB;
    let bodyB = mouseConstraint.constraint.bodyB;
    if (bodyB) {
      p.stroke(255);
      p.line(a.x, a.y, b.x + bodyB.position.x, b.y + bodyB.position.y);
    }
  }
}