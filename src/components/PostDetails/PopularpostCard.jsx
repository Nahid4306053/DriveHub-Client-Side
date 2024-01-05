/* eslint-disable react/prop-types */
// import React from "react";
import moment from "moment";


import { Link } from "react-router-dom";
export default function PopularpostCard({data}) {
 
  return (
     <div className="media bg-base-300 p-2 rounded-lg flex gap-4  mt-4">
      <Link to={`/community/post-details/${data?._id}`}>
         <div className="h-16  w-24">
         <img className="h-full w-full object-cover" src={data?.banner} alt="" />
         </div>
      </Link>
      <div className="media-body">
        <div className="p-0 flex ">
          <p className="text-[#002347] hover:text-red-400 cursor-pointer font-semibold">
            <Link to={`/community/post-details/${data?._id}`}>{data?.title}</Link>
          </p>
        </div>
        <p style={{ marginTop: "2px", fontSize: "14px" }}>{data?.createdAt ? moment(data?.createdAt, "YYYYMMDDHHss").fromNow() : ""}</p>
      </div>
    </div>
  );
}
