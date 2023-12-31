/* eslint-disable no-unused-vars */

import { useLocation } from "react-router-dom";
import { useMood } from "../Context/TemplateMoodContext";
import "../styles/footer.scss";

import logo from "/images/color-logo.png";
export default function Footer() {
  const { Darkmood } = useMood();
  const { pathname } = useLocation();
  const paths = ["/login", "/signup", "/dashborder"];
  return (
    <>
      <footer className={`  ${Darkmood ? "bg-base-300" : " bg-[#dfe6e9]"} `}>
        <div className="grid  mt-10  container gap-8 mx-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="about_info  mt-10">
            <img
              className={`h-14 opacity-75 ${Darkmood && "grayscale"}`}
              src={logo}
              alt=""
            />
            <br />
            <div className="info mt-2 flex gap-4 items-center">
              <div className="location">
                <p className="text-md text-gray-500 ">
                  Join the Thriving Community Embracing DriveHub for Streamlined
                  Work and Life Organization.
                </p>
              </div>
            </div>
          </div>
          <div className="links mt-10">
            <h1 className="shops mt-4 text-xl font-bold text-red-600  ">
              Features
            </h1>
            <ul className="mt-8 w-auto ">
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                How It Works
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                For Teams
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Sale and Special offers
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Pricing
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Templates
              </li>
            </ul>
          </div>
          <div className="links mt-10">
            <h1 className="shops mt-4 text-xl font-bold text-red-600  ">
              Resources
            </h1>
            <ul className="mt-8 w-auto ">
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Help Center
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Productivity Methods
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Integrations
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Channel Partners
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Developer API
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Status
              </li>
            </ul>
          </div>

          <div className="links mt-10">
            <h1 className="shops mt-4 text-xl font-bold text-red-600  ">
              Company
            </h1>
            <ul className="mt-8 w-auto ">
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                About Us
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Careers
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Inspiration Hub
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Press
              </li>
              <li className="leading-10 hover:text-red-600  hover:underline cursor-pointer">
                Twist
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"></div>
        <div className={`coppwright  bg-[#b2bec36f]  `}>
          <div className="container text-center py-6 mx-auto mt-10 flex-col gap-5 lg:flex-row  justify-between items-center">
            <span className="text-sm ">
              © {new Date().getFullYear()}
              <a href="#" className="hover:underline">
                DriveHub™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
