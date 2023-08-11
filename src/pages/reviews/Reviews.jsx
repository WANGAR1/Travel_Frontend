import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { packageId } = useParams(); // Extract packageId from URL parameter
  const [reviews, setReviews] = useState([]);
  const [travelPackage, setTravelPackage] = useState(null);
  useEffect(() => {
    if (isNaN(packageId)) {
      console.error('Invalid packageId:', packageId);
      return;
    }
    fetch(`/travel_packages/${packageId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data || !data.reviews) {
          console.error('Invalid response data:', data);
          return;
        }
        setTravelPackage(data);
        setReviews(data.reviews);
      })
      .catch(error => {
        console.error('Error fetching travel package:', error);
      });
  }, [packageId]);
  return (
    <div className='container'>
      <Link
        to='/reviewsform'
        className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        Add Reviews
      </Link>
      {reviews.length === 0 ? (
        <p className="text-center mt-8">No reviews available for this package.</p>
      ) : (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-auto mt-16 bg-gray-200 rounded-md shadow-lg">
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                  <div>
                    <h4 className="font-bold text-3xl text-black">{review.name}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M448 192h-46.83L256 19.39 110.83 192H64l144 124.27L100.52 448l155.48-114.27L411.48 448 320 316.27 448 192z" />
                  </svg>
                  <span className="text-xl font-bold text-black">{review.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-700">
                {review.comment}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Reviews;
















