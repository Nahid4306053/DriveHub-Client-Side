import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import big_loading from '../../assets/big_loading.json'
import Lottie from "lottie-react";
export default function Bigloading() {
  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
     <Lottie className="md:h-[500px] h-[300px]" animationData={big_loading}></Lottie>
    </div>
  );
}
