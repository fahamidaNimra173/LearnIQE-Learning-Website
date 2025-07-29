import axios from 'axios';
import React from 'react';




const axiosSecure = axios.create({
  baseURL: 'https://edu-web-server-brown.vercel.app',
 
});
const AxiosSecure = () => {
    return axiosSecure
};

export default AxiosSecure;