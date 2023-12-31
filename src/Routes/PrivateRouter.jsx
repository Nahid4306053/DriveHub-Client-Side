import Lottie from "lottie-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthnicationContext";
import ScrollTop from "../Hooks/ScrollTop";
import big_loading from "../assets/big_loading.json";
export default function PrivateRouter({ children }) {
  ScrollTop(0, 0);
  const { CurrentUser, loading } = useAuth();
  const { pathname } = useLocation();
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
    if (CurrentUser) {
      return <>{children}</>;
    } else {
      return <Navigate state={{ Vpath: pathname }} to="/login" />;
    }
  }
}
