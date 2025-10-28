import React, { useState, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';

// Import the new landing page
import LandingPage from './pages/LandingPage';

// Existing imports
import Login from './components/Login';
import DashboardOverview from './components/DashboardOverview';
import LiveTracking from './components/LiveTracking';
import DriverManagement from './components/DriverManagement';
import VehicleManagement from './components/VehicleManagement';
import Leaderboard from './components/Leaderboard';
import DocumentVault from './components/DocumentVault';
import Analytics from './components/Analytics';
import ExpenseTracker from './components/ExpenseTracker';
import CommunicationHub from './components/CommunicationHub';
import SettingsPanel from './components/SettingsPanel';
import QuickActions from './components/QuickActions';
import AIAssistant from './components/AIAssistant';
import ToastContainer from './components/Toast';
import DriverDashboard from './components/driver/DriverDashboard';

import {
  LayoutDashboard,
  Users,
  Car,
  MapPin,
  Trophy,
  FolderLock,
  BarChart3,
  Wallet,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  Menu,
  X,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react';

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl gradient-text">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Owner Dashboard Component (keep existing code)
function OwnerDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('dark');
  const [showAI, setShowAI] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [toasts, setToasts] = useState([]);
  const [notificationCount, setNotificationCount] = useState(7);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'drivers', label: 'Drivers', icon: Users },
    { id: 'vehicles', label: 'Vehicles', icon: Car },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'documents', label: 'Document Vault', icon: FolderLock },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'expenses', label: 'Expenses', icon: Wallet },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'tracking':
        return <LiveTracking />;
      case 'drivers':
        return <DriverManagement />;
      case 'vehicles':
        return <VehicleManagement />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'documents':
        return <DocumentVault />;
      case 'analytics':
        return <Analytics />;
      case 'expenses':
        return <ExpenseTracker />;
      case 'communication':
        return <CommunicationHub />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  const toggleTheme = () => {
    const themes = ['dark', 'light', 'glass'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-gray-900' : theme === 'glass' ? 'bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50' : ''}`}>
      {/* Top Navigation Bar */}
      <nav className="glass-card fixed top-0 left-0 right-0 z-50 mx-4 mt-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="glass-button p-2 lg:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="CabZone Logo" 
                className="h-10 w-auto filter brightness-0 invert drop-shadow-lg"
              />
              <div>
                <h1 className="text-xl font-bold gradient-text">CabZone</h1>
                <p className="text-xs text-emerald-400/70">Fleet Management</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search drivers, vehicles, documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input w-full pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="glass-button p-2 relative group"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Moon size={20} /> : theme === 'light' ? <Sun size={20} /> : <Sparkles size={20} />}
            </button>
            
            <button 
              onClick={() => {
                addToast(`You have ${notificationCount} new notifications`, 'info');
                setNotificationCount(0);
              }}
              className="glass-button p-2 relative"
              title="Notifications"
            >
              <Bell size={20} />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
                  {notificationCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => {
                setShowAI(!showAI);
                if (!showAI) addToast('AI Assistant activated', 'success');
              }}
              className="glass-button px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30"
            >
              <Sparkles size={20} />
              <span className="hidden sm:inline">AI Assistant</span>
            </button>

            <div className="relative">
              <div
                className="glass-card p-2 flex items-center gap-2 cursor-pointer hover:bg-white/5 transition-all border border-emerald-500/20"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                  {user?.name?.charAt(0) || 'O'}
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-semibold">{user?.name || 'Owner'}</p>
                  <p className="text-xs text-gray-400">Fleet Owner</p>
                </div>
                <div className="text-emerald-400">
                  <Settings size={16} />
                </div>
              </div>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 glass-card p-2 space-y-1 border border-emerald-500/30">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      addToast('Profile settings coming soon!', 'info');
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Settings size={16} />
                    Profile Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors flex items-center gap-2 font-semibold"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex pt-24 px-4 pb-4 gap-4">
        {/* Sidebar */}
        <aside className={`glass-card p-4 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden lg:w-20'} fixed lg:sticky top-24 h-[calc(100vh-7rem)] overflow-y-auto z-40`}>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                      : 'hover:bg-white/5 hover:border hover:border-emerald-500/20'
                  }`}
                >
                  <Icon size={20} />
                  <span className={`${sidebarOpen ? 'block' : 'hidden lg:hidden'} font-medium`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
            {/* Logout Button */}
            <div className="pt-4 mt-4 border-t border-emerald-500/20">
              <button
                onClick={handleLogout}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-red-500/20 hover:border hover:border-red-500/50 text-red-400 ${sidebarOpen ? 'justify-start' : 'justify-center'}`}
              >
                <LogOut size={20} />
                <span className={`${sidebarOpen ? 'block' : 'hidden lg:hidden'} font-medium`}>
                  Logout
                </span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0 lg:ml-0' : 'ml-0'}`}>
          <QuickActions addToast={addToast} />
          {renderContent()}
        </main>
      </div>

      {/* AI Assistant Panel */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

// Main App with NEW Routing Structure
function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Landing Page - NEW! */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Owner Dashboard */}
        <Route
          path="/owner/*"
          element={
            <ProtectedRoute allowedRoles={['owner']}>
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Driver Dashboard */}
        <Route
          path="/driver/*"
          element={
            <ProtectedRoute allowedRoles={['driver']}>
              <DriverDashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Unauthorized */}
        <Route
          path="/unauthorized"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="glass-card p-8 text-center">
                <h1 className="text-3xl font-bold text-red-400 mb-4">Access Denied</h1>
                <p className="text-gray-400">You don't have permission to access this page.</p>
              </div>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

// Wrap with AuthProvider
export default function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}