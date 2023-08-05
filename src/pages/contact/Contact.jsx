import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    
    <section className="p-6 text-gray-900">
      <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-white">
        <h2 className="w-full text-3xl font-bold leading">Contact us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:border-indigo-500 bg-gray-100"
          />
          <div
            data-lastpass-icon-root="true"
            style={{ position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important' }}
          ></div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:border-indigo-500 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:border-indigo-500 bg-gray-100"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:border-indigo-500 bg-violet-400 text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
