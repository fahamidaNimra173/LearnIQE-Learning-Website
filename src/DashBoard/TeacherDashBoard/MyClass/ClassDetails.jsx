import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AxiosSecure from '../../../Axios/AxiosSecure';
import { AuthContext } from '../../../Context/AuthContext';

const ClassDetails = () => {
  const { id } = useParams();
  const axiosSecure = AxiosSecure();
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      return res.data;
    },
    enabled: !!id
  });

  const createAssignment = useMutation({
    mutationFn: async (assignmentData) => {
      const res = await axiosSecure.post('/assignment', assignmentData);
      return res.data;
    },
    onSuccess: () => {
      updateAssignmentCount.mutate();
      Swal.fire({
        icon: 'success',
        title: 'Assignment Created Successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      setIsModalOpen(false);
      reset();
    }
  });

  const updateAssignmentCount = useMutation({
    mutationFn: async () => {
      const res = await axiosSecure.patch(`/cources/increment-assignment/${course._id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', id]);
    }
  });

  const onSubmit = (data) => {
    const assignment = {
      title: data.title,
      deadline: data.deadline,
      description: data.description,
      courseId: course._id,
      courseTitle: course.title,
      courseImage: course.image,
      instructorName: user.displayName,
      instructorEmail: user.email
    };
    createAssignment.mutate(assignment);
  };

  if (isLoading) return <div className="text-center text-purple-700 py-10">Loading course...</div>;
  if (error) return <div className="text-center text-red-600 py-10">Error loading course.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Course Info Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold text-purple-700 mb-2">{course.title}</h1>
        <p className="text-gray-600">Instructor: <span className="font-medium">{course.name}</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold text-gray-700">Enrolled</p>
            <p className="text-2xl text-purple-600 font-bold">{course.totalEnroll}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold text-gray-700">Assignments</p>
            <p className="text-2xl text-purple-600 font-bold">{course.totalAssignment || 0}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold text-gray-700">Submissions</p>
            <p className="text-2xl text-purple-600 font-bold">{course.totalSubmission || 0}</p>
          </div>
        </div>

        <button
          className="btn bg-purple-600 hover:bg-purple-700 text-white px-6 mt-6 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Create Assignment
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog id="create_modal" className="modal modal-open">
          <div className="modal-box max-w-lg bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Create New Assignment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register('title', { required: true })}
                placeholder="Assignment Title"
                className="input input-bordered w-full"
              />

              <input
                {...register('deadline', { required: true })}
                type="date"
                className="input input-bordered w-full"
              />

              <textarea
                {...register('description', { required: true })}
                placeholder="Assignment Description"
                className="textarea textarea-bordered w-full"
                rows={4}
              ></textarea>

              <div className="modal-action flex justify-end gap-3">
                <button type="submit" className="btn btn-success">Create</button>
                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ClassDetails;
