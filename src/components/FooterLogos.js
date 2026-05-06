import '../assets/FooterSection.css';

function FooterLogos() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="full-footer">
<div className="footer-left">
  <img src="/logo.png" alt="DigYnov" className="footer-logo" />
</div>
      
      <div className="footer-center">
        DigYnov {currentYear}
      </div>
<div className="footer-right">
        <a
          href="https://www.linkedin.com/company/jumeauxnum%C3%A9rique/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-linkedin.png" alt="LinkedIn" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
}

export default FooterLogos;
