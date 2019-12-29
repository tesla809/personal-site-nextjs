import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default class P5Component extends Component {
 render() {
    return (
      <P5Wrapper sketch={this.props.sketch} />
    );
  }
}
