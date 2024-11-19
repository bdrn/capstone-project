import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-confirmation');
  };

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>Number of Guests</label>
        <input type="number" name="guests" min="1" />
        <label>Date</label>
        <input type="date" name="date" />
        <label>Occasion</label>
        <input type="text" name="occasion" />
        <label>Time</label>
        <input type="time" name="time" />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;