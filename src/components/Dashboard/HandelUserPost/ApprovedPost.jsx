/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
export default function ApprovedPost({ id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => {
    
      const res = AxiosSecureV1.patch(`/post/approve/${id}`, data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("UserPosts");
      Swal.fire({
        title: "Succsefull!",
        text: "The Post Approved succsefully",
        icon: "success",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("The Post Approve falied");
    },
  });
  const HandelStatus = (status) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You can't Revert it accept Remove It`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve It",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ status: status });
      }
    });
  };
  return (
  
      <button
        onClick={() => HandelStatus("Approved")}
        data-tip="Approved The Post"
        className="btn  text-xl tooltip text-success  btn-ghost btn-xs"
      >
        <i className="fa-solid fa-badge-check"></i>
      </button>
 
  );
}
