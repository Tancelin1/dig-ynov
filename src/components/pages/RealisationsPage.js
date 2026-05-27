import React, { useState } from "react";
import "../../assets/Page.css";

const realisations = [
  {
    id: 1,
    title: "Campus Ynov Lille",
    sections: [
      {
        image: "/images/ynov1.jpg",
        text: "Présentation générale du projet Ynov à Croix..."
      },
      {
        image: "/images/ynov2.jpg",
        text: "Modélisation complète des espaces pédagogiques..."
      },
      {
        image: "/images/ynov3.jpg",
        text: "Gestion des équipements et maintenance..."
      }
    ]
  },
];

function RealisationsPage() {
  const [selected, setSelected] = useState(realisations[0]);

  return (
    <>
      <div className="separation">
        <header className="hero-section">
          <h1>Nos Réalisations</h1>
          <p>Découvrez nos projets de jumeaux numériques</p>
        </header>
      </div>

      <section className="page-section">

        <ul className="realisation-list">
          {realisations.map((proj) => (
            <li
              key={proj.id}
              className={selected.id === proj.id ? "active" : ""}
              onClick={() => setSelected(proj)}
            >
              {proj.title}
            </li>
          ))}
        </ul>

        <h2 className="section-title">{selected.title}</h2>

        {selected.sections.map((section, index) => (
          <div
            key={index}
            className={`realisation-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <img src={section.image} alt="" />
            <p>{section.text}</p>
          </div>
        ))}

      </section>
    </>
  );
}

export default RealisationsPage;