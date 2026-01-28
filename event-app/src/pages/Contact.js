import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with us.</p>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
