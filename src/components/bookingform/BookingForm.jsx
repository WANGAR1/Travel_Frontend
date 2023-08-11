import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';
const BookingForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const packageId = searchParams.get('packageId');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    no_of_people: '',
    check_in_date: '',
    check_out_date: '',
    travel_package_id: packageId, // Include the package ID in the form data
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
        setBookingMessage('Booking successful!');
      } else if (response.status === 401) {
        setBookingStatus('error');
        setBookingMessage('You are not authorized to perform this action.');
      } else if (response.status === 422) {
        setBookingStatus('error');
        setBookingMessage('Validation failed. Please check your input.');
      } else {
        setBookingStatus('error');
        setBookingMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      setBookingStatus('error');
      setBookingMessage('An error occurred. Please try again.');
    }
  };
  return (
    <div className="booking-container">
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
        <button type="submit" className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600">Book Now</button>
      </form>
    </div>
   </div>
    
  );
};
export default BookingForm;