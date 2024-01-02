/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import Input from "../../components/Input";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useAuth } from "../../Context/AuthnicationContext";
export default function BookingCar({ data }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const ClientQuery = useQueryClient();
  const {CurrentUser} = useAuth();
  
  const mutation = useMutation({
    mutationFn: async (formdata) => {
      const res = await AxiosSecureV1.post("/car/book", formdata);
      return res;
    },
      onSuccess: () => {
        Swal.fire({
          title: "Car Booked Successfully",
          text: "Now Confirm payment In dashboard My Boooking!",
          icon: "success",
        });
        ClientQuery.invalidateQueries("FullCarDetails")
      },
      onError : ()=>{
        toast.error("Failed to add Booking")
      }
    });

  const handelInfo = (form) => {
    form.preventDefault();
    const err = [];
    const Formdata = {};
    Formdata.PickUpDate = new Date(form.target.PickUpDate.value);
    Formdata.PickUpDate.setHours(0, 0, 0, 0);
    Formdata.PickUpDate = Formdata.PickUpDate.toISOString();

    Formdata.DropOffDate = new Date(form.target.DropOffDate.value);
    Formdata.DropOffDate.setHours(0, 0, 0, 0);
    Formdata.DropOffDate = Formdata.DropOffDate.toISOString();

    const pickUpDate = new Date(Formdata.PickUpDate);
    const dropOffDate = new Date(Formdata.DropOffDate);

    const timeDifference = dropOffDate - pickUpDate;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24) + 1;
    Formdata.totalPrice = daysDifference * data.price;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const formattedDate = today.toISOString();

    if (
      formattedDate > Formdata.PickUpDate ||
      formattedDate > Formdata.DropOffDate
    ) {
      err.push("PicUp and DropOff date Should be latest date");
      toast.error("PicUp and DropOff date Should be latest date");
    }

    if (Formdata.PickUpDate > Formdata.DropOffDate) {
      err.push("DropOff date Should be equal or greter then Pickup date");
      toast.error("DropOff date Should be equal or greter then Pickup date");
    }

    if (err.length === 0) {
      Formdata.carData = data._id;
      mutation.mutate(Formdata)
    }
  };
  return (
    <form onSubmit={handelInfo} className="mt-8 space-y-4">
      <Input type={"date"} name="PickUpDate" label={"PickUp Date"} required ></Input>
      <Input type={"date"} name="DropOffDate" label={"Drop off Date"} required ></Input>
      <div>
        <button disabled={(data.availabilityStatus  === "Available" ? false : true) || (CurrentUser && CurrentUser.role === "admin" ? true : false)} className="btn mt-3 bg-red-600 hover:bg-red-600 w-full text-white">{data.availabilityStatus  === "Available" ? "Rent Now" : data.availabilityStatus}  </button>
      </div>
    </form>
  );
}
