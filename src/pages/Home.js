import React from 'react';
import '../styles/Home.css'; 
import logo from '../images/bottom-cup-icon.png';
import vLine from '../images/vertical-line.png';
import whatsappIcon from '../images/icon-whatsapp.png';
import aboutUS from '../images/about-section.png';
import menuIMG from '../images/menu-section.png';
import brunch from '../images/brunch.jpg';
import AppsSalad from '../images/AppsSalad.jpg';
import mains from '../images/mains.jpg';
import kidsMeal from '../images/kidsMeal.jpg';
import sweets from '../images/sweets.jpg';
import beverages from '../images/beverages.jpg';
import location from '../images/location.jpg';
import smImage1 from '../images/sm-image1.jpg';
import smImage2 from '../images/sm-image2.jpg';
import smImage3 from '../images/sm-image3.jpg';
import smImage4 from '../images/sm-image4.jpg';
import smImage5 from '../images/sm-image5.jpg';
import smImage6 from '../images/sm-image6.jpg';
import smImage7 from '../images/sm-image7.jpg';
import smImage8 from '../images/sm-image8.jpg';
import smImage9 from '../images/sm-image9.jpg';
import Carousel from '../components/Carousel';
import starFilled from '../images/filled-star.png';
import starHalfFilled from '../images/star-half-empty.png';
import contactIMG from '../images/contact-side-img.jpg';


