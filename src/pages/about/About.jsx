import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'; 

const About = () => {
  return (
    <main className="about-container">
      <section className="hero">
        <h1>We're glad you're here.</h1>
        <p>
          At LinkinCargo, we have a simple vision to be the wholesale freight partner of choice, delivering service excellence.
        </p>
        <ul>
          We are continuously looking to expand our network to give our customers a truly global partner.
            Developing innovative solutions to deliver market-leading services. 
            Specialists in getting cargo to where it needs to go, at the best price with the best service.
            Service excellence is more than getting your cargo delivered on time; we are there before, during, and after your shipment’s journey.
            Improvement never stops; every day, we continually strive to be better.
        </ul>
      </section>
{/* 
      <section className="office-info">
        <h2>Our Office: 6624 S 196th St, Suite U104 Kent, WA 98032,US</h2>
        <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
        <a
          href="https://www.google.com/maps/place/6624+S+196th+St+u104,+Kent,+WA+98032/@47.4270868,-122.2506427,16z/data=!3m1!4b1!4m5!3m4!1s0x54905c8c62be1099:0x8238e7b0f760ebb3!8m2!3d47.4270868!4d-122.2506427?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </section> */} 

      <section className="cta">
        <h3>Have goods to ship?</h3>
        <p>Start here and find out how to move your goods.</p>
        <Link to="/services">Get started</Link>
      </section>
    </main>
  );
};

export default About;
