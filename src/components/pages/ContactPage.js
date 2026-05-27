import React, { useState } from "react";
import ContactSection from "../ContactSection";
import "../../assets/Page.css";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return; // sécurité anti double clic

    setIsSending(true);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(() => {
        alert("Message envoyé 🎉");
        e.target.reset();
      })
      .catch((err) => {
        alert("Erreur lors de l'envoi : " + err.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <div className="separation">
        <header className="hero-section">
          <h1>Contactez-nous</h1>
          <p>Une question ? Un projet ? N'hésitez pas à nous contacter</p>
        </header>
      </div>

      <section className="page-section no-padding-bottom">
        <div className="contact-form-container">
          <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            Vous avez un projet, envie de nous rejoindre ? contactez-nous
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="family-name">Nom *</label>
              <input
                type="text"
                id="family-name"
                name="family-name"
                required
                placeholder="Votre nom de famille"
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Prénom *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre prénom"
                disabled={isSending}
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
                disabled={isSending}
              />
            </div>

             <div className="form-group">
              <label htmlFor="tel">Téléphone</label>
            <input
                type="text"
                id="tel"
                name="tel"
                placeholder="votre téléphone"
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organisation</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Votre entreprise ou établissement"
                disabled={isSending}
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
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Décrivez votre projet ou votre question..."
                disabled={isSending}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSending}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {isSending ? "Envoi en cours..." : "Envoyer le message →"}
            </button>
          </form>
        </div>

        <div className="separation" style={{ marginTop: "3rem" }}>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <h3>
                <span style={{ fontSize: "24px" }}>📍</span>
                Localisation
              </h3>
              <p>Lille, France</p>
            </div>

            <a
              href="https://www.linkedin.com/company/jumeauxnum%C3%A9rique/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>
                <span style={{ fontSize: "24px" }}>🔗</span>
                LinkedIn
              </h3>
            </a>
          </div>

          <ContactSection />
        </div>
      </section>
    </>
  );
}

export default ContactPage;