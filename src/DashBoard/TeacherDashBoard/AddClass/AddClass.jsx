import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthContext';
import AxiosSecure from '../../../Axios/AxiosSecure';

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (classData) => {
      const res = await axiosSecure.post('/cources', classData);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Class Added!',
        text: 'Your class has been submitted and is pending approval.',
        confirmButtonColor: '#8b5cf6'
      });
      reset();
      navigate('/dashboard/myclass');
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add class.',
        confirmButtonColor: '#ef4444'
      });
    }
  });

  const onSubmit = (data) => {
    const classData = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      status: 'pending',
      totalEnroll: 0,
      feedback: '',
      createdAt: new Date().toISOString()
    };
    mutation.mutate(classData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-purple-200 mt-20 rounded-lg shadow-lg text-black text-[18px] font-semibold">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Add a New Class</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            {...register('title', { required: true })}
            className="input input-bordered w-full bg-white text-black"
            placeholder="Enter class title"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
        </div>

        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full bg-white text-black"
            defaultValue={user?.displayName}
            readOnly
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full bg-white text-black"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        {/* Price */}
        <div>
          <label className="label">Price (৳)</label>
          <input
            type="number"
            {...register('price', { required: true, min: 0 })}
            className="input input-bordered w-full bg-white text-black"
            placeholder="Enter class price"
          />
          {errors.price && <p className="text-red-500 text-sm">Price is required</p>}
        </div>

        {/* Category */}
        <div>
          <label className="label">Category</label>
          <select
            {...register('category', { required: true })}
            className="select select-bordered w-full bg-white text-black"
          >
            <option value="">Select a category</option>
            <option value="web development">Web Development</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="graphic design">Graphic Design</option>
            <option value="data science">Data Science</option>
            <option value="ui ux">UI/UX Design</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="programming">Programming Language</option>
            <option value="programming">Physics</option>
            <option value="programming">Mathematics</option>
            <option value="programming">Others</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">Category is required</p>}
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            {...register('description', { required: true })}
            className="textarea textarea-bordered w-full bg-white text-black"
            placeholder="Enter class description"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Image URL</label>
          <input
            type="text"
            {...register('image', { required: true })}
            className="input input-bordered w-full bg-white text-black"
            placeholder="Enter image URL"
          />
          {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Submitting...' : 'Add Class'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
