import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './services.css';
import picture1 from "../../assets/images/service-pic1.png";
import picture2 from "../../assets/images/service-pic4.jpg";
import picture3 from "../../assets/images/service-pic2.png";
import picture4 from "../../assets/images/service-pic5.jpg";

function Services() {
  const navigate = useNavigate();

  const fullScreeningText = `Every shipment, every time with total safety and security 
  at the core of all our cargo screening services, we are the leading cargo screening 
  partner of choice. Performed on-site by our professional highly trained operatives, 
  pragmatically and diligently through a combination of X-ray, ETD, and Hand Search, 
  you can have the confidence, whatever the size or commodity of your cargo, that it 
  will be screened quickly and efficiently, then securely stored on-site ready to be 
  delivered to our airline partners.`;

  const truncatedText = fullScreeningText.split(' ').slice(0, 5).join(' ') + '...';

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Global Logistics Services</h1>
        <p>
          International Freight Solutions for Smart Business. Our proven track record
          in managing intricate international freight projects is widely recognized by
          our satisfied customers.
        </p>
      </section>

      <section className="services-intro">
        <h2>Your International Shipping Journey Starts Here</h2>
        <p>Streamlined Global Freight Solutions</p>
        <p>
          World Class Shipping is the international freight forwarder of choice for
          businesses who need an eye on the details and a partner who is always
          available to assist. Our ever expanding technology offerings give our
          customers the edge when it comes to managing and tracking their global
          supply chain. The Linkin Cargo team is trained in the art of superior
          friendly customer service. Whether you are importing or exporting, you have
          access to a group of pros who truly care about your shipments.
        </p>
      </section>

      <section className="services-cards">
        <div className="service-card">
          <img src={picture1} alt="Air Freight" className="service-img" />
          <h3>Air Freight</h3>
          <p>Air Cargo Quotes</p>
          <button 
            className="services-btn" 
            onClick={() => navigate('/quotes')}
          >
            Find Out More
          </button>
        </div>

        <div className="service-card">
          <img src={picture2} alt="Import USA" className="service-img" />
          <h3>Import USA</h3>
          <p>Customs + Delivery</p>
          <button 
            className="services-btn" 
            onClick={() => navigate('/quotes')}
          >
            Find Out More
          </button>
        </div>

        <div className="service-card">
          <img src={picture3} alt="Customs Clearances" className="service-img" />
          <h3>Customs Clearances</h3>
          <p>FCL, LCL, Exports</p>
          <button 
            className="services-btn" 
            onClick={() => navigate('/quotes')}
          >
            Find Out More
          </button>
        </div>

        <div className="service-card">
          <img src={picture4} alt="Screening" className="service-img" />
          <h3>Screening</h3>
          <p>{truncatedText}</p>
          <button className="services-btn" onClick={() => setShowModal(true)}>Read More</button>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Screening</h3>
            <p>{fullScreeningText}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
