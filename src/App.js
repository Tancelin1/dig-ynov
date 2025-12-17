import "./App.css";
import FooterLogos from "./components/FooterLogos";
import ImagesSection from "./components/ImagesSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">
  <div className="separation">
      <header className="hero-section">
      
        {/* <div className=""> */}
        <h1>Bienvenue chez DigYnov</h1>
        <img src="/logo.png" alt="DigYnov" className="header-logo" />
        {/* </div> */}
        <p>
          Vous découvrirez ici notre travail, notre partenaria avec ynov lille.
        </p>
      </header>
        </div>
      <div className="separation">
      <TeamSection />
      </div>
<div className="separation">
      <ImagesSection />
      </div>
<div className="separation">
      <ContactSection />
      </div>
      <div className="padding-footer">
<FooterLogos />
      </div>
      
    </div>
  );
}

export default App;
