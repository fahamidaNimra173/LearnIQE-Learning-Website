import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'; // Fixed import from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import GoogleSignIn from '../../Shared/GoogleSignIn';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { signInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    // If there are validation errors, show the first one with SweetAlert2
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorMessage = errors[firstErrorKey].message;
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: firstErrorMessage,
      });
      return;
    }

    try {
      await signInUser(data.email, data.password);
      await Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
      });
      navigate(from, { replace: true });
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message || 'Invalid email or password',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-30  px-4">
      <div className="w-full max-w-md bg-white dark:bg-white shadow-xl p-8 rounded-xl border border-blue-100">
        <h2 className="text-3xl font-bold text-center habibi uppercase text-[#6c4370] dark:text-[#6c4370] mb-6">Login to  LearnIQ</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="label font-semibold text-[#6c4370] dark:text-[#6c4370]">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className={`input input-bordered bg-white dark:bg-white text-black dark:text-black w-full ${errors.email ? "border-red-500" : "border-blue-300"}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter a valid email"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold text-[#6c4370] dark:text-[#6c4370]">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className={`input input-bordered bg-white dark:bg-white text-black dark:text-black w-full ${errors.password ? "border-red-500" : "border-blue-300"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required"
                },
                validate: {
                  hasUpperCase: value =>
                    /[A-Z]/.test(value) || "At least one uppercase letter required",
                  hasLowerCase: value =>
                    /[a-z]/.test(value) || "At least one lowercase letter required"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn bg-[#6c4370] dark:bg-[#6c4370] w-full text-white dark:text-white font-bold tracking-wide"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="divider text-sm text-gray-500">OR</div>

          {/* Google Login */}
          <GoogleSignIn />

        </form>

        {/* Register Redirect */}
        <p className="text-center text-sm text-[#6c4370] dark:text-[#6c4370] mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#0A5EB0] font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
