import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/Page.css";

import {
  heroData,
  expertiseData,
  whyData,
} from "../../data/accueil";

function HomePage() {
  return (
    <>
      <div className="separation">
        <header className="hero-section">
          <div className="header-title">
            <h1>{heroData.title}</h1>
          </div>

          <p>{heroData.description}</p>

          <div className="cta-buttons">
            {heroData.cta.map((btn) => (
              <Link
                key={btn.id}
                to={btn.to}
                className={`btn ${
                  btn.primary ? "btn-primary" : "btn-secondary"
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </header>
      </div>

      <Container fluid className="page-section bg-light">
        <div className="text-center mb-5">
          <h2 className="section-title">{expertiseData.title}</h2>
          <p className="section-subtitle">{expertiseData.subtitle}</p>
        </div>

        <Row>
          <Col md={4}>
            <div className="cards-grid">
              {expertiseData.cards.map((card) => (
                <div key={card.id} className="info-card">
                  <h3>
                    {card.icon} {card.title}
                  </h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </Col>


          <Col md={6}>
            <h3>{expertiseData.leftText.title}</h3>
            <p>{expertiseData.leftText.description}</p>
          </Col>


        </Row>
      </Container>

      <section className="page-section no-padding-bottom">
        <div className="text-center mb-5">
          <h2 className="section-title">{whyData.title}</h2>
        </div>

        <div className="cards-grid">
          {whyData.cards.map((card) => (
            <div key={card.id} className="info-card">
              <h3>
                {card.icon} {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;