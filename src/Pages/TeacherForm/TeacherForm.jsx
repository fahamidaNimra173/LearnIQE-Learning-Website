import React, { use } from 'react';
import { useForm } from 'react-hook-form';


import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';

const TeacherForm = () => {
  const { user } = use(AuthContext)
  const axiosSecure = AxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { mutate, isPending } = useMutation({
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
      reset();
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
    console.log(requestData)
    mutate(requestData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-purple-200 mt-20 rounded-lg shadow-lg  text-black text-[20px] font-semibold">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Apply to Teach</h2>

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
          </select>
          {errors.category && <p className="text-red-500 text-sm">Category is required</p>}
        </div>

      
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isPending}
          >
            {isPending ? 'Submitting...' : 'Submit for Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
