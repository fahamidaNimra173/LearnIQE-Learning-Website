import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import AxiosSecure from '../Axios/AxiosSecure';
import {  useLocation} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';


const GoogleSignIn = () => {
    const { signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = AxiosSecure();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { mutate: saveUser } = useMutation({
        mutationFn: (user) => axiosSecure.post('/users', user),

        onSuccess: (res) => {
            //  Show SweetAlert based on whether user was inserted or already existed
            const alreadyExists = res?.data?.inserted === false;

            Swal.fire({
                icon: alreadyExists ? 'info' : 'success',
                title: alreadyExists ? 'Welcome back' : 'Login Successful!',

                timer: 2000,
                showConfirmButton: false,
            });

            navigate(from, { replace: true });
        },

        onError: (err) => {
            console.error("User save failed:", err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to save user data!',
            });
        },
    });

    const handleGoogleLogin = async () => {
        try {
            const result = await signInGoogle();
            const user = result.user;

            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                role: "student",
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
            };
            console.log(userData)
            const userEmail = { email: userData.email }
            axiosSecure.post('/jwt', userEmail).then(res => {
                const token = res.data.token
                // console.log('Token from social login', token)
                localStorage.setItem('Token', token)
                
            }).catch(error => {
                console.log(error)
            })

            saveUser(userData);
        } catch (err) {
            console.error("Google Sign-in failed:", err);
            Swal.fire({
                icon: 'error',
                title: 'Google Sign-in Failed',
                text: err.message,
            });
        }
    };

    return (
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full hover:text-white flex items-center gap-2">
            <FcGoogle className="text-xl" />
            <p className='dark:text-purple-700 hover:text-white text-blue-800'>Sign in with Google</p>
        </button>
    );
};

export default GoogleSignIn;
