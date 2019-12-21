import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Nav from '../components/nav';
import Graphics from '../components/graphics';

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <Nav />

        <Graphics/>
    
        <div className="hero">
          <h1 className="title">Dance!</h1>
          <p className="description">
            Play around with the <code>code</code> to explore.
          </p>
    
          <div className="row">
            <a href="https://medium.com/@tesla809" className="card">
              <h3>Blog</h3>
              <p>Blah Blah Stuff</p>
            </a>
            <a href="/" className="card">
              <h3>Code</h3>
              <p>Explore Computational Magic</p>
            </a>
            <a href="/"
              className="card">
              <h3>Sketches</h3>
              <p>Graphics using p5.js, matter.js, etc.</p>
            </a>
          </div>
        </div>
    
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}



export default Home
