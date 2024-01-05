import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthnicationContext";
import { useMood } from "../Context/TemplateMoodContext";
import "../Styles/Navbar.scss";
import UserAvatar from "./UserAvatar";
import logo from "/images/logo.png";
import { useEffect, useState } from "react";
export default function Navber() {
  const { CurrentUser } = useAuth();
  const [opentSticky,setSticky] = useState(false)
  const { Darkmood } = useMood();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cars">Our Cars</NavLink>
      </li>      
      <li>
        <NavLink to="/community">Community Hub</NavLink>
      </li>

      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  
  useEffect(()=>{
   const event =   window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
      setSticky(true)
     }
     else{
      setSticky(false)
     }
   })
   
   return ()=> event;
  },[]);

  return (
    <header
     style={{background:`${opentSticky ? "linear-gradient(#000000 , #0000007e)" : "none"}`}}
      className={`${
        Darkmood ? "" : " light"
      } ${opentSticky && " shadow-lg  " } fixed    w-full z-[100]`}
    >
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col container mx-auto">
          {/* Navbar */}
          <div className="w-full  flex  justify-between px-0   mx-auto navbar ">
            <div className="flex-1  capitalize text-2xl font-bold">
              <Link to="/">
                <img
                  className={`lg:h-16 py-2  ${Darkmood && "grayscale"}   h-16`}
                  src={logo}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal  font-Nunito mr-5 font-semibold text-lg">
                {links}
              </ul>
            </div>
            {!CurrentUser?.displayName && (
              <li>
                <NavLink className="text-lg font-Nunito font-bold" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
            {CurrentUser?.displayName && <UserAvatar />}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <i className="fa-solid mt-1 text-lg text-white fa-bars"></i>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side lg:hidden">
          <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
          <ul className="menu text-xl bg-red-200 relative font-bold text-center   p-4 w-80 min-h-full ">
            <div className="close z-50 absolute right-0 pr-5">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3">
                  <i className="fa-solid text-white fa-xmark"></i>
                </label>
              </div>
            </div>
            <label htmlFor="my-drawer-3">{links}</label>
          </ul>
        </div>
      </div>
    </header>
  );
}
