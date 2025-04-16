import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // In a real application, you would send the form data to a server here
    // For this example, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact</h2>
        <div className="max-w-2xl mx-auto">
          {formStatus.submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {formStatus.message}
            </div>
          ) : formStatus.error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {formStatus.message}
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> contact@example.com</p>
              <p><span className="font-medium">Phone:</span> (123) 456-7890</p>
              <p><span className="font-medium">Location:</span> San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
