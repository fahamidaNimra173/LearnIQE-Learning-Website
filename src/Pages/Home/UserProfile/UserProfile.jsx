import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthContext';
import AxiosSecure from '../../../Axios/AxiosSecure';
import Loader1 from '../../../Shared/Loaders/Loader1';

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);

  const {
    data: dbUser = {},
    isLoading,
  } = useQuery({
    enabled: !!user?.email && !loading,
    queryKey: ['dbUser', user?.email],
    queryFn: async () => {
      // faced error as i cant get the data of a single user from server, because AxiosSecure is a function so after it i need to use() but i didt use it so data were not loading
      const res = await AxiosSecure().get(`/users?email=${user.email}`);
      return res.data;
    },
  });

  if (loading || !user?.email || isLoading) {
    return <div><Loader1></Loader1></div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white mt-20 text-black p-6 shadow rounded-lg space-y-4">
      <div className="flex items-center gap-4">
        <img
          src={dbUser?.photo }
          alt="User"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-xl font-semibold">{dbUser?.name }</h2>
          <p className="text-gray-600">{user?.email}</p>
          <p className="badge badge-primary capitalize">
            {dbUser?.role }
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
