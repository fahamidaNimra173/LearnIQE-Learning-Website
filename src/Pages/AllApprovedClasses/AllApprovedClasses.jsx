import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';


const AllApprovedClasses = () => {
  const axiosSecure = AxiosSecure();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/cources?status=approved');
      return res.data;
    }
  });

  if (isLoading) return <div className="text-center py-10 font-bold">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-30">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
        All Approved Classes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div
            key={cls._id}
            className="bg-purple-100 shadow-lg rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <img
              src={cls.image}
              alt={cls.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                {cls.title}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Instructor:</span> {cls.name}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Price:</span> ৳{cls.price}
              </p>
              <p className="text-sm text-gray-700 mb-1 flex-1">
                <span className="font-semibold">Description:</span>{' '}
                {cls.description?.slice(0, 80)}...
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Total Enrolled:</span> {cls.totalEnroll || 0}
              </p>
              <button className="btn btn-primary w-full mt-auto">Enroll</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApprovedClasses;
