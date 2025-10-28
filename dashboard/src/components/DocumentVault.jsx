import React, { useState } from 'react';
import { Search, Filter, Upload, Download, Eye, FileText, Calendar, User, Car, Shield, FileImage, FileClock, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const DocumentVault = ({ addToast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterExpiry, setFilterExpiry] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  const handleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
    if (addToast) addToast('Advanced filters toggled', 'info');
  };

  const documents = [
    {
      id: 1,
      name: 'Driver License - Rajesh Kumar',
      type: 'Driver',
      category: 'License',
      owner: 'Rajesh Kumar',
      vehicle: 'MH-01-AB-1234',
      uploadDate: '2024-01-15',
      expiryDate: '2026-01-15',
      status: 'Valid',
      size: '2.4 MB',
      verified: true,
      thumbnail: 'https://via.placeholder.com/100x70/10b981/FFFFFF?text=License'
    },
    {
      id: 2,
      name: 'Vehicle RC - MH-01-AB-1234',
      type: 'Vehicle',
      category: 'RC',
      owner: 'Rajesh Kumar',
      vehicle: 'MH-01-AB-1234',
      uploadDate: '2023-12-20',
      expiryDate: '2025-12-20',
      status: 'Valid',
      size: '1.8 MB',
      verified: true,
      thumbnail: 'https://via.placeholder.com/100x70/6366f1/FFFFFF?text=RC'
    },
    {
      id: 3,
      name: 'Insurance - MH-02-CD-5678',
      type: 'Vehicle',
      category: 'Insurance',
      owner: 'Amit Sharma',
      vehicle: 'MH-02-CD-5678',
      uploadDate: '2024-02-01',
      expiryDate: '2024-06-10',
      status: 'Expiring Soon',
      size: '3.1 MB',
      verified: true,
      thumbnail: 'https://via.placeholder.com/100x70/f59e0b/FFFFFF?text=Insurance'
    },
    {
      id: 4,
      name: 'Fitness Certificate - MH-03-EF-9012',
      type: 'Vehicle',
      category: 'Fitness',
      owner: 'Suresh Patil',
      vehicle: 'MH-03-EF-9012',
      uploadDate: '2023-11-10',
      expiryDate: '2024-04-25',
      status: 'Expiring Soon',
      size: '2.2 MB',
      verified: true
    },
    {
      id: 5,
      name: 'Driver License - Vijay Singh',
      type: 'Driver',
      category: 'License',
      owner: 'Vijay Singh',
      vehicle: 'MH-04-GH-3456',
      uploadDate: '2023-05-08',
      expiryDate: '2024-03-15',
      status: 'Expired',
      size: '2.6 MB',
      verified: false
    },
    {
      id: 6,
      name: 'PAN Card - Prakash Desai',
      type: 'Driver',
      category: 'Identity',
      owner: 'Prakash Desai',
      vehicle: 'MH-05-IJ-7890',
      uploadDate: '2024-02-14',
      expiryDate: 'N/A',
      status: 'Valid',
      size: '1.5 MB',
      verified: true
    },
    {
      id: 7,
      name: 'Pollution Certificate - MH-01-AB-1234',
      type: 'Vehicle',
      category: 'Pollution',
      owner: 'Rajesh Kumar',
      vehicle: 'MH-01-AB-1234',
      uploadDate: '2024-01-20',
      expiryDate: '2024-07-20',
      status: 'Valid',
      size: '1.2 MB',
      verified: true
    },
    {
      id: 8,
      name: 'Aadhar Card - Amit Sharma',
      type: 'Driver',
      category: 'Identity',
      owner: 'Amit Sharma',
      vehicle: 'MH-02-CD-5678',
      uploadDate: '2023-03-20',
      expiryDate: 'N/A',
      status: 'Valid',
      size: '1.9 MB',
      verified: true
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'valid':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'expiring soon':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'expired':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleUploadDocument = () => {
    if (addToast) addToast('Document upload feature coming soon!', 'info');
  };

  const handleBulkDownload = () => {
    if (addToast) addToast(`Bulk download started for ${filteredDocuments.length} documents`, 'success');
  };

  const handleViewDocument = (doc) => {
    if (addToast) addToast(`Previewing ${doc.name}`, 'info');
  };

  const handleDownloadDocument = (doc) => {
    if (addToast) addToast(`Downloading ${doc.name}`, 'success');
  };

  const handleDropZoneClick = () => {
    handleUploadDocument();
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'license':
        return <FileCheck size={24} className="text-green-400" />;
      case 'rc':
        return <FileText size={24} className="text-blue-400" />;
      case 'insurance':
        return <Shield size={24} className="text-purple-400" />;
      case 'fitness':
        return <FileCheck size={24} className="text-cyan-400" />;
      case 'pollution':
        return <FileClock size={24} className="text-orange-400" />;
      case 'identity':
        return <FileImage size={24} className="text-yellow-400" />;
      default:
        return <FileText size={24} className="text-gray-400" />;
    }
  };

  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
    if (addToast) addToast(`Selected document: ${doc.name}`, 'info');
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || doc.type.toLowerCase() === filterType;
    const matchesExpiry = filterExpiry === 'all' || doc.status.toLowerCase().includes(filterExpiry);
    return matchesSearch && matchesType && matchesExpiry;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Document Vault</h1>
            <p className="text-gray-400">Securely store and manage all your fleet documents</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search documents..."
                className="glass-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={handleAdvancedFilters}
              className="glass-button px-4 py-2 flex items-center gap-2"
            >
              <Filter size={18} />
              Filters
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              className="glass-button px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 flex items-center gap-2"
            >
              <Upload size={18} />
              Upload
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Document Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div 
          className="glass-card p-4 cursor-pointer hover:bg-white/5 transition-all"
          onClick={() => setFilterType('all')}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-blue-500/20">
              <FileText size={24} className="text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium">All Documents</h3>
              <p className="text-sm text-gray-400">12 documents</p>
            </div>
          </div>
        </div>
        
        <div 
          className="glass-card p-4 cursor-pointer hover:bg-white/5 transition-all"
          onClick={() => setFilterType('driver')}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-green-500/20">
              <User size={24} className="text-green-500" />
            </div>
            <div>
              <h3 className="font-medium">Driver Documents</h3>
              <p className="text-sm text-gray-400">5 documents</p>
            </div>
          </div>
        </div>
        
        <div 
          className="glass-card p-4 cursor-pointer hover:bg-white/5 transition-all"
          onClick={() => setFilterType('vehicle')}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-orange-500/20">
              <Car size={24} className="text-orange-500" />
            </div>
            <div>
              <h3 className="font-medium">Vehicle Documents</h3>
              <p className="text-sm text-gray-400">4 documents</p>
            </div>
          </div>
        </div>
        
        <div 
          className="glass-card p-4 cursor-pointer hover:bg-white/5 transition-all"
          onClick={() => setFilterType('insurance')}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-purple-500/20">
              <Shield size={24} className="text-purple-500" />
            </div>
            <div>
              <h3 className="font-medium">Insurance & Permits</h3>
              <p className="text-sm text-gray-400">3 documents</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Document Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="glass-card p-4 cursor-pointer hover:bg-white/5 transition-all"
            onClick={() => handleDocumentClick(doc)}
          >
            <div className="aspect-[3/4] mb-3 rounded-lg overflow-hidden bg-gray-800/50 flex items-center justify-center">
              {doc.type === 'Driver' && <User size={40} className="text-green-400" />}
              {doc.type === 'Vehicle' && <Car size={40} className="text-orange-400" />}
              {doc.type === 'Insurance' && <Shield size={40} className="text-purple-400" />}
              {!doc.type && <FileText size={40} className="text-blue-400" />}
            </div>
            <h3 className="font-medium text-white truncate">{doc.name}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-400">{doc.category}</span>
              <span className="text-xs text-gray-400">{doc.size}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                doc.status === 'Valid' ? 'bg-green-500/20 text-green-400' : 
                doc.status === 'Expiring Soon' ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-red-500/20 text-red-400'
              }`}>
                {doc.status}
              </span>
              <span className="text-xs text-gray-400">Exp: {doc.expiryDate?.split('-')[0] || '2024'}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input w-full pl-10"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="glass-input"
          >
            <option value="all">All Types</option>
            <option value="driver">Driver Documents</option>
            <option value="vehicle">Vehicle Documents</option>
          </select>
          <select
            value={filterExpiry}
            onChange={(e) => setFilterExpiry(e.target.value)}
            className="glass-input"
          >
            <option value="all">All Status</option>
            <option value="valid">Valid</option>
            <option value="expiring">Expiring Soon</option>
            <option value="expired">Expired</option>
          </select>
          <button
            onClick={handleAdvancedFilters}
            className="glass-button px-4 flex items-center gap-2 justify-center"
          >
            <Filter size={20} />
            Advanced Filters
          </button>
        </div>
      </motion.div>

      {/* Document Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="glass-card p-4">
          <p className="text-gray-400 text-sm mb-1">Total Documents</p>
          <p className="text-2xl font-bold">{filteredDocuments.length}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gray-400 text-sm mb-1">Valid</p>
          <p className="text-2xl font-bold text-green-400">
            {filteredDocuments.filter(d => d.status === 'Valid').length}
          </p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gray-400 text-sm mb-1">Expiring Soon</p>
          <p className="text-2xl font-bold text-orange-400">
            {filteredDocuments.filter(d => d.status === 'Expiring Soon').length}
          </p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gray-400 text-sm mb-1">Expired</p>
          <p className="text-2xl font-bold text-red-400">
            {filteredDocuments.filter(d => d.status === 'Expired').length}
          </p>
        </div>
      </motion.div>

      {/* Documents Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredDocuments.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="glass-card p-5 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  {getCategoryIcon(doc.category)}
                </div>
                <div>
                  <p className="text-xs text-gray-400">{doc.type}</p>
                  <p className="font-semibold text-sm">{doc.category}</p>
                </div>
              </div>
              <span className={`status-badge border text-xs ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
            </div>

            <h3 className="font-semibold mb-3 line-clamp-2">{doc.name}</h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <User size={14} className="text-gray-400" />
                <span className="text-gray-300">{doc.owner}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Car size={14} className="text-gray-400" />
                <span className="text-gray-300 font-mono">{doc.vehicle}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={14} className="text-gray-400" />
                <span className="text-gray-300">
                  {doc.expiryDate !== 'N/A' ? `Expires: ${doc.expiryDate}` : 'No Expiry'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-gray-400">{doc.size}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewDocument(doc)}
                  className="glass-button p-2 hover:bg-blue-500/20 transition-colors"
                  title="Preview"
                >
                  <Eye size={14} />
                </button>
                <button
                  onClick={() => handleDownloadDocument(doc)}
                  className="glass-button p-2 hover:bg-green-500/20 transition-colors"
                  title="Download"
                >
                  <Download size={14} />
                </button>
              </div>
            </div>

            {doc.verified && (
              <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
                <Shield size={12} />
                <span>AI Verified</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8"
      >
        <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-purple-500/50 transition-all cursor-pointer" onClick={handleDropZoneClick}>
          <Upload size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">Drop files here to upload</h3>
          <p className="text-gray-400 mb-4">or click to browse</p>
          <button className="glass-button px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
            Select Files
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Supported formats: PDF, JPG, PNG • Max size: 10MB • Auto-rename enabled
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentVault;
