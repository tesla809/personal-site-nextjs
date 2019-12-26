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
    this.state = {color:[this.randomChoose(), this.randomChoose(), this.randomChoose()]};
    this.randomColor = this.randomColor.bind(this);
    this.randomChoose = this.randomChoose.bind(this);
  }

  randomChoose() {
    return Math.random() * 255;
  }

  randomColor(){
    this.setState({color: [
      this.randomChoose(), 
      this.randomChoose(), 
      this.randomChoose()
    ]});
  }

  render() {
    return (
      <div style={this.props.style}>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
      </div>
    );
  }
}

export default Graphics;