import React, { useState } from 'react';
import '../styles/Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Reservation saved:', data);
        // Set success message
        setSuccessMessage('Reservation successfull!');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: ''
        });
        // Clear error message if any
        setErrorMessage('');
      } else {
        console.error('Failed to save reservation');
        setErrorMessage('Failed to save reservation. Please try again.');
        // Clear success message if any
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Error submitting form. Please try again.');
      // Clear success message if any
      setSuccessMessage('');
    }
  };

  const scrollToForm = () => {
    document.getElementById('reservation-form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="reservation-page">
      <div className="first-section">
        <div className="content">
          <h1>Reserve Your Table</h1>
          <p>Experience the best dining at Apna Cafe.</p>
        </div>
        <div className="scroll-button" onClick={scrollToForm}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
      <div id="reservation-form-section" className="second-section">
        <div className="reservation">
          <h2>Reserve a Table</h2>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
