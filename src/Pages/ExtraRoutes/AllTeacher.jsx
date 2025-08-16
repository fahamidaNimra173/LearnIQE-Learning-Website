import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";

const InstructorsPage = () => {
  const axiosSecure = AxiosSecure();

  // Fetch teachers
  const { data: teachers = [], isLoading: teachersLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUser");
      // Only return teachers
      return res.data.filter((user) => user.role === "teacher");
    },
  });
  console.log(teachers)

  // Fetch approved courses
  const { data: classes = [], isLoading: coursesLoading } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cources?status=approved");
      return res.data;
    },
  });

  if (teachersLoading || coursesLoading) {
    return <p className="text-center text-lg font-semibold">Loading instructors...</p>;
  }

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">
        Meet Our Expert Instructors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teachers.map((teacher) => {
          // Find courses taught by this teacher
          const teacherCourses = classes.filter(
            (course) => course.email === teacher.email
          );

          return (
            <div
              key={teacher._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={teacher.photo || "https://i.ibb.co/2M3Ncm1/avatar.png"}
                alt={teacher.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-500">{teacher.email}</p>

                <div className="mt-4">
                  <h4 className="text-purple-700 font-semibold mb-2">
                    Courses:
                  </h4>
                  {teacherCourses.length > 0 ? (
                    <ul className="text-sm text-gray-700 space-y-1">
                      {teacherCourses.map((course) => (
                        <li key={course._id} className="truncate">
                          • {course.title}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">No courses assigned yet.</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InstructorsPage;
