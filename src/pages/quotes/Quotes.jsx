import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quotes.css';
import planeImage from '../../assets/images/quotes-pic.png';

function Quotes() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
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
    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('http://localhost:5001/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData.message || errorData);
        return;
      }
      
      const data = await response.json();
      console.log('Submission successful:', data);
      
      if (data.reference) {
        navigate('/quote-received', { state: { reference: data.reference } });
      } else {
        console.warn('No reference received.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
    }
  };

  return (
    <div className="quotes-page">
      <section className="quotes-hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${planeImage})` }}
        >
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
        {/*
          1) Replace "https://formspree.io/f/yourFormID" with your actual Formspree endpoint.
          2) method="POST" ensures data is posted to Formspree.
        */}
        <form onSubmit={handleSubmit}
          // className="quotes-form"
          // action="https://formspree.io/f/mgvazrjl"
          // method="POST"
        >
          {/* Optional: If you want to redirect to a success page on your site, 
              add a hidden input like this:   */}
             <input 
              type="hidden" 
              name="_next" 
              value="http://localhost:5174/quote-received"
            />

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
          <div className="form-row">
            <div className="form-group">
              <label>Attach File (optional)</label>
              {/*
                Formspree free plan doesn't support file uploads, so this may not be 
                fully functional unless you're on a paid plan or using a workaround.
              */}
              <input type="file" name="attachedFile" />
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

export default Quotes;
