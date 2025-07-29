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
      const res = await AxiosSecure().get(`/users?email=${user.email}`);
      return res.data;
    },
  });

  if (loading || !user?.email || isLoading) {
    return <Loader1 />;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-white/30">
      <div className="flex items-center gap-5">
        <img
          src={dbUser?.photo || "https://i.ibb.co/sF4L5rN/user-default.png"}
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-[#FFCFEF] object-cover"
        />
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0A5EB0]">{dbUser?.name}</h2>
          <p className="text-sm text-gray-700">{user?.email}</p>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[#FFCFEF] text-black rounded-full">
            {dbUser?.role || 'Student'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
