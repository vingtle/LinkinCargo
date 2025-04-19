import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';

export default function Contact() {
  const formRef = useRef();
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS success:', result.text);
      setResultMessage('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setResultMessage('An error occurred. Please try again later.');
    });
  };

  return (
    <main className="contact-container">
      <section className="contact-hero">
        <h1>Get in touch with Us!</h1>
        <p>
          Need to know more about us? Let us know more about you by filling out the
          details below. Please note that this line is for general inquiries only.
          Brokers & vendors’ submissions will not be accepted.
        </p>
      </section>

      <section className="contact-form-section">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
          {resultMessage && <p className="result-message">{resultMessage}</p>}
        </form>
      </section>
    </main>
  );
}
