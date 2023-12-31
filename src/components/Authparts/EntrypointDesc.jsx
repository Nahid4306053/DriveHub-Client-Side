/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import log_bg from "/images/login_bg.jpg";

export default function EntrypointDesc() {
  return (
    <div
      style={{
        backgroundImage: `url(${log_bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="hidden md:block md:col-span-3 lg:col-span-3 relative min-h-[700px] h-full  text-white "
    >
      <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
      <div className="relative p-10 z-10 flex items-end h-full  text-title">
        <div className="space-y-10">
          <h1 className="text-3xl">
          TaskOver - Elevate Your Productivity with Seamless Task Managemen
          </h1>
          <p className="leading-8 text-lg">
          Experience the next level of productivity with TaskOver, your go-to task management solution. Streamline your workflow, collaborate effortlessly, and achieve more with our intuitive platform. Say goodbye to chaos and hello to efficiency - TaskOver makes managing tasks a breeze!
          </p>
        </div>
      </div>
    </div>
  );
}
