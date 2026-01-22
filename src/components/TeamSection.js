import React from 'react';
import '../assets/TeamSection.css';

export default function TeamSection() {
    const teamData = [
        {
            title: 'Modélisation',
            members: [
                {
                    id: 1,
                    name: 'Alexandre',
                    image: '/team/alexandre.png',
                    description: 'Chef de projet'
                },
                {
                    id: 2,
                    name: 'Aïmane',
                    image: '/team/aimane.png',
                    description: 'Modeleur'
                }
            ]
        },
        {
            title: 'Hyperviseur',
            members: [
                {
                    id: 3,
                    name: 'Thibault',
                    image: '/team/thibault.png',
                    description: 'Responsable TEIA'
                },
                {
                    id: 4,
                    name: 'Younesse',
                    image: '/team/youness.png',
                    description: 'Responsable Jumeau Numérique.'
                }
            ]
        },
        {
            title: 'Collecte de données',
            members: [
                {
                    id: 5,
                    name: 'Mehdi',
                    image: '/team/mehdi.png',
                    description: 'Récupération des données.'
                },
                {
                    id: 6,
                    name: 'Jean-Mathurin',
                    image: '/team/jean-mathurin.png',
                    description: 'Inventaire des équipements'
                }
            ]
        },
        {
            title: 'Codage / développement des fonctionnalités',
            members: [
                {
                    id: 7,
                    name: 'Tancelin',
                    image: '/team/tancelin.png',
                    description: 'Création du site vitrine'
                },
                {
                    id: 8,
                    name: 'Morgan',
                    image: '/team/morgan.png',
                    description: 'Dev fonctionalité & api'
                }
            ]
        }
    ];

    return (
        <div className="team-container no-padding-bottom">
            <h1>Notre Équipe</h1>
            <div className="team-sections">
                {teamData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="team-section">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="team-pair">
                            {section.members.map((member) => (
                                <div key={member.id} className="team-card">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}