import React, { useState } from 'react';
import './ReviewsForm.css'; 

const ReviewsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: '',
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
    <div className='reviews-container'>
        <div className="reviews-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <select name="rating" value={formData.rating} onChange={handleChange} required>
            <option value="" disabled>
              Select Rating
            </option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        <button className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600" type="submit">Submit Review</button>
      </form>
    </div>
    </div>
    
  );
};

export default ReviewsForm;
