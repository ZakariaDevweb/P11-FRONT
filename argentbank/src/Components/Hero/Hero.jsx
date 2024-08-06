import React from 'react';
import '../../assets/styles/styles.css';

const Hero = () => {
  return (
    <div className="hero">
      <img src="brank-tree.jpeg" alt="Growing plant" className="hero-img" />
      <div className="hero-text">
        <h2>No fees.</h2>
        <p>No minimum deposit. High interest rates.</p>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
};

export default Hero;