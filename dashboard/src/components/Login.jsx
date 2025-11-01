import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { Car, Lock, User, AlertCircle, Mail, Phone, UserCircle, UserPlus, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  // Login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Signup state
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Demo credentials for testing
  const demoCredentials = {
    owner: { username: 'owner', password: 'owner123', role: 'owner', name: 'John Doe' },
    driver: { username: 'driver', password: 'driver123', role: 'driver', name: 'Rajesh Kumar' }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Check demo credentials
      if (username === demoCredentials.owner.username && password === demoCredentials.owner.password) {
        const userData = {
          id: '1',
          username: demoCredentials.owner.username,
          name: demoCredentials.owner.name,
          role: 'owner',
          fleet_id: 'fleet_001'
        };
        login(userData);
        navigate('/owner');
      } else if (username === demoCredentials.driver.username && password === demoCredentials.driver.password) {
        const userData = {
          id: '2',
          username: demoCredentials.driver.username,
          name: demoCredentials.driver.name,
          role: 'driver',
          fleet_id: 'fleet_001',
          driver_id: 'driver_456',
          vehicle: 'MH-01-AB-1234'
        };
        login(userData);
        navigate('/driver');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      const newUser = {
        id: Date.now().toString(),
        username: formData.username,
        email: formData.email,
        role: 'user',
        fleet_id: 'fleet_' + Math.floor(1000 + Math.random() * 9000)
      };

      // Auto-login after successful signup
      login(newUser);
      setLoading(false);
      
      // Redirect based on role
      navigate(`/${formData.role}`);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleForm = () => {
    setShowSignup(!showSignup);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* <a

      >
        <Home size={20} />
        <span className="hidden sm:inline">Back to Home</span>
      </a> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-64 h-40 flex items-center justify-center mx-auto mb-6"
          >
            <img 
              src="/images/Loginlogo.png" 
              alt="CabZone Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
          <h1 className="text-4xl font-bold gradient-text mb-2">CabZone</h1>
          <p className="text-gray-400">Digital Fleet Document Manager</p>
        </div>

        {/* Login Form */}
        {!showSignup ? (
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3 text-red-400"
              >
                <AlertCircle size={20} />
                <span>{error}</span>
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <User size={16} className="inline mr-2" />
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Lock size={16} className="inline mr-2" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg px-5 py-3 text-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="mt-6 text-center">
              <button 
                type="button"
                onClick={toggleForm}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                <UserPlus size={16} className="mr-2" />
                Create a new account
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Create Account</h2>
              <button 
                type="button"
                onClick={toggleForm}
                className="text-gray-400 hover:text-white"
                aria-label="Back to login"
              >
                <ArrowLeft size={20} />
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4 flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle size={16} />
                <span>{error}</span>
              </motion.div>
            )}


            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="johndoe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                  minLength="6"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                  minLength="6"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg px-5 py-3 text-center transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </div>

            <div className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={toggleForm}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign in
              </button>
            </div>
          </form>
        )}


        <p className="text-center text-gray-400 text-sm mt-6">
          Secure login • Role-based access • Real-time sync
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
