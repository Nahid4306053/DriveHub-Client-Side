/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import useCarReview from "../../../Hooks/useCarReview.jsx";
import SmallLoading from "../../shared/SmallLoading";
import SmallError from "../../shared/SmallError";
import RiviewCard from "./RiviewCard";

export default function CarReview({ id }) {
  const { CarReview, error, isError, isLoading, isSuccess } =
    useCarReview(id);

  return isLoading ? (
    <div className="w-full flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
      CarReview.data?.length > 0 ? 
      <div className="reviews space-y-5 mt-5">
       {CarReview.data.map((ele,ind)=>{
         return  <RiviewCard key={ind} data={ele}></RiviewCard>    
       })}
      </div>
      :<div className="mt-5">No data found</div>
  );
}
