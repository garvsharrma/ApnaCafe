import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import cartIcon from '../images/icon-cart.png';
import '../styles/Order.css';

const Order = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Use the environment variable for API base URL
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api'; // Fallback to localhost for development

  // Fetch items when component mounts
  useEffect(() => {
    fetch(`${API_BASE_URL}/items`)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch items: ${response.status}`);
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, [API_BASE_URL]);

  // Add item to cart
  const addToCart = async (itemId, quantity) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId, quantity }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCart(data); // Update cart state with response
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Optionally: Show user feedback for the error
    }
  };

  // Scroll to the order form
  const scrollToForm = () => {
    document.getElementById('order-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="order-page">
      <section className="section-1">
        <div className="section-1-content">
          <h1>Welcome to Apna Cafe</h1>
          <p>Enjoy our delicious meals from the comfort of your home</p>
          {/* Use navigate for SPA routing instead of href */}
          <img
            src={cartIcon}
            alt="Cart"
            className="cart-icon"
            onClick={() => navigate('/cart')}
            style={{ cursor: 'pointer' }}
          />
          <div className="scroll-button" onClick={scrollToForm}>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="order-content" className="section-next">
        <h2>Order Online</h2>
        <div className="items-grid">
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.imageUrl} alt={item.name} className="item-image" />
                <h3>{item.name}</h3>
                <p>₹{item.price.toFixed(2)}</p>
                <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No items available at the moment</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Order;
