/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useFullCarDetails from "../Hooks/useFullCarDetails";
import PageBanner from "../components/shared/PageBanner";
import SmallLoading from "../components/shared/SmallLoading";
import SmallError from "../components/shared/SmallError";
import Gallery from "../components/CarDetails/Gallery";
import BookingCar from "../components/CarDetails/BookingCar";
import Pagetitle from '../Hooks/Pagetitle'
import CarReview from "../components/Dashboard/Rating/CarReview";
export default function CarDetails() {
  const { id } = useParams();
  const { FullCarDetails, error, isError, isLoading, isSuccess } =
    useFullCarDetails(id);
  
  return isLoading ? (
    <div className="w-full flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
    <>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/4jYH5j1/10001.jpg"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            <Pagetitle> {FullCarDetails.data?.brand} {FullCarDetails.data?.model} || DriveHub </Pagetitle>
            {FullCarDetails.data?.brand} {FullCarDetails.data?.model}
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Rent  {FullCarDetails.data?.brand} {FullCarDetails.data?.model} Car Today - to make your dreams comes true
          </h3>
        </div>
      </PageBanner>
      <div className="mt-28 container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1">
           <div className="content_area col-span-2 lg:pr-14">
             <Gallery data={FullCarDetails.data?.gallery}></Gallery>  
             <div className="details mt-14">
               <div className="header text-2xl text-white p-3  bg-black font-semibold px-4 border-l-4 border-red-600">
                 Car Details
               </div>  
               <ul className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 text-xl">
                    <li > <i className="fa-regular fa-copyright mr-1 bg-red-600 w-10 text-center py-2 text-white"></i> <strong>Brand :</strong> {FullCarDetails.data?.brand} </li>
                    <li > <i className="fa-regular fa-tag mr-1 bg-red-600 w-10 text-center py-2 text-white"></i> <strong>Model :</strong> {FullCarDetails.data?.model} </li>
                    <li > <i className="fa-regular fa-calendar-days mr-1 bg-red-600 w-10 text-center py-2 text-white"></i> <strong>Model Years :</strong> {FullCarDetails.data?.modelYears} </li>
                    <li > <i className="fa-light fa-jug-bottle mr-1 bg-red-600 w-10 text-center py-2 text-white"></i> <strong>Fuel Type :</strong> {FullCarDetails.data?.fuelType} </li>
                    <li > <i className="fa-solid fa-key-skeleton-left-right mr-1 bg-red-600 w-10 text-center py-2 text-white"></i> <strong>Transmission Type :</strong> {FullCarDetails.data?.transmissionType} </li>
                   
               </ul>
               <div className="header text-2xl text-white p-3 mt-10  bg-black font-semibold px-4 border-l-4 border-red-600">
                Car Reviews
               </div>
               <CarReview id={id}></CarReview>
               <div className="p-16 bg-red-300 text-white mt-10 space-y-4">
                    <h3 className="text-2xl font-bold">Do you want some modifications or schedule a test drive ?</h3>
                    <p>Integer tor bibendum estnu faucibus gravida aliquam nu lectus lacina lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="flex justify-end"><button className="btn btn-outline rounded-none border-r-4 border-white text-white">Send Details</button></div>
               </div>   
             </div>  
           </div>
           <div className="BookingArea ">
             <div className="bg-black text-center text-3xl text-white font-semibold border-l-4 border-red-600 p-3">
              <h1 > ${FullCarDetails.data?.price} <span className="text-xs">/Per Day</span></h1>
             </div>  
             <BookingCar data={FullCarDetails.data}></BookingCar>      
           </div>
        </div>
      </div>
    </>
  );
}
