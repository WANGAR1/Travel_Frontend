import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/reviews/${id}`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [id]);

  return (
    <div className='container'>
      <Link
        to="/reviewsform"
        className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        Add Reviews
      </Link>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto mt-16 divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100 relative">
        
        {/* Using a wrapping div */}
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex justify-between items-center p-4">
              <div className="flex space-x-4">
                <div>
                  <h4 className="font-bold text-3xl">{review.name}</h4>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M448 192h-46.83L256 19.39 110.83 192H64l144 124.27L100.52 448l155.48-114.27L411.48 448 320 316.27 448 192z" />
                </svg>
                <span className="text-xl font-bold">{review.rating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-400">
              {review.comment}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
