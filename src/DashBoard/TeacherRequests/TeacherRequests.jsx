import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';
import Swal from 'sweetalert2';

const TeacherRequest = () => {
  const axiosSecure = AxiosSecure()
  const queryClient = useQueryClient();

 
  const { data: requests = [], isLoading } = useQuery({
    queryKey: ['teacher-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/teacher-request');
      return res.data;
    }
  });

  // Mutation for approving teacher
  const approveMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/teacher-request/approve/${id}`);
    },
    onSuccess: () => {
      Swal.fire('Approved!', 'Teacher has been approved.', 'success');
      queryClient.invalidateQueries(['teacher-requests']);
    }
  });

  // Mutation for rejecting teacher
  const rejectMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/teacher-request/reject/${id}`);
    },
    onSuccess: () => {
      Swal.fire('Rejected', 'Teacher request has been rejected.', 'info');
      queryClient.invalidateQueries(['teacher-requests']);
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-purple-700 w-16"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-4">
      <h1 className="text-3xl font-bold my-6 text-center text-purple-800 dark:text-purple-200">
        Teacher Requests ({requests.length})
      </h1>

      <div className="overflow-auto rounded-lg shadow border">
        <table className="table bg-purple-200 text-purple-950 w-full min-w-[800px]">
          <thead className="bg-purple-200   text-purple-950 font-semibold">
            <tr className='border-b-1 border-b-black'>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Experience</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr
                key={req._id}
                className="hover:bg-black border-b-1 border-b-black hover:text-purple-100 transition duration-200"
              >
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={req.photoURL} alt={req.name} />
                    </div>
                  </div>
                </td>
                <td className="font-medium">{req.name}</td>
                <td>{req.experience}</td>
                <td>{req.title}</td>
                <td>{req.category}</td>
                <td>
                  <span className={`badge ${
                    req.status === 'accepted'
                      ? 'badge-success'
                      : req.status === 'rejected'
                      ? 'badge-error'
                      : 'badge-warning'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => approveMutation.mutate(req._id)}
                    className="btn btn-sm btn-success text-white"
                    disabled={req.status === 'rejected' || req.status === 'accepted'}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectMutation.mutate(req._id)}
                    className="btn btn-sm btn-error text-white"
                    disabled={req.status === 'rejected'}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherRequest;
