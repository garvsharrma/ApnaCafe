import React, { useState } from 'react';
import '../styles/About.css';
import axios from 'axios';
import whatsappIcon from '../images/icon-whatsapp.png';
import instaIcon from '../images/icon-insta.png';
import fbIcon from '../images/icon-fb.png';

function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <div className='up'></div>
      <div className="about">
        <div className="contact-form">
          <span className="heading"><h2>CONTACT US</h2></span>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder='Enter your message here... we will get in touch with you soon...'></textarea>
            <button type="submit">Submit</button>
          </form>
          {isSubmitted && <p>Thank you for contacting us! We will get in touch with you soon.</p>}
        <h5>or</h5>
        <a href = "facebook.com"><img src={fbIcon} alt="facebook-icon" className="iconn" /></a>
        <a href = "https://wa.me/+917973588176"><img src={whatsappIcon} alt="Whatsapp" className="whatsapp-iconn iconn" /></a>
        <a href = "https://www.instagram.com/garv_sharma_/"><img src={instaIcon} alt="insta-icon" className="iconn" /></a>
        </div>
      </div>
    </>
  );
}

export default About;
