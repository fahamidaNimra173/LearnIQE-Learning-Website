import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import GoogleSignIn from '../../Shared/GoogleSignIn';

const Login = () => {
   const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

    const {signInUser}=use(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Info:", data);
   
         signInUser(data.email,data.password).then(()=>{
          
             navigate(from, { replace: true });
         }).catch(error=>{
            console.log(error)
         })
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-xl border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login to SkillMorph</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="label font-semibold text-blue-600">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className={`input input-bordered w-full ${errors.email ? "border-red-500" : "border-blue-300"}`}
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
            <label className="label font-semibold text-blue-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className={`input input-bordered w-full ${errors.password ? "border-red-500" : "border-blue-300"}`}
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
           className="btn btn-primary w-full text-white tracking-wide">
            Login
          </button>

          {/* OR Divider */}
          <div className="divider text-sm text-gray-500">OR</div>

          {/* Google Login */}
         
        </form>
        <GoogleSignIn></GoogleSignIn>

        {/* Register Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
