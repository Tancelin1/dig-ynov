
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FooterLogos from "./components/FooterLogos";
import { useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import RealisationsPage from './components/pages/RealisationsPage';
import TeamPage from './components/pages/TeamPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import TicketingPage from './components/pages/Ticketing';

function AppContent() {
    const location = useLocation();
    const isTicketing = location.pathname === "/ticketing";
    return (
        <div className="App">
            {!isTicketing && <Navigation />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/realisations" element={<RealisationsPage />} />
                <Route path="/equipe" element={<TeamPage />} />
                <Route path="/a-propos" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ticketing" element={<TicketingPage />} />
            </Routes>
            {!isTicketing && (
                <div className="padding-footer">
                    <FooterLogos />
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
