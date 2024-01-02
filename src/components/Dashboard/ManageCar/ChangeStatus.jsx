/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
import { toast } from "react-toastify";

export default function ChangeStatus({ id, status }) {
  const [newStatus,SetNewStatus] = useState(status);
  const AxioSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn : async ()=>{
      const res = await AxioSecureV1.patch(`/car/status/${id}`,{availabilityStatus:newStatus});
      return res ;
    },
    onSuccess : () =>{
      QueryClient.invalidateQueries("CarsData")
      toast.success("The Status Changed Successfully")
    },
    onError : () =>{
      toast.error("The Status Changed Failed")
    }
  })
  return (
    <div className=" dropdown dropdown-top dropdown-end">
      <button
        data-tip="Change Status "
        className="btn text-red-600 tooltip btn-ghost btn-xs text-lg "
      >
        <i tabIndex={0} className="fa-solid fa-swap-arrows"></i>
      </button>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact rounded-none w-64 p-2 shadow text-primary-content bg-base-300"
      >
        <div className="card-body">
          <select value={newStatus}  onChange={(e)=>SetNewStatus(e.target.value)} className="select text-red-600 focus:outline-none select-error w-full max-w-xs">
            <option value={"Available"}>Available</option>
            <option value={"Booked"}>Booked</option>
            <option value={"Maintenance"}>Maintenance</option>
          </select>
          <div className="flex justify-end">
             <button onClick={()=>mutation.mutate()} disabled={newStatus === status ? true : false} className="btn-sm btn mt-2 btn-error capitalize text-white">Change</button>
          </div> 
        </div>
      </div>
    </div>
  );
}
