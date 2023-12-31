import axios from 'axios'
import React from 'react'
import { useAuth } from '../Context/AuthnicationContext';
import { useNavigate } from 'react-router-dom';


const instance = axios.create({
 baseURL:import.meta.env.VITE_API_URL_V1,
 withCredentials:true                   
})

export default function useAxiosSecureV1() {

  return instance
}
