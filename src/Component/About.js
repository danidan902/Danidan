import React, { useState } from 'react';

function About() {
  return <div className="Portfolio">
    <App/>
  </div>;
}


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Form submitted:', formData);

    // Simulate form submission (e.g., API call)
    setTimeout(() => {
      setIsSubmitted(true); // Set submission state to true
    }, 1000); // Simulate a delay (e.g., API call)
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlForm="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlForm="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank You for Submitting!</h2>
          <p>We appreciate your feedback.</p>
        </div>
      )}
    </div>
  );
}


export default About;
