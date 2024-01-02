/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";


import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
export default function HandelRole({ role, id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
      const res = AxiosSecureV1.patch(`/user/role/${id}`, data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("UserDatas");
      Swal.fire({
        title: "Succsefull!",
        text: "The role changed succsefully",
        icon: "success",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("User role changed falied");
    },
  });
  const handelrole = (role) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you Sure to make The User to Admin!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ role: role });
      }
    });
  };
  return (
    <td>
      {role !== "admin" && (
        <>
          <button
            onClick={() => handelrole("admin")}
            data-tip="Make Admin"
            className="btn  text-xl tooltip text-secondary  btn-ghost btn-xs"
          >
            <i className="fa-solid fa-user-tie"></i>
          </button>
        </>
      )}
     <button
   
      data-tip="Remove user"
      className="btn text-red-600 tooltip btn-ghost btn-xs text-lg "
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
    </td>
  );
}
