// src/pages/contact/Contact.jsx

import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import "./Contact.scss";

export default function Contact() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h2>Contactez-nous</h2>
      {submitted ? (
        <div className="confirmation-message">
          <p>Merci {user.username} pour votre message !</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      )}
    </div>
  );
}
