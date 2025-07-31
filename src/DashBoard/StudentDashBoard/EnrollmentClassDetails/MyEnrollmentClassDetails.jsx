import React, { useContext, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import '../../../App.css';

import AxiosSecure from '../../../Axios/AxiosSecure';
import { AuthContext } from '../../../Context/AuthContext';
import { FaRegClock, FaBookOpen, FaTasks, FaCheck } from 'react-icons/fa';

const MyEnrollmentClassDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();

  const queryClient = useQueryClient();

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

  // Fetch the list of assignment IDs that the user has submitted
  const { data: submittedAssignments = [], isLoading: submittedLoading } = useQuery({
    queryKey: ['submittedAssignments', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/submission?email=${user.email}`);
      // Map to assignment IDs for quick lookup
      return res.data.map(sub => sub.assignmentId);
    }
  });

  if (courseLoading || assignmentsLoading || submittedLoading) {
    return (
      <div className='mt-40'>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
          <div class="wheel"></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke"></div>
        </div>
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
                  {assignments.map((assignment, index) => (
                    <AssignmentRow
                      key={assignment._id}
                      index={index}
                      assignment={assignment}
                      course={course}
                      user={user}
                      axiosSecure={axiosSecure}
                      isSubmitted={submittedAssignments.includes(assignment._id)}
                      queryClient={queryClient}
                    />
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

const AssignmentRow = ({ assignment, index, course, user, axiosSecure, isSubmitted, queryClient }) => {
  // Use state to manage submission status locally, initialized from isSubmitted prop
  const [submitted, setSubmitted] = useState(isSubmitted);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

 const onSubmit = async (data) => {
  setLoading(true);

  const submissionData = {
    submissionText: data.submissionText,
    assignmentId: assignment._id,
    assignmentTitle: assignment.title,
    assignmentDescription: assignment.description,
    courseId: course._id,
    courseTitle: course.title,
    courseImage: course.image,
    courseDescription: course.description,
    userEmail: user.email,
    userName: user.displayName,
    userImage: user.photoURL,
    submittedAt: new Date().toISOString()
  };

  try {
    // Submit the assignment
    await axiosSecure.post('/submission', submissionData);

    // Only update assignment count if course._id is valid
    if (course?._id) {
      await axiosSecure.patch(`/cources/increment-submission/${course._id}`, { increment: 1 });
    }

    // Invalidate cached submission list
    await queryClient.invalidateQueries(['submittedAssignments', user.email]);

    setSubmitted(true);
    reset();
  } catch (error) {
    console.error('Submission failed:', error);
    alert('Submission failed. Please try again.');
  } finally {
    setLoading(false);
  }
};

console.log('this is course id',course._id)
  return (
    <tr className="hover:bg-purple-50 transition-all">
      <td className="px-6 py-4 text-purple-950 font-semibold">{index + 1}</td>
      <td className="px-6 py-4 font-medium text-purple-900">{assignment.title}</td>
      <td className="px-6 py-4 text-gray-700">{assignment.description}</td>
      <td className="px-6 py-4 text-yellow-600 font-semibold">
        <FaRegClock className="inline mr-1" /> {assignment.deadline}
      </td>
      <td className="px-6 py-4" colSpan={2}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {
            submitted ? <div><h1 className='text-center text-[18px] font-medium text-green-700'>You have submitted this Assignment</h1></div> : <textarea
              rows={3}
              placeholder="Type your answer..."
              className="w-full border text-black border-gray-300 rounded-lg p-2 focus:outline-purple-400 focus:ring-2 resize-none"
              {...register("submissionText", { required: "Submission is required." })}
              disabled={submitted}
            />
          }


          {errors.submissionText && (
            <p className="text-red-500 text-sm">{errors.submissionText.message}</p>
          )}

          <div className="flex justify-center">
            {submitted ? (
              <button
                type="button"
                disabled
                className="z-10 bg-green-600 border-none text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md cursor-not-allowed"
                title="Already submitted"
              >
                <FaCheck />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`relative border border-green-500 text-green-600 hover:bg-green-500 bg-transparent rounded-[5px] px-4 py-2 min-w-[100px] h-10 flex justify-center items-center overflow-hidden transition-colors duration-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading && (
                  <span className="w-8 h-8 border-3 border-green-500 border-t-transparent rounded-full animate-spin z-10"></span>
                )}
                {!loading && <span className="relative z-10 font-semibold">Submit</span>}
              </button>
            )}
          </div>
        </form>
      </td>
    </tr>
  );
};

export default MyEnrollmentClassDetails;
