
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1"
import SmallLoading from "../shared/SmallLoading";
import SmallError from "../shared/SmallError";
import StatisticCard from "./StatisticCard";

export default function Statitics() {
  const Axios = useAxiosSecureV1();
  const {data:statistic,isError,isLoading,isSuccess,error} = useQuery({
     queryFn : async()=>{
        const res = await Axios.get("/statitics");
        return res
     }
  });
  
  return (
    <div className="p-14">
              {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : ( 
           <>         
          <div className="user grid grid-cols-1 mt-5 md:grid-cols-2 gap-14">
            <StatisticCard icon={<i className="fa-solid fa-user"></i>} title={"Total User"}> 
            <p className="text-xl">{statistic.data.totaluser > 9 ?statistic.data.totaluser : "0"+statistic.data.totaluser}</p></StatisticCard>             
            <StatisticCard icon={<i className="fa-regular fa-chart-line-up"></i>} title={"Total Revinue"}> <p className="text-xl">${statistic.data.totalRevenue}</p></StatisticCard>  
          </div>          
          <div className="user grid grid-cols-1 mt-14  md:grid-cols-2 lg:grid-cols-3 gap-14">
             <div className="col-span-3 text-3xl font-bold"> Car Status: </div>       
            <StatisticCard icon={<i className="fa-solid fa-car"></i>} title={"Available"}> 
            <p className="text-xl">{statistic.data.cars.Available > 9 ?statistic.data.cars.Available : "0"+statistic.data.cars.Available}</p></StatisticCard>              
            <StatisticCard icon={<i className="fa-solid fa-cart-circle-check"></i>}  title={"Booked"}> 
            <p className="text-xl">{statistic.data.cars.Booked > 9 ?statistic.data.cars.Booked : "0"+statistic.data.cars.Booked}</p></StatisticCard>              
            <StatisticCard icon={<i className="fa-solid fa-car-burst"></i>} title={"Maintenance"}> 
            <p className="text-xl">{statistic.data.cars.Maintenance > 9 ? statistic.data.cars.Maintenance : "0"+statistic.data.cars.Maintenance}</p></StatisticCard>             
  
          </div>         
           <div className="user grid grid-cols-1 mt-14  md:grid-cols-2 lg:grid-cols-3 gap-14">
             <div className="col-span-3 text-3xl font-bold"> Booking Status: </div>       
            <StatisticCard icon={<i className="fa-solid fa-spinner-scale"></i>} title={"Pending"}> 
            <p className="text-xl">{statistic.data.totalBookings.Pending > 9 ?statistic.data.totalBookings.Pending : "0"+statistic.data.totalBookings.Pending}</p></StatisticCard>             
             <StatisticCard icon={<i className="fa-solid fa-ban"></i>} title={"Cancelled"}> 
            <p className="text-xl">{statistic.data.totalBookings.Cancelled > 9 ?statistic.data.totalBookings.Cancelled : "0"+statistic.data.totalBookings.Cancelled}</p></StatisticCard>              
            <StatisticCard icon={<i className="fa-solid fa-badge-check"></i>} title={"Confirmed"}> 
            <p className="text-xl">{statistic.data.totalBookings.Confirmed > 9 ?statistic.data.totalBookings.Confirmed : "0"+statistic.data.totalBookings.Confirmed}</p></StatisticCard>              
            <StatisticCard icon={<i className="fa-regular fa-money-check-dollar-pen"></i>}  title={"Complited"}> 
            <p className="text-xl">{statistic.data.totalBookings.Complited > 9 ?statistic.data.totalBookings.Complited : "0"+statistic.data.totalBookings.Complited}</p></StatisticCard>              
           
  
          </div>
          </>
          )
          }
    </div>
  )
}
