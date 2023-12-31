import React from "react";
import { useAuth } from "../Context/AuthnicationContext";
import { useMood } from "../Context/TemplateMoodContext";

export default function TopHeader() {
  const { CurrentUser } = useAuth();
  const { Darkmood } = useMood();
  return (
    <div
      className={`w-full fixed top-0 text-xs md:text-base  text-white ${
        Darkmood ? "bg-[#0f1318]  z-[100]" : "bg-yellow-400  z-[100]"
      } `}
    >
      {/* bg-pink-400 */}
      <div className="container  mx-auto md:py-2 ">
        <div className="md:flex-row gap-2 py-2   flex-col items-center flex  text-center justify-between">
          <div className="contactinfo flex gap-5 cursor-pointer">
            <span>
              <i className="fa-solid fa-phone mr-2"></i>
              666 999 0000
            </span>
            <span>
              <i className="fa-light fa-envelope mr-2"></i> ku4306053@gmail.com
            </span>
          </div>
          <div className="contactinfo flex gap-5 cursor-pointer">
            <span>Contact</span>
            <span>Help</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
