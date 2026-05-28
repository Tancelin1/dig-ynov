import React from "react";
import "../../assets/Page.css";

import aboutData from "../../data/about.js";

function AboutPage() {
  return (
    <>
      <div className="separation">
        <header className="hero-section">
          <h1>{aboutData.hero.title}</h1>
          <p>{aboutData.hero.subtitle}</p>
        </header>
      </div>

      <section className="page-section no-padding-bottom">
        <h2 className="section-title">
          {aboutData.mission.title}
        </h2>

        <p className="section-subtitle">
          {aboutData.mission.subtitle}
        </p>

        <div
          className="info-card"
          style={{
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            {aboutData.mission.description}
          </p>
        </div>

        <h2 className="section-title">
          {aboutData.values.title}
        </h2>

        <div className="cards-grid">
          {aboutData.values.cards.map((card, index) => (
            <div
              key={card.id}
              className={`info-card ${
                (index + 1) % 4 === 0
                  ? "info-card-special"
                  : ""
              }`}
            >
              <h3>
                <i className={card.icon}></i> {card.title}
              </h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <h2 className="section-title">
            {aboutData.partners.title}
          </h2>

          {aboutData.partners.cards.map((partner, index) => (
            <div
              key={partner.id}
              className={`info-card ${
                (index + 1) % 4 === 0
                  ? "info-card-special"
                  : ""
              }`}
              style={{
                maxWidth: "600px",
                margin: "2rem auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  style={{ maxHeight: "80px", maxWidth: "150px" }}
                />

                <div style={{ textAlign: "left" }}>
                  <h3>{partner.title}</h3>

                  <p>{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;