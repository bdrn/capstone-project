import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="info-details">
          <p><strong>Address:</strong> 123 Main Street, Chicago, IL 60601</p>
          <p><strong>Phone:</strong> (312) 555-0123</p>
          <p><strong>Email:</strong> info@littlelemon.com</p>
          <p><strong>Hours:</strong></p>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 9:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 10:00 PM</li>
            <li>Sunday: 11:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send us a Message</h3>
        <input
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;