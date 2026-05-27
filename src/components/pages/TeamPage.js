import React from 'react';
import TeamSection from '../TeamSection';
import '../../assets/Page.css';

function TeamPage() {
  return (
    <>
      <div className="separation">
        <header 
          className="hero-section"
        >
          <h1>Notre Équipe</h1>
          <p>Des talents passionnés au service de vos projets</p>
        </header>
      </div>

      <div className="separation no-margin-bottom">
        <TeamSection />
      </div>
    </>
  );
}

export default TeamPage;
