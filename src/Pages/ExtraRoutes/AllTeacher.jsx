import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";
import '../../App.css'
import { useEffect } from "react";

const InstructorsPage = () => {
  const axiosSecure = AxiosSecure();
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.card-bg-zoom').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('zoom');
        } else {
          el.classList.remove('zoom');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Fetch teachers
  const { data: teachers = [], isLoading: teachersLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUser");
      return res.data.filter((user) => user.role === "teacher");
    },
  });

  // Fetch approved courses
  const { data: classes = [], isLoading: coursesLoading } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cources?status=approved");
      return res.data;
    },
  });

  if (teachersLoading || coursesLoading) {
    return (
      <p className="text-center text-lg font-semibold">
        Loading instructors...
      </p>
    );
  }

  // ✅ only ONE return for the component
  return (
    <section className="py-12 lg:mt-30 mt-20 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-15 text-[#6c4370] dark:text-[#6c4370] habibi">
        Meet Our Expert Instructors
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {teachers.map((teacher) => {
          const teacherCourses = classes.filter(
            (course) => course.email === teacher.email
          );

          // 👇 implicit return of JSX from the map callback
          return (
            <div
              key={teacher._id}
              className="relative flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-[#6c4370]"
            >
              {/* Background Image */}
              <div
                className="absolute card-bg-zoom bottom-0 lg:top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-no-repeat bg-contain opacity-40 pointer-events-none transform transition-transform duration-500"
                style={{ backgroundImage: `url('https://i.ibb.co/fVpXBt5S/sphere-2878024-1280-removebg-preview.png')` }}
              ></div>

              {/* Left Image Section */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-amber-500 w-full md:w-64 h-72 md:h-96">
                <img
                  src={teacher.photo || "https://i.ibb.co/2M3Ncm1/avatar.png"}
                  alt={teacher.name}
                  className="w-3/4 md:w-full h-36 md:h-72 object-cover rounded-t-lg mt-4 md:mt-0"
                />
                <h3 className="text-2xl font-bold text-[#fcfafd] dark:text-[#fafafa] righteous mt-2">{teacher.name}</h3>
                <p className="text-lg font-bold habibi text-[#5b375e] dark:text-[#6c4370]">{teacher.email}</p>
              </div>

              {/* Right Content Section */}
              <div className="flex-1 text-center p-2 md:p-5">
                <h4 className="text-2xl font-bold mb-4 text-[#fcfafd] dark:text-[#fafafa]">
                  🎓 Explore Courses
                </h4>

                {teacherCourses.length > 0 ? (
                  <p className="text-sm my-4 md:my-6 text-[#fcfafd] dark:text-[#fafafa]">
                    Our students love these courses! Here's what <span className="font-semibold">{teacher.name}</span> teaches:
                  </p>
                ) : (
                  <p className="text-md font-medium uppercase my-6 md:my-10 text-[#fcfafd] dark:text-[#fafafa]">
                    No courses assigned yet.
                  </p>
                )}

                <ul className="flex flex-wrap justify-center  gap-2 md:gap-4">
                  {teacherCourses.map((course) => (
                    <li
                      key={course._id}
                      className="bg-[#4f2b52] dark:bg-[#4f2b52] text-white lg:text-md text-sm px-4 py-2 habibi rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                    >
                      {course.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          );

        })}
      </div>
    </section>
  );
};

export default InstructorsPage;
