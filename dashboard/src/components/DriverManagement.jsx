import React, { useState } from 'react';
import { Search, Filter, Upload, CheckCircle, XCircle, AlertTriangle, Mail, Eye, Edit, Trash2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DriverManagement = ({ addToast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  
  const handleShowDriverDetails = (driver) => {
    setSelectedDriver(driver);
    setShowDriverDetails(true);
  };

  const drivers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      vehicle: 'MH-01-AB-1234',
      licenseNo: 'DL-0120210012345',
      status: 'Active',
      verification: 'Verified',
      phone: '+91 98765 43210',
      joinDate: '2023-01-15',
      rating: 4.8,
      trips: 1250,
      licenseExpiry: '2026-03-15'
    },
    {
      id: 2,
      name: 'Amit Sharma',
      vehicle: 'MH-02-CD-5678',
      licenseNo: 'DL-0120210054321',
      status: 'Active',
      verification: 'Pending',
      phone: '+91 98765 43211',
      joinDate: '2023-03-20',
      rating: 4.6,
      trips: 980,
      licenseExpiry: '2025-12-20'
    },
    {
      id: 3,
      name: 'Suresh Patil',
      vehicle: 'MH-03-EF-9012',
      licenseNo: 'DL-0120210098765',
      status: 'Inactive',
      verification: 'Verified',
      phone: '+91 98765 43212',
      joinDate: '2023-02-10',
      rating: 4.2,
      trips: 750,
      licenseExpiry: '2025-11-10'
    }
  ];

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         driver.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    return matchesSearch && driver.status.toLowerCase() === filterStatus.toLowerCase();
  });

  const handleSendMessage = () => {
    if (messageContent.trim() === '') {
      addToast('Please enter a message', 'error');
      return;
    }
    
    addToast(`Message sent to ${selectedDriver.name}`, 'success');
    setMessageContent('');
    setShowMessageModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Driver Management</h1>
        <button className="btn-primary flex items-center gap-2">
          <Upload size={16} />
          Add New Driver
        </button>
      </div>
      
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or vehicle number..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <select
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Drivers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License No.</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDrivers.map(driver => (
              <tr key={driver.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      {driver.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                      <div className="text-sm text-gray-500">{driver.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.licenseNo}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    driver.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {driver.status}
                  </span>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                  {driver.verification === 'Verified' ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle size={16} className="mr-1" />
                      Verified
                    </span>
                  ) : driver.verification === 'Rejected' ? (
                    <span className="flex items-center text-red-600">
                      <XCircle size={16} className="mr-1" />
                      Rejected
                    </span>
                  ) : (
                    <span className="flex items-center text-yellow-600">
                      <AlertTriangle size={16} className="mr-1" />
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{driver.licenseExpiry}</span>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">{driver.rating}</span>
                    <Sparkles size={16} className="text-yellow-500" />
                    <span className="text-xs text-gray-500 ml-2">({driver.trips} trips)</span>
                  </div>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedDriver(driver);
                        setShowMessageModal(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Mail size={18} />
                    </button>
                    <button 
                      onClick={() => handleShowDriverDetails(driver)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye size={18} />
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-900">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Send Message to {selectedDriver.name}</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowMessageModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button 
                onClick={handleSendMessage}
                className="btn-primary"
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Driver Details Modal */}
      {showDriverDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
          >
            <h2 className="text-xl font-bold mb-6">Driver Details</h2>
            
            <div className="flex mb-6">
              <div className="w-1/3 pr-4">
                <div className="h-48 w-48 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
                  {selectedDriver.name.charAt(0)}
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="text-2xl font-bold mb-2">{selectedDriver.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedDriver.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Join Date</p>
                    <p className="font-medium">{selectedDriver.joinDate}</p>
                  </div>
                  {/* <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      selectedDriver.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedDriver.status}
                    </span>
                  </div> */}
                  <div>
                    <p className="text-sm text-gray-500">Verification</p>
                    {selectedDriver.verification === 'Verified' ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle size={16} className="mr-1" />
                        Verified
                      </span>
                    ) : selectedDriver.verification === 'Rejected' ? (
                      <span className="flex items-center text-red-600">
                        <XCircle size={16} className="mr-1" />
                        Rejected
                      </span>
                    ) : (
                      <span className="flex items-center text-yellow-600">
                        <AlertTriangle size={16} className="mr-1" />
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Vehicle Information</h4>
                <p><span className="text-gray-500">Vehicle Number:</span> {selectedDriver.vehicle}</p>
                <p><span className="text-gray-500">License Number:</span> {selectedDriver.licenseNo}</p>
              </div>
              {/* <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Performance</h4>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-medium mr-2">{selectedDriver.rating}</span>
                  <Sparkles size={16} className="text-yellow-500" />
                  <span className="text-sm text-gray-500 ml-2">Rating</span>
                </div>
                <p><span className="text-gray-500">Total Trips:</span> {selectedDriver.trips}</p>
              </div> */}
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedDriver(driver);
                  setShowDriverDetails(false);
                }}
                className="glass-button flex items-center gap-2"
              >
                <Edit size={16} />
                Edit Driver
              </button>
              <button
                onClick={() => setShowDriverDetails(false)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DriverManagement;
