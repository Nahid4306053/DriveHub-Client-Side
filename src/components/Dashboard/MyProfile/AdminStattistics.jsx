import React from "react";
import useStatistics from "../../../Hooks/useStatitics";
import { FcBusinessman } from "react-icons/fc";
import SmallLoading from "../../shared/SmallLoading";
import SmallError from "../../shared/SmallError";
import { FcBinoculars } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

export default function AdminStattistics() {
  const { statistics, error, isError, isLoading, isSuccess } = useStatistics();
  const {totaluser,totalTourGuider,totalRevenue,totalBookings } = statistics?.data || {}
//   {InReview, Rejected, Accepted, Complited}
  return isLoading ? (
    <div className="w-full flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
    <div className="Statistic">
     <div className="grid gap-14 md:grid-cols-2 grid-cols-1">
      <div className="Card text-center flex flex-col items-center bg-white p-5 rounded-lg">
         <div className="icon text-9xl ">
         <FcBusinessman />         
         </div> 
         <h3 className="text-2xl font-bold">Total Tourist</h3>  
         <p className="text-xl mt-2">{totaluser < 10 ? "0"+totaluser : totaluser}</p>       
      </div>      
       <div className="Card text-center flex flex-col items-center bg-info text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcBinoculars />         
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total Tour Guider</h3>  
         <p className="text-xl mt-1">{totalTourGuider < 10 ? "0"+totalTourGuider : totalTourGuider}</p>       
      </div>               
     </div>
     <div className="Card mt-14 text-center flex flex-col items-center bg-success text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcBullish />        
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total Revenue</h3>  
         <p className="text-xl mt-1">${totalRevenue < 10 ? "0"+totalRevenue : totalRevenue}</p>       
      </div> 
      <div className=" Bookings my-14">
       <h1 className="mt-5 text-3xl font-bold">Bookings</h1>
         <div className="grid gap-14 grid-cols-1 md:grid-cols-2 mt-14">
      <div className="Card text-center flex flex-col items-center bg-warning text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcAbout />        
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total In Review</h3>  
         <p className="text-xl mt-1">{totalBookings.InReview < 10 ? "0"+totalBookings.InReview : totalBookings.InReview}</p>       
      </div>      
       <div className="Card text-center flex flex-col items-center bg-error text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcCancel />        
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total Rejected</h3>  
         <p className="text-xl mt-1">{totalBookings.Rejected < 10 ? "0"+totalBookings.Rejected : totalBookings.Rejected}</p>       
      </div>      
       <div className="Card text-center flex flex-col items-center bg-secondary text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcApproval />        
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total Accepted</h3>  
         <p className="text-xl mt-1">{totalBookings.Accepted < 10 ? "0"+totalBookings.Accepted : totalBookings.Accepted}</p>       
      </div>       
      <div className="Card text-center flex flex-col items-center bg-success text-white p-5 rounded-lg">
         <div className="icon text-9xl">
         <FcShipped />         
         </div> 
         <h3 className="text-2xl font-bold  mt-2">Total Completed </h3>  
         <p className="text-xl mt-1">{totalBookings.Complited < 10 ? "0"+totalBookings.Complited : totalBookings.Complited}</p>       
      </div>            
      </div></div>
   
    </div>
  );
}
