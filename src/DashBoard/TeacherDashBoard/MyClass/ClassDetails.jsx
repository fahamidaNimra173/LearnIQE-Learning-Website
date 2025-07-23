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

  // Fetch course details
  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      return res.data;
    },
    enabled: !!id
  });

  // React Hook Form setup
  const { register, handleSubmit, reset } = useForm();

  // Mutation to POST assignment
  const createAssignment = useMutation({
    mutationFn: async (assignmentData) => {
      const res = await axiosSecure.post('/assignment', assignmentData);
      return res.data;
    },
    onSuccess: () => {
      // Step 2: update totalAssignment
      updateAssignmentCount.mutate(); // increment
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

  // Mutation to PATCH totalAssignment +1
  const updateAssignmentCount = useMutation({
    mutationFn: async () => {
      const res = await axiosSecure.patch(`/cources/update-assignment/${course._id}`, {
        increment: 1,
      });
      return res.data;
    },
    onSuccess: () => {
      // Refresh course info
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="mb-1">Instructor: {course.name}</p>
      <p className="mb-1">Total Enrolled: {course.totalEnroll}</p>
      <p className="mb-1">Total Assignments: {course.totalAssignment||0}</p>

      <button
        className="btn btn-primary mt-4"
        onClick={() => setIsModalOpen(true)}
      >
        Create Assignment
      </button>

      {/* Modal */}
      {isModalOpen && (
        <dialog id="create_modal" className="modal modal-open">
          <div className="modal-box max-w-lg">
            <h3 className="font-bold text-lg text-purple-700 mb-4">Create Assignment</h3>

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
              ></textarea>

              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Create
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsModalOpen(false)}
                >
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
