import React from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Axios/AxiosSecure";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader2 from "../../../Shared/Loaders/Loader1";

const CategoryEnrollmentChart = () => {
  const axiosSecure = AxiosSecure();

  // Fetch approved courses
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["approvedCourses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cources?status=approved");
      return res.data;
    },
  });

  if (isLoading)
    return <p className="text-center text-lg font-medium"><Loader2></Loader2></p>;

  // Aggregate total enrollments per category
  const categoryMap = {};
  courses.forEach((course) => {
    const category = course.category; // Use as-is
    const enroll = course.totalEnroll || 0;
    if (categoryMap[category]) categoryMap[category] += enroll;
    else categoryMap[category] = enroll;
  });

  // Convert to array for Recharts
  const data = Object.keys(categoryMap).map((key) => ({
    name: key, // Keep original category name
    value: categoryMap[key],
  }));

  const COLORS = [
    "#7E3AF2",
    "#F97316",
    "#10B981",
    "#EF4444",
    "#3B82F6",
    "#FBBF24",
    "#8B5CF6",
  ];

  return (
    <div className="bg-white px-2 shadow-md rounded-2xl p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">
        Student Enrollment by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={Math.min(window.innerWidth * 0.15 + 50, 120)}
            label={(entry) => `${entry.name}: ${entry.value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Custom legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center text-black gap-2">
            <span
              className="w-4 h-4 rounded"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-sm">{entry.name}: {entry.value}</span>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CategoryEnrollmentChart;
