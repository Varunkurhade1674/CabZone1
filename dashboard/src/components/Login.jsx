import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { Car, Lock, User, AlertCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Demo credentials for testing
  const demoCredentials = {
    owner: { username: 'owner', password: 'owner123', role: 'owner', name: 'John Doe' },
    driver: { username: 'driver', password: 'driver123', role: 'driver', name: 'Rajesh Kumar' }
  };

  const handleSubmit = async (e) => {
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
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="glass-input w-full"
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
              className="glass-input w-full"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Demo Credentials:</p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span className="font-medium">Owner:</span>
              <span className="text-gray-400">owner / owner123</span>
            </div>
            {/* <div className="flex justify-between">
              <span className="font-medium">Driver:</span>
              <span className="text-gray-400">driver / driver123</span>
            </div> */}
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Secure login • Role-based access • Real-time sync
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
