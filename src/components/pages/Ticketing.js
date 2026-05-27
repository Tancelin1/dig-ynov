import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/Page.css";

const staffPath = "/team/";

const staffDirectory = [
  {
    name: "Directrice adjointe",
    role: "Directrice adjointe",
    image: "Directrice adjointe",
    service: "administration",
  },
  {
    name: "Responsable commerciale",
    role: "Responsable commerciale",
    image: "Responsable commerciale",
    service: "relations",
  },
  {
    name: "Gestionnaire equipe expert montage et financement",
    role: "Expert Montage & Financement",
    image: "Gestionnaire equipe expert montage et financement",
    service: "financement",
  },
  {
    name: "Gestionnaire equipe expert montage et financement 2",
    role: "Expert Montage & Financement",
    image: "Gestionnaire equipe expert montage et financement 2",
    service: "financement",
  },
  {
    name: "Chargee des relations entreprises 3D IA Info Cyber",
    role: "Relations Ent. (3D/IA/Cyber)",
    image: "Chargee des relations entreprises 3D IA Info Cyber",
    service: "relations",
  },
  {
    name: "Chargee des relations entreprises Digital Archi Bat",
    role: "Relations Ent. (Digital/Archi)",
    image: "Chargee des relations entreprises Digital Archi Bat",
    service: "relations",
  },
  {
    name: "Charge des relations entreprises Audivisuel Digital Archi Bat Info",
    role: "Relations Entreprises",
    image: "Charge des relations entreprises Audivisuel Digital Archi Bat Info",
    service: "relations",
  },
  {
    name: "Conseillere formation Digital Audivisuel Info",
    role: "Conseillere Formation (Digital)",
    image: "Conseillere formation Digital Audivisuel Info",
    service: "pedagogie",
  },
  {
    name: "Conseillere formation Digital Archi Bat",
    role: "Conseillere Formation (Archi)",
    image: "Conseillere formation Digital Archi Bat",
    service: "pedagogie",
  },
  {
    name: "Conseiller formation 3D IA Info Cyber",
    role: "Conseiller Formation (Tech)",
    image: "Conseiller formation 3D IA Info Cyber",
    service: "pedagogie",
  },
  {
    name: "Responsable IT",
    role: "Responsable IT",
    image: "Responsable IT",
    service: "it",
  },
  {
    name: "Mentor Cyber",
    role: "Mentor Cyber",
    image: "Mentor Cyber",
    service: "tech",
  },
  {
    name: "Mentor Info",
    role: "Mentor Info",
    image: "Mentor Info",
    service: "tech",
  },
  {
    name: "Mentor 3D",
    role: "Mentor 3D",
    image: "Mentor 3D",
    service: "tech",
  },
  {
    name: "Mentor Archi",
    role: "Mentor Archi",
    image: "Mentor Archi",
    service: "tech",
  },
  {
    name: "Mentor Audiovisuel",
    role: "Mentor Audiovisuel",
    image: "Mentor Audiovisuel",
    service: "tech",
  },
  {
    name: "RH et Coordinatrice administrative",
    role: "RH & Coordination",
    image: "RH et Coordinatrice administrative",
    service: "administration",
  },
  {
    name: "Cheffe de projet learning",
    role: "Cheffe de projet Learning",
    image: "Cheffe de projet learning",
    service: "pedagogie",
  },
  {
    name: "Referente pedagogique Digital Audiovisuel",
    role: "Ref. Pedagogique (DA)",
    image: "Referente pedagogique Digital Audiovisuel",
    service: "pedagogie",
  },
  {
    name: "Coordinatrice pedagogique",
    role: "Coord. Pedagogique (DA)",
    image: "Coordinatrice pedagogique",
    service: "pedagogie",
  },
  {
    name: "Referente pedagogique Digital Audiovisuel 2",
    role: "Ref. Pedagogique (DA 2)",
    image: "Referente pedagogique Digital Audiovisuel 2",
    service: "pedagogie",
  },
  {
    name: "Referente pedagogique 3D Bat IA Info Cyber Archi",
    role: "Ref. Pedagogique (Tech)",
    image: "Referente pedagogique 3D Bat IA Info Cyber Archi",
    service: "pedagogie",
  },
  {
    name: "Responsable communication",
    role: "Resp. Communication",
    image: "Responsable communication",
    service: "communication",
  },
  {
    name: "Charge de communication",
    role: "Charge de Communication",
    image: "Charge de communication",
    service: "communication",
  },
  {
    name: "Mentor Digital",
    role: "Mentor Digital",
    image: "Mentor Digital",
    service: "tech",
  },
  {
    name: "Mentor Digital 2",
    role: "Mentor Digital 2",
    image: "Mentor Digital 2",
    service: "tech",
  },
];

const serviceOptions = [
  {
    id: "administration",
    label: "Administration & RH",
    email: "administration@digynov.fr",
  },
  {
    id: "pedagogie",
    label: "Equipe pedagogique",
    email: "pedagogie@digynov.fr",
  },
  {
    id: "relations",
    label: "Relations entreprises",
    email: "relations@digynov.fr",
  },
  {
    id: "communication",
    label: "Communication",
    email: "communication@digynov.fr",
  },
  {
    id: "financement",
    label: "Montage & financement",
    email: "financement@digynov.fr",
  },
  {
    id: "it",
    label: "Support IT",
    email: "support-it@digynov.fr",
  },
  {
    id: "tech",
    label: "Equipe mentors",
    email: "mentors@digynov.fr",
  },
];

