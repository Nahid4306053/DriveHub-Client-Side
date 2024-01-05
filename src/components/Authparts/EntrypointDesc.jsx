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
          DriveHub - Chronicles: Crafting Your Epic Journey
          </h1>
          <p className="leading-8 text-lg">
          Experience the extraordinary at DriveHub, where your dreams take the driver's seat. "You Journey Your Way" is not just a tagline; it's our promise to elevate your travel escapades. Unleash the extraordinary with DriveHub—your gateway to unparalleled car rental experiences. Your dream car awaits, and every journey is a canvas for your unique story. Welcome to DriveHub, where adventure knows no bounds.
          </p>
        </div>
      </div>
    </div>
  );
}
