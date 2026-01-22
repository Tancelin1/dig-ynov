import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Page.css';

function HomePage() {
  return (
    <>
      <div className="separation">
        <header 
          className="hero-section"
          style={{backgroundImage: 'url(/plan-teia.png)'}}
        >
          <div className="header-title">
            <h1>Leader du Jumeau Numérique pour l'Enseignement</h1>
            <img src="/logo.png" alt="DigYnov" className="header-logo" />
          </div>

          <p>
            Nous créons des répliques numériques intelligentes de vos bâtiments pour optimiser 
            la gestion, l'exploitation et la valorisation de vos actifs éducatifs.
          </p>
          <div className="cta-buttons">
            <Link to="contact/" className="btn btn-primary">
              Démarrer un projet →
            </Link>
            <Link to="/realisations" className="btn btn-secondary">
              Voir nos réalisations
            </Link>
          </div>
        </header>
      </div>

        <section className="page-section bg-light">
        <h2 className="section-title">Notre Expertise</h2>
        <p className="section-subtitle">
          Des solutions complètes pour créer, gérer et exploiter vos jumeaux numériques
        </p>

        <div className="cards-grid">
          <div className="info-card">
            <h3>🏗️ Modélisation 3D</h3>
            <p>
              Création de maquettes numériques précises et détaillées de vos bâtiments 
              avec une attention particulière aux détails architecturaux.
            </p>
          </div>

          <div className="info-card">
            <h3>📊 Collecte de Données</h3>
            <p>
              Récupération et inventaire exhaustif des équipements, systèmes et 
              infrastructures pour une base de données complète.
            </p>
          </div>

          <div className="info-card">
            <h3>🔄 Hyperviseur TEIA</h3>
            <p>
              Gestion centralisée de vos jumeaux numériques avec intégration 
              des systèmes de données en temps réel.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section no-padding-bottom">
        <h2 className="section-title">Pourquoi Choisir DigYnov ?</h2>
        
        <div className="cards-grid">
          <div className="info-card">
            <h3>🎓 Expertise Académique</h3>
            <p>
              Projet porté par des étudiants passionnés en partenariat avec Ynov Lille, 
              alliant innovation et rigueur académique.
            </p>
          </div>

          <div className="info-card">
            <h3>🚀 Innovation Continue</h3>
            <p>
              Un projet évolutif conçu pour se développer au-delà du cadre scolaire, 
              avec une vision à long terme.
            </p>
          </div>

          <div className="info-card">
            <h3>🤝 Accompagnement Personnalisé</h3>
            <p>
              Une équipe dédiée et polyvalente capable de s'adapter à vos besoins 
              spécifiques et contraintes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;