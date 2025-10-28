import React, { useState } from 'react';
import { User, Phone, Mail, CreditCard, Car, Calendar } from 'lucide-react';

const AddDriverForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    licenseNo: '',
    vehicle: '',
    joinDate: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <User size={16} className="inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter driver name"
            className="glass-input w-full"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Phone size={16} className="inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="glass-input w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Mail size={16} className="inline mr-2" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="driver@example.com"
            className="glass-input w-full"
          />
        </div>

        {/* License Number */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <CreditCard size={16} className="inline mr-2" />
            License Number *
          </label>
          <input
            type="text"
            name="licenseNo"
            value={formData.licenseNo}
            onChange={handleChange}
            required
            placeholder="DL-0120210012345"
            className="glass-input w-full"
          />
        </div>

        {/* Vehicle */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Car size={16} className="inline mr-2" />
            Assigned Vehicle
          </label>
          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="glass-input w-full"
          >
            <option value="">Select Vehicle</option>
            <option value="MH-01-AB-1234">MH-01-AB-1234</option>
            <option value="MH-02-CD-5678">MH-02-CD-5678</option>
            <option value="MH-03-EF-9012">MH-03-EF-9012</option>
            <option value="MH-04-GH-3456">MH-04-GH-3456</option>
            <option value="MH-05-IJ-7890">MH-05-IJ-7890</option>
          </select>
        </div>

        {/* Join Date */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Join Date *
          </label>
          <input
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
            required
            className="glass-input w-full"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          placeholder="Enter full address"
          className="glass-input w-full resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="btn-primary flex-1"
        >
          Add Driver
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="btn-secondary flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddDriverForm;
