import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PaymentSuccess.css';
import success from '../images/green-tick.png';

const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('order_id');

  return (
      <><div className='up'></div>
      <div className="payment-success">
        <div className='success-content'>
        <img src={success} alt="success" className="success" />
      <h2>Payment Successful!</h2>
      <p>Thank you for your order :)</p>
      <p> Your order will be delivered at your site <strong>soon</strong>.</p>
      <p>You will receive a <strong>confirmation mail</strong> shortly.</p>
      </div>
    </div></>
  );
};

export default PaymentSuccess;