import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const axiosSecure = AxiosSecure();
  const [searchEmail, setSearchEmail] = useState('');

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users', searchEmail],
    queryFn: async () => {
      const url = searchEmail ? `/users?email=${searchEmail}` : '/users';
      const res = await axiosSecure.get(url);
      return res.data;
    },
  });

  // ✅ Only added this function
  const handleMakeAdmin = async (user) => {
    const confirm = await Swal.fire({
      title: `Make ${user.name} an Admin?`,
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make admin!',
      cancelButtonText: 'Cancel',
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/users/admin/${user._id}`);
        if (res.data.modifiedCount > 0) {
          Swal.fire('Success', `${user.name} is now an Admin`, 'success');
          refetch();
        } else {
          Swal.fire('No Change', 'User role was not updated', 'info');
        }
      } catch (error) {
        Swal.fire('Error', 'Something went wrong while updating role', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-purple-700 w-16"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-4">
      <h1 className="text-3xl font-semibold my-6 text-center text-purple-950 dark:text-purple-100">
        User Management Overview &nbsp; <span className="text-base font-normal">({users.length} total)</span>
      </h1>


      {/* 🔍 Search input by email */}
      <div className="mb-4 flex justify-center">
        <input
          type="email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          placeholder="Search by Email"
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <button
          onClick={() => refetch()}
          className="btn btn-info"
        >
          Search
        </button>
      </div>

      <div className="overflow-auto rounded-lg shadow border">
        <table className="table bg-purple-200 text-purple-950 w-full min-w-[800px]">
          <thead className="bg-purple-200 text-purple-950 font-semibold">
            <tr className='border-b-1 border-b-black text-[20px]'>
              <th>#</th>
              <th>User Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-black hover:text-white border-b-1 border-b-black transition duration-200"
              >
                <td className='font-bold'>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-15 rounded-full">
                      <img src={user.photo} alt={user.name} />
                    </div>
                  </div>
                </td>
                <td className="font-bold text-[18px] hover:text-purple-100 text-purple-950">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === 'admin'}
                  >
                    {user.role === 'admin' ? 'Admin' : 'Make Admin'}
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

export default AllUsers;
