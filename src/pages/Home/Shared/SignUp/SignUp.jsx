import React, { useState } from 'react';
import './SignUp.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    rawDetails: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement your user registration logic, like sending the form data to the server for user creation.
    // For this example, we'll just log the form data to the console.
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rawDetails">Details:</label>
            <textarea
              id="rawDetails"
              name="rawDetails"
              value={formData.rawDetails}
              onChange={handleChange}
            />
          </div>
          <button className='btn btn-outline btn-info' type="submit">Sign Up</button>
        </form>
        <p>Already have an have an account? <Link className='underline underline-offset-8' to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
