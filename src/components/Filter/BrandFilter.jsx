/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import { useLocation } from "react-router-dom";
import useFilterData from "../../Hooks/useFilterData";

export default function BrandFilter({setSearchParams,searchParams}) {
  const [brands, setBrands] = useState([]);
  const [selctedBrand, setSelectedBrand] = useState();
  const [selctedModel, setSelectedModel] = useState();

  const {search} = useLocation()
  const Axios = useAxiosSecureV1();

  useEffect(() => { 
    fetch("/data/CarDetails.json")
      .then((res) => res.json())
      .then((data) => setBrands(data))  
      .catch((err) => console.log(err)); 
  }, []);

  useEffect(()=>{
    if(selctedBrand){ 
       setSelectedModel()
       setSearchParams(old=> {
         old.set("brand",brands[selctedBrand].name);
         old.delete('model')   
         return old         
       })             
    }
  },[selctedBrand]);  
  
  useEffect(()=>{
    if(selctedModel){
      
       setSearchParams(old=> {
         old.set("model",brands[selctedBrand].models[selctedModel].name);  
         return old         
       })             
    }
  },[selctedModel]);
 
  useEffect(()=>{
    if(!searchParams.get("brand")){
      setSelectedBrand();
      setSelectedModel()
    }
  },[search])
  
  return (
    <div>
      <div className="brands ">
       <h1 className="text-2xl  font-bold">Brands</h1>
       { brands.length > 0 &&
       <ul className="text-lg mt-5 space-y-2">
         {brands.map((ele,ind)=>{
           return <li onClick={()=>setSelectedBrand(ind.toString())} key={ind} className="flex gap-4 items-center cursor-pointer"><div className={`h-4 w-4 border-2 ${selctedBrand == ind && "bg-red-600" } border-red-600`}></div> {ele.name}</li>         
         })}
       </ul>}
      </div> 
      
     { selctedBrand &&  
     <div className="Models mt-10">
       <h1 className="text-2xl  font-bold">Models</h1>
       { brands.length > 0 &&
       <ul className="text-lg mt-5 space-y-2">
         {brands[selctedBrand].models.map((ele,ind)=>{
           return <li onClick={()=>setSelectedModel(ind.toString())} key={ind} className="flex gap-4 items-center cursor-pointer"><div className={`h-4 w-4 border-2 ${selctedModel == ind && "bg-red-600" } border-red-600`}></div> {ele.name}</li>         
         })}
       </ul>}
      </div>}

    </div>
  );
}
