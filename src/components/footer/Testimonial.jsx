import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">Travelers Review After Successful Tours</h2>
            <p className="text-gray-400">This is what our users think of us.</p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-white">
                  <p>"I had been searching for a travel platform that truly understands what travelers need. TravelTrove exceeded my expectations! It's user-friendly, and the two-step authentication gave me peace of mind. I was able to share my travel experiences effortlessly, and the responsive design made it accessible on my phone. Highly recommended!" </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold"> Sarah W.</p>
                      <p className="text-sm text-gray-600">CTO of Company Co.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-white">
                  <p>"As a tour operator, I struggled to find a platform that allowed me to showcase my travel packages effectively. TravelTrove provided the perfect solution. The cloudinary integration for image optimization was a game-changer. Now, I can attract travelers with captivating visuals and detailed itineraries. Thank you, TravelTrove!"</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Mark T.</p>
                      <p className="text-sm text-gray-600">CTO of Company Co.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-white">
                  <p>"TravelTrove made my travel planning a breeze! The ability to compare multiple options and set fare alerts saved me both time and money. I love how it prioritizes data security, which made me feel confident in using the platform. This is the travel app I've been waiting for!"</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Emily R.</p>
                      <p className="text-sm text-gray-600">CTO of Company Co.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-white">
                  <p>  "The seamless registration process and personalized dashboard on TravelTrove made me feel like it truly understands its users. I can't believe how easy it is to share my travel experiences and connect with tour operators. Kudos to the team behind TravelTrove for creating such a user-centric platform!"</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Alex K.</p>
                      <p className="text-sm text-gray-600">CTO of Company Co.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

