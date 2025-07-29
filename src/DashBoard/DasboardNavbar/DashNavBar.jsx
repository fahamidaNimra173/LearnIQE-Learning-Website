import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaHome, FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";
import Swal from "sweetalert2";

const DashboardNavbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const axiosSecure = AxiosSecure();
  const queryClient = useQueryClient();

  const courseId = location.pathname.split("/").pop();

  // Fetch course title by ID
  const { data: course, isLoading: isCourseLoading } = useQuery({
    queryKey: ["courseDetails", courseId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${courseId}`);
      return res.data;
    },
    enabled: !!courseId,
  });

  // Fetch user role
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
    staleTime: 5 * 60 * 1000,
  });

  const role = userData?.role?.toLowerCase() || "";

  const isStudentPath =
    role === "student" &&
    /^\/dashboard\/myenroll-class\/[^/]+\/?$/.test(location.pathname);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (feedbackData) => axiosSecure.post("/feedback", feedbackData),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Feedback submitted!",
        timer: 1500,
        showConfirmButton: false,
      });
      setIsOpen(false);
      reset();
      queryClient.invalidateQueries(["feedbacks"]);
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed to submit",
        text:
          error?.message ||
          error?.response?.data?.message ||
          "Please try again.",
      });
    },
  });

  const onSubmitFeedback = (data) => {
    const feedbackData = {
      ...data,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      role,
      CourseId: courseId,
      courseTitle: course?.title || "Untitled Course",
    };
    mutation.mutate(feedbackData);
  };

  if (isUserLoading || isCourseLoading) {
    return (
      <div className="p-4 text-center text-[#0A5EB0] font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center mt-0 px-4 py-2 bg-[#EBFFD8] text-[#0A5EB0] shadow-md">
      <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
        <FaHome className="text-[#0A5EB0]" />
        <span>Home</span>
      </NavLink>

      <div className="flex items-center gap-4">
        {isStudentPath && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-[#0A5EB0] px-4 py-1 rounded hover:bg-purple-100 font-medium transition"
          >
            TER
          </button>
        )}
        <NavLink to="/dashboard/userprofile">
          <img
            src={user?.photoURL}
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </NavLink>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Teacher Evaluation
                </h3>
                <form onSubmit={handleSubmit(onSubmitFeedback)} className="space-y-4">
                  <div>
                    <label className="text-sm">Your Name</label>
                    <input
                      defaultValue={user?.displayName || ""}
                      {...register("name", { required: true })}
                      className="w-full px-3 py-2 rounded text-black"
                    />
                    {errors.name && (
                      <p className="text-red-200 text-sm mt-1">Name is required.</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm">Description</label>
                    <textarea
                      {...register("description", { required: true })}
                      className="w-full px-3 py-2 rounded text-black"
                      rows={4}
                      placeholder="Write your feedback..."
                    />
                    {errors.description && (
                      <p className="text-red-200 text-sm mt-1">
                        Description is required.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm">Rating</label>
                    <div className="text-yellow-400">
                      <Rating
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        fractions={2}
                        onChange={(value) => setValue("rating", value)}
                      />
                      <input
                        type="hidden"
                        {...register("rating", { required: true })}
                        name="rating"
                      />
                      {errors.rating && (
                        <p className="text-red-200 text-sm">Rating is required.</p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-400 text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardNavbar;
