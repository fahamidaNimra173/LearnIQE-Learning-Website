

import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import React from 'react';
import AxiosSecure from '../../Axios/AxiosSecure';
import Image from '../../assets/download__8_-removebg-preview.png'
import Image1 from '../../assets/pattern-3211733_1280-removebg-preview.png'


const CourseDetails = () => {
  const { id } = useParams();
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate()

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      return res.data;
    }
  });


  const handleEnrollment = (id) => {

    console.log('this is cli',id)
    navigate(`/payment/${id}`)
  }



  if (isLoading) return <div className="text-center py-10 font-bold">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load course details</div>;

  return (
    <div className='relative'>
      <div className='absolute inset-0 pointer-events-none bg-contain bg-no-repeat mt-72 mr-10 bg-center opacity-10' style={{
        backgroundImage: `url(${Image})`
      }}>


      </div>
      <div className="  px-4 py-32">
        <div className=" text-black  overflow-hidden">
          <div className='flex lg:flex-row-reverse flex-col-reverse gap-10 lg:px-25 items-center justify-center'>
            <img src={course.image} alt={course.title} className="w-full h-80   rounded-2xl object-cover" />
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#6c4370] text-center lg:text-left habibi dark:text-[#6c4370] mb-4">{course.title}</h2>
              <p className="text-md text-[#6c4370] font-medium text-[20px] text-center lg:text-left dark:text-[#6c4370] mb-2">
                <strong className='text-[#1e8a78] uppercase'>Category:</strong> {course.category}
              </p>
            </div>

          </div>

          <div className=" lg:px-25">

            <p className="lg:text-3xl text-2xl mt-10 mb-10 font-bold habibi text-center text-[#6c4370] dark:text-[#6c4370] ">
              Join the crowd! <span className='text-[#1e8a78]'>{course.totalEnroll || 0} </span> eager learners have already signed up for this course with <span className='text-[#1e8a78]'>{course.name}</span>.
              {/* <strong>Instructor:</strong> {course.name} ({course.email}) */}
            </p>



            <p className="lg:text-2xl text-[20px] my-10 text-[#6c4370] dark:text-[#6c4370] ">
              <strong className='text-[#1e8a78] lg:text-6xl text-3xl'>Description :</strong><span className='habibi'> {course.description}</span>
            </p>
            <div className='flex my-20 flex-col gap-5 lg:flex-row items-center justify-around'>
              <button
                onClick={()=>handleEnrollment(course._id)}
                className="buttonMore w-full ">
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
                Enroll Now</button>
              <button className="text-[20px] w-full text-white rounded-4xl  bg-[#6c4370] dark:bg-[#6c4370] px-10 py-2">
                <strong>Price:</strong> ৳{course.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CourseDetails;