const initialFormState = {
  fullName: "",
  email: "",
  service: "pedagogie",
  category: "suivi",
  subject: "",
  message: "",
};

function TicketingPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeService = useMemo(
    () =>
      serviceOptions.find((service) => service.id === formData.service) ||
      serviceOptions[0],
    [formData.service]
  );

  const staffByService = useMemo(
    () => staffDirectory.filter((member) => member.service === formData.service),
    [formData.service]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Container fluid className="page-section bg-light ticketing-page">
      <div className="ticketing-hero">
        <div className="ticketing-badge">Outil de ticketing</div>
        <h2 className="section-title">Centre de support DigYnov</h2>
        <p className="section-subtitle">
          Decrivez votre demande, selectionnez le bon service, et
          envoyez un email a l&apos;equipe concernee.
        </p>
      </div>

      <Row className="ticketing-steps">
        <Col md={4} className="ticketing-step">
          <div className="ticketing-card">
            <span className="ticketing-step-title">1. Orientez la demande</span>
            <p>
              Choisissez le service cible pour declencher le bon circuit de
              traitement.
            </p>
          </div>
        </Col>
        <Col md={4} className="ticketing-step">
          <div className="ticketing-card">
            <span className="ticketing-step-title">2. Precisez le contexte</span>
            <p>
              Ajoutez des details clairs pour accelerer la resolution du ticket.
            </p>
          </div>
        </Col>
        <Col md={4} className="ticketing-step">
          <div className="ticketing-card">
            <span className="ticketing-step-title">3. Simulez l&apos;envoi</span>
            <p>
              Visualisez l&apos;email genere et l&apos;affectation des interlocuteurs.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="ticketing-layout">
        <Col lg={7} className="ticketing-column">
          <form className="ticketing-form" onSubmit={handleSubmit}>
            <div className="ticketing-card ticketing-card-form">
              <h3 className="ticketing-card-title">Creer un ticket</h3>

              <div className="ticketing-field">
                <label htmlFor="fullName">Nom complet</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Ex : Lina Dupont"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ticketing-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="prenom.nom@etu.digynov.fr"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Row>
                <Col md={6}>
                  <div className="ticketing-field">
                    <label htmlFor="service">Service concerne</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {serviceOptions.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="ticketing-field">
                    <label htmlFor="category">Categorie</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="suivi">Suivi administratif</option>
                      <option value="pedagogie">Question pedagogique</option>
                      <option value="contrat">Contrat / financement</option>
                      <option value="technique">Incident technique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </Col>
              </Row>

              <div className="ticketing-field">
                <label htmlFor="subject">Objet du ticket</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Ex : Probleme de planning ou de certificat"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ticketing-field">
                <label htmlFor="message">Description</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Expliquez votre demande avec le maximum de details."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="ticketing-submit" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </Col>

        <Col lg={5} className="ticketing-column">
          <div className="ticketing-card ticketing-routing">
            <h3 className="ticketing-card-title">Routage automatique</h3>
            <p>
              Votre selection envoie le ticket vers le service le plus pertinent.
            </p>
            <div className="ticketing-routing-row">
              <span className="ticketing-routing-label">Service cible</span>
              <span className="ticketing-routing-value">
                {activeService.label}
              </span>
            </div>
            <div className="ticketing-routing-row">
              <span className="ticketing-routing-label">Email de service</span>
              <span className="ticketing-routing-value">
                {activeService.email}
              </span>
            </div>
          </div>

          <div className="ticketing-card ticketing-email">
            <h3 className="ticketing-card-title">Apercu du votre email</h3>
            <div className="ticketing-email-line">
              <span>De :</span>
              <strong>{formData.email || "prenom.nom@etu.digynov.fr"}</strong>
            </div>
            <div className="ticketing-email-line">
              <span>A :</span>
              <strong>{activeService.email}</strong>
            </div>
            <div className="ticketing-email-line">
              <span>Objet :</span>
              <strong>
                {formData.subject || "[Ticket] Nouvelle demande"}
              </strong>
            </div>
            <div className="ticketing-email-body">
              {formData.message ||
                "Merci de decrire votre demande pour generer le corps de l'email."}
            </div>
            {isSubmitted && (
              <div className="ticketing-email-status">
                Email simule, il sera traite par {activeService.label}.
              </div>
            )}
          </div>
        </Col>
      </Row>

      <div className="ticketing-staff">
        <div className="ticketing-staff-header">
          <h3>Equipe concernee</h3>
          <p>
            Une selection dynamique des profils disponibles pour ce service.
          </p>
        </div>
        <div className="ticketing-staff-grid">
          {staffByService.length === 0 ? (
            <div className="ticketing-card ticketing-empty">
              Aucun contact direct pour ce service. Le service central vous
              recontactera.
            </div>
          ) : (
            staffByService.map((member) => (
              <div className="staff-card" key={member.name}>
                {/* <img
                  src={`${staffPath}${member.image}.jpg`}
                  alt={member.name}
                  className="staff-img"
                  loading="lazy"
                /> */}
                <span className="staff-name">{member.name}</span>
                <span className="staff-role">{member.role}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

export default TicketingPage;
