/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useLocation, useSearchParams } from "react-router-dom";
import PageBanner from "../components/shared/PageBanner";
import BrandFilter from "../components/Filter/BrandFilter";
import { set } from "lodash";
import SelectOption from "../components/Filter/SelectOption";
import PriceFilter from "../components/Filter/PriceFilter";
import HandelFilter from "../components/Filter/HandelFilter";
import { useEffect, useState } from "react";
import useFilterData from "../Hooks/useFilterData";
import SmallLoading from "../components/shared/SmallLoading";
import SmallError from "../components/shared/SmallError";
import CarDetailsCard from "../components/shared/CarDetailsCard";
import Pagination from "../components/Filter/Pagination";

export default function Cars() {
  const {search} = useLocation()                  
  const [searchParams,setSearchParams] = useSearchParams();      
  const [page,setpage] = useState(1);
  const {FilterData,error,isError,isLoading,isSuccess} = useFilterData(page,9,search || "?");

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
            <div className="xl:col-span-3 border-t-8 lg:col-span-4 col-span-12 order-1 lg:order-0  p-5">
               <SelectOption searchParams={searchParams} setSearchParams={setSearchParams}></SelectOption> 
               <PriceFilter searchParams={searchParams} setSearchParams={setSearchParams}></PriceFilter>    
               <BrandFilter searchParams={searchParams} setSearchParams={setSearchParams}></BrandFilter>
            </div>  
            <div className="xl:col-span-9 lg:col-span-8 col-span-12 order-0 lg:order-1">
            <HandelFilter totaldata={FilterData?.data.totalData}></HandelFilter>
            {isLoading ? (
          <div className="w-full flex justify-center">
               <SmallLoading />
          </div>
          ) : isError ? (
          <div className="w-full flex justify-center">
              <SmallError></SmallError>
           </div>
          ) : (
            FilterData.data.Cars.length > 0 ?  
          <>
           <div className="grid mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {FilterData.data.Cars && FilterData.data.Cars.map((ele)=>{
              return <CarDetailsCard customcss={"text-xl pt-20"} key={ele._id} data={ele}></CarDetailsCard>
            })}
            <div className="col-span-3 mt-14 mx-auto">
              <Pagination page={page} setpage={setpage} totalData={FilterData.data.totalData}></Pagination>
            </div>
          </div>
          </> 
          :
          <div className="text-2xl text-red-600 text-center mt-10">
            No Data Found 
          </div>
          )}
            </div>
           </div>
           
      </div>
    </div>
  );
}
