import React from 'react';
import logg from '../../assets/images/linkincargo-newlogo.png'
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Company & Tagline */}
        <div className="footer-col">
          <img src={logg} alt="Linkin Cargo" className="footer-logo" />
            <p className="footer-tagline">
              Your trusted partner in global air freight solutions
            </p>
        </div>


        {/* Column 2: Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Air Export</li>
            <li>Air Import</li>
            <li>Customs Clearance</li>
          </ul>
        </div>

        {/* Column 3: Company & Contact Info */}
        <div className="footer-col">
          <h3>Company</h3>
          <h4>Contact Info</h4>
          <p>
            Email:{' '}
            <a href="mailto:hoang.yen@linkincargo.com">
              hoang.yen@linkincargo.com
            </a>
          </p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Tel: +1 (253) 277 0333</p>
          <p>Fax: +1 (253) 277 0833</p>

          <h4>Hours</h4>
          <p>
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            24/7 Emergency Support
          </p>
        </div>

        {/* Column 4: Office Location */}
        <div className="footer-col">
          <h3>Office Location</h3>
          <p>
            6624 S 196th St, Suite U104
            <br />
            Kent, WA 98032
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Linkin Cargo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
