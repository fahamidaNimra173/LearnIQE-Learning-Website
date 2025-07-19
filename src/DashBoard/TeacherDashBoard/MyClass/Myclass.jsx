import React, { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { Link } from 'react-router';
import Swal from 'sweetalert2';

import { AuthContext } from '../../../Context/AuthContext';
import AxiosSecure from '../../../Axios/AxiosSecure';

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const useAxiosSecure=AxiosSecure()
  const queryClient = useQueryClient();

  // 1. Fetch classes by teacher email
  const { data: myClasses = [], isLoading } = useQuery({
    queryKey: ['myClasses', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await useAxiosSecure.get(`/cources?email=${user.email}`);
      return res.data;
    },
  });

  // 2. Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await useAxiosSecure.delete(`/cources/${id}`);
      return res.data;
    },
    onSuccess: (_, id) => {
      // i have used it to remove the deleted item . this will first matched the deleted item id with cource id that is getting from database and filter the cources and remove the deleted data
      queryClient.setQueryData(['myClasses', user.email], (old) =>
        old.filter((item) => item._id !== id)
      );
      Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
    },
  });

  // 3. Delete handler with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This class will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  
  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-purple-700">
        Loading your classes...
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {myClasses.map((cls) => (
        <div
          key={cls._id}
          className="bg-purple-200 rounded-2xl shadow-md p-4 space-y-3 hover:shadow-xl transition"
        >
          <img
            src={cls.image}
            alt={cls.title}
            className="h-40 w-full object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold text-purple-950">{cls.title}</h2>
          <p className='text-purple-950' ><span className="font-semibold  text-purple-950">Name:</span> {cls.name}</p>
          <p className='text-purple-950' ><span className="font-semibold  text-purple-950">Email:</span> {cls.email}</p>
          <p className='text-purple-950' ><span className="font-semibold  text-purple-950">Price:</span> ${cls.price}</p>
          <p className='text-purple-950' ><span className="font-semibold  text-purple-950">Description:</span> {cls.description}</p>
          <p className='text-purple-950' >
            <span className="font-semibold">Status:</span>{' '}
            <span
              className={`uppercase font-semibold ${
                cls.status === 'approved'
                  ? 'text-green-700'
                  : cls.status === 'rejected'
                  ? 'text-red-700'
                  : 'text-yellow-700'
              }`}
            >
              {cls.status}
            </span>
          </p>

          <div className="flex flex-wrap justify-between items-center gap-2 pt-3">
            {/* Update */}
            <Link to={`/dashboard/update-class/${cls._id}`}>
              <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">Update</button>
            </Link>

            {/* Delete */}
            <button
              onClick={() => handleDelete(cls._id)}
              className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
            >
              Delete
            </button>

            {/* See Details */}
            <Link to={`/dashboard/my-class/${cls._id}`}>
              <button
                disabled={cls.status !== 'approved'}
                className={`btn btn-sm ${
                  cls.status === 'approved'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
              >
                See Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
