/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useCheckBooking from "../../Hooks/useCheckBooking";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import { Divider } from "@mui/material";
import PaymentCardForm  from '../../components/Payment/PaymentCardForm'
// import { Divider } from '@mui/material'
// import { toast } from 'react-toastify'

export default function Payment() {
  const { id } = useParams();
  const { BookingData, error, isLoading, isSuccess, isError } =
    useCheckBooking(id);
  const date = new Date();
        date.setHours(0,0,0,0);
        const current_date = date.toISOString()
       
  return (
    <div className="p-5">
      <div className="flex items-center flex-col justify-center">
        <h1 className="p-5 text-white px-10 text-2xl text-center  bg-red-600  clipshape2 shadow-lg">
          Payment
        </h1>
        <div className="mt-10">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : BookingData.data ? (
            <div className="max-w-lg p-2 mb-10">
              <div className="packagedetails">
                <img
                  src={BookingData.data.carData?.gallery[0]}
                  alt=""
                />
                <h2 className="packName mt-4 text-lg flex justify-between">
                  <strong>Car: </strong>
                  {BookingData.data.carData?.brand + " " }
                  {BookingData.data.carData?.model}
                </h2>
                <h2 className="packName mt-2 text-lg flex justify-between">
                  <strong>Price: </strong> $
                  {BookingData.data.totalPrice}
                </h2>
                {BookingData.data.PickUpDate > current_date ? (
                  <div>
                    <Divider sx={{my:3}} /> 
                  <h2 className='packName mt-3 text-lg flex justify-between'><strong>Total Pay: </strong>${BookingData.data.totalPrice}</h2> 
                  <PaymentCardForm totalpay={BookingData.data.totalPrice} booking_id={BookingData.data._id} carid={BookingData.data.carData._id} PickUpDate={BookingData.data.PickUpDate} DropOffDate={BookingData.data.DropOffDate}></PaymentCardForm>
                  </div>
                ) : (
                  <h2 className="text-red-500 text-lg mt-2">
                    The Date is Over
                  </h2>
                )}
              </div>
            </div>
          ) : (
            <h1 className="text-2xl text-center text-red-500">
              Invalid Booking Id
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
