import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/Page.css";

function TicketingPage() {
  return (
    <>
      <Container fluid className="page-section bg-light">
        <div className="text-center mb-5">
          <h2 className="section-title">Ticketing</h2>
          <p className="section-subtitle">Trouvez une solution à votre problème</p>
        </div>

        <Row>
          <Col md={4}>
            Miam des petits enfants
          </Col>

          <Col md={6}>
            ZEBIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIi
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TicketingPage;
