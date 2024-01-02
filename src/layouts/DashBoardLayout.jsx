import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMood } from "../Context/TemplateMoodContext";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";

export default function DashBoardLayout() {
  const contineref = useRef();
  const scrollto = () => {
    contineref.current.scrollTop = 0;
  };
  const { Darkmood } = useMood();
  return (
    <div
      className={`h-screen flex justify-center items-center w-screen ${
        Darkmood ? "bg-blue-950  " : "bg-red-100"
      }  shadow-2xl shadow-black`}
    >
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="2xl:w-10/12 lg:w-11/12 mx-auto">
        <div className="h-[600px] md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden bg-base-50 ">
          <div className="header w-full h-[10%] md:h-[10%] bg-base-200 shadow-lg">
            <Header></Header>
          </div>
          <div className="mainpart flex h-[85%] md:h-[90%]">
            <div
              className={`sidebar text-center lg:text-start overflow-y-auto  w-[80px] xl:w-3/12 2xl:w-1/5 ${
                Darkmood ? "bg-slate-900" : "bg-red-400"
              }  bg-red-600  `}
            >
              <Sidebar></Sidebar>
            </div>
            <div
              ref={contineref}
              className={`custom-scrollbar contentpart overflow-y-auto w-full  xl:w-4/5 2xl:w-4/5 h-full bg-opacity-50  ${
                Darkmood ? "bg-base-100" : "bg-red-200"
              } `}
            >
              <Outlet scrollto={scrollto}></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
