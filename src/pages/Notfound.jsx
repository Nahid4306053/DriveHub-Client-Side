import Lottie from "lottie-react";
import React from "react";
import { Link, useLocation, useRouteError } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import notfound from "../assets/404-not-found.json";

export default function Notfound() {
  const { status, data, statusText } = useRouteError();
  const { pathname } = useLocation();
  return (
    <>
      <Pagetitle>{statusText} - DriveHub</Pagetitle>
      <div className=" min-h-screen bg-red-100 mx-auto flex h-[90vh] text-center flex-col justify-center items-center ">
        <Lottie className="max-h-[500px]" animationData={notfound} alt="" />

        <div className="-translate-y-10">
          <p className="text-xl my-5">{data}</p>
          <Link
            to={pathname.includes("/dashboard") ? "/dashboard/profile" : "/"}
          >
            <button className="btn bg-red-600  btn-lg text-white hover:bg-red-600  mt-5">
              {pathname.includes("/dashboard")
                ? "Go to Dashboard"
                : "Go to Home Page"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
