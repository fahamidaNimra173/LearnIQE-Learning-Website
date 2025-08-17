import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Context/AuthContext';
import AxiosSecure from '../../../../Axios/AxiosSecure';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import Loader1 from '../../../../Shared/Loaders/Loader1';

const MyClassesChart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();

  const { data: myClasses = [], isLoading } = useQuery({
    queryKey: ['myClasses', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader1 />;
  console.log(myClasses)

  if (!myClasses || myClasses.length === 0) {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl text-black dark:text-white">
        You have not created any course yet!!
      </h1>
    </div>
  );
}

  // Prepare data for the chart
  const chartData = myClasses.map((cls) => ({
    title: cls.title,
    totalEnroll: cls.totalEnroll || 0,
  }));

  return (
    <div className="max-w-5xl mx-auto p-4 mb-20 pb-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-[#51a3f5] mb-8">
        Total Enrollment in My Courses
      </h2>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" tick={{ fontSize: 12 }} interval={0} angle={-30} textAnchor="end" />
          <YAxis />
          <Tooltip />
         
          <Bar dataKey="totalEnroll" fill="#0A5EB0" />
        </BarChart>
         <Legend />
      </ResponsiveContainer>
    </div>
  );
};

export default MyClassesChart;
