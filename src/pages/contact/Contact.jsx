import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [resultMessage, setResultMessage] = useState('');

  // 1) Initialize EmailJS with your PUBLIC key from client/.env
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('Missing VITE_EMAILJS_PUBLIC_KEY in client/.env');
      return;
    }
    emailjs.init(publicKey);
    console.log('EmailJS initialized with public key:', publicKey);
  }, []);

  // 2) Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3) Submit via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    if (!serviceId || !templateId) {
      console.error('Missing VITE_EMAILJS_SERVICE_ID or VITE_EMAILJS_TEMPLATE_ID');
      setResultMessage('Configuration error. Unable to send message.');
      return;
    }

    try {
      const result = await emailjs.send(serviceId, templateId, formData);
      console.log('EmailJS success:', result.text);
      setResultMessage('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setResultMessage('An error occurred. Please try again later.');
    }
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
