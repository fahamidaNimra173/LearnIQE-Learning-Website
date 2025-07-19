

import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import React from 'react';
import AxiosSecure from '../../Axios/AxiosSecure';


const CourseDetails = () => {
  const { id } = useParams();
  const axiosSecure = AxiosSecure();

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      return res.data;
    }
  });

  if (isLoading) return <div className="text-center py-10 font-bold">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load course details</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="bg-purple-100 shadow-md rounded-lg overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">{course.title}</h2>
          <p className="text-md text-gray-800 mb-2">
            <strong>Instructor:</strong> {course.name} ({course.email})
          </p>
          <p className="text-md text-gray-800 mb-2">
            <strong>Category:</strong> {course.category}
          </p>
          <p className="text-md text-gray-800 mb-2">
            <strong>Price:</strong> ৳{course.price}
          </p>
          <p className="text-md text-gray-800 mb-2">
            <strong>Total Enrolled:</strong> {course.totalEnroll || 0}
          </p>
          <p className="text-md text-gray-800 mb-4">
            <strong>Description:</strong> {course.description}
          </p>
          <button className="btn btn-primary w-full">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
