import React from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Axios/AxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const UserRoleChart = () => {
  const axiosSecure = AxiosSecure();

  // fetch users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUser");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center">Loading chart...</p>;

  // count roles
  const roleCount = {
    admin: 0,
    teacher: 0,
    student: 0,
  };

  users.forEach((user) => {
    if (user.role === "admin") roleCount.admin++;
    if (user.role === "teacher") roleCount.teacher++;
    if (user.role === "student") roleCount.student++;
  });

  // prepare chart data
  const data = [
    { role: "Admin", count: roleCount.admin },
    { role: "Teacher", count: roleCount.teacher },
    { role: "Student", count: roleCount.student },
  ];

  return (
    <div className="bg-white my-10 mx-10 shadow-md p-5 rounded-2xl">
      <h2 className="text-xl font-semibold text-black mb-4 text-center">
        User Role Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="role" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#7E3AF2" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRoleChart;
