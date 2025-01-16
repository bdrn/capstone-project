import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage({ availableTimes = [], onDateChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    guests: 1,
    date: '',
    occasion: '',
    time: ''
  });

  // Add form validation state
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation functions
  const validateGuests = (value) => {
    if (!value || value < 1) {
      return 'At least 1 guest is required';
    }
    if (value > 10) {
      return 'Maximum 10 guests allowed';
    }
    return '';
  };

  const validateDate = (value) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(value);
    
    if (!value) {
      return 'Date is required';
    }
    if (selectedDate < today) {
      return 'Cannot book dates in the past';
    }
    // Allow booking up to 6 months in advance
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(today.getMonth() + 6);
    if (selectedDate > sixMonthsFromNow) {
      return 'Cannot book more than 6 months in advance';
    }
    return '';
  };

  const validateTime = (value) => {
    if (!value) {
      return 'Time is required';
    }
    return '';
  };

  const validateOccasion = (value) => {
    if (value && value.length > 50) {
      return 'Occasion description cannot exceed 50 characters';
    }
    return '';
  };

  // Validate all fields and update form validity
  const validateForm = (data) => {
    const newErrors = {
      guests: validateGuests(data.guests),
      date: validateDate(data.date),
      time: validateTime(data.time),
      occasion: validateOccasion(data.occasion)
    };

    setErrors(newErrors);

    // Form is valid if there are no error messages
    const valid = !Object.values(newErrors).some(error => error !== '');
    setIsFormValid(valid);

    return valid;
  };

  // Validate form whenever data changes
  useEffect(() => {
    validateForm(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm(formData)) {
      // Here you would typically submit the form data to your API
      navigate('/booking-confirmed');
    }
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];
  // Get date 6 months from now for max date attribute
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const sixMonthsFromNow = maxDate.toISOString().split('T')[0];

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleInputChange}
            required
            aria-invalid={errors.guests ? 'true' : 'false'}
            aria-describedby="guests-error"
          />
          {errors.guests && (
            <span id="guests-error" className="error-message">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            min={today}
            max={sixMonthsFromNow}
            required
            aria-invalid={errors.date ? 'true' : 'false'}
            aria-describedby="date-error"
          />
          {errors.date && (
            <span id="date-error" className="error-message">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
            aria-invalid={errors.time ? 'true' : 'false'}
            aria-describedby="time-error"
          >
            <option value="">Select time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error-message">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion (Optional)</label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            maxLength="50"
            aria-invalid={errors.occasion ? 'true' : 'false'}
            aria-describedby="occasion-error"
          />
          {errors.occasion && (
            <span id="occasion-error" className="error-message">
              {errors.occasion}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
        >
          Book Now
        </button>
      </form>
    </section>
  );
}

export default BookingPage;