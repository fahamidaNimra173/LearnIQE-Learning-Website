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

  const handleEnrollment = (id) => {
    navigate(`/classdetails/${id}`);
  };

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
        {currentClasses.map((cls) => (
          <div
            key={cls._id}
            className="shadow-lg rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <img
              src={cls.image}
              alt={cls.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 bg-gradient-to-t from-[#1e8a78] via-fuchsia-100 to-pink-200 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-xl h-20 font-extrabold text-[#6c4370] text-center mb-3">
                {cls.title}
              </h3>

              <div>
                <div className="flex items-center border-b p-2 gap-2 text-gray-700 mb-2">
                  <FiUsers className="text-[#6c4370] w-7 h-7" />
                  <span>
                    <strong className="text-[#6c4370]">Enrollments:</strong>{" "}
                    {cls.totalEnroll}
                  </span>
                </div>
                <div className="flex items-center border-t p-2 gap-2 text-gray-700 mb-3">
                  <FiDollarSign className="text-[#6c4370] w-7 h-7" />
                  <span>
                    <strong className="text-[#6c4370]">Price:</strong> ৳{cls.price}
                  </span>
                </div>
              </div>

              <p className="text-[18px] font-medium mb-3 text-[#6c4370] flex-1">
                <span className="font-bold text-[#1e8a78]">Description:</span>{" "}
                {cls.description?.slice(0, 80)}...
              </p>

              <button
                onClick={() => handleEnrollment(cls._id)}
                className="mt-2 buttonMore"
              >
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
            className={`px-4 py-2 rounded-lg border ${
              currentPage === num
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
