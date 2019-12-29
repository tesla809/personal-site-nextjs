import React, { Component } from 'react';
import styled from 'styled-components';
import Home from '../components/Home';
import P5Component from '../components/P5Wrapper';
// import sketch from '../sketches/sketch';
// import sketch2 from '../sketches/sketch-2';
// import sketch3 from '../sketches/sketch-3';
import sketch4 from '../sketches/sketch-4';

class Index extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      justify-content: center;
    `;

    const homeStyle = {
      backgroundColor: "offwhite",
      padding: "0.5rem",
      width: "100%",
      position: "absolute",
      margin: "auto",
      width: "100%",
      zIndex: 9,
      opacity: 0.8,
    };

    const graphicsStyle = {
      width: "100%",
      zIndex: -1,
    };

    return (
      <div>
        <Wrapper>
          <Home style={homeStyle}></Home>
          <P5Component style={graphicsStyle} sketch={sketch4} />
        </Wrapper>
      </div>
    );
  }
}

export default Index;