import React from 'react';
import supportBg from "../../assets/images/support-pic.png";
import './support.css';

const Support = () => {
  return (
    <main className="support-container">
      <section
        className="support-hero"
        style={{ backgroundImage: `url(${supportBg})` }}
      >
        <h1>Support Center</h1>
      </section>

      <section className="support-content-row">
        <div className="left-section">
          <h2>Frequently Asked Questions</h2>
        </div>

        <section className="faq-section">
        <p>
          We want to make it easy to do business with us.
          Skip to the section you need for answers to commonly asked questions.
        </p>
        <p>
          If you still need help, feel free to{' '}
          <a href="/contact">contact us</a>.
        </p>

        <div className="accordion">
          <details>
            <summary>Getting Started</summary>
            <p>
              Here is how you can begin working with our services. 
              For more details, please visit our Getting Started guide.
            </p>
          </details>

          <details>
            <summary>General Cargo Questions</summary>
            <p>
              Find common Q&As about cargo handling, shipment schedules,
              and packaging guidelines here.
            </p>
          </details>

          <details>
            <summary>Reservations</summary>
            <p>
              Reserve shipping slots or cargo space through our online portal. 
              Contact us directly for priority reservations.
            </p>
          </details>

          <details>
            <summary>eAWB</summary>
            <p>
              Electronic Air Waybills are a faster, more secure way to process shipments. 
              Register on our website to use eAWB services.
            </p>
          </details>

          <details>
            <summary>Shipping Cargo</summary>
            <p>
              Whether it’s small parcels or large freight, our shipping process is straightforward. 
              Learn about cargo requirements, weight limits, and customs forms here.
            </p>
          </details>
        </div>
      </section>
      </section>
    </main>
  );
};

export default Support;
