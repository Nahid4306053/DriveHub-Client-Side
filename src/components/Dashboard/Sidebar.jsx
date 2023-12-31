/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthnicationContext";
import { useStartTyping } from "react-use";
import AddTask from "../../pages/Dashboard/AddTask";
import { useMood } from "../../Context/TemplateMoodContext";
import { ToastContainer } from "react-toastify";
import Search from "../../pages/Dashboard/Search";


export default function Sidebar() {
  const {Darkmood} = useMood()
  const { CurrentUser } = useAuth();
  const [modeltype,setmodleType] = useState();

  const handelOpenModel = (type)=>{
    setmodleType(type);
    document.getElementById('handelinfo').showModal()       
  } 
   const CloseModel = ()=>{
    setmodleType('');
    document.getElementById('handelinfo').close()       
  }

  return (
   <>
    <div className="pt-10  text-white">
      <div className="sidebar main_NavLinks space-y-1 text-lg font-sem ">
        <div className="xl:w-[90%]  w-[73%]  mx-auto ">
          <NavLink className="px-5" to="/dashboard/profile">
            <i className=" md:ml-1 ml-[2px]  fa-light fa-user-vneck mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">My Profile</span>
          </NavLink>
        </div>        
         <div onClick={()=>handelOpenModel("search Task")}  className=" xl:w-[90%]  w-[73%]  mx-auto ">
          <a className="px-5 cursor-pointer " >
            <i className=" md:ml-1 ml-[2px]  fa-regular fa-magnifying-glass mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">Search Task</span>
          </a>
        </div>         
        <div onClick={()=>handelOpenModel("add task")}  className="xl:w-[90%]  w-[73%]  mx-auto ">
          <a className="px-5 cursor-pointer" >
            <i className=" md:ml-1 ml-[2px]  fa-regular fa-square-plus mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">Add New Task</span>
          </a>
        </div>     

         <div  className=" xl:w-[90%]  w-[73%]  mx-auto ">
          <NavLink className="px-5" to="/dashboard/todays-task">
            <i className=" md:ml-1 ml-[2px]  fa-sharp fa-regular fa-calendar-day mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">Todays  Task</span>
          </NavLink>
        </div>         

        <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
          <NavLink className="px-5" to="/dashboard/my-task">
            <i className=" md:ml-1 ml-[2px]  fa-regular fa-square-list mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">My All Tasks</span>
          </NavLink>
        </div>
      </div>

      <div className="divide h-[1px] my-7 lg:my-5 bg-white "></div>
      <div className="others_NavLinks  text-lg font-sem ">
        <div className="xl:w-[90%]  w-[73%]  mx-auto">
          <NavLink className="px-5 py-3" to="/">
            <i className=" md:ml-1 ml-[2px]  fa-solid fa-house mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">Home</span>
          </NavLink>
        </div>

        <div className="xl:w-[90%]  w-[73%]  mx-auto">
          <NavLink className="px-5  py-3" to="/dashboard/announcements">
            <i className=" md:ml-1 ml-[2px]  fa-solid fa-tty mr-2 w-5"></i>
            <span className=" manu_item text-start lg:inline">New Offers </span>
          </NavLink>
        </div>

        <div className="xl:w-[90%]  w-[73%]  mx-auto">
          <NavLink className="px-5 py-3" to="/dashboard/settings">
            <i className=" md:ml-1 ml-[2px]  fa-regular fa-gear mr-2 w-5"></i>
            <span className="manu_item lg:inline">Settings</span>
          </NavLink>
        </div>
      </div>
    </div>


     <dialog style={{zIndex:"10"}} id="handelinfo" className="modal">
     <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
       <div className={`modal-box ${Darkmood ? "bg-blue-900" : ""}  w-11/12 max-w-5xl`}>
        
           <div onClick={CloseModel} className="btn btn-sm btn-circle h bg-base-300  absolute right-2 top-2">✕</div>
        
         <div className="mt-5">
          {modeltype === "add task" && <AddTask CloseModel={CloseModel}></AddTask>}
          {modeltype === "search Task" && <Search CloseModel={CloseModel}></Search>}
         </div>
       </div>
     </dialog>
    </>
  );
}
