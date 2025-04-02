import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../images/icon-cart.png';
import '../styles/Order.css';
import { API_BASE_URL } from '../config/api';

const Order = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState([]); // New state to track added items
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/items`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

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
      setCart(data);

      // Update the addedItems state to reflect the newly added item
      setAddedItems(prevAddedItems => [...prevAddedItems, itemId]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const scrollToForm = () => {
    document.getElementById('order-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="order-page">
      <section className="section-1">
        <div className="section-1-content">
          <h1>Welcome to Apna Cafe</h1>
          <p>Enjoy our delicious meals from the comfort of your home</p>
          <a href="/cart"><img src={cartIcon} alt="Cart" className="cart-icon" /></a>
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
          {items.map(item => (
            <div key={item.id} className="item-card">
              <img src={item.imageUrl} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
              <p>₹{item.price.toFixed(2)}</p>
              <button 
                onClick={() => addToCart(item.id, 1)}
                disabled={addedItems.includes(item.id)}
              >
                {addedItems.includes(item.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Order;
