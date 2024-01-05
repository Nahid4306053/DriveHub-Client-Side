/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";

import UploadIMG from '../../Utils/UploadIMG'
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxiosSecureV1";
import Input from "../../components/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Pagetitle from "../../Hooks/Pagetitle";


export default function HandelJourneyPost() {
  const [err,setError] = useState()
  const formref = useRef()
  const navigate = useNavigate()
  const [uploadedImg,SetImg] = useState('https://i.ibb.co/TvmQZ3G/placeholder.png') ;
  const Axios = useAxios()
    
  const mutation = useMutation({
    mutationFn : async (data)=>{
       const res = await Axios.post("/post",data);
       return res;
    },
    onSuccess : ()=>{
       toast.success("Your Post Publish Successfully");
       formref.current.reset();
       SetImg('https://i.ibb.co/TvmQZ3G/placeholder.png');
       navigate("/dashboard/my-posts");
    },
    onError :(err)=>{
      toast.error(err.message)
    }
  }) 
  
  const handelData = async (form) =>{
    form.preventDefault();
   const err = []; 
   const formData = {};
   formData.title = form.target.title.value;
   const banner = form.target.banner.files;
   formData.description = form.target.description.value;
   const type = ['image/jpeg','image/png','image/jpg']
   if(!banner || banner.length > 1 || !type.includes(banner[0].type)){
    toast.error("Upload A banner img with type .jpg .png .jpeg");
    err.push("Upload A banner img with type .jpg .png .jpeg");
   } 
    if(formData.title.trim() === "" || formData.description.trim() === "" ){
    toast.error("All field Are Required");
    err.push("All field Are Required");
    }
    if(formData.description.trim().length  < 150){
      toast.error("Description Should be minimam 150 charecter");
       err.push("Description Should be minimam 150 charecter"); 
    } 
    if(err.length === 0){
      try{
        const uploadIMG = await UploadIMG(banner[0]);
        if(uploadIMG.data.data.display_url){
          formData.banner = uploadIMG.data.data.display_url;
          mutation.mutate(formData);
        }
        else{
          toast.error("A problem occured whene save img")
        }

      }catch(err){
        toast.error(err.message)
      }    
    }
  }
  return (
    <>
   <Pagetitle>Handel Posts || DriveHub</Pagetitle>
    <form ref={formref} onSubmit={handelData} className="p-10">
     <div className="bannerarea relative w-full rounded-lg overflow-hidden">
      <img src={uploadedImg} className="h-full obc w-full object-cover" 
       alt="" />    
      <input name="banner" required  onChange={(e)=>SetImg(URL.createObjectURL(e.target.files[0]))}  className="absolute top-0 h-full w-full cursor-pointer opacity-0"  type="file" accept="image/jpeg,image/png,image/jpg" />         
     </div> 
      <div className="mt-5 ">Click on Banner to Upload Banner Img </div> 
      <div className=" gap-5 mt-5">
       <Input placeholder={"Post Title"}  required id="title" label="Post Title" type="text" name="title" /> 

       <div className="form-control col-span-2">

          <label className="label"> <span className=" mt-5 label-text text-lg font-bold">Description</span> </label>

          <textarea required rows={5} className="textarea placeholder:text-black bg-transparent text-lg textarea-bordered border-black" name="description" placeholder="Share Your Journey Story With Our Car"></textarea>

         <button className="btn bg-red-600 text-white hover:bg-red-600 mt-10">Publish now</button>
        </div>
       
       </div> 
    </form>
    </>
  )
}
