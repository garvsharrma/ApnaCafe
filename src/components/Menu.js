// src/components/Menu.js

import React from 'react';
import disposableCup from '../images/menu-disposable-cup.jpg';
import croissant from '../images/croissant.png';
import frenchToast from '../images/french-toast.png';
import pancakes from '../images/pancakes.png';
import turkishCofee from '../images/turkish-coffee.png';
import coffeeToGo from '../images/cofee-to-go.png';
import morningCoffee from '../images/morning-cofee.png';
import '../styles/Menu.css';


const Menu = () => {
  const scrollToFormm = () => {
    document.getElementById('menu-section-2').scrollIntoView({ behavior: 'smooth' })
  };
  
  return (
    <div className="menu">
      <div className="menu-container">
        <div className='menu-content'>
        <h1>What We Sell</h1>
        <h3>Every sip and bite is a crafted delight..</h3>
        </div>
        <div className="scroll-button" onClick={scrollToFormm}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
        <div id='menu-section-2' className='menu-section-2'>
          <h2>What happens here</h2>
          <h3>COFFEE BUILD YOUR BASE</h3>
          <img src={disposableCup} alt="cup" className="img-disposable-cup" />
          <img src={croissant} alt="cup" className="elements croissant" />
          <img src={frenchToast} alt="cup" className="elements toast" />
          <img src={pancakes} alt="cup" className="elements pancakes" />
          <img src={turkishCofee} alt="cup" className="elements turkish" />
          <img src={coffeeToGo} alt="cup" className="elements coffee2go" />
          <img src={morningCoffee} alt="cup" className="elements morning" />

          <div className='element-content croissant-content'>
            <h4>CROISSANT</h4>
            <p>Golden, flaky, and buttery layers that melt in your mouth—our croissants are a taste of Paris in every bite.</p>
          </div>

          <div className='element-content toast-content'>
            <h4>FRENCH-TOAST</h4>
            <p>Fluffy, and perfectly sweetened—our French Toast is a classic indulgence. A morning delight you won’t want to miss.</p>
          </div>

          <div className='element-content pancakes-content'>
            <h4>PANCAKES</h4>
            <p>Indulge in our fluffy pancakes, a perfect harmony, crafted to melt in your mouth with every bite.</p>
          </div>

          <div className='element-content turkish-content'>
            <h4>TURKISH-COFFEE</h4>
            <p>Experience the rich, bold essence of our Turkish Coffee—a timeless blend of tradition and flavor.</p>
          </div>

          <div className='element-content coffee2go-content'>
            <h4>COFFEE TO GO</h4>
            <p>Our expertly brewed coffees are made to fit your busy lifestyle. Grab a cup of excellence on the move!</p>
          </div>

          <div className='element-content morning-content'>
            <h4>MORNING COFFEE</h4>
            <p>Start your day with our Morning Coffee—expertly brewed to perfection and guaranteed to kickstart your morning.</p>
          </div>

        </div>

        <div className='menu-section-3'>
        <h3>EXPLORE OUR MENU</h3>
        
        {/* <div className='category-1'>Beverages</div> */}

        <div className='menu-left'>
        <h4>BEVERAGES</h4>
          <div className='menu-item menu-item1'>
            <h3>CAFFE LATTE</h3>
            <hr></hr>
            <p>Fresh brewed coffee and steamed milk</p>
            <h4>₹349</h4>
          </div>

          <div className='menu-item menu-item2'>
            <h3>CAFFE MOCHA</h3>
            <hr></hr>
            <p>Espresso With Milk, and Whipped Cream</p>
            <h4>₹389</h4>
          </div>

          <div className='menu-item menu-item3'>
            <h3>WHITE CHOCOLATE MOCHA</h3>
            <hr></hr>
            <p>Espresso, White Chocolate, Milk, Ice and Cream</p>
            <h4>₹389</h4>
          </div>

          <div className='menu-item menu-item4'>
            <h3>CAFFE AMERICANO</h3>
            <hr></hr>
            <p>Espresso Shots and Light Layer of Crema</p>
            <h4>₹399</h4>
          </div>

          <div className='menu-item menu-item5'>
            <h3>CAPPUCCINO</h3>
            <hr></hr>
            <p>Espresso, and Smoothed Layer of Foam</p>
            <h4>₹399</h4>
          </div>
        </div>

        <div className='menu-right'>
        <h4>BRUNCH</h4>
          <div className='menu-item menu-item1 right1'>
            <h3>AVACADO TOAST</h3>
            <hr></hr>
            <p>Sourdough Bread, Avocado, Feta Cheese</p>
            <h4>₹439</h4>
          </div>

          <div className='menu-item menu-item2 right2'>
            <h3>EGGS BENEDICT</h3>
            <hr></hr>
            <p>English Muffins, Poached Eggs, Hollandaise Sauce</p>
            <h4>₹449</h4>
          </div>

          <div className='menu-item menu-item3'>
            <h3>PANACKES & FRESH BERRIES</h3>
            <hr></hr>
            <p>Pancakes, Fresh Berries, Maple Syrup, Whipped Cream</p>
            <h4>₹479</h4>
          </div>

          <div className='menu-item menu-item4'>
            <h3>GREEK YOGURT</h3>
            <hr></hr>
            <p>Greek Yogurt, Granola, Honey, Fresh Fruits</p>
            <h4>₹499</h4>
          </div>

          <div className='menu-item menu-item5'>
            <h3>VEGETABLE FRITTATA</h3>
            <hr></hr>
            <p>Eggs, Mixed Vegetables, Cheese, Herbs</p>
            <h4>₹559</h4>
          </div>
        </div>

        <div className='menu-left-2'>
        <h4>MAINS</h4>
          <div className='menu-item menu-item1'>
            <h3>GRILLED CHICKEN</h3>
            <hr></hr>
            <p>Grilled Chicken, Lettuce, Avocado, Whole Wheat Bun</p>
            <h4>₹349</h4>
          </div>

          <div className='menu-item menu-item2'>
            <h3>BEEF BURGER</h3>
            <hr></hr>
            <p>Beef Patty, Cheddar Cheese, Brioche Bun</p>
            <h4>₹389</h4>
          </div>

          <div className='menu-item menu-item3'>
            <h3>PASTA PRIMAVERA</h3>
            <hr></hr>
            <p>Penne Pasta, Seasonal Vegetables, Parmesan Cheese</p>
            <h4>₹389</h4>
          </div>

          <div className='menu-item menu-item4'>
            <h3>QUICHE LORRAINE</h3>
            <hr></hr>
            <p>Flaky Pie Crust, Eggs, Cream, Bacon, Swiss Cheese</p>
            <h4>₹399</h4>
          </div>

          <div className='menu-item menu-item5'>
            <h3>MARGHERITA PIZZA</h3>
            <hr></hr>
            <p>Pizza Dough, Tomato Sauce, Fresh Mozzarella, Basil</p>
            <h4>₹399</h4>
          </div>
        </div>

        <div className='menu-right-2'>
        <h4>SWEETS</h4>
          <div className='menu-item menu-item1 right1'>
            <h3>CHOCOLATE LAVA CAKE</h3>
            <hr></hr>
            <p>Espresso, and Smoothed Layer of Foam</p>
            <h4>₹439</h4>
          </div>

          <div className='menu-item menu-item2 right2'>
            <h3>CLASSIC CHEESECAKE</h3>
            <hr></hr>
            <p>Chocolate Cake, Melting Chocolate Center</p>
            <h4>₹449</h4>
          </div>

          <div className='menu-item menu-item3'>
            <h3>TIRAMISU</h3>
            <hr></hr>
            <p>Espresso-Soaked Ladyfingers, Cheese, Cocoa Powder</p>
            <h4>₹479</h4>
          </div>

          <div className='menu-item menu-item4'>
            <h3>LEMON TART</h3>
            <hr></hr>
            <p>Lemon Curd, Buttery Tart Crust, Whipped Cream</p>
            <h4>₹499</h4>
          </div>

          <div className='menu-item menu-item5'>
            <h3>BROWNIE SUNDAE</h3>
            <hr></hr>
            <p>Fudgy Brownie, Vanilla Ice Cream, Hot Fudge</p>
            <h4>₹559</h4>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Menu;
