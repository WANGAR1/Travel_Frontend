import React from 'react';
import './Packages.css'; // Import the CSS file

const Packages = () => {
  const cardData = {
    name: "Beach Retreat in Diani",
    location: "Diani",
    description: "Escape to the pristine beaches of Diani and enjoy a relaxing beach retreat. Bask in the sun, swim in turquoise waters, and indulge in water sports like snorkeling and diving. Explore vibrant coral reefs, visit marine conservation centers, and spot marine life. Unwind at luxury beach resorts, savor delicious seafood, and experience the vibrant nightlife. This package offers a tranquil and idyllic beach getaway.",
    duration: "6 Days / 5 Nights",
    price: 69999,
    rating: 4.5,
    image: [
      "https://tour.epesicloud.com/app/storage/uploads/37/1667205630_71_Banda-04-2-1600x1066.jpg",
      "https://tour.epesicloud.com/app/storage/uploads/37/1667205994_72_Standard-Double-03-1600x1067.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7j9YQfWiOmrIdVFfULa1OvSRL0b8WS78izw&usqp=CAU"
    ],
    itinerary: [
      "Day 1: Lorem ipsum dolor sit amet.",
      "Day 2: Consectetur adipiscing elit.",
      "Day 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  };

  return (
    <div className="card">
      <h2>{cardData.name}</h2>
      <div className="image-container">
        {cardData.image.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>

      <p>Location: {cardData.location}</p>
      <p>{cardData.description}</p>
      <p>Duration: {cardData.duration}</p>
      <p>Price: ${cardData.price}</p>
      <ul>
        <h3>Itenerary</h3>
        {cardData.itinerary.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    

      <p>Rating: {cardData.rating}</p>

      

      

      {/* Booking Button */}
      <button className="booking-button">Book Now</button>
    </div>
  );
};

export default Packages;
