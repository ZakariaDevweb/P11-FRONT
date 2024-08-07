import React from 'react';
import '../../assets/styles/styles.css';
import MockedDatas from '../../Mock/MockedData';
import Compte from '../../Components/Compte/Compte';
const Profil = () => {
  return (
    <div className="profile-page">
                <main class="main bg-dark">
      <div clasName="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
     {MockedDatas.map((mockedData) => (
      <Compte
       key={mockedData.id}
       title={mockedData.title}
       amount= {mockedData.amount}
       description={mockedData.description}

      />
     ))};
    </main>
     
  </div>
  );
}

export default Profil;
