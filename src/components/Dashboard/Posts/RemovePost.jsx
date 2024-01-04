/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function RemovePost({ id }) {
  const AxioSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await AxioSecureV1.delete(`/post/remove/${id}`);
      return res;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries(["MyPosts","useUpcomingBook"]);
      Swal.fire({
        title: "Removed!",
        text: "The Post Removed Successfully",
        icon: "success",
      });
   
    },
    onError: () => {
      toast.error("The Posts Remove Failed");
    },
  });
  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate();
      }
    });
  };
  return (
    <button
      onClick={handelDelete}
      data-tip="Remove Post"
      className="btn text-red-600 tooltip btn-ghost btn-xs text-lg "
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
