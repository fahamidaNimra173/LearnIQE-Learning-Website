import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import '../../../App.css';

import AxiosSecure from '../../../Axios/AxiosSecure';
import { AuthContext } from '../../../Context/AuthContext';
import { FaRegClock, FaBookOpen, FaCheckCircle, FaTasks, FaCheck } from 'react-icons/fa';

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
          <p className="text-gray-700 text-lg">
            Welcome to your enrolled course! Complete the assignments below before the deadline.
          </p>
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
                  {assignments.map((assignment, index) => {
                    return <AssignmentRow key={assignment._id} index={index} assignment={assignment} />;
                  })}
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

const AssignmentRow = ({ assignment, index }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
    }, 2000);
  };

  return (
    <tr className="hover:bg-purple-50 transition-all">
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
        <button
          onClick={handleSubmit}
          disabled={status !== 'idle'}
          className={`relative ${status === 'idle' ? 'border border-green-500' : 'border-transparent'
            }  text-green-600 bg-transparent rounded-full px-4 py-2 min-w-[100px] h-10 flex justify-center items-center overflow-hidden transition-colors duration-300 hover:bg-green-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed`}

        >
          {/* Background hover effect */}
          <span className="absolute left-0 top-0 h-full w-full bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-20 z-0"></span>

          {/* Spinner */}
          {status === 'loading' && (
            <span className="w-8 h-8 border-3 border-green-500 border-t-transparent rounded-full animate-spin z-10"></span>
          )}

          {/* Success icon */}
          {status === 'done' && (
            <span className="z-10 bg-green-600 border-none text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
              <FaCheck />
            </span>
          )}

          {/* Submit text (only when idle) */}
          {status === 'idle' && <span className="relative z-10 font-semibold">Submit</span>}
        </button>
      </td>
    </tr>
  );
};

export default MyEnrollmentClassDetails;
