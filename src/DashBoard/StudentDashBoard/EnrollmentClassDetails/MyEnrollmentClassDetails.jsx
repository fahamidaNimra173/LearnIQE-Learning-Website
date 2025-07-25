import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import AxiosSecure from '../../../Axios/AxiosSecure';
import { AuthContext } from '../../../Context/AuthContext';
import { FaRegClock, FaBookOpen, FaCheckCircle, FaTasks } from 'react-icons/fa';

const MyEnrollmentClassDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();

  const { data: course, isLoading: courseLoading, error: courseError } = useQuery({
    queryKey: ['courseDetails', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      return res.data;
    }
  });

  const { data: assignments = [], isLoading: assignmentsLoading, error: assignmentsError } = useQuery({
    queryKey: ['assignments', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/assignment/${id}`);
      return res.data;
    }
  });

  if (courseLoading || assignmentsLoading) {
    return (
      <div className="text-center mt-10 text-xl font-semibold flex justify-center items-center gap-2">
        <FaRegClock className="animate-spin text-purple-600" />
        Loading course and assignments...
      </div>
    );
  }

  if (courseError || assignmentsError) {
    return (
      <div className="text-red-600 text-center mt-10 text-lg font-medium flex items-center justify-center gap-2">
        <FaTasks /> Oops! Something went wrong while fetching data.
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center border border-purple-300">
          <h1 className="text-3xl font-extrabold text-purple-900 mb-3 flex justify-center items-center gap-2">
            <FaBookOpen className="text-purple-800" /> {course.title}
          </h1>
          <p className="text-gray-700 text-lg">Welcome to your enrolled course! Complete the assignments below before the deadline.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4 border-b-2 pb-2 border-purple-300 flex items-center gap-2">
            <FaTasks /> Assignment List
          </h2>

          {assignments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse shadow-md rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-purple-200 text-purple-950 text-left">
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Deadline</th>
                    <th className="px-6 py-4">Your Submission</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {assignments.map((assignment, index) => (
                    <tr key={assignment._id} className="hover:bg-purple-50 transition-all">
                      <td className="px-6 py-4 text-purple-950 font-semibold">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-purple-900">{assignment.title}</td>
                      <td className="px-6 py-4 text-gray-700">{assignment.description}</td>
                      <td className="px-6 py-4 text-yellow-600 font-semibold">
                        <FaRegClock className="inline mr-1" /> {assignment.deadline}
                      </td>
                      <td className="px-6 py-4">
                        <textarea
                          rows={3}
                          placeholder="Type your answer..."
                          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-purple-400 focus:ring-2 resize-none"
                        ></textarea>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center gap-2">
                          <FaCheckCircle /> Submit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-lg italic flex items-center gap-2">
              <FaTasks /> No assignments found for this course.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEnrollmentClassDetails;
