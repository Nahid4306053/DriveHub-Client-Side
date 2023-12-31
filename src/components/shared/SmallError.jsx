import Lottie from "lottie-react";
import React from "react";
import ErrorLoita from "../../assets/small_error.json";
export default function SmallError({ children }) {
  return (
    <div className="bg-red-100  rounded-lg  flex justify-center items-center w-full">
      {/* {children} */}
      <div className="relative h-full">
        <Lottie className="h-96" animationData={ErrorLoita}></Lottie>
      </div>
    </div>
  );
}
