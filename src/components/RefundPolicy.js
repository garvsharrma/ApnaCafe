// RefundPolicy.js
import React from 'react';
import '../styles/RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="policy-content">
      <h1>Refund and Cancellation Policy</h1>
      <p>
        At Apna Cafe, we strive to ensure that our customers are satisfied with their purchases. However, if you are not entirely satisfied with your purchase, we're here to help.
      </p>
      <h2>Refunds</h2>
      <p>
        If you are not satisfied with your order, you may request a refund within 24 hours of receiving your order.
      </p>
      <h2>Processing Refunds</h2>
      <p>
        Once we receive your refund request, we will thouroghly go through it and notify you that we have received your refund request. We will immediately notify you on the status of your refund after inspecting the request. If your refund is approved, we will initiate it to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
      </p>
      <h2>Cancellations</h2>
      <p>
        You can cancel your order within 30 minutes of placing it. After this period, we may have already started processing your order, and a cancellation may not be possible.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions, feel free to contact us at <a href = "https://wa.me/+917973588176.">https://wa.me/+917973588176.</a>
      </p>
    </div>
  );
};

export default RefundPolicy;
