import React, { useState } from 'react';
import AuthLogout from '../../components/layout/AuthLogout';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    console.log('Logging in with:', { email, password });

  };

  return (
    <AuthLogout>
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-center text-gray-500 mt-4">
            Don’t have an account? <Link to="/signUp" className="text-blue-600 hover:underline">SignUp</Link>
          </p>
        </form>
      </div>
    </AuthLogout>
  );
};

export default Login;
