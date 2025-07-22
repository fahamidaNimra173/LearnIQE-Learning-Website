import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import AxiosSecure from '../../../Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const MyEnrollmentClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate()

  const { data: enrollment = [], isLoading, error } = useQuery({
    queryKey: ['enrollments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollment?studentEmail=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleDetails=(id)=>{
    console.log(id)
     navigate(`/dashboard/myenroll-class/${id}`)

  }

  if (!user?.email) return <p>Loading user info...</p>;
  if (isLoading) return <p>Loading enrollments...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {enrollment.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-purple-300 hover:shadow-xl transition duration-300"
        >
          <img
            src={item.courseImg}
            alt={item.courseTitle}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-purple-800 mb-1">{item.courseTitle}</h2>
            <p className="text-sm text-gray-600 mb-3">Instructor: {item.instructorName}</p>
            <button
              onClick={() => handleDetails(item.courseId)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm">
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollmentClass;
