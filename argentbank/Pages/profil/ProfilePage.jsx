import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="header">
        <div className="logo">
          <h1>ARGENTBANK</h1>
        </div>
        <div className="user-options">
          <span className="user-name">Tony</span>
          <a href="/logout" className="sign-out">Sign Out</a>
        </div>
      </header>
      <main className="main-content">
        <section className="user-info">
          <h2>Welcome back<br />Tony Jarvis!</h2>
          <button className="edit-button">Edit Name</button>
        </section>
        <section className="accounts">
          <div className="account">
            <div className="account-info">
              <h3>Argent Bank Checking (x8349)</h3>
              <p>$2,082.79</p>
              <p>Available Balance</p>
            </div>
            <button className="transaction-button">View transactions</button>
          </div>
          <div className="account">
            <div className="account-info">
              <h3>Argent Bank Savings (x6712)</h3>
              <p>$10,928.42</p>
              <p>Available Balance</p>
            </div>
            <button className="transaction-button">View transactions</button>
          </div>
          <div className="account">
            <div className="account-info">
              <h3>Argent Bank Credit Card (x8349)</h3>
              <p>$184.30</p>
              <p>Current Balance</p>
            </div>
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