function Home() {

  const cards = [
    { title: 'Product 1', description: 'Description for Product 1' },
    { title: 'Product 2', description: 'Description for Product 2' },
    { title: 'Product 3', description: 'Description for Product 3' },
    { title: 'Product 4', description: 'Description for Product 4' },
    { title: 'Product 5', description: 'Description for Product 5' },
    { title: 'Product 6', description: 'Description for Product 6' },
  ];

  return (
    <><><div className="home-container">
      <div className="home-content">
        <h1>Welcome to Apna Cafe</h1>
        <p>Here, every cup tells a story.</p>
        <a href="/menu"><button class="boton-elegante">View Menu</button></a>
      </div>
      <img src={logo} alt="Logo" className="bottom-center-image" />
      <a href="https://wa.me/+917973588176"><img src={whatsappIcon} alt="Whatsapp" className="whatsapp-icon" /></a>
    </div>
      
      <div className="section-2">
        <img src={vLine} alt="vertical-line" className="vertical-line" />
        <div className="section-2-content">
          <p>Since 2004</p>
          <p id="intro">
            Inspired by cafe culture prevalent all over, we are a cafe that prides ourselves on excellent coffee, fresh ingredients & heartfelt service!</p>
      </div>

        <img src={vLine} alt="vertical-line" className="vertical-line-2 " />
      
      <div className="about-section"><p>Welcome to Apna Cafe, where we bring together the essence of great tasting coffee and delicious food. Founded by a group of passionate individuals, our mission is to offer a hearty brunch and a perfect cup of coffee to brighten your day.</p>
          <p>At Apna Cafe, we pride ourselves on using only the freshest ingredients and locally roasted coffee beans. Our menu is a delightful fusion of foreign and local flavors, carefully crafted to ensure an unforgettable culinary experience without compromising on taste and quality.</p>
          <a href="/about">About Us</a>
      </div>

      <div className="menu-section"><p>Welcome to Apna Cafe, an Indian-inspired haven cherished by our community. We take pride in offering a diverse menu that celebrates both traditional and contemporary flavors. Our unbeatable breakfast and brunch options are complemented by a delicious selection of mains, including aromatic curries, succulent kebabs, flavorful biryanis, and a variety of vegetarian delights—all at prices that everyone can enjoy.</p>
          <a href = "/menu">Menu</a>
        </div>
        <img src={aboutUS} alt="Food Item-1" className="aboutUS" />
        <img src={menuIMG} alt="Food Item-1" className="menuIMG" />
      </div></>

      <div className="section-2b"></div>
      
      <div className="WhatWeSell">

        <div className='wws-heading'>
          <span className='separator-holder separator-left'></span>
          What We Sell
          <span className='separator-holder separator-right'></span>
        </div>

        <div className='fItems'>

        <div className='fItem-1'><img src={brunch} alt="Food Item-1" className="fItem" />
        <h3>Brunch</h3>
        <p>From a hearty eggs and toast, to our crowd's favourite: Pulled Pork Benedict. We got you covered from sweets to savoury.</p>
        </div>

        <div className='fItem-2'><img src={AppsSalad} alt="Food Item-1" className="fItem" />
        <h3>Apps & Salads</h3>
        <p>Stimulate your appetite with our house made soups, fresh greens, or crispy wings. Better yet, try our best seller: Fried Cauliflower.</p></div>
        
        <div className='fItem-3'><img src={mains} alt="Food Item-1" className="fItem" />
        <h3>Mains</h3>
        <p>We make our mains with the finest ingredients we can find to make our meals as flavourful as possible.</p></div>
        
        <div className='fItem-4'><img src={kidsMeal} alt="Food Item-1" className="fItem" />
        <h3>Kids Meal</h3>
        <p>Dining with little one? We’ve got your back. We have kid’s meals tailored for 12 and below. Brunch, lunch, and dinner.</p></div>
        
        <div className='fItem-5'><img src={sweets} alt="Food Item-1" className="fItem" />
        <h3>Sweets</h3>
        <p>Sweet endings or for tea break? You decide. We pride ourselves with our bestselling waffles and molten lave cake.</p></div>
        
        <div className='fItem-6'><img src={beverages} alt="Food Item-1" className="fItem" />
        <h3>Beverages</h3>
        <p>Get your caffeine fix here. Not a coffee person? Fret not, we have tea, organic sparkling juice, wine, and craftbeer.</p></div>
      </div>
      </div>
      <div className='location'>
        <img src={location} alt="location" className="locationIMG" />
        <div className='blackBG'>
          <div className='location-content'>
            <h2>Address</h2>
            <h3>#303, Escort Vatika, Verka, Amritsar 143001</h3>
          </div>
          
          <div className='opening-hours'>
            <h2>Opening Hours</h2>
            <h3>Mondays - Friday: 10am - 9pm</h3><h3> Saturdays, Sundays & Public Holidays: 9am- 9pm</h3>
          </div>
        </div>
      </div>
      <div className='social-media'>

        <div className='sm-heading'>
            <span className='separator-holder separator-left'></span>
            Stay Connected
            <span className='separator-holder separator-right'></span>
            <p>#apnacafe</p>
        </div>

        <div class="grid-container">
          <div class="grid-item"><img src={smImage1} alt="1" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage2} alt="2" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage3} alt="3" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage4} alt="4" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage5} alt="5" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage6} alt="6" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage7} alt="7" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage8} alt="8" className='sm-image'/></div>
          <div class="grid-item"><img src={smImage9} alt="9" className='sm-image'/></div>
        </div>
      <img src={logo} alt="Logo" className="bottom-center-image" />
      </div>

      <div className='happy-clients'>

        <h2 className='hc-heading'>Our Happy Clients!!</h2>
        <h3 className='rating'>Good</h3>
        <div className='stars'>
      <img src={starFilled} alt="star-rating" className="star-rating" />
      <img src={starFilled} alt="star-rating" className="star-rating" />
      <img src={starFilled} alt="star-rating" className="star-rating" />
      <img src={starFilled} alt="star-rating" className="star-rating" />
      <img src={starHalfFilled} alt="star-rating" className="star-rating" />
        </div>
      <h3 className='review-text'>According to 1071 reviews</h3>

        <div className='cards'>

          <div className="App">
            <Carousel cards={cards} />
          </div>

        </div>
      </div>

      <div className='contact-us'>
        <div className='contact-content'>
        <h5 className='contact-conten'>Looking for a space to organize your private event or party?</h5>
        <h5 className='contact-conten'>You get into the right place!</h5>
        <h5 className='contact-conten'>Contact us and tell us your requirements.</h5>
        <a href = "/contact"><button class="boton-elegante">Contact Us</button></a>
      </div>
      <img src={contactIMG} alt="contact" className="contact-side-image" />
      </div>
      </>
  );
};

export default Home;
