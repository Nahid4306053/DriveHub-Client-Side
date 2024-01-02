/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function MangeBookingsStatus({ id }) {
  const AxioSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await AxioSecureV1.patch(`/car/book/status/${id}`,data);
      return res;
    },

    onSuccess: () => {
      QueryClient.invalidateQueries(["MyBookings","Bookings"]);
      Swal.fire({
        title: "Success!",
        text: "The Booking Status Changed Successfully",
        icon: "success",
      });
    },

    onError: () => {
      toast.error("The Booking Status Change Failed");
    },
    
  });
  const handelStatus = (status) => {
    if(status  === "Cancelled"){
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Cancel Booking",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          mutation.mutate({status:status});
        }
      });
    }
    else{
      mutation.mutate({status:status})
    }

  };
  return (
   <>
    <button onClick={()=>handelStatus('Confirmed')} data-tip="Confirme Booking" className="btn text-success tooltip capitalize btn-ghost btn-xs text-lg " >
      <i className="fa-solid fa-circle-check"></i>
    </button>    

    <button onClick={()=>handelStatus('Cancelled')} data-tip="Cancel Booking" className="btn text-red-600 tooltip capitalize btn-ghost btn-xs text-lg " >
      <i className="fa-solid fa-ban"></i>
    </button>
    </>
  );
}
