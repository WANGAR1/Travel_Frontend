import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    no_of_people: '',
    check_in_date: '',
    check_out_date: '',
  });

  const [bookingStatus, setBookingStatus] = useState(null);
  const [bookingMessage, setBookingMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setBookingStatus('success');
        setBookingMessage('Booking successful!'); // Set success message
      } else if (response.status === 401) {
        setBookingStatus('error');
        setBookingMessage('You are not authorized to perform this action.'); // Unauthorized error
      } else if (response.status === 422) {
        setBookingStatus('error');
        setBookingMessage('Validation failed. Please check your input.'); // Validation error
      } else {
        setBookingStatus('error');
        setBookingMessage('Booking failed. Please try again.'); // Set error message
      }
    } catch (error) {
      setBookingStatus('error');
      setBookingMessage('An error occurred. Please try again.'); // Set error message
    }
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      {bookingStatus === 'success' && (
        <p className="booking-success">{bookingMessage}</p>
      )}
      {bookingStatus === 'error' && (
        <p className="booking-error">{bookingMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>No. of People</label>
          <input type="number" name="no_of_people" value={formData.no_of_people} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Check-in Date</label>
          <input type="date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input type="date" name="check_out_date" value={formData.check_out_date} onChange={handleChange} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
