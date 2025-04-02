import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
import { API_BASE_URL } from '../config/api';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  // Fetch cart data when component mounts
  useEffect(() => {
    fetch(`${API_BASE_URL}/cart`)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch cart: ${response.status}`);
        return response.json();
      })
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, [API_BASE_URL]);

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCart(data); // Update cart state with the remaining items
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  // Handle checkout navigation
  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <>
      <div className='up'></div>
      <div className="cart-page">
        <div className='cart-content'>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map(({ item, quantity }) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>Quantity: {quantity}</p>
                  <p>Total: ₹{(item.price * quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <button className="button" onClick={handleCheckout}>
                Checkout
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
