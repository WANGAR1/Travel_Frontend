import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReviewsForm.css';

const ReviewsForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const packageId = searchParams.get('packageId');
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: '',
    travel_package_id: packageId,
  });
  const [reviewStatus, setReviewStatus] = useState(null);
  const [reviewMessage, setReviewMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setReviewStatus('success');
        setReviewMessage('Review successful!');
      } else if (response.status === 401) {
        setReviewStatus('error');
        setReviewMessage('You are not authorized to perform this action.');
      } else if (response.status === 422) {
        setReviewStatus('error');
        setReviewMessage('Validation failed. Please check your input.');
      } else {
        setReviewStatus('error');
        setReviewMessage('Review failed. Please try again.');
      }
    } catch (error) {
      setReviewStatus('error');
      setReviewMessage('An error occurred. Please try again.');
    }
  };
  return (
    <div className='reviews-container'>
          <div className="reviews-form">
      <h2>Write a Review</h2>
      {reviewStatus === 'success' && (
        <p className="review-success">{reviewMessage}</p>
      )}
      {reviewStatus === 'error' && (
        <p className="review-error">{reviewMessage}</p>
      )}
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
        <button type="submit" className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600">Submit Review</button>
      </form>
    </div>
    </div>
    
  );
};
export default ReviewsForm;
