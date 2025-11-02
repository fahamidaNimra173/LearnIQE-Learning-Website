import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";
import { useNavigate } from "react-router-dom";
import Loader1 from "../../Shared/Loaders/Loader1";
import { FiUsers, FiDollarSign } from "react-icons/fi";

const AllApprovedClasses = () => {
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [priceDesc, setPriceDesc] = useState(false);
  const [category, setCategory] = useState("");

  // fetch classes
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cources?status=approved");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="text-center py-10 font-bold">
        <Loader1 />
      </div>
    );

  // unique categories
  const categories = [...new Set(classes.map((cls) => cls.category))];

  // filter + sort
  let filteredClasses = category
    ? classes.filter((cls) => cls.category === category)
    : classes;

  if (priceDesc) {
    filteredClasses = [...filteredClasses].sort((a, b) => b.price - a.price);
  }

  // ✅ pagination AFTER filtering
  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentClasses = filteredClasses.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => setCurrentPage(page);

  // const handleEnrollment = (id) => {
  //   navigate(`/classdetails/${id}`);
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 py-30">
      <h2 className="text-3xl font-bold text-center text-[#6c4370] habibi mb-8">
        <span className="text-[#1e8a78] text-5xl">O</span>ur Entire Course Library
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between p-10 border-b-2 gap-4">
        <button
          onClick={() => setPriceDesc(!priceDesc)}
          className="btn font-medium bg-[#6c4370] text-white"
        >
          {priceDesc ? "Price: High → Low" : "Sort by Price"}
        </button>

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1); // reset to first page when filter changes
          }}
          className="input font-medium bg-[#1e8a78] text-white"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentClasses.map((course) => (
          <div className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white">
            {/* Decorative Corner Shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6c4370] opacity-10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1e8a78] opacity-10 rounded-tr-full"></div>

            {/* Image Section */}
            <div className="relative m-4 rounded-xl overflow-hidden shadow-md h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6c4370]/80 via-transparent to-transparent"></div>
            </div>

            {/* Content Area */}
            <div className="px-6 pb-6 space-y-4">
              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#6c4370] merienda text-center min-h-[4rem] flex items-center justify-center leading-tight">
                {course.title}
              </h3>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Enrollments Box */}
                <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#6c4370]">
                  <div className="flex flex-col items-center text-center">
                    <FiUsers className="text-[#6c4370] w-7 h-7 mb-2" />
                    <span className="text-xs text-gray-500 habibi mb-1">Enrollments</span>
                    <span className="text-lg font-bold text-[#6c4370]">{course.totalEnroll}</span>
                  </div>
                </div>

                {/* Price Box */}
                <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#1e8a78]">
                  <div className="flex flex-col items-center text-center">
                    <FiDollarSign className="text-[#1e8a78] w-7 h-7 mb-2" />
                    <span className="text-xs text-gray-500 habibi mb-1">Price</span>
                    <span className="text-lg font-bold text-[#1e8a78]">৳{course.price}</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(`/classdetails/${course._id}`)}
                className="w-full buttonMore"
              >
                <span className="buttonMore__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="buttonMore__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="black"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    class="buttonMore__icon-svg buttonMore__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-4 py-2 rounded-lg border ${currentPage === num
                ? "bg-[#1e8a78] text-white"
                : "bg-white text-[#1e8a78] hover:bg-[#e6f7f4]"
              }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllApprovedClasses;
