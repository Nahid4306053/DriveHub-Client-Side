/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TableFoot from "../../components/shared/TableFoot";
import SmallLoading from "../../components/shared/SmallLoading";
import SmallError from "../../components/shared/SmallError";
import useMyBookings from "../../Hooks/useMyBookings";
import ChangeStatus from '../../components/Dashboard/ManageCar/ChangeStatus'
import TableRow from "../../components/Dashboard/Bookings/TableRow";
import CancelBooking from "../../components/Dashboard/Bookings/CancelBooking";
import { toast } from "react-toastify";
import Pagetitle from "../../Hooks/Pagetitle";


export default function MyBookings() {
  const [page, setpage] = useState(1);
  const { MyBookings, error, isError, isLoading, isSuccess } = useMyBookings(page,8);

  const navigate = useNavigate();
  const handelpay = (status,id) =>{

    if(status === "Confirmed"){
      navigate(`/dashboard/payment/${id}`);
    }
    else if(status === "Pending"){
      toast.warning("wait for Admin Confirmation")
    }
    else{
      toast.error("Your Booking was Cancelled")
    }
  }
  return (

    <div className="Cars p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-red-600 clipshape2 shadow-lg">
         My Bookings
         <Pagetitle> My Bookings || DriveHub</Pagetitle>
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Brand Name</th>
              <th>Rent Date</th>
              <th>Total Price</th>
              <th>Car Status</th>
              <th>Book Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <tbody>
              {MyBookings.data.Cars.length > 0 ?
                MyBookings.data.Cars.map((ele) => {
                  return (
                    <TableRow key={ele._id} data={ele}>
                      <td>
                        <Link to={`/car-details/${ele._id}`}>
                          <button data-tip="View Full Info" className="btn text-info tooltip btn-ghost btn-xs text-lg " >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                       <CancelBooking id={ele._id}></CancelBooking>
                          <button onClick={()=>handelpay(ele.status,ele._id)} data-tip="Pay Now" className="btn text-red-400  tooltip btn-ghost btn-xs text-lg " >
                            <i className="fa-brands fa-amazon-pay "></i>
                          </button>
                      </td>
                    </TableRow>
                  );
                })
                : 
                <tr >
                <td colSpan={6} className="flex flex-col items-center my-10">
                  <h2 className="text-xl">No Data Found</h2>
                  <Link to="../../cars">
                    <button className="btn-sm btn bg-red-600 hover:bg-red-600 text-white">View Cars</button>
                  </Link>
                </td>
              </tr>
}
            </tbody>
          )}
          {MyBookings?.data?.totalData > 0 && (
            <TableFoot colSpan={6} page={page} setpage={setpage} totalData={MyBookings?.data?.totalData} ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
