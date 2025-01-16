import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage({ availableTimes = [], onDateChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    guests: 1,
    date: '',
    occasion: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically submit the form data to your API
    // For now, we'll just navigate to the confirmation page
    navigate('/booking-confirmed'); // Changed from '/confirmed-booking' to '/booking-confirmed'
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({
      ...formData,
      date: selectedDate
    });
    onDateChange(selectedDate);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="occasion">Occasion</label>
        <input
          type="text"
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
        />

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;