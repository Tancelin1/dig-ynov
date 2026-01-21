import React from 'react';
import '../../assets/Page.css';

function AboutPage() {
  return (
    <>
      <div className="separation">
        <header 
          className="hero-section"
          style={{backgroundImage: 'url(/plan-teia.png)', minHeight: '300px'}}
        >
          <h1>À Propos de DigYnov</h1>
          <p>Notre histoire, notre mission, notre vision</p>
        </header>
      </div>

      <section className="page-section">
        <h2 className="section-title">Notre Mission</h2>
        <p className="section-subtitle">
          Démocratiser l'accès aux jumeaux numériques pour les établissements d'enseignement
        </p>

        <div className="info-card" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            DigYnov est né d'un projet étudiant à Ynov Lille avec une ambition claire : 
            rendre les technologies de jumeaux numériques accessibles aux établissements 
            d'enseignement. Notre équipe pluridisciplinaire combine expertise technique, 
            créativité et passion pour créer des solutions innovantes et sur mesure.
          </p>
        </div>

        <h2 className="section-title">Nos Valeurs</h2>
        <div className="cards-grid">
          <div className="info-card">
            <h3>🎯 Excellence</h3>
            <p>
              Nous visons l'excellence dans chaque projet, avec une attention particulière 
              aux détails et à la qualité de nos livrables.
            </p>
          </div>

          <div className="info-card">
            <h3>🤝 Collaboration</h3>
            <p>
              Le travail d'équipe et la collaboration sont au cœur de notre approche. 
              Nous croyons en la force du collectif.
            </p>
          </div>

          <div className="info-card">
            <h3>💡 Innovation</h3>
            <p>
              Nous restons à la pointe des technologies et explorons constamment 
              de nouvelles solutions pour améliorer nos services.
            </p>
          </div>

          <div className="info-card">
            <h3>🌱 Pérennité</h3>
            <p>
              Notre projet est conçu pour durer et évoluer au-delà du cadre académique, 
              avec une vision à long terme.
            </p>
          </div>
        </div>

        <div style={{marginTop: '4rem', textAlign: 'center'}}>
          <h2 className="section-title">Notre Partenaire</h2>
          <div className="info-card" style={{maxWidth: '600px', margin: '2rem auto'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              <img src="/logo-ynov.png" alt="Ynov Campus" style={{height: '80px'}} />
              <div style={{textAlign: 'left'}}>
                <h3>Ynov Campus Lille</h3>
                <p>
                  Partenaire officiel et établissement d'enseignement supérieur 
                  nous accompagnant dans notre développement.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="info-card" style={{maxWidth: '600px', margin: '2rem auto'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              <img src="/stereograph.png" alt="stereographe-logo" style={{height: '80px'}} />
              <div style={{textAlign: 'left'}}>
                <h3>Stereograph</h3>
                <p>
                    Stereograph nous soutient en fournissant des services de scan 3D 
                    et de modélisation pour nos projets de jumeaux numériques.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default AboutPage;