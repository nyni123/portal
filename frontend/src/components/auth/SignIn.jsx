import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed

const SignIn = ({ switchForm, setIsLoggedIn, setIsModalOpen  }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // For handling errors
  const [success, setSuccess] = useState(null); // For handling success messages
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make the request to the backend API
      const response = await axios.post('http://18.224.5.169:5000/api/login', {
        email: formData.email,
        password: formData.password,
      });

      // Save the token to localStorage if needed
      localStorage.setItem('token', response.data.token);
      
      // Show success message and redirect to another page
      setSuccess('Sign In Successful!');
      setError(null);
      setIsLoggedIn(true);
      setIsModalOpen(false);

      // Redirect to a different page (e.g., dashboard)
      setTimeout(() => {
        navigate('/dashboard'); // Change '/dashboard' to your desired route
      }, 200);

    } catch (err) {
      // Handle error responses
      setError(err.response.data.msg || 'An error occurred');
      setSuccess(null);
    }finally {
      setLoading(false); // Stop loading
    }
  };

  const loaderStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    animation: 'spin 2s ease infinite',
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-500 text-center">{success}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
           Sign In
          </button>
        </form>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'5px' }}>
            <div style={loaderStyle}></div>
          </div>
        ) : (
          ''
        )}
        {/* Link to Sign Up */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={switchForm} className="text-blue-600 hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;