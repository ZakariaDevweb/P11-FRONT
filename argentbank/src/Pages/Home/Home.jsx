import React from 'react';
import '../../assets/styles/styles.css';

const Home = () => {
  return (
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
    );
};
      
export default Home
