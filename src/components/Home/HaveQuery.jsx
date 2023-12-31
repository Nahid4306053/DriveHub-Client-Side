import React from "react";
import { Link } from "react-router-dom";

export default function HaveQuery() {
  return (
    <div className="bg-emerald-400min-h-[500px] py-14 flex items-center text-center">
      <div className="container mx-auto">
        <div className="space-y-5">
          <h1 className="text-2xl  text-yellow-400 ">Have any Question?</h1>
          <h1 className="text-5xl text-white ">Get In touch With US</h1>
        </div>
        <div className="mt-10 space-x-5 md:space-x-10 text-yellow-400 ">
          <Link to="/contact">
            {" "}
            <button className="btn bg-yellow-400     hover:bg-sky-400 border-none   btn-lg md:translate-x-[10%]  md:pr-20 rounded-none text-white clipshaper">
              Contact us
            </button>
          </Link>
          <button className="btn clipshapel  hover:bg-yellow-400  bg-sky-400  border-none text-white md:-translate-x-[20%]   btn-lg rounded-none text-red-90 md:pl-14">
            Mail us
          </button>
        </div>
      </div>
    </div>
  );
}
