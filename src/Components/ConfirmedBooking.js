import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmed-booking">
      <div className="confirmation-card">
        <div className="icon-container">
          <span className="checkmark">✓</span>
        </div>
        <h1 className="title">Booking Confirmed!</h1>
        <div className="content-wrapper">
          <p className="main-message">
            Thank you for your reservation. We're looking forward to serving you!
          </p>
          <div className="divider">
            <p className="email-notice">
              A confirmation email has been sent to your email address.
            </p>
          </div>
          <div className="button-container">
            <button
              onClick={() => navigate('/')}
              className="home-button"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;