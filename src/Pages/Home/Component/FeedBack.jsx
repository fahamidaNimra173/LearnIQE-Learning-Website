import React from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Axios/AxiosSecure";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

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
      <div className="text-center text-lg py-10 text-[#fbbc2c]">
        No feedback available yet.
      </div>
    );
  }

  return (
    <div>
      <h2 className="uppercase md:text-4xl lg:text-6xl  text-2xl font-mono font-bold text-center text-[#ffffff] md:mt-30 mt-15  mb-12">
        What Our Students Say
      </h2>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/DDP6747Y/ai-generated-8337506-1280.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 "></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">


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
                <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl h-[400px] flex flex-col justify-center lg:gap-10 gap-6 text-center">
                  <div>
                    <div className='flex items-center  justify-center gap-5 '>
                      <img
                        src={item.userPhoto}
                        alt={item.name}
                        className="w-20 h-20  rounded-full mb-3 border-2 border-purple-300"
                      />
                      <h3 className="text-2xl max-h-24 my-0 righteous tracking-wider font-bold text-[#1e8a78] ">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[22px] font-mono flex  items-center justify-center gap-5  italic text-[#fbbc2c] mt-2">
                      <BiSolidQuoteLeft className="w-20 h-20 text-[#1e8a78]" />{item.description}<BiSolidQuoteRight className="w-20 h-20 text-[#1e8a78]" />
                    </p>
                  </div>
                  <p className="text-[18px] font-mono mb-10 text-[#fbbc2c] mt-3">
                    <span className="text-[#1e8a78] font-bold uppercase">Course~</span> <span className='font-mono'>{item.courseTitle}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
