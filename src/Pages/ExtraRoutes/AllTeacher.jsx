import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";
import '../../App.css'
import { useEffect, useState } from "react";

const InstructorsPage = () => {
  const axiosSecure = AxiosSecure();
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.instructor-card').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    handleScroll();
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-[#fbbc2c] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-semibold text-gray-300">
            Loading instructors...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 lg:pt-32 pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 habibi">
            <span className="bg-gradient-to-r from-[#fbbc2c] via-amber-400 to-[#fbbc2c] bg-clip-text text-transparent">
              Meet Our Expert Instructors
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn from industry professionals dedicated to your success
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#fbbc2c] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-8">
          {teachers.map((teacher, index) => {
            const teacherCourses = classes.filter(
              (course) => course.email === teacher.email
            );

            return (
              <div
                key={teacher._id}
                className="instructor-card opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(teacher._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className="relative group">
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fbbc2c] via-amber-500 to-[#fbbc2c] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-[#fbbc2c]/50 transition-all duration-500">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c]/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbc2c]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
                      {/* Left: Profile Section */}
                      <div className="lg:w-80 flex flex-col items-center">
                        {/* Profile Image with Frame */}
                        <div className="relative mb-6 group/img">
                          {/* Animated Ring */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-[#fbbc2c] to-amber-500 rounded-full opacity-20 group-hover/img:opacity-40 blur-xl transition-opacity duration-500"></div>
                          
                          {/* Image Container */}
                          <div className="relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#fbbc2c] shadow-2xl transform group-hover/img:scale-105 transition-all duration-500">
                              <img
                                src={teacher.photo || "https://i.ibb.co/2M3Ncm1/avatar.png"}
                                alt={teacher.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Status Badge */}
                            <div className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-br from-[#fbbc2c] to-amber-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                              <span className="text-xl">✓</span>
                            </div>
                          </div>
                        </div>

                        {/* Profile Info */}
                        <div className="text-center">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white righteous mb-2">
                            {teacher.name}
                          </h3>
                          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                            <svg className="w-4 h-4 text-[#fbbc2c]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            <p className="text-sm text-gray-300 habibi">
                              {teacher.email}
                            </p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 flex gap-8">
                          <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-[#fbbc2c] to-amber-500 bg-clip-text text-transparent">
                              {teacherCourses.length}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">Courses</div>
                          </div>
                          <div className="w-px bg-gray-700"></div>
                          <div className="text-center">
                            <div className="text-3xl">⭐</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">Expert</div>
                          </div>
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

                      {/* Right: Courses Section */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#fbbc2c] to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🎓</span>
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">
                              Courses Taught
                            </h4>
                            <p className="text-sm text-gray-400">
                              {teacherCourses.length} {teacherCourses.length === 1 ? 'Course' : 'Courses'} Available
                            </p>
                          </div>
                        </div>

                        {teacherCourses.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {teacherCourses.map((course, idx) => (
                              <div
                                key={course._id}
                                className="group/course relative"
                                style={{ 
                                  animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                                }}
                              >
                                {/* Course Card */}
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 p-4 hover:border-[#fbbc2c] transition-all duration-300 cursor-pointer group-hover/course:shadow-lg group-hover/course:shadow-[#fbbc2c]/20">
                                  {/* Hover Gradient */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c]/10 to-transparent opacity-0 group-hover/course:opacity-100 transition-opacity duration-300"></div>
                                  
                                  {/* Content */}
                                  <div className="relative flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4f2b52] to-purple-700 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-semibold text-white habibi group-hover/course:text-[#fbbc2c] transition-colors leading-snug">
                                        {course.title}
                                      </h5>
                                    </div>
                                  </div>

                                  {/* Arrow Indicator */}
                                  <div className="absolute bottom-3 right-3 opacity-0 group-hover/course:opacity-100 transform translate-x-2 group-hover/course:translate-x-0 transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#fbbc2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl border-2 border-dashed border-gray-700">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                              <span className="text-3xl opacity-50">📚</span>
                            </div>
                            <p className="text-lg font-medium text-gray-400 uppercase tracking-wide">
                              No Courses Yet
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              Coming soon
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {teachers.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <span className="text-5xl">👨‍🏫</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              No Instructors Found
            </h3>
            <p className="text-gray-500">
              Our talented instructors will be available soon!
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .instructor-card.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default InstructorsPage;