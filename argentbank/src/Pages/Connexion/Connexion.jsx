import React from 'react';
import '../../assets/styles/styles.css';

const Connexion = () => {
  return (
    <div className="login-page">
      <main className="main-content bg-dark">
        <div className="login-form-container">
          <form className="login-form">
            <h2>Sign In</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </div>
      </main>
     
    </div>
  );
};

export default Connexion;
