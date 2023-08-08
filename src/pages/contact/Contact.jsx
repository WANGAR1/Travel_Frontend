import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/contacts', { contact: formData })
      .then((response) => {
        console.log(response.data.message);
        setSuccessMessage('We have received your message. Our dedicated team will reach out to you in the shortest time!');
        setErrorMessage('');
        
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error.response.data.errors);
        setErrorMessage('Error submitting form. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <section className="p-6 text-gray-900">
      <form onSubmit={handleSubmit} noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-white">
        <h2 className="w-full text-3xl font-bold leading">Contact us</h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
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
