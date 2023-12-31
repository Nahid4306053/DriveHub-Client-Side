import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

export default function UploadIMG(file) {
  const formdata = new FormData()                  
    formdata.append('image',file) 
  

  return  axios.post(import.meta.env.VITE_IMGBB_UPLOAD_URL,formdata,{ headers:{ "Content-Type":"multipart/form-data" } })
  
}
