import React from 'react';
import ContactSection from '../ContactSection';
import '../../assets/Page.css';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    console.log('Form data:', data);
    alert('Message envoyé ! (Intégrer votre logique d\'envoi ici)');
    e.target.reset();
  };

  return (
    <>
      <div className="separation">
        <header 
          className="hero-section"
          style={{backgroundImage: 'url(/plan-teia.png)', minHeight: '300px'}}
        >
          <h1>Contactez-nous</h1>
          <p>Une question ? Un projet ? N'hésitez pas à nous contacter</p>
        </header>
      </div>

      <section className="page-section">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <h3>
              <span style={{fontSize: '24px'}}>📧</span>
              Email
            </h3>
            <a href="mailto:digynov@gmail.com">
              digynov@gmail.com
            </a>
          </div>

          <div className="contact-info-card">
            <h3>
              <span style={{fontSize: '24px'}}>📍</span>
              Localisation
            </h3>
            <p>Lille, France</p>
            <p style={{color: '#6b7280', fontSize: '0.95rem'}}>Campus Ynov</p>
          </div>

          <div className="contact-info-card">
            <h3>
              <span style={{fontSize: '24px'}}>🔗</span>
              LinkedIn
            </h3>
            <a 
              href="https://www.linkedin.com/company/jumeauxnum%C3%A9rique/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Suivez-nous
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 style={{marginBottom: '1.5rem', textAlign: 'center'}}>Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required 
                placeholder="Votre nom" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required 
                placeholder="votre@email.com" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organisation</label>
              <input 
                type="text" 
                id="organization"
                name="organization"
                placeholder="Votre entreprise ou établissement" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                required 
                placeholder="Objet de votre message" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message"
                name="message"
                required 
                placeholder="Décrivez votre projet ou votre question..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
              Envoyer le message →
            </button>
          </form>
        </div>

        {/* Section contact existante */}
        <div className="separation" style={{marginTop: '3rem'}}>
          <ContactSection />
        </div>
      </section>
    </>
  );
}

export default ContactPage;