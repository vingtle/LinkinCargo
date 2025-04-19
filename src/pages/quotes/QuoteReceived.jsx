import React from 'react';
import { useLocation } from 'react-router-dom';
import bg from "../../assets/images/home-pic.png"; 
import './quoteReceived.css';

function QuoteReceived() {
    const location = useLocation();
    const { reference } = location.state || {};
  return (
    <div className="quote-received">
      <div 
        className="quote-received-overlay"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1>Quote Request Received</h1>
        {reference && <p>Your reference: {reference}</p>}
        <h2>Thank you for your quote</h2>
        <p>
          Your quote request is being processed. A LinkinCargo agent is now reviewing your
          request and will be getting back to you shortly. Please check your email for
          a LinkinCargo ticket # which can be used to reference back to your quote at any time.
        </p>
      </div>
    </div>
  );
}

export default QuoteReceived;
