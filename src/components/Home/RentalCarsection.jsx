/* eslint-disable no-unused-vars */
import useCarsData from "../../Hooks/useCarsdata";
import CarDetailsCard from "../shared/CarDetailsCard";
import SectionTitle from "../shared/SectionTitle";
import SmallError from "../shared/SmallError";
import SmallLoading from "../shared/SmallLoading";

export default function RentalCarsection() {
  const { CarsData, error, isError, isLoading, isSuccess } = useCarsData(1,6)
  return (
    <div className="container mx-auto my-28">
     <div className="mb-24">
     <SectionTitle title={"Our Rental Fleets "} subtitle={"Elevating Your Journey with Our Exceptional Rental Fleets"} ></SectionTitle>
     </div>
     {isLoading ? (
          <div className="w-full flex justify-center">
               <SmallLoading />
          </div>
          ) : isError ? (
          <div className="w-full flex justify-center">
              <SmallError></SmallError>
           </div>
          ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {CarsData.data.Cars && CarsData.data.Cars.map((ele)=>{
              return <CarDetailsCard key={ele._id} data={ele}></CarDetailsCard>
            })}
          </div>
          )}
    </div>
  );
}
