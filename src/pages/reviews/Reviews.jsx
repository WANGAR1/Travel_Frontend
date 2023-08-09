import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (

    <div className='container'>
       <Link to="/reviewsform"
        className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        Add Reviews
      </Link>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto mt-16 divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100 relative">
      
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <div>
            <h4 className="font-bold text-3xl">{/*name */}Samantha</h4>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
          <span className="text-xl font-bold">{/* rating*/}3</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-400">
        {/* comment*/}fehuioof'lhiego eghoihgvg   jutfji  jf va jjnadioefj nfjiwrnv sdk   n
      </div>
    </div>

      

    </div>
    
  );
};

export default Reviews;
