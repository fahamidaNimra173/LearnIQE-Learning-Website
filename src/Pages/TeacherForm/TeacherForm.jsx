import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';
import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaBookOpen } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const TeacherForm = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const [isRejected, setIsRejected] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  const LOCAL_KEYS = {
    experience: 'teacher_experience',
    title: 'teacher_title',
    category: 'teacher_category',
    name: 'teacher_name',
    photoURL: 'teacher_photoURL'
  };

  // Load saved values on mount
  useEffect(() => {
    setValue('experience', localStorage.getItem(LOCAL_KEYS.experience) || '');
    setValue('title', localStorage.getItem(LOCAL_KEYS.title) || '');
    setValue('category', localStorage.getItem(LOCAL_KEYS.category) || '');
    setValue('name', localStorage.getItem(LOCAL_KEYS.name) || '');
    setValue('photoURL', localStorage.getItem(LOCAL_KEYS.photoURL) || '');
  }, [setValue]);

  // Save to localStorage on field change
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(LOCAL_KEYS.experience, value.experience || '');
      localStorage.setItem(LOCAL_KEYS.title, value.title || '');
      localStorage.setItem(LOCAL_KEYS.category, value.category || '');
      localStorage.setItem(LOCAL_KEYS.name, value.name || '');
      localStorage.setItem(LOCAL_KEYS.photoURL, value.photoURL || '');
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const { data: userData } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/me?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const { data: teacherRequestData, refetch } = useQuery({
    queryKey: ['teacher-request', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teacher-request?email=${user?.email}`);
      return res.data[0];
    },
    enabled: !!user?.email,
  });

  useEffect(() => {
    if (userData?.role === 'teacher') {
      setIsTeacher(true);
      Object.values(LOCAL_KEYS).forEach(key => localStorage.removeItem(key));
    } else if (teacherRequestData?.status === 'rejected') {
      setIsRejected(true);
    }
  }, [userData, teacherRequestData]);

  // update status from rejected to pending
  const createMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post('/teacher-request', data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Your teacher request has been submitted for review.',
        confirmButtonColor: '#1e8a78'
      });
      refetch();
      setIsRejected(false);
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Failed to submit teacher request.',
        confirmButtonColor: '#ef4444'
      });
    }
  });

  // update rejected to pending
  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(`/teacher-request?email=${user?.email}`, data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Your request was updated and sent again for review.',
        confirmButtonColor: '#1e8a78'
      });
      refetch();
      setIsRejected(false);
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Failed to update the request.',
        confirmButtonColor: '#ef4444'
      });
    }
  });

  //  Handles form submission (choose between POST and PATCH)
  const onSubmit = (data) => {
    const requestData = {
      ...data,
      email: user?.email,
      status: 'pending'
    };

    if (teacherRequestData?.status === 'rejected') {
      updateMutation.mutate(requestData);
    } else {
      createMutation.mutate(requestData);
    }
  };

  if (isTeacher) {
    return (
      <div className="min-h-screen bg-[#e7efee] flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl w-full">
          {/* Success Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c]/10 via-[#1e8a78]/10 to-transparent"></div>
            
            {/* Animated Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#1e8a78] rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#fbbc2c] rounded-full opacity-10 animate-pulse delay-75"></div>

            <div className="relative z-10 p-12 text-center">
              {/* Lottie Animation */}
              <div className="mb-8">
                <DotLottieReact
                  src="https://lottie.host/eecdcde5-6299-4129-a421-d14e06778f99/kzqa4PS22f.lottie"
                  loop
                  autoplay
                  className="mx-auto max-w-md"
                />
              </div>

              {/* Icon with Badge */}
              <div className="flex justify-center items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-[#fbbc2c] to-[#1e8a78] p-6 rounded-full">
                    <FaUserGraduate className="text-white text-6xl" />
                  </div>
                </div>
                <DotLottieReact
                  className="-ml-12"
                  src="https://lottie.host/b4401454-6a55-4b67-a094-59f6bddc6551/Z6a8bSLWvV.lottie"
                  loop
                  autoplay
                />
              </div>

              {/* Success Message */}
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] bg-clip-text text-transparent">
                Congratulations!
              </h2>
              
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                You are now a <span className="font-bold text-[#fbbc2c]">verified teacher</span> on{' '}
                <span className="font-black text-[#1e8a78]">LearnIQ</span>.
                Start inspiring minds and shaping futures today!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-[#fbbc2c]/10 to-transparent p-6 rounded-2xl">
                  <FaChalkboardTeacher className="text-3xl text-[#fbbc2c] mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-semibold">Start Teaching</p>
                </div>
                <div className="bg-gradient-to-br from-[#1e8a78]/10 to-transparent p-6 rounded-2xl">
                  <FaBookOpen className="text-3xl text-[#1e8a78] mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-semibold">Create Courses</p>
                </div>
                <div className="bg-gradient-to-br from-[#fbbc2c]/10 to-transparent p-6 rounded-2xl">
                  <FaAward className="text-3xl text-[#fbbc2c] mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-semibold">Earn Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7efee] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Info Card */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Hero Card */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('https://i.ibb.co/twJJ5LmD/school-work-851328-1280.jpg')" }}
              ></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#fbbc2c] to-[#1e8a78] p-4 rounded-2xl">
                    <FaChalkboardTeacher className="text-4xl text-white" />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-3xl font-black bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] bg-clip-text text-transparent">
                      Become a Teacher
                    </h1>
                    <p className="text-gray-600">Share your expertise with the world</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <BenefitItem 
                    icon={FaAward}
                    title="Get Verified"
                    description="Earn a verified teacher badge"
                  />
                  <BenefitItem 
                    icon={FaBookOpen}
                    title="Create Courses"
                    description="Design your own curriculum"
                  />
                  <BenefitItem 
                    icon={FaUserGraduate}
                    title="Impact Lives"
                    description="Inspire thousands of learners"
                  />
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
              <img 
                src="https://i.ibb.co.com/MqXny7y/Screenshot-2025-08-16-234031.png"
                alt="Teaching Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fbbc2c] to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-bold">Join 1000+ expert instructors</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
              {isRejected ? (
                <>
                  <span className="text-[#fbbc2c]">Resubmit Application</span>
                  <span className="ml-2 text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">Rejected</span>
                </>
              ) : (
                <span className="bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] bg-clip-text text-transparent">
                  Application Form
                </span>
              )}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1e8a78] focus:outline-none transition-colors text-gray-900"
                  defaultValue={user?.displayName}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-xl text-gray-600 cursor-not-allowed"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Photo URL</label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1e8a78] focus:outline-none transition-colors text-gray-900"
                  defaultValue={user?.photoURL}
                />
                {errors.photoURL && <p className="text-red-500 text-xs mt-1">Photo URL is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Teaching Experience</label>
                <select
                  {...register('experience', { required: true })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1e8a78] focus:outline-none transition-colors text-gray-900"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="mid-level">Mid-level (2-5 years)</option>
                  <option value="experienced">Experienced (5+ years)</option>
                </select>
                {errors.experience && <p className="text-red-500 text-xs mt-1">Experience is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced Web Development"
                  {...register('title', { required: true })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1e8a78] focus:outline-none transition-colors text-gray-900"
                />
                {errors.title && <p className="text-red-500 text-xs mt-1">Title is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Course Category</label>
                <select
                  {...register('category', { required: true })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1e8a78] focus:outline-none transition-colors text-gray-900"
                >
                  <option value="">Select a category</option>
                  <option value="web development">Web Development</option>
                  <option value="digital marketing">Digital Marketing</option>
                  <option value="graphic design">Graphic Design</option>
                  <option value="data science">Data Science</option>
                  <option value="ui ux">UI/UX Design</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="programming language">Programming Language</option>
                </select>
                {errors.category && <p className="text-red-500 text-xs mt-1">Category is required</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {(createMutation.isPending || updateMutation.isPending)
                  ? 'Submitting...'
                  : isRejected
                    ? 'Resubmit Application'
                    : 'Submit for Review'}
              </button>

              {isRejected && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <p className="text-red-700 text-sm">
                    Your previous application was rejected. Please review and update your information before resubmitting.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 group">
    <div className="bg-gradient-to-br from-[#fbbc2c]/10 to-[#1e8a78]/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
      <Icon className="text-xl text-[#1e8a78]" />
    </div>
    <div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default TeacherForm;