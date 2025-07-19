import React, { useContext, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router'; 
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthContext';
import AxiosSecure from '../../../Axios/AxiosSecure';

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const useAxiosSecure = AxiosSecure();
  const queryClient = useQueryClient();
  const [selectedClass, setSelectedClass] = useState(null);

  // Fetch teacher's cources
  const { data: myClasses = [], isLoading } = useQuery({
    queryKey: ['myClasses', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await useAxiosSecure.get(`/cources?email=${user.email}`);
      return res.data;
    },
  });

  // Delete a cource
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await useAxiosSecure.delete(`/cources/${id}`);
      return res.data;
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData(['myClasses', user.email], (old) =>
        old.filter((item) => item._id !== id)
      );
      Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
    },
  });

  // Update a class
  const updateMutation = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      const res = await useAxiosSecure.patch(`/cources/${id}`, updatedData);
      return res.data;
    },
    onSuccess: (_, { id, updatedData }) => {
      queryClient.setQueryData(['myClasses', user.email], (old) =>
        old.map((item) =>
          item._id === id ? { ...item, ...updatedData } : item
        )
      );
      document.getElementById('update_modal').close();
      Swal.fire('Updated!', 'Your class has been updated.', 'success');
    },
  });

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This class will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  // Handle update form submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
    };
    updateMutation.mutate({
      id: selectedClass._id,
      updatedData,
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-purple-700">
        Loading your classes...
      </div>
    );
  }

  return (
    <>
      {/* Modal for Update */}
      <dialog id="update_modal" className="modal">
        <div className="modal-box bg-white rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-purple-800">Update Class</h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              name="title"
              defaultValue={selectedClass?.title}
              className="input input-bordered w-full"
              placeholder="Title"
            />
            <input
              name="price"
              type="number"
              step="0.01"
              defaultValue={selectedClass?.price}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            <textarea
              name="description"
              defaultValue={selectedClass?.description}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            />
            <div className="modal-action justify-end">
              <button type="submit" className="btn bg-blue-600 text-white hover:bg-blue-700">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById('update_modal').close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Cources Cards */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myClasses.map((cls) => (
          <div
            key={cls._id}
            className="bg-purple-200 rounded-2xl shadow-md p-4 space-y-3 hover:shadow-xl transition"
          >
            <img
              src={cls.image}
              alt={cls.title}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-purple-950">{cls.title}</h2>
            <p className="text-purple-950">
              <span className="font-semibold">Name:</span> {cls.name}
            </p>
            <p className="text-purple-950">
              <span className="font-semibold">Email:</span> {cls.email}
            </p>
            <p className="text-purple-950">
              <span className="font-semibold">Price:</span> ${cls.price}
            </p>
            <p className="text-purple-950">
              <span className="font-semibold">Description:</span> {cls.description}
            </p>
            <p className="text-purple-950">
              <span className="font-semibold">Status:</span>{' '}
              <span
                className={`uppercase font-semibold ${
                  cls.status === 'approved'
                    ? 'text-green-700'
                    : cls.status === 'rejected'
                    ? 'text-red-700'
                    : 'text-yellow-700'
                }`}
              >
                {cls.status}
              </span>
            </p>

            <div className="flex flex-wrap justify-between items-center gap-2 pt-3">
              {/* Update button which will open a modal */}
              <button
                onClick={() => {
                  setSelectedClass(cls);
                  document.getElementById('update_modal').showModal();
                }}
                className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
              >
                Update
              </button>

            
              <button
                onClick={() => handleDelete(cls._id)}
                className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>

            
              <Link to={`/dashboard/my-class/${cls._id}`}>
                <button
                  disabled={cls.status !== 'approved'}
                  className={`btn btn-sm ${
                    cls.status === 'approved'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                >
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyClasses;
