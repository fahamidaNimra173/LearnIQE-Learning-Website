import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';

// import { FaUserShield } from 'react-icons/fa';
// import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const axiosSecure = AxiosSecure()

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });

    // const handleMakeAdmin = async (user) => {
    //   const res = await axiosSecure.patch(`/users/admin/${user._id}`);
    //   if (res.data.modifiedCount > 0) {
    //     toast.success(`${user.name} is now an Admin`);
    //     refetch();
    //   }
    // };



    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner text-purple-700 w-16"></span>
            </div>
        );
    }
    return (
      <div className="overflow-x-auto px-4">
      <h1 className="text-3xl font-bold my-6 text-center text-purple-950 dark:text-purple-100">
        All Users ({users.length})
      </h1>

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
                    disabled={user.role === 'admin'}
                  >
                    {/* {user.role === 'admin' ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <FaUserShield /> Admin
                      </span>
                    ) : ( */}
                      Make Admin
                    {/* )} */}
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
