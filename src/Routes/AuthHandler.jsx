/* eslint-disable react/prop-types */
import Lottie from "lottie-react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthnicationContext";
import big_loading from "../assets/big_loading.json";

export default function AuthHandler({ children }) {
  const { CurrentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className=" flex justify-center min-h-screen items-center w-full">
        <Lottie
          className="md:h-[500px] h-[300px]"
          animationData={big_loading}
        ></Lottie>
      </div>
    );
  } else {
    if (!CurrentUser) {
      return <>{children}</>;
    } else {
      return <Navigate to="/" />;
    }
  }
}
