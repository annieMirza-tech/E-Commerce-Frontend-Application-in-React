import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactUs.css';

const ContactUs = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: 41.8303,
    lng: -71.4128,
  };

  const markerPosition = {
    lat: 41.8303,
    lng: -71.4128,
  };

  return (
    <div className="contact-us">
      <LoadScript
        googleMapsApiKey="AIzaSyA-ExampleKey1234567890abcdeFGHIJklmnopQRsTUV"
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>

      <div className="contact-us-content">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-address">
      <h3>Address</h3>
      <p>123 Store Address, City, Country</p>
      <hr />
      <h4>Phone</h4>
      <p>(123) 456-7890</p>
      <hr />
      <h4>Email</h4>
      <p><a href="mailto:support@example.com">support@example.com</a></p>
      <hr />
      <h4>Opening Time</h4>
      <p>Mon-Fri 9:00 AM - 5:00 PM</p>
    </div>
      </div>
    </div>
  );
};

export default ContactUs;
