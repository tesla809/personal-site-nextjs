import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import sketch from '../sketches/sketch';

// needed to deal with server side rending 
const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,  // guess we turn it off to avoid reference error for window, 
               // since node doesn't have that context
  loading: () => (
    <div className="sketch-holder">Loading...</div>
  ),
});

class Graphics extends Component {
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]});
  }

  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
      </div>
    );
  }
}

export default Graphics;