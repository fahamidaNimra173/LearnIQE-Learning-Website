import React from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Axios/AxiosSecure";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FeedBack = () => {
  const axiosSecure = AxiosSecure();

  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/feedback");
      return res.data;
    },
  });

  if (!feedbacks || feedbacks.length < 1) {
    return (
      <div className="text-center text-lg py-10 text-purple-800">
        No feedback available yet.
      </div>
    );
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('https://i.ibb.co/DDP6747Y/ai-generated-8337506-1280.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl h-80 flex flex-col justify-between text-center">
                <div>
                  <img
                    src={item.userPhoto}
                    alt={item.name}
                    className="w-16 h-16 mx-auto rounded-full mb-3 border-2 border-purple-300"
                  />
                  <h3 className="text-lg font-bold text-purple-800">
                    {item.name}
                  </h3>
                  <p className="text-sm italic text-purple-700 mt-2">
                    “{item.description}”
                  </p>
                </div>
                <p className="text-sm text-purple-500 mt-3">
                  Course: {item.courseTitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedBack;
