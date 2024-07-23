// src/pages/Checkout.js
import React, { useState } from 'react';
import '../styles/Checkout.css'; // Create this CSS file for styling
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const location = useLocation();
  const cart = location.state?.cart || []; // Get cart data passed from Cart.js

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer, cart }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Handle successful order creation
      console.log('Order created:', data);
      // Redirect or show success message
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="customer-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="order-now-button">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
