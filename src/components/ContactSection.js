import '../assets/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <div className="contact-form">
  <p>
    Vous pouvez nous contacter via l'adresse mail suivante : 
    <a href="mailto:digynov@gmail.com" className="email-link">
      digynov@gmail.com
    </a>
  </p>
</div>
    </section>
  );
}

export default ContactSection;
