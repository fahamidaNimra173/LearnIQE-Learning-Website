import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';
import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaBookOpen, FaCheckCircle, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa';
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

  useEffect(() => {
    setValue('experience', localStorage.getItem(LOCAL_KEYS.experience) || '');
    setValue('title', localStorage.getItem(LOCAL_KEYS.title) || '');
    setValue('category', localStorage.getItem(LOCAL_KEYS.category) || '');
    setValue('name', localStorage.getItem(LOCAL_KEYS.name) || '');
    setValue('photoURL', localStorage.getItem(LOCAL_KEYS.photoURL) || '');
  }, [setValue]);

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
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;600;700&display=swap');
          
          .success-card {
            font-family: 'Outfit', sans-serif;
          }
          
          .success-title {
            font-family: 'Playfair Display', serif;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(251, 188, 44, 0.3), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          
          .grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          }
        `}</style>

        <div className="max-w-6xl w-full success-card">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#fbbc2c]/20">
            {/* Sophisticated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-teal-50"></div>
            <div className="absolute inset-0 grain opacity-60"></div>
            
            {/* Decorative geometric shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fbbc2c] opacity-[0.03] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1e8a78] opacity-[0.03] rounded-full blur-3xl"></div>
            
            {/* Diagonal accent line */}
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#fbbc2c] via-amber-400 to-transparent"></div>

            <div className="relative px-8 md:px-16 py-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#fbbc2c] to-amber-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
                <FaStar className="text-white" />
                <span>Verified Instructor</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  <h1 className="success-title text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[0.95]">
                    You're
                    <span className="block text-[#fbbc2c]">Approved</span>
                  </h1>
                  
                  <div className="h-1 w-24 bg-gradient-to-r from-[#fbbc2c] to-transparent mb-8"></div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-6">
                    Welcome to the <span className="font-semibold text-[#1e8a78]">LearnIQ</span> teaching community
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    Your expertise will inspire countless learners. Start creating transformative educational experiences today.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#fbbc2c] mb-2">1K+</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wider">Teachers</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-4xl font-bold text-[#1e8a78] mb-2">50K+</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wider">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#fbbc2c] mb-2">100+</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wider">Courses</div>
                    </div>
                  </div>
                </div>

                {/* Right: Animation & Features */}
                <div className="relative">
                  {/* Lottie Animation */}
                  <div className="relative z-10 mb-8 animate-float">
                    <DotLottieReact
                      src="https://lottie.host/eecdcde5-6299-4129-a421-d14e06778f99/kzqa4PS22f.lottie"
                      loop
                      autoplay
                      className="w-full max-w-md mx-auto"
                    />
                  </div>

                  {/* Feature Cards */}
                  <div className="space-y-4">
                    <FeatureCard 
                      icon={FaChalkboardTeacher}
                      title="Start Teaching"
                      description="Launch your first course"
                      delay="0s"
                    />
                    <FeatureCard 
                      icon={FaBookOpen}
                      title="Create Content"
                      description="Build engaging curriculum"
                      delay="0.1s"
                    />
                    <FeatureCard 
                      icon={FaAward}
                      title="Earn Recognition"
                      description="Build your reputation"
                      delay="0.2s"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Crimson+Pro:wght@400;600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
        
        .editorial-title {
          font-family: 'Playfair Display', serif;
        }
        
        .body-serif {
          font-family: 'Crimson Pro', serif;
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
        }
        
        .custom-input {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .custom-input:focus {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade" style={{ animationDelay: '0s' }}>
          <div className="inline-block px-5 py-2 bg-[#fbbc2c]/10 rounded-full mb-6 border border-[#fbbc2c]/20">
            <span className="text-[#fbbc2c] font-semibold text-sm uppercase tracking-widest">Instructor Application</span>
          </div>
          <h1 className="editorial-title text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Share Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fbbc2c] via-amber-400 to-[#1e8a78]">
              Expertise
            </span>
          </h1>
          <p className="body-serif text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Join our community of exceptional educators and inspire the next generation of learners
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar - Info */}
          <div className="lg:col-span-5 space-y-6 animate-slide-left" style={{ animationDelay: '0.2s' }}>
            {/* Main Feature Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-900/40 to-teal-900/20"></div>
              <div className="absolute inset-0 grain"></div>
              
              {/* Accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fbbc2c] to-transparent"></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-br from-[#fbbc2c] to-amber-600 rounded-2xl mb-6 shadow-2xl">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>

                <h2 className="editorial-title text-3xl font-bold text-white mb-4">
                  Why Teach With Us?
                </h2>
                
                <div className="space-y-5">
                  <BenefitItem 
                    number="01"
                    title="Global Reach"
                    description="Connect with students worldwide and expand your teaching impact beyond geographical boundaries"
                  />
                  <BenefitItem 
                    number="02"
                    title="Creative Freedom"
                    description="Design courses your way with complete control over curriculum and teaching methods"
                  />
                  <BenefitItem 
                    number="03"
                    title="Professional Growth"
                    description="Access resources, mentorship, and a supportive community of fellow educators"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c]/10 to-transparent"></div>
                <div className="relative">
                  <FaUsers className="text-3xl text-[#fbbc2c] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">1,000+</div>
                  <div className="text-sm text-gray-400">Active Teachers</div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e8a78]/10 to-transparent"></div>
                <div className="relative">
                  <FaUserGraduate className="text-3xl text-[#1e8a78] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">50K+</div>
                  <div className="text-sm text-gray-400">Students Learning</div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl h-64 border border-white/10">
              <img 
                src="https://i.ibb.co.com/MqXny7y/Screenshot-2025-08-16-234031.png"
                alt="Teaching Platform"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="inline-flex items-center gap-2 bg-[#fbbc2c] px-4 py-2 rounded-full w-fit mb-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">Join Today</span>
                </div>
                <h3 className="editorial-title text-2xl font-bold text-white">
                  Build Your Teaching Legacy
                </h3>
              </div>
            </div>
          </div>

          {/* Right - Application Form */}
          <div className="lg:col-span-7 animate-slide-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl"></div>
              <div className="absolute inset-0 grain"></div>
              
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbbc2c] via-amber-500 to-[#1e8a78]"></div>

              <div className="relative p-8 md:p-12">
                {/* Form Header */}
                <div className="mb-10">
                  {isRejected && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                      <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Previously Rejected</span>
                    </div>
                  )}
                  
                  <h2 className="editorial-title text-4xl font-bold text-white mb-3">
                    {isRejected ? 'Resubmit Your Application' : 'Application Form'}
                  </h2>
                  <p className="text-gray-400 text-lg">Tell us about yourself and your teaching goals</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="animate-fade" style={{ animationDelay: '0.5s' }}>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      className="custom-input w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl focus:border-[#fbbc2c] text-white placeholder-gray-500 text-lg"
                      defaultValue={user?.displayName}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                        Name is required
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="animate-fade" style={{ animationDelay: '0.6s' }}>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 bg-white/[0.02] border-2 border-white/5 rounded-xl text-gray-500 cursor-not-allowed text-lg"
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>

                  {/* Photo URL */}
                  <div className="animate-fade" style={{ animationDelay: '0.7s' }}>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      {...register('photoURL', { required: true })}
                      className="custom-input w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl focus:border-[#fbbc2c] text-white placeholder-gray-500 text-lg"
                      defaultValue={user?.photoURL}
                      placeholder="https://example.com/photo.jpg"
                    />
                    {errors.photoURL && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                        Photo URL is required
                      </p>
                    )}
                  </div>

                  {/* Experience & Title Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Experience */}
                    <div className="animate-fade" style={{ animationDelay: '0.8s' }}>
                      <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                        Experience Level
                      </label>
                      <select
                        {...register('experience', { required: true })}
                        className="custom-input w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl focus:border-[#fbbc2c] text-white text-lg appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900">Select level</option>
                        <option value="beginner" className="bg-gray-900">Beginner (0-2 years)</option>
                        <option value="mid-level" className="bg-gray-900">Mid-level (2-5 years)</option>
                        <option value="experienced" className="bg-gray-900">Experienced (5+ years)</option>
                      </select>
                      {errors.experience && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                          Required
                        </p>
                      )}
                    </div>

                    {/* Category */}
                    <div className="animate-fade" style={{ animationDelay: '0.9s' }}>
                      <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                        Category
                      </label>
                      <select
                        {...register('category', { required: true })}
                        className="custom-input w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl focus:border-[#fbbc2c] text-white text-lg appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900">Select category</option>
                        <option value="web development" className="bg-gray-900">Web Development</option>
                        <option value="digital marketing" className="bg-gray-900">Digital Marketing</option>
                        <option value="graphic design" className="bg-gray-900">Graphic Design</option>
                        <option value="data science" className="bg-gray-900">Data Science</option>
                        <option value="ui ux" className="bg-gray-900">UI/UX Design</option>
                        <option value="cybersecurity" className="bg-gray-900">Cybersecurity</option>
                        <option value="programming language" className="bg-gray-900">Programming Language</option>
                      </select>
                      {errors.category && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                          Required
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Course Title */}
                  <div className="animate-fade" style={{ animationDelay: '1s' }}>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Course Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Advanced Web Development Masterclass"
                      {...register('title', { required: true })}
                      className="custom-input w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl focus:border-[#fbbc2c] text-white placeholder-gray-500 text-lg"
                    />
                    {errors.title && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                        Title is required
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 animate-fade" style={{ animationDelay: '1.1s' }}>
                    <button
                      type="submit"
                      className="group relative w-full py-5 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] text-white font-bold text-lg rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 hover:shadow-2xl hover:shadow-[#fbbc2c]/20 hover:scale-[1.02]"
                      disabled={createMutation.isPending || updateMutation.isPending}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1e8a78] to-[#fbbc2c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative z-10 uppercase tracking-wider">
                        {(createMutation.isPending || updateMutation.isPending)
                          ? 'Submitting Application...'
                          : isRejected
                            ? 'Resubmit Application'
                            : 'Submit Application'}
                      </span>
                    </button>
                  </div>

                  {/* Rejection Message */}
                  {isRejected && (
                    <div className="animate-fade bg-red-500/10 border border-red-500/20 p-5 rounded-xl" style={{ animationDelay: '1.2s' }}>
                      <p className="text-red-400 leading-relaxed">
                        Your previous application was not approved. Please review your information and resubmit with any necessary updates.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component for Success Page
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="group relative overflow-hidden rounded-2xl border border-white/10 p-5 hover:border-[#fbbc2c]/30 transition-all duration-500"
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fbbc2c] to-amber-600 rounded-xl flex items-center justify-center">
        <Icon className="text-white text-xl" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ number, title, description }) => (
  <div className="flex gap-5 group">
    <div className="flex-shrink-0">
      <div className="text-5xl font-black text-[#fbbc2c]/20 group-hover:text-[#fbbc2c]/40 transition-colors duration-300">
        {number}
      </div>
    </div>
    <div className="pt-2">
      <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default TeacherForm;