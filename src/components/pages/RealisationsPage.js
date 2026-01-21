import React from 'react';
import ImagesSection from '../ImagesSection';
import '../../assets/Page.css';

function RealisationsPage() {
  return (
    <>
      <div className="separation">
        <header 
          className="hero-section"
          style={{backgroundImage: 'url(/plan-teia.png)', minHeight: '300px'}}
        >
          <h1>Nos Réalisations</h1>
          <p>Découvrez nos projets de jumeaux numériques</p>
        </header>
      </div>

      <section className="page-section">
        <h2 className="section-title">Campus Ynov Lille</h2>
        <p className="section-subtitle">
          Notre première réalisation majeure : le jumeau numérique complet du campus Ynov à Croix
        </p>

        <div className="separation">
          <ImagesSection />
        </div>

        <div className="info-card" style={{marginTop: '3rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto'}}>
          <h3>À propos de ce projet</h3>
          <p>
            Le campus Ynov de Croix a été notre premier projet d'envergure. Nous avons créé 
            une réplique numérique complète du bâtiment, incluant tous les espaces pédagogiques, 
            les équipements techniques et les infrastructures. Ce jumeau numérique permet 
            une gestion optimisée des espaces et une maintenance préventive efficace.
          </p>
          <ul>
            <li>Surface modélisée : 5 000 m²</li>
            <li>Nombre d'équipements inventoriés : 500+</li>
            <li>Durée du projet : 6 mois</li>
            <li>Technologies : BIM, TEIA</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default RealisationsPage;