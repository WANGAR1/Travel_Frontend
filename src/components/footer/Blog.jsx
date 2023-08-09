import React from 'react';
import Header from '../header/Header';

const Blog = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="bg-white text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white border border-gray-200">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-100" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Introducing TravelTrove - Your Gateway to Unforgettable Travel Experiences</h3>
            <span className="text-xs text-gray-400">February 19, 2021</span>
            <p>Welcome to the RiftTravel Blog! Today, we are thrilled to introduce TravelTrove, the user-centric travel platform that is set to revolutionize the way you explore and share your travel adventures. As avid travelers ourselves, we understand the frustration of navigating existing platforms that lack the features you truly need. That's why we embarked on a mission to create a seamless and personalized platform that empowers both travelers and tour operators.</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?1" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Addressing Pain Points in the Travel Industry</h3>
              <span className="text-xs text-gray-400">January 21, 2021</span>
              <p>The travel industry has long awaited a solution that caters to the needs of travelers and tour operators alike. Existing platforms often fall short, leaving users with suboptimal experiences and concerns over data security. At TravelTrove, we recognize these pain points and have made it our priority to address them head-on.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?2" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Seamless Registration and Custom User Dashboard</h3>
              <span className="text-xs text-gray-400">January 22, 2021</span>
              <p>With TravelTrove, getting started is a breeze. Our seamless registration process, verified by email verification, ensures that you can begin your travel journey hassle-free. Once on board, you gain access to a custom user dashboard, providing an intuitive space to curate and publish your unique travel experiences. Your stories, photos, and videos can now reach fellow travelers around the globe.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?3" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Empowering Tour Operators to Showcase Their Offerings</h3>
              <span className="text-xs text-gray-400">January 23, 2021</span>
              <p>Tour operators play a vital role in shaping unforgettable travel experiences. TravelTrove empowers tour operators by allowing them to showcase their travel packages with detailed itineraries and captivating images. Our cloudinary integration optimizes images, enhancing the overall package presentation and attracting travelers looking for their next adventure.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?4" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">A Responsive Platform for a Seamless Experience</h3>
              <span className="text-xs text-gray-400">January 24, 2021</span>
              <p>We understand the importance of accessibility. That's why TravelTrove's platform is designed to be responsive across various devices, be it desktops, tablets, or mobile phones. Say goodbye to disruptions and welcome a smooth and enjoyable experience, no matter where your journey takes you.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?5" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Data Security and Privacy</h3>
              <span className="text-xs text-gray-400">January 25, 2021</span>
              <p>At TravelTrove, your data security and privacy are of utmost importance to us. Our two-step authentication process and encryption ensure that your personal information and payment details are protected from unauthorized access. Feel at ease while you explore and book your dream destinations.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?6" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Your Resource for Travel Tips and Guides</h3>
              <span className="text-xs text-gray-400">January 26, 2021</span>
              <p>Our commitment to your travel experience extends beyond the platform. The TravelTrove Blog is your resource for valuable travel tips and guides. Whether you need budget travel advice, destination-specific recommendations, or secure travel practices, we've got you covered.</p>
            </div>
          </a>
        </div>
      </div>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white border border-gray-200">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-100" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Join the TravelTrove Community Today</h3>
            <span className="text-xs text-gray-400">February 19, 2021</span>
            <p>Embark on a journey with TravelTrove, where the power of travel meets seamless technology. Join our growing community of passionate travelers and tour operators, and be a part of a user-centric platform that simplifies the process of discovering and sharing memorable travel experiences.</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?1" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring Hidden Gems with TravelTrove</h3>
              <span className="text-xs text-gray-400">January 21, 2021</span>
              <p>Are you tired of visiting the same touristy destinations? TravelTrove is here to help you discover hidden gems around the world! Our community of travelers shares their off-the-beaten-path adventures, from serene beaches to charming mountain villages. Get inspired and start planning your next unique travel experience today.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?2" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Traveling Sustainably with TravelTrove</h3>
              <span className="text-xs text-gray-400">January 22, 2021</span>
              <p>TravelTrove is committed to promoting sustainable travel practices. Check out our latest blog post on eco-friendly travel tips and responsible tourism. Learn how you can minimize your environmental impact while exploring the world's most beautiful destinations. Let's travel responsibly and preserve the planet for future generations!</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?3" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Benefits of Group Travel with TravelTrove</h3>
              <span className="text-xs text-gray-400">January 23, 2021</span>
              <p>Traveling with friends and family has never been easier with TravelTrove's group travel feature. Discover the advantages of traveling in a group, from shared experiences to cost savings. Whether you're planning a family reunion or a group adventure with your closest pals, TravelTrove has the tools to make your group travel planning a breeze.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?4" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">TravelTrove Rewards: Earn as You Explore</h3>
              <span className="text-xs text-gray-400">January 24, 2021</span>
              <p>Did you know that every booking on TravelTrove earns you rewards? Learn more about our exciting rewards program and how you can earn points with every travel booking. Redeem your points for exclusive discounts and perks on your future adventures. It's time to be rewarded for doing what you love – traveling!</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?5" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Connecting with Like-Minded Travelers on TravelTrove</h3>
              <span className="text-xs text-gray-400">January 25, 2021</span>
              <p>TravelTrove is more than just a travel platform; it's a community of passionate travelers. Connect with like-minded individuals who share your love for exploring new cultures and destinations. Join travel groups, share tips, and make friends from all corners of the globe. Travel is better when shared with friends!</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white border border-gray-200 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-100" src="https://source.unsplash.com/random/480x360?6" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Top Travel Destinations of the Year</h3>
              <span className="text-xs text-gray-400">January 26, 2021</span>
              <p>Wondering where to go next? TravelTrove has curated a list of the top travel destinations for the year. From exotic islands to bustling cities, our list covers a diverse range of destinations to suit every traveler's preferences. Find your next dream destination and start planning your adventure with TravelTrove.</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-100 text-gray-600">Load more posts...</button>
        </div>
      </div>
    </section>

    </div>
      );
};

export default Blog;
