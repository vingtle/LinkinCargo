import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        
        'service_adiihn6',    // Replace with your EmailJS service ID
        'template_omtkmvb',   // Replace with your EmailJS template ID
        formData,
        '_vCryKXGP9TD10bat'        // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setResultMessage('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          setResultMessage('An error occurred. Please try again.');
        }
      );
  };

  return (
    <main className="contact-container">
      <section className="contact-hero">
        <h1>Get in touch with Us!</h1>
        <p>
          Need to know more about us? Let us know more about you by filling out the details below. Please note that this line is for general inquiries only. Brokers &amp; vendors’ submissions will not be accepted.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your message..."></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
          {resultMessage && <p className="result-message">{resultMessage}</p>}
        </form>
      </section>
    </main>
  );
};

export default Contact;
