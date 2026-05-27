
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FooterLogos from "./components/FooterLogos";
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import RealisationsPage from './components/pages/RealisationsPage';
import TeamPage from './components/pages/TeamPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <div className="padding-footer">
          <FooterLogos />
        </div>
      </div>
    </Router>
  );
}

export default App;
