function BookingPage() {
    return (
      <section className="booking-page">
        <h2>Book a Table</h2>
        <form>
          <label>Number of Guests</label>
          <input type="number" name="guests" min="1" />
          <label>Date</label>
          <input type="date" name="date" />
          <label>Time</label>
          <input type="time" name="time" />
          <button type="submit">Book Now</button>
        </form>
      </section>
    );
  }

export default BookingPage;