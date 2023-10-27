import React, { useState } from 'react';
import './mail.css';

const Mail = () => {
  const [email, changeEmail] = useState('');
  const [error, setError] = useState('');

  const rudraksh = async () => {
    try {
      const response = await fetch('http://localhost:5000/rudraksh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        setError('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  return (
    <div>
      <h2 className="Main">Sign up For Daily Insider</h2>
      <div className="input-container">
        <input
          className="take"
          type="email"
          name="email"
          id="Email"
          required="required"
          placeholder="Email ID"
          value={email}
          onChange={(e) => {
            changeEmail(e.target.value);
            setError('');
          }}
        />
        <button className="Button" type="submit" onClick={rudraksh}>
          Subscribe
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Mail;
