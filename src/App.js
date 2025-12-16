import "./App.css";
import FooterLogos from "./components/FooterLogos";
import ImagesSection from "./components/ImagesSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">

      <header className="hero-section">
        <h1>Bienvenue chez DigYnov</h1>
        <p>
          Vous découvrirez ici notre travail, notre partenaria avec ynov lille.
        </p>
      </header>
{/* importée le composant équipe */}
      <TeamSection />
      
      <ImagesSection />

      <ContactSection />

      <FooterLogos />

    </div>
  );
}

export default App;
