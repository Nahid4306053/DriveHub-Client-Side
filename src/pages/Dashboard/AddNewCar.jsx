/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import UploadIMG from '../../Utils/UploadIMG'

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import HeadTitle from '../../components/shared/HeadTitle'
import Input from "../../components/Input";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import DragAndDropImg from "../../components/Dashboard/ManageCar/DragAndDropImg";


export default function AddNewCar() {
  const [err,setError] = useState()
  const formref = useRef()
  const [brands,setBrands] = useState([]);
  const [selctedBrand,setSelectedBrand] = useState();
  const [selctedModel,setSelectedModel] = useState();


  const Axios = useAxiosSecureV1()
  const navigate = useNavigate();
  // console.log(categories);     
  const mutation = useMutation({
    mutationFn : async (data)=>{
       const res = await Axios.post("/car/add",data);
       return res;
    },
    onSuccess : ()=>{
       toast.success("Car Added SuccessFully");
       navigate('/dashboard/manage-cars')
    },
    onError :(err)=>{
      toast.error(err.message)
    }
  }) 

  useEffect(()=>{
    fetch("/data/CarDetails.json").then(res=> res.json()).then(data=> setBrands(data)).catch(err=> console.log(err))
  },[])
  const { acceptedFiles, getRootProps, fileRejections, getInputProps, inputRef, } = useDropzone({ accept: { "image/jpeg": [], "image/png": [] }, maxSize: 1048576, maxFiles: 15, });
  const handelData = async (form) =>{
    form.preventDefault();
   const err = []; 
   const formData = {};
   
   const galleryimges = acceptedFiles;
 
   formData.price = form.target.price.value.trim();
 
    if(formData.price.trim() === "" ||formData.price.trim() < 1){
    toast.error("Please give a Postive Price Number");
    err.push("Please give a Postive Price Number");
    }
    if(!selctedBrand){
      toast.error("Please Select a brand");
      toast.error("Please Select a brand"); 
    }
    if (galleryimges.length < 3) {
      err.push("Upload Minimam 3 gallery img");
      toast.error("Upload Minimam 3 gallery img");
    }
    if(!selctedModel){
      toast.error("Please Select a Model");
       err.push("Please Select a Model"); 
    } 
    if(err.length === 0){

      try{
        let gallery = await Promise.all(
          [...Array(acceptedFiles.length).keys()].map(async (ele, ind) => {
            const result = await UploadIMG(acceptedFiles[ind]);
            if (result.data.data.display_url) {
              return result.data.data.display_url;
            }
          })
        );

        if(gallery.length === acceptedFiles.length){
          
          const {name:model,modelYears,fuelType,transmissionType} = brands[selctedBrand].models[selctedModel];
          mutation.mutate({...formData,gallery,brand:brands[selctedBrand].name , ...{model,modelYears,fuelType,transmissionType}});

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
      
    <form ref={formref} onSubmit={handelData} className="p-10"> 
    <HeadTitle></HeadTitle>
     <div className="bannerarea relative   w-full  rounded-lg overflow-hidden">
     <DragAndDropImg acceptedFiles={acceptedFiles} getRootProps={getRootProps} fileRejections={fileRejections} getInputProps={getInputProps} ></DragAndDropImg>       
     </div> 


      <div className="grid lg:grid-cols-2 gap-5 mt-5">

       <div className="form-control ">
          <label className="label"> <span className="label-text text-lg font-bold">Brand</span> </label>
          <select onChange={((e)=>(setSelectedBrand(e.target.value),setSelectedModel('')))} required className="select select-bordered w-full bg-transparent border-black text-black text-lg">
          <option value="">Select a Brand</option>
          {brands.length > 0 && brands.map((ele,ind)=>{
             return  <option value={ind} key={ele.id}>{ele.name}</option>      
          })}
        </select>
      </div>      
         
         {selctedBrand && <div className="form-control ">
          <label className="label"> <span className="label-text text-lg font-bold">Model</span> </label>
          <select onChange={((e)=>(setSelectedModel(e.target.value)))} required className="select select-bordered w-full bg-transparent border-black text-black text-lg">
          <option value="">Select a Model</option>
          {brands.length > 0 && brands[selctedBrand].models.map((ele,ind)=>{
             return  <option value={ind} key={ele.id}>{ele.name}</option>      
          })}

        </select>
        
        </div>}
         {  selctedModel && <Input label={"Model Years"} type={"text"}  placeholder={"Set Per Day Price"}  value={brands[selctedBrand].models[selctedModel].modelYears} readOnly></Input>
         }

         {  selctedModel && <Input label={"Fuel Type"} type={"text"}  placeholder={"Set Per Day Price"} value={brands[selctedBrand].models[selctedModel].fuelType} readOnly ></Input>
         }

         {  selctedModel && <Input label={"Transmission Type"} type={"text"}  placeholder={"Set Per Day Price"} value={brands[selctedBrand].models[selctedModel].transmissionType} readOnly ></Input>
         }

        <Input label={"Per Day Price ($)"} type={"number"} name="price"  placeholder={"Set Per Day Price "} required ></Input>
         
        <div className="col-span-2"><button className="btn w-full bg-red-600 text-white hover:bg-red-600 mt-5">Add now</button></div> 
       </div> 
       
    </form>
    </>
  )
}
