import axios from 'axios'
import React from 'react'



const instance = axios.create({
 baseURL:import.meta.env.VITE_API_URL_V1,
 withCredentials:true                   
})

export default function useAxiosPublicV1() {
  return instance
}
