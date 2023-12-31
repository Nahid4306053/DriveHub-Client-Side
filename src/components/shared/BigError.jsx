import Lottie from "lottie-react";
import React from "react";
import ErrorLoita from "../../assets/ErrorLoita.json";
export default function BigError({ children }) {
  return (
    <div className="bg-red-200   flex justify-center items-center  w-full">
      {/* {children} */}
      <div className="relative h-full">
        <Lottie animationData={ErrorLoita}></Lottie>
      </div>
    </div>
  );
}
