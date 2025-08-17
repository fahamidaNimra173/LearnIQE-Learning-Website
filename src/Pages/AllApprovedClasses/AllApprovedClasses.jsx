import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';
import { useNavigate } from 'react-router-dom';
import Loader1 from '../../Shared/Loaders/Loader1';

const AllApprovedClasses = () => {
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();
  const [priceDesc, setPriceDesc] = useState(false); // toggle for price descending
  const [category, setCategory] = useState(''); // selected category

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/cources?status=approved');
      return res.data;
    }
  });

  if (isLoading) return (
    <div className="text-center py-10 font-bold">
      <Loader1 />
    </div>
  );

  // Get unique categories from classes
  const categories = [...new Set(classes.map(cls => cls.category))];

  // Apply category filter
  let filteredClasses = category
    ? classes.filter(cls => cls.category === category)
    : classes;

  // Apply price descending sort
  if (priceDesc) {
    filteredClasses = [...filteredClasses].sort((a, b) => b.price - a.price);
  }

  const handleEnrollment = (id) => {
    console.log('this button is clicked for this:', id);
    navigate(`/classdetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-30">
      <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-[#51a3f5] mb-8">
        All Approved Classes
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        {/* Price descending toggle */}
        <button
          onClick={() => setPriceDesc(!priceDesc)}
          className="btn bg-[#FFCFEF] dark:bg-[#51a3f5] text-purple-800 dark:text-white font-semibold"
        >
          {priceDesc ? 'Price: High → Low' : 'Sort by Price'}
        </button>

        {/* Category select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <div
            key={cls._id}
            className="bg-[#EBFFD8] dark:bg-[#2a4114] shadow-lg rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <img
              src={cls.image}
              alt={cls.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-[#0A5EB0] dark:text-white mb-2">
                {cls.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-white mb-1">
                <span className="font-semibold">Instructor:</span> {cls.name}
              </p>
              <p className="text-sm text-gray-700 dark:text-white mb-1">
                <span className="font-semibold">Price:</span> ৳{cls.price}
              </p>
              <p className="text-sm text-gray-700 dark:text-white mb-1 flex-1">
                <span className="font-semibold">Description:</span> {cls.description?.slice(0, 80)}...
              </p>
              <p className="text-sm text-gray-700 dark:text-white mb-3">
                <span className="font-semibold">Total Enrolled:</span> {cls.totalEnroll || 0}
              </p>
              <button
                onClick={() => handleEnrollment(cls._id)}
                className="btn bg-[#FFCFEF] dark:bg-[#51a3f5] text-[#0A5EB0] font-bold w-full mt-auto"
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApprovedClasses;
