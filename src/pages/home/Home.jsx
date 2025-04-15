import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import homePic from '../../assets/images/home-pic.png';
import servicePic1 from '../../assets/images/service-pic1.png';
import servicePic2 from '../../assets/images/service-pic2.png';
import servicePic3 from '../../assets/images/service-pic3.png';


function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         
          const response = await fetch('http://localhost:5001/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
      
          if (!response.ok) {
            throw new Error('Failed to subscribe');
          }
      
          const result = await response.json();
          alert(`Thanks for subscribing: ${result.message}`);
          setEmail('');
        } catch (error) {
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      };
      
  
    return (
      <div className="home">
        {/* Hero Section with background image via inline style */}
        <section
          className="hero"
          style={{
            backgroundImage: `url(${homePic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Global Air Freight Solutions</h1>
              <p>Fast, reliable and secure air cargo services worldwide</p>
              <button className="hero-btn" onClick={() => navigate('/quotes')}>
                Get Air Freight Quotes
              </button>
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section className="about-section">
          <h2>About Us</h2>
          <p>
          Linkin Cargo provides expert international freight forwarding 
          and logistics services designed specifically to streamline 
          global operations. We handle air cargo solutions and supply 
          chain needs with top-tier technology and a robust global 
          network, ensuring that every shipment receives exceptional 
          care at every step.
        </p>         
        <p>
          Operating through strategic partnerships, Linkin Cargo ensures 
          smooth and effective logistics solutions worldwide. Our 
          specialized team handles all functions in customs clearance 
          and documentation, simplifying your import and export 
          processes. Trust us for fast turnaround times, reliable 
          deliveries, flexible options, and hassle-free international 
          logistics services.
        </p>
          <Link to="/services" className="read-more-btn">
            Read More
          </Link>
        </section>
  
        {/* Services Section */}
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <img src={servicePic1} alt="Air Cargo Charters" className="service-img" />
              <h3>Air Cargo Charters</h3>
              <p>Secure, on-demand air charter services...</p>
              <Link to="/services" className="read-more-btn">
            Read More
          </Link>
            </div>
            <div className="service-card">
              <img src={servicePic2} alt="Customs Clearance" className="service-img" />
              <h3>Customs Clearance</h3>
              <p>Comprehensive customs solutions for your import...</p>
              <Link to="/services" className="read-more-btn">
            Read More
          </Link>
            </div>
            <div className="service-card">
              <img src={servicePic3} alt="Air Export" className="service-img" />
              <h3>Air Export</h3>
              <p>End-to-end air export logistics solutions for...</p>
              <Link to="/services" className="read-more-btn">
            Read More
          </Link>
            </div>
          </div>
        </section>
  
        {/* Newsletter Section */}
        <section className="newsletter-section">
          <h2>Never Miss Any News</h2>
          <p>Sign up for the latest updates...</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit News</button>
          </form>
        </section>
      </div>
    );
  }
  
  export default Home;