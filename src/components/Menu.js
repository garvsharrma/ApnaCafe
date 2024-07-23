// src/components/Menu.js

import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  // Example menu items (you can replace this with your actual menu data)
  const menuItems = [
    {
      id: 1,
      name: 'Coffee',
      description: 'Our special blend of coffee.',
      price: '$2.99'
    },
    {
      id: 2,
      name: 'Cake',
      description: 'Delicious homemade cake.',
      price: '$3.99'
    },
    {
      id: 3,
      name: 'Sandwich',
      description: 'Freshly made sandwiches.',
      price: '$5.99'
    },
    {
      id: 4,
      name: 'Salad',
      description: 'Healthy and tasty salads.',
      price: '$4.99'
    }
  ];

  return (
    <div className="menu">
      <div className="container">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
