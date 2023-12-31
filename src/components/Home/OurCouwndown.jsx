/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";

export default function OurCountDown({ customcss }) {
  return (
    <>
      <div className="bg-sky-500">
        <div className="rounded-lg container font-Montserrat mx-auto">
          <div className="   rounded-lg relative   text-white py-20   w-full">
            <div className="relative px-14 z-10 grid-cols-1 grid md:grid-cols-2 gap-8 lg:grid-cols-4">
              {" "}
              <div className="coundonw_item  text-center">
                {" "}
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="k+"
                  duration={10}
                  end={22}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />{" "}
                <p className="  mt-3">Professional Users</p>{" "}
              </div>{" "}
              <div className="coundonw_item  text-center">
                {" "}
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="k+"
                  duration={10}
                  end={84}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />{" "}
                <p className="  mt-3">Stored Task</p>{" "}
              </div>{" "}
              <div className="coundonw_item  text-center">
                {" "}
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="+"
                  duration={10}
                  end={25}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />{" "}
                <p className="  mt-3">Years Pass</p>{" "}
              </div>{" "}
              <div className="coundonw_item  text-center">
                {" "}
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="k+"
                  duration={10}
                  end={10}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />{" "}
                <p className="  mt-3">Pro Users</p>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-14 lg:my-28">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-1 lg:order-0 max-w-xl space-y-5">
            <h5 className="text-xl text-red-600font-semibold">
              Committed for the Long Run
            </h5>
            <h1 className="text-4xl font-bold max-w-">
              A Trusted Task Management Partner Built on Dedication
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              At DriveHub, we're in it for the long haul. With unwavering
              commitment, rest assured that we prioritize your trust over
              everything else. Unlike others, we'll never compromise our
              dedication by selling out to the highest bidder.
            </p>
          </div>
          <div className="flex-1 order-0 lg:order-1 bg-b">
            <img
              className="w-full mx-auto"
              src="https://i.ibb.co/LhHtpKn/Capture.png"
              alt="task"
            />
          </div>
        </div>
      </div>
    </>
  );
}
