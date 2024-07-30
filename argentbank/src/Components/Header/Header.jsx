import React from 'react';
import '../../assets/styles/styles.css';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">
          <h1>ARGENTBANK</h1>
        </div>
        <div className="sign-in">
          <a href="/login">Sign In</a>
        </div>
       </header>
       
    );
};


export default Header;