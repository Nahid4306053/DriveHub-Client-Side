/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
export default function PriceFilter({searchParams,setSearchParams}) {
  const [minPrice, set_minPrice] = useState(25);
  const [maxPrice, set_maxPrice] = useState(500);
  const handleInput = (e) => {
    set_minPrice(e.minValue);
    set_maxPrice(e.maxValue);
  };
  useEffect(()=>{
    if(minPrice || maxPrice){
      
      setSearchParams(old=> {
        old.set("minPrice",minPrice);  
        old.set("maxPrice",maxPrice);  
        return old         
      })             
   }
   else{
    set_maxPrice(500);
   }

  },[minPrice,maxPrice]);

  return (
    <div className="App my-10">
       <h1 className="text-2xl mb-3 font-bold">Price Per Day</h1>
        <MultiRangeSlider
        min={25}
        max={500}
        step={5}
        style={{boxShadow:"none",borderRadius:"0px",background:"none", padding:"20px"}}
        minValue={minPrice}
        maxValue={maxPrice}
        onInput={(e) => { handleInput(e) }}
      />
    </div>
  );
}
