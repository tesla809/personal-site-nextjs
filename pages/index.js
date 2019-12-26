import React, { Component } from 'react';
import styled from 'styled-components';
import Home from '../components/Home';
import Graphics from '../components/Graphics';


class Index extends Component {
  render() {
    const Wrapper = styled.div`
      position: relative;
    `;

    const homeStyle = {
      backgroundColor: "orange",
      position: "absolute",
      margin: "auto",
      width: "100%",
      zIndex: 9,
      opacity: 0.6,
    };

    const graphicsStyle = {
      backgroundColor: "beige",
      position: "absolute",
      margin: "auto",
      left: "25%",
      width: "50%",
    };

    return (
      <div>
        <Wrapper>
          <Graphics style={graphicsStyle} />
          <Home style={homeStyle} />
        </Wrapper>
      </div>
    );
  }
}

export default Index;