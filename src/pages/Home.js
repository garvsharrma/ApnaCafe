import React from 'react';
import { Helmet } from 'react-helmet';
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
import locationIMG from '../images/location.jpg';
import smImage1 from '../images/sm-image1.jpg';
import smImage2 from '../images/sm-image2.jpg';
import smImage3 from '../images/sm-image3.jpg';
import smImage4 from '../images/sm-image4.jpg';
import smImage5 from '../images/sm-image5.jpg';
import smImage6 from '../images/sm-image6.jpg';
import smImage7 from '../images/sm-image7.jpg';
import smImage8 from '../images/sm-image8.jpg';
import smImage9 from '../images/sm-image9.jpg';
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
    <>
      <Helmet>
        <title>ApnaCafe - Home</title>
        <meta name="description" content="ApnaCafe offers a delightful fusion of local and foreign flavors. Visit us for brunch, coffee, and more!" />
      </Helmet>
      
      <div className="home__container">
        <div className="home__content">
          <h1>Welcome to Apna Cafe</h1>
          <p>Here, every cup tells a story.</p>
          <a href="/menu"><button className="button--elegant">View Menu</button></a>
        </div>
        <img src={logo} alt="Logo" className="home__bottom-center-image" loading="lazy" />
        <a href="https://wa.me/+917973588176">
          <img src={whatsappIcon} alt="Whatsapp" className="home__whatsapp-icon" loading="lazy" />
        </a>
      </div>

      <div className="home__section home__section--about">
        <img src={vLine} alt="vertical-line" className="home__vertical-line" loading="lazy" />
        <div className="home__section-content">
          <p>Since 2004</p>
          <p id="intro">
            Inspired by cafe culture prevalent all over, we are a cafe that prides ourselves on excellent coffee, fresh ingredients & heartfelt service!
          </p>
        </div>
        <img src={vLine} alt="vertical-line" className="home__vertical-line home__vertical-line--2" loading="lazy" />
        <img src={aboutUS} alt="About Us Section" className="home__about-img" loading="lazy" />
      </div>

      <div className="home__menu-section">
        <p>
          Welcome to Apna Cafe, an Indian-inspired haven cherished by our community. We take pride in offering a diverse menu that celebrates both traditional and contemporary flavors.
        </p>
        <a href="/menu">Menu</a>
        <img src={menuIMG} alt="Menu Section" className="home__menu-img" loading="lazy" />
      </div>

      <div className="home__what-we-sell">
        <div className="what-we-sell__heading">
          <span className="separator-holder separator-left"></span>
          What We Sell
          <span className="separator-holder separator-right"></span>
        </div>

        <div className="what-we-sell__items">
          <div className="what-we-sell__item">
            <img src={brunch} alt="Brunch" className="what-we-sell__item-img" loading="lazy" />
            <h3>Brunch</h3>
            <p>From a hearty eggs and toast, to our crowd's favourite: Pulled Pork Benedict.</p>
          </div>

          <div className="what-we-sell__item">
            <img src={AppsSalad} alt="Apps & Salads" className="what-we-sell__item-img" loading="lazy" />
            <h3>Apps & Salads</h3>
            <p>Stimulate your appetite with fresh greens, or crispy wings.</p>
          </div>

          <div className="what-we-sell__item">
            <img src={mains} alt="Mains" className="what-we-sell__item-img" loading="lazy" />
            <h3>Mains</h3>
            <p>We make our mains with the finest ingredients we can find to make meals as flavourful as possible.</p>
          </div>

          <div className="what-we-sell__item">
            <img src={kidsMeal} alt="Kids Meal" className="what-we-sell__item-img" loading="lazy" />
            <h3>Kids Meal</h3>
            <p>We have kid’s meals tailored for ages 12 and below. Brunch, lunch, and dinner.</p>
          </div>

          <div className="what-we-sell__item">
            <img src={sweets} alt="Sweets" className="what-we-sell__item-img" loading="lazy" />
            <h3>Sweets</h3>
            <p>Our bestselling waffles and molten lava cake are perfect for a tea break.</p>
          </div>

          <div className="what-we-sell__item">
            <img src={beverages} alt="Beverages" className="what-we-sell__item-img" loading="lazy" />
            <h3>Beverages</h3>
            <p>From coffee to craft beer, we have something for everyone.</p>
          </div>
        </div>
      </div>

      <div className="home__location">
        <img src={locationIMG} alt="Location" className="home__location-img" loading="lazy" />
        <div className="home__location-info">
          <h2>Address</h2>
          <h3>#303, Escort Vatika, Verka, Amritsar 143001</h3>
        </div>
        <div className="home__opening-hours">
          <h2>Opening Hours</h2>
          <h3>Monday - Friday: 10am - 9pm</h3>
          <h3>Saturday, Sunday & Public Holidays: 9am - 9pm</h3>
        </div>
      </div>

      <div className="home__social-media">
        <div className="social-media__heading">
          <span className="separator-holder separator-left"></span>
          Stay Connected
          <span className="separator-holder separator-right"></span>
          <p>#apnacafe</p>
        </div>

        <div className="social-media__grid">
          {[smImage1, smImage2, smImage3, smImage4, smImage5, smImage6, smImage7, smImage8, smImage9].map((img, index) => (
            <div key={index} className="social-media__grid-item">
              <img src={img} alt={`Social Media Image ${index + 1}`} className="social-media__img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="home__contact">
        <div className="contact__heading">
          <span className="separator-holder separator-left"></span>
          Contact Us
          <span className="separator-holder separator-right"></span>
        </div>

        <div className="contact__content">
          <h5>Looking for a space to organize your private event or party?</h5>
          <h5>Contact us and tell us your requirements.</h5>
          <a href="/contact"><button className="button--elegant">Contact Us</button></a>
        </div>

        <img src={contactIMG} alt="Contact" className="contact__side-image" loading="lazy" />
      </div>
    </>
  );
}

export default Home;
