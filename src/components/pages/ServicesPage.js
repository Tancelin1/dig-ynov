import React from 'react';
import '../../assets/Page.css';

function ServicesPage() {
  return (
    <>
      <div className="separation">
        <header 
          className="hero-section hero-section small"
        >
          <h1>Nos Services</h1>
          <p>Des solutions complètes pour vos projets de jumeaux numériques</p>
        </header>
      </div>

      <section className="page-section no-padding-bottom">
        <div className="cards-grid">
          <div className="info-card">
            <h3>Modélisation 3D & BIM</h3>
            <p>
              Nous créons des modèles 3D détaillés de vos infrastructures en utilisant 
              les dernières technologies de modélisation. Nos maquettes numériques incluent 
              tous les éléments architecturaux, structurels et techniques.
            </p>
            <ul>
              <li>Scan 3D et photogrammétrie</li>
              <li>Modélisation BIM complète</li>
              <li>Intégration des données techniques</li>
              <li>Export multi-formats</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Collecte & Gestion de Données</h3>
            <p>
              Notre équipe effectue un inventaire exhaustif de vos équipements et systèmes. 
              Nous structurons et organisons ces données pour une exploitation optimale.
            </p>
            <ul>
              <li>Inventaire des équipements</li>
              <li>Cartographie des réseaux</li>
              <li>Documentation technique</li>
              <li>Base de données centralisée</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Intégrateur jumeau numérique suite</h3>
            <p>
              Mise en place et configuration de la solution TEIA pour la gestion 
              centralisée de vos actifs numériques avec supervision en temps réel.
            </p>
            <ul>
              <li>Configuration TEIA Suite</li>
              <li>Intégration IoT et capteurs</li>
              <li>Monitoring temps réel</li>
              <li>Reporting automatisé</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;