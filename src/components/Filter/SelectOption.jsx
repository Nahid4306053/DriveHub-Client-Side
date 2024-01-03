/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function SelectOption({ searchParams, setSearchParams }) {
  const [addtime, setAddTime] = useState();
  const [status, setStatus] = useState();
  useEffect(() => {
    if (addtime) {
      setSearchParams((old) => {
        old.set("addtime", addtime);
        return old;
      });
    } else {
      setSearchParams((old) => {
        old.delete("addtime");
        return old;
      });
    }
    if (status) {
      setSearchParams((old) => {
        old.set("status", status);
        return old;
      });
    } else {
      setSearchParams((old) => {
        old.delete("status");
        return old;
      });
    }
  }, [addtime, status]);
  return (
    <div>
      <div className="time">
        <h1 className="text-2xl  font-bold">Add Time</h1>
        <select
          onClick={(e) => setAddTime(e.target.value)}
          className="select mt-3 border-black  focus:outline-none rounded-none text-black text-lg select-bordered w-full max-w-xs"
          
        >
          <option value="">Sort by Add time</option>
          <option value={"-1"}>New Cars</option>
          <option value={"1"}>Old Cars</option>
        </select>
      </div>
      <div className="Status my-10">
        <h1 className="text-2xl  font-bold">Status</h1>
        <select
          onClick={(e) => setStatus(e.target.value)}
          className="select mt-3 border-black focus:outline-none rounded-none text-black text-lg select-bordered w-full max-w-xs"
       
        >
          <option value="">Sort by Status</option>
          <option value={"Available"}>Available</option>
          <option value={"Booked"}>Booked</option>
        </select>
      </div>
    </div>
  );
}
