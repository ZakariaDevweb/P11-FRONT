import React from 'react';
import '../../assets/styles/styles.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>ARGENTBANK</h1>
        </div>
        <div className="sign-in">
          <a href="/login">Sign In</a>
        </div>
      </header>
      <main className="main-content">
        <div className="promo">
          <img src="brank-tree.jpeg" alt="Growing plant" className="promo-img" />
          <div className="promo-text">
            <h2>No fees.</h2>
            <p>No minimum deposit. High interest rates.</p>
            <p>Open a savings account with Argent Bank today!</p>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <div className="icon chat-icon"></div>
            <h3>You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
          </div>
          <div className="feature">
            <div className="icon money-icon"></div>
            <h3>More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
          </div>
          <div className="feature">
            <div className="icon security-icon"></div>
            <h3>Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default Home;
