// UPDATED TeacherForm.jsx with conditional rendering for rejected/approved status

import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';

const TeacherForm = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const [isRejected, setIsRejected] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Fetch user from users collection
  const { data: userData } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Fetch teacher request by email
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
    } else if (teacherRequestData?.status === 'rejected') {
      setIsRejected(true);
    }
  }, [userData, teacherRequestData]);

  const mutation = useMutation({
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
      reset();
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

  const onSubmit = (data) => {
    const requestData = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      status: 'pending'
    };
    mutation.mutate(requestData);
  };

  if (isTeacher) {
    return (
      <div className="text-center mt-20 text-xl text-purple-700 font-semibold">
        🎉 Congratulations! You are now a verified teacher on EduManage.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-purple-200 mt-20 rounded-lg shadow-lg text-black text-[20px] font-semibold">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">{isRejected ? 'Resubmit Teacher Request' : 'Apply to Teach'}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full bg-white text-black input-bordered"
            defaultValue={user?.displayName}
            readOnly
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
            readOnly
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
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Submitting...' : isRejected ? 'Request Another' : 'Submit for Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
