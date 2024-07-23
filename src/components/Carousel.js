import React, { useState, useEffect, useRef } from 'react';

import '../styles/Carousel.css';

const cards = [
    { title: 'Review 1', description: 'Description for review 1' },
    { title: 'Review 1', description: 'Description for review 2' },
    { title: 'Review 1', description: 'Description for review 3' },
    { title: 'Review 1', description: 'Description for review 4' },
    { title: 'Review 1', description: 'Description for review 5' },
    { title: 'Review 1', description: 'Description for review 6' },
  ];

const Card = ({ title, description }) => (
    <div className='card card-1'>
      <p className='card-title'>{title}</p>
      <p className='small-desc'>{description}</p>
    </div>
  ); 

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const nextCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setIsAnimating(false);
      }, 500); // This should match the transition duration
    }
  };

  const prevCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setIsAnimating(false);
      }, 500); // This should match the transition duration
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextCard, 3000); // Automatic scrolling interval
    return () => clearInterval(intervalRef.current);
  }, []);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 5; i++) {
      visibleCards.push(cards[(currentIndex + i) % cards.length]);
    }
    return visibleCards;
  };

  return (
    <div className="carousel-container">
      <button onClick={prevCard}>Previous</button>
      <div className="cards-wrapper">
        <div className={`cards-container ${isAnimating ? 'animating' : ''}`}>
          {getVisibleCards().map((card, index) => (
            <div key={index} className="card">
              <p className="card-title">{card.title}</p>
              <p className="small-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default Carousel;
