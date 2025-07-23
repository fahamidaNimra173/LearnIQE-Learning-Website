import React from 'react';

// import { AuthContext } from '../../../Context/AuthContext';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import AxiosSecure from '../../../Axios/AxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const MyEnrollmentClassDetails = () => {
 const {id} = useParams();
 const{user}=useContext(AuthContext)
  const axiosSecure = AxiosSecure()
//   const navigate=useNavigate()

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${id}`);
      console.log("Response data", res.data);
      return res.data;
    }
  });
  console.log(id)
    if (isLoading) return <p>Loading enrollments...</p>;
    if (error) return <p>Something went wrong</p>;

    console.log(course)
    return (
        <div>
            <h1> this is:{course._id}</h1>
        </div>
    );
};

export default MyEnrollmentClassDetails;