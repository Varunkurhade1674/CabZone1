import React from 'react';
import { Car, Users, FileText, Upload, TrendingUp, AlertCircle, DollarSign, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardOverview = () => {
  const stats = [
    { 
      label: 'Total Cars', 
      value: '48', 
      change: '+12%', 
      icon: Car, 
      color: 'from-blue-500 to-cyan-500',
      trend: 'up'
    },
    { 
      label: 'Total Drivers', 
      value: '52', 
      change: '+8%', 
      icon: Users, 
      color: 'from-purple-500 to-pink-500',
      trend: 'up'
    },
    { 
      label: 'Pending Documents', 
      value: '7', 
      change: '-3', 
      icon: FileText, 
      color: 'from-orange-500 to-red-500',
      trend: 'down'
    },
    { 
      label: 'Recent Uploads', 
      value: '23', 
      change: '+15', 
      icon: Upload, 
      color: 'from-green-500 to-emerald-500',
      trend: 'up'
    },
  ];

  const earnings = [
    { period: 'Today', amount: '₹12,450', icon: Calendar, color: 'text-blue-400' },
    { period: 'This Month', amount: '₹3,45,890', icon: TrendingUp, color: 'text-purple-400' },
    { period: 'This Year', amount: '₹42,67,340', icon: DollarSign, color: 'text-green-400' },
  ];

  const notifications = [
    { 
      id: 1, 
      type: 'warning', 
      message: '3 driver licenses expiring in 7 days', 
      time: '2 hours ago',
      priority: 'high'
    },
    { 
      id: 2, 
      type: 'info', 
      message: 'Vehicle RC-2341 insurance expires next week', 
      time: '5 hours ago',
      priority: 'medium'
    },
    { 
      id: 3, 
      type: 'success', 
      message: '5 new documents uploaded and verified', 
      time: '1 day ago',
      priority: 'low'
    },
    { 
      id: 4, 
      type: 'warning', 
      message: 'Fitness certificate pending for 2 vehicles', 
      time: '1 day ago',
      priority: 'high'
    },
  ];

  const recentActivity = [
    { driver: 'Rajesh Kumar', action: 'License renewed', vehicle: 'MH-01-AB-1234', time: '10 mins ago' },
    { driver: 'Amit Sharma', action: 'Document uploaded', vehicle: 'MH-02-CD-5678', time: '1 hour ago' },
    { driver: 'Suresh Patil', action: 'Vehicle inspection', vehicle: 'MH-03-EF-9012', time: '3 hours ago' },
    { driver: 'Vijay Singh', action: 'Insurance updated', vehicle: 'MH-04-GH-3456', time: '5 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-orange-400'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center animate-float`}>
                  <Icon size={28} className="text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Earnings Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <h2 className="text-2xl font-bold mb-6 gradient-text">Earnings Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {earnings.map((earning, index) => {
            const Icon = earning.icon;
            return (
              <div key={earning.period} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={24} className={earning.color} />
                  <p className="text-gray-400">{earning.period}</p>
                </div>
                <h3 className="text-3xl font-bold">{earning.amount}</h3>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Notifications and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <AlertCircle className="text-orange-400" />
              Notifications
            </h2>
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
              {notifications.filter(n => n.priority === 'high').length} urgent
            </span>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-xl border transition-all hover:scale-102 cursor-pointer ${
                  notification.priority === 'high'
                    ? 'bg-red-500/10 border-red-500/30'
                    : notification.priority === 'medium'
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : 'bg-green-500/10 border-green-500/30'
                }`}
              >
                <p className="font-medium mb-1">{notification.message}</p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Users size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{activity.driver}</p>
                  <p className="text-sm text-gray-400">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.vehicle} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;
