import axios from 'axios';
import React from 'react';




const axiosSecure = axios.create({
  // baseURL: 'https://edu-web-server-brown.vercel.app',
    baseURL: 'http://localhost:5000',
 
});
const AxiosSecure = () => {
    return axiosSecure
};

export default AxiosSecure;