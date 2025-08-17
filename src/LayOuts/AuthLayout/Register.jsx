import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import AxiosSecure from '../../Axios/AxiosSecure';
import GoogleSignIn from '../../Shared/GoogleSignIn';
import Swal from 'sweetalert2';
import { reload } from 'firebase/auth';
import { auth } from '../../../firebase.init';




const Register = () => {
    const { createUser, updateUserProfile } = use(AuthContext)
    const axiosSecure = AxiosSecure()
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, photoURL } = data;


        createUser(email, password)
            .then(() => {
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
                updateUserProfile(profile)
                    .then(() => {
                        reload(auth.currentUser).then(() => {
                            const userInfo = {
                                name: name,
                                email: email,
                                photo: photoURL,
                                role: "student",
                                createdAt: new Date().toISOString(),
                                lastLogin: new Date().toISOString(),
                            };

                            axiosSecure.post('/users', userInfo)
                                .then(() => {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Registration Successful!',
                                        text: 'Your account has been created.',
                                        timer: 2000,
                                        showConfirmButton: false,
                                    });


                                    navigate('/');
                                });
                        })



                    });
            })
            .catch((error) => {
                console.log("Something went wrong:", error.message);
            });
    };

    return (
        <div className="min-h-screen py-30 flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

                    <input
                        {...register("password", { required: true, minLength: 6 })}
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">Minimum 6 characters</p>}

                    <input
                        {...register("photoURL", { required: true })}
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                    />
                    {errors.photoURL && <p className="text-red-500 text-sm">Photo URL is required</p>}

                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>

                <div className="divider">OR</div>

                <GoogleSignIn />

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-semibold">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
