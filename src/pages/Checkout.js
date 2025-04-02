import React, { useState } from 'react';
import '../styles/Checkout.css'; // Create this CSS file for styling
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { cashfree } from '../util';
import { API_BASE_URL } from '../config/api';

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
      // Create order
      const orderResponse = await axios.post(`${API_BASE_URL}/create-order`, {
        customer,
        cart
      });

      const { orderId, amount } = orderResponse.data;

      if (!orderId || !amount) {
        throw new Error("Invalid orderId or Amount");
      }

      // Initiate payment
      const paymentResponse = await axios.post(`${API_BASE_URL}/initiate-payment`, {
        orderId: orderId.toString(),
        amount,
        customerEmail: customer.email,
        customerPhone: customer.phone
      });

      const { paymentSessionId } = paymentResponse.data;

      if (paymentSessionId) {
        // Use paymentSessionId to initiate payment with Cashfree
        let checkoutOptions = {
          paymentSessionId: paymentSessionId,
          returnUrl: `http://localhost:3000/payment-success`
        };

        cashfree.checkout(checkoutOptions).then(async function (result) {
          if (result.error) {
            console.error('Payment error:', result.error.message);
            alert(`Payment failed: ${result.error.message}`);
          } else if (result.redirect) {
            console.log('Redirection');
          } else {
            console.log('Payment Successful: ', result);
            alert('Payment Successful');
          }
            // Always call payment-success API here
            await axios.post(`${API_BASE_URL}/payment-success`, {
              orderId: orderId.toString(),
              amount,
              customerEmail: customer.email
            });
          
        }).catch(error => {
          console.error('Cashfree checkout error:', error);
          alert('Payment failed. Please try again.');
        });
      } else {
        alert('Payment initiation failed. Please try again.');
      }

    } catch (error) {
      alert(`Order creation failed: ${error.message}`);
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
