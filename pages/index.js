import React, { Component } from 'react';
import Home from '../components/Home';
import Graphics from '../components/Graphics';

class Index extends Component {
  render() {
    return (
      <div>
        <Graphics></Graphics>
        <Home></Home>
      </div>
    );
  }
}

export default Index;
