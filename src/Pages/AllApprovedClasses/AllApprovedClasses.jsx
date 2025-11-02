import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Axios/AxiosSecure";
import { useNavigate } from "react-router-dom";
import Loader1 from "../../Shared/Loaders/Loader1";
import { FiUsers, FiDollarSign, FiFilter } from "react-icons/fi";

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

  return (
    <div className=" px-4 py-30">
      <h2 className="text-3xl font-bold text-center text-[#6c4370] habibi mb-8">
        <span className="text-[#1e8a78] text-5xl">O</span>ur Entire Course Library
      </h2>

      <div className="flex gap-8">
        {/* Sidebar Filter - Large Devices Only */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24 bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 rounded-2xl shadow-lg p-6 border border-white">
            <div className="flex items-center gap-3 mb-6">
              <FiFilter className="text-[#6c4370] w-6 h-6" />
              <h3 className="text-xl font-bold text-[#6c4370] habibi">Filters</h3>
            </div>

            {/* Sort by Price */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 habibi">Sort By</h4>
              <button
                onClick={() => setPriceDesc(!priceDesc)}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  priceDesc
                    ? "bg-gradient-to-r from-[#6c4370] to-[#8a5a8e] text-white shadow-lg"
                    : "bg-white text-[#6c4370] border-2 border-[#6c4370]/30 hover:border-[#6c4370]"
                }`}
              >
                {priceDesc ? "Price: High → Low ✓" : "Price: Low → High"}
              </button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3 habibi">Categories</h4>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                <button
                  onClick={() => {
                    setCategory("");
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    category === ""
                      ? "bg-gradient-to-r from-[#1e8a78] to-[#2a9d88] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      category === cat
                        ? "bg-gradient-to-r from-[#1e8a78] to-[#2a9d88] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-bold text-[#6c4370]">{filteredClasses.length}</span> courses found
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile/Tablet Filters */}
          <div className="lg:hidden flex flex-col sm:flex-row justify-between p-6 bg-gradient-to-r from-purple-50 to-teal-50 rounded-xl mb-6 gap-4 border border-white shadow-md">
            <button
              onClick={() => setPriceDesc(!priceDesc)}
              className="btn font-medium bg-[#6c4370] text-white hover:bg-[#8a5a8e] transition-colors"
            >
              {priceDesc ? "Price: High → Low" : "Sort by Price"}
            </button>

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentClasses.map((course) => (
              <div key={course._id} className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white">
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
                        className="buttonMore__icon-svg"
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
                        className="buttonMore__icon-svg buttonMore__icon-svg--copy"
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
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => goToPage(num)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  currentPage === num
                    ? "bg-gradient-to-r from-[#1e8a78] to-[#2a9d88] text-white shadow-lg scale-110"
                    : "bg-white text-[#1e8a78] hover:bg-[#e6f7f4] border-[#1e8a78]/30"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApprovedClasses;