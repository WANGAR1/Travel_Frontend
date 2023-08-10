import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    fetch('/travel_packages')
      .then(response => response.json())
      .then(data => setTravelPackages(data))
      .catch(error => console.error('Error fetching travel packages:', error));
  }, []);

  return (
    <div className="packages-container"> {/* Add packages-container */}
      {travelPackages.map(travelPackage => (
        <div className="card" key={travelPackage.id}>
          <h2>{travelPackage.name}</h2>
          <div className="image-container">
            <img src={travelPackage.image_url} alt={`Image for ${travelPackage.name}`} />
          </div>
          <p>Location: {travelPackage.destination.location}</p>
          <p>{travelPackage.description}</p>
          <p>Price: ${travelPackage.pricing}</p>
          {Array.isArray(travelPackage.itinerary) ? (
            <ul>
              <h3>Itinerary</h3>
              {travelPackage.itinerary.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          ) : (
            <p>Itinerary: {travelPackage.itinerary}</p>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Packages;
                








<section class="py-48 bg-white flex flex-col justify-center">
    <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
      <div class="-mt-20 flex justify-end">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
      </div>
      <div class="flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
      </div>
      <div class="-mt-64 flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
      </div>
      <div class="flex justify-start -mr-28 ml-28">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
      </div>
      <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
        <div class="space-y-4">
          <p class="text-5xl font-bold text-black tracking-tight">
            In unprecedented times, health and safety remain the priority.
          </p>
          <p class="text-xl text-black">
            From the moment the threat of COVID‑19 emerged, Apple took action. Working closely with medical experts and our suppliers, we put the health and safety of the people in our supply chain first. We implemented standard measures like
            personal protective equipment, deep‑cleaning protocols and health screenings. But we went much further, re‑imagining entire factory layouts and processes to ensure that people could practise proper social distancing. We continue to
            support our suppliers around the world and have shared our best practices and lessons learned with partners across the industry.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
          <div>
          <p>Booking Status: {travelPackage.booking_status}</p>
          <Link to="/bookingform" className="booking-button">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  </section>