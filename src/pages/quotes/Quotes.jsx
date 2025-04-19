import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import './quotes.css';
import planeImage from '../../assets/images/quotes-pic.png';

export default function Quotes() {
  const navigate = useNavigate();

  // Initialize EmailJS with your public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('Missing VITE_EMAILJS_PUBLIC_KEY');
      return;
    }
    emailjs.init(publicKey);
    console.log('EmailJS initialized with public key:', publicKey);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      originCity: e.target.originCity.value,
      destinationCity: e.target.destinationCity.value,
      originCountry: e.target.originCountry.value,
      destinationCountry: e.target.destinationCountry.value,
      totalWeight: e.target.totalWeight.value,
      volumeOrMetric: e.target.volumeOrMetric.value,
      specialHandling: e.target.specialHandling.value,
      hazardous: e.target.hazardous.value,
      additionalComments: e.target.additionalComments.value,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error('Missing EmailJS service or template ID');
      alert('Configuration error: cannot send email.');
      return;
    }

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams);
      console.log('EmailJS success:', result.text);
      navigate('/quote-received', { state: { reference: 'sent' } });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert("Sorry, we couldn't send your quote request. Please try again later.");
    }
  };

  return (
    <div className="quotes-page">
      <section className="quotes-hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${planeImage})` }}>
          <div className="hero-overlay">
            <h1>International Air Freight Quotes</h1>
            <p>
              Quotes is your best resource for all your freight needs. Let us handle
              the complexities of shipping so you can focus on your business. Whether
              you’re shipping large volumes or smaller items, we provide cost‐effective
              solutions to meet your timeline and budget. Our team is dedicated to
              ensuring your shipments arrive safely and on time, giving you peace of
              mind.
            </p>
          </div>
        </div>
      </section>

      <section className="quotes-form-section">
        <form onSubmit={handleSubmit}>
          <h2>Contact Info</h2>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="e.g. John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="e.g. Doe" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="john.doe@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="+1 (555) 123-4567" />
            </div>
          </div>

          <h2>Building Info</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Origin City</label>
              <input type="text" name="originCity" placeholder="e.g. Los Angeles" />
            </div>
            <div className="form-group">
              <label>Destination City</label>
              <input type="text" name="destinationCity" placeholder="e.g. Tokyo" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Origin Country</label>
              <input type="text" name="originCountry" placeholder="e.g. USA" />
            </div>
            <div className="form-group">
              <label>Destination Country</label>
              <input type="text" name="destinationCountry" placeholder="e.g. Japan" />
            </div>
          </div>

          <h2>Freight Info</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Total Weight</label>
              <input type="text" name="totalWeight" placeholder="e.g. 1000 (lbs or kg)" />
            </div>
            <div className="form-group">
              <label>Volume or Metric</label>
              <input type="text" name="volumeOrMetric" placeholder="e.g. 50 CBM" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Special Handling</label>
              <select name="specialHandling">
                <option value="">None</option>
                <option value="Fragile">Fragile</option>
                <option value="Oversized">Oversized</option>
                <option value="Refrigerated">Refrigerated</option>
              </select>
            </div>
            <div className="form-group">
              <label>Hazardous</label>
              <select name="hazardous">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Additional Comments</label>
              <textarea name="additionalComments" rows="3" placeholder="Any extra details..." />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Get Air Freight Quote
          </button>
        </form>
      </section>
    </div>
  );
}