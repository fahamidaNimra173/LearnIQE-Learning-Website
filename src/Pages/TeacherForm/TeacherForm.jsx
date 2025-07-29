import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';
import { FaUserGraduate } from 'react-icons/fa';
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
    category: 'teacher_category'
  };

  // Load saved values on mount
  useEffect(() => {
    setValue('experience', localStorage.getItem(LOCAL_KEYS.experience) || '');
    setValue('title', localStorage.getItem(LOCAL_KEYS.title) || '');
    setValue('category', localStorage.getItem(LOCAL_KEYS.category) || '');
  }, [setValue]);

  // Save to localStorage on field change
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(LOCAL_KEYS.experience, value.experience || '');
      localStorage.setItem(LOCAL_KEYS.title, value.title || '');
      localStorage.setItem(LOCAL_KEYS.category, value.category || '');
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const { data: userData } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
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
        confirmButtonColor: '#8b5cf6'
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
        confirmButtonColor: '#8b5cf6'
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
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
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
      <div className="max-w-xl  mx-auto  my-40 p-6 light:bg-purple-600  border border-purple-300 rounded-2xl shadow-lg text-center animate-fade-in">


        <DotLottieReact
          src="https://lottie.host/eecdcde5-6299-4129-a421-d14e06778f99/kzqa4PS22f.lottie"
          loop
          autoplay
        />
        <div className='flex mx-auto justify-center items-center'>
          <div className="flex justify-center ml-6 mb-4">
            <FaUserGraduate className="dark:text-[rgb(255,145,73)] text-[rgb(96,181,255)] text-5xl drop-shadow" />
          </div>
          <DotLottieReact
          className='-ml-12'
            src="https://lottie.host/b4401454-6a55-4b67-a094-59f6bddc6551/Z6a8bSLWvV.lottie"
            loop
            autoplay
          />
          
        </div>




        <p className="text-2xl dark:text-[rgb(175,221,255)] text-[rgb(96,181,255)] font-medium">
          You are now a <span className="font-semibold  underline dark:text-purple-300 underline-offset-2">verified teacher</span> on <span className=" dark:text-[rgb(10,94,176)] text-[rgb(10,94,176)] font-bold righteous">Learn<span className="text-[#FFCFEF] text-shadow-xs text-shadow-gray-950">IQ</span></span>.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-purple-200 mt-20 rounded-lg shadow-lg text-black text-[20px] font-semibold">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
        {isRejected ? 'Resubmit Teacher Request' : 'Apply to Teach'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full bg-white text-black input-bordered"
            defaultValue={user?.displayName}
            
          />
        </div>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-white text-black input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input w-full bg-white text-black input-bordered"
            defaultValue={user?.photoURL}
            
          />
        </div>

        <div>
          <label className="label">Experience</label>
          <select
            {...register('experience', { required: true })}
            className="select w-full bg-white text-black select-bordered"
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-level</option>
            <option value="experienced">Experienced</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm">Experience is required</p>}
        </div>

        <div>
          <label className="label">Course Title</label>
          <input
            type="text"
            placeholder="Course title"
            {...register('title', { required: true })}
            className="input w-full bg-white text-black input-bordered"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
        </div>

        <div>
          <label className="label">Category</label>
          <select
            {...register('category', { required: true })}
            className="select w-full bg-white text-black select-bordered"
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
          {errors.category && <p className="text-red-500 text-sm">Category is required</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={createMutation.isPending || updateMutation.isPending}
          >
            {(createMutation.isPending || updateMutation.isPending)
              ? 'Submitting...'
              : isRejected
                ? 'Request Another'
                : 'Submit for Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
