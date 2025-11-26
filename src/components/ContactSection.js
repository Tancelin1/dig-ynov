function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default ContactSection;
