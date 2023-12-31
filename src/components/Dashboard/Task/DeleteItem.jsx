/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function DeleteItem({ id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const Queryclient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => {
      const res = AxiosSecureV1.delete(`/task/${id}`);
      return res;
    },
    onSuccess: () => {
       Queryclient.invalidateQueries(['TodayTask', 'Tasks'])
      Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });
     
    },
    onError: (err) => {
      toast.error("Failed to Delete Task due to Server side error");
    },
  });
  const HandelDeleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
                    mutation.mutate()
      }
    });
  };
  return (
    <div
      onClick={HandelDeleteItem}
      data-tip="Delete task"
      className="btn btn-xs capitalize tooltip"
    >
      <i className="mt-1 fa-solid fa-trash-can"></i>
    </div>
  );
}
