import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  // const createOrder = async () => {
  //   const totalAmount = cart.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0);
  //   try {
  //     const response = await fetch('http://localhost:5000/api/create-order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ amount: totalAmount }),
  //     });
  //     const data = await response.json();
  //     setOrder(data);
  //     displayRazorpay(data);
  //   } catch (error) {
  //     console.error('Error creating order:', error);
  //   }
  // };

  // const displayRazorpay = (order) => {
  //   if (window.Razorpay) {
  //     const options = {
  //       key: 'your-key-id', // Replace with your Razorpay key ID
  //       amount: order.amount,
  //       currency: order.currency,
  //       name: 'Apna Cafe',
  //       description: 'Test Transaction',
  //       order_id: order.orderId,
  //       handler: (response) => {
  //         alert(`Payment successful: ${response.razorpay_payment_id}`);
  //         setCart([]);
  //         navigate('/');
  //       },
  //       prefill: {
  //         name: 'Customer Name',
  //         email: 'customer@example.com',
  //         contact: '9999999999',
  //       },
  //       notes: {
  //         address: 'Apna Cafe Corporate Office',
  //       },
  //       theme: {
  //         color: '#F37254',
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } else {
  //     console.error('Razorpay script not loaded');
  //   }
  // };

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleCheckout = () => {
    // Pass cart data to the checkout page
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="cart-page">
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
          <button className="checkout-button" onClick={handleCheckout}>Order Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
