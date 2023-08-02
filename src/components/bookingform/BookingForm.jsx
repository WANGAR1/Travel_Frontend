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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation or submit the form to a backend here
    console.log(formData);
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
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