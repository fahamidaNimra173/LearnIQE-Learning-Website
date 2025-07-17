import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import { Link } from 'react-router';
import AxiosSecure from '../../Axios/AxiosSecure';

const AllClasses = () => {
    const axiosSecure = AxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['all-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cources');
            return res.data;
        }
    });

    const approveMutation = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.patch(`/cources/approve/${id}`);
            return res.data;
        },
        onSuccess: () => {
            Swal.fire('Approved!', 'Class has been approved.', 'success');
            refetch();
        }
    });

    const rejectMutation = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.patch(`/cources/reject/${id}`);
            return res.data;
        },
        onSuccess: () => {
            Swal.fire('Rejected!', 'Class has been rejected.', 'info');
            refetch();
        }
    });

    return (
        <div className="overflow-x-auto px-4">
            <h1 className="text-3xl font-bold my-6 text-center text-red-800">All Classes ({classes.length})</h1>

            <div className="overflow-auto rounded-lg shadow border">
                <table className="table bg-purple-200 text-purple-950 w-full min-w-[900px]">
                    <thead className="bg-purple-200 text-purple-950 font-semibold">
                        <tr>
                            <th>#</th>

                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => (
                            <tr key={cls._id} className="hover:bg-black hover:text-purple-100">
                                <td>{index + 1}</td>

                                <td><img src={cls.image} alt="class" className="w-16 h-16 rounded" /></td>
                                <td>{cls.title}</td>
                                <td>{cls.email}</td>
                                <td className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                    {cls.description}
                                </td>
                                <td>
                                    <span className={`badge ${cls.status === 'approved' ? 'badge-success' : cls.status === 'rejected' ? 'badge-error' : 'badge-warning'}`}>
                                        {cls.status}
                                    </span>
                                </td>
                                <td className="flex flex-col gap-1">
                                    <button
                                        onClick={() => approveMutation.mutate(cls._id)}
                                        className="btn btn-sm btn-success"
                                        disabled={cls.status === 'approved' || cls.status === 'rejected'}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => rejectMutation.mutate(cls._id)}
                                        className="btn btn-sm btn-error"
                                        disabled={cls.status === 'approved' || cls.status === 'rejected'}
                                    >
                                        Reject
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-info text-white" disabled={cls.status !== 'approved'}>
                                        View Progress
                                    </button>
                                    {/* <Link to={`/dashboard/class-progress/${cls._id}`}>
                                        <button className="btn btn-sm btn-info text-white" disabled={cls.status !== 'approved'}>
                                            View Progress
                                        </button>
                                    </Link> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;
