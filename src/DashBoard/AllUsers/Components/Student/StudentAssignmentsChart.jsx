import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../../Axios/AxiosSecure";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../../../Context/AuthContext";

const StudentAssignmentsChart = () => {
     const { user} = useContext(AuthContext);
  // Fetch enrollments (React Query v5 syntax)
  const { data: enrollments = [], isLoading: loadingEnroll } = useQuery({
    queryKey: ["enrollment"],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/studentEmail=${user.email}`);
      return res.data;
    },
  });

  // Fetch assignments (React Query v5 syntax)
  const { data: assignments = [], isLoading: loadingAssign } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/assignment");
      return res.data;
    },
  });

  if (loadingEnroll || loadingAssign) return <p>Loading...</p>;

  // Filter student's enrollments
  const myEnrollments = enrollments.filter(
    (enroll) => enroll.studentEmail === user.email
  );

  if (myEnrollments.length === 0)
    return <p className="mt-15 text-3xl text-black dark-text-white">You have not enrolled in any courses yet.</p>;

  // Count assignments per enrolled course using courseId
  const chartData = myEnrollments.map((enroll) => {
    const count = assignments.filter(
      (assign) => assign.courseId === enroll.courseId
    ).length;
    return {
      course: enroll.courseTitle,
      assignments: count,
    };
  });

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="course"
            interval={0}
            angle={-25}
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="assignments"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentAssignmentsChart;
