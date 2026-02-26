import React from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import { cafeInfo } from '../data/mockData';
import './Contact.css';

const Contact = () => {
  const handleReserve = () => {
    // Redirect to Swiggy Dineout for table reservation
    window.open('https://www.swiggy.com/dineout', '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="heading-1">Contact Information</h2>
          <p className="body-large">
            We're here to serve you the perfect experience
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Location</h4>
                <p className="body-medium">{cafeInfo.address.line1}</p>
                <p className="body-medium">{cafeInfo.address.line2}</p>
                <p className="body-medium">{cafeInfo.address.line3}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Hours</h4>
                <p className="body-medium">{cafeInfo.hours}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Phone</h4>
                <a href={`tel:${cafeInfo.phone}`} className="body-medium contact-link">
                  {cafeInfo.phone}
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Email</h4>
                <a href={`mailto:${cafeInfo.email}`} className="body-medium contact-link">
                  {cafeInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-actions">
              <button onClick={handleReserve} className="btn-primary">
                Reserve a Table
              </button>
              <a 
                href={cafeInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Navigation size={16} style={{ marginRight: '0.5rem' }} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/place/Bean+Board+-+Vishalakshi+Nagar+(ITI+HA+ASA_Foods)/@17.754057,83.349825,16z/data=!4m6!3m5!1s0x3a395b3a6dbc87dd:0x448b55d23a7289!8m2!3d17.7540568!4d83.3498245!16s%2Fg%2F11k411mcqm?hl=en&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ITHI HA ASA Foods Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
