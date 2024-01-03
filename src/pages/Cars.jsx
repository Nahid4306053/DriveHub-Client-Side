/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useLocation, useSearchParams } from "react-router-dom";
import PageBanner from "../components/shared/PageBanner";
import BrandFilter from "../components/Filter/BrandFilter";
import { set } from "lodash";
import SelectOption from "../components/Filter/SelectOption";
import PriceFilter from "../components/Filter/PriceFilter";
import HandelFilter from "../components/Filter/HandelFilter";
import { useEffect } from "react";

export default function Cars() {
  const {search} = useLocation()                  
  const [searchParams,setSearchParams] = useSearchParams();      
 
  return (
                    
    <div>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/4jYH5j1/10001.jpg"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            Our Car Collections
          </h1>
          <h3 className="md:text-3xl text-xl text-white italic">
            Rent Your Dream Car Today - Seamless, Reliable, Unforgettable
          </h3>
        </div>
      </PageBanner>
      <div className="container my-28  mx-auto">
           <div className="grid grid-cols-12 gap-5">
            <div className="xl:col-span-3 lg:col-span-4 col-span-12 order-1 lg:order-0 rounded-md p-5">
               <SelectOption searchParams={searchParams} setSearchParams={setSearchParams}></SelectOption> 
               <PriceFilter searchParams={searchParams} setSearchParams={setSearchParams}></PriceFilter>    
               <BrandFilter searchParams={searchParams} setSearchParams={setSearchParams}></BrandFilter>
            </div>  
            <div className="xl:col-span-9 lg:col-span-8 col-span-12 order-0 lg:order-1">
            <HandelFilter ></HandelFilter>
            </div>
           </div>
           
      </div>
    </div>
  );
}
