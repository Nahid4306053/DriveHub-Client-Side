/* eslint-disable react/prop-types */
// import React from "react";
import moment from "moment";

import "../scss/Popularpost.scss";
import { Link } from "react-router-dom";
export default function PopularpostCard({data}) {
 
  return (
    <div className="media flex gap-4  mt-4">
      <Link to={`/post/${data?._id}`}>
         <img className="h-16 object-cover w-24" src={data?.banner} alt="" />
      </Link>
      <div className="media-body">
        <div className="p-0 flex ">
          <p className="text-[#002347] font-semibold">
            <Link to={`/post/${data?._id}`}>{data?.title}</Link>
          </p>
        </div>
        <p style={{ marginTop: "2px", fontSize: "14px" }}>{data?.createdAt ? moment(data?.createdAt, "YYYYMMDDHHss").fromNow() : ""}</p>
      </div>
    </div>
  );
}
