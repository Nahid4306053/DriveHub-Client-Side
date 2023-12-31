/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from "moment";
import useFullTaskDetails from "../../Hooks/useFullTaskDetails";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import { toast } from "react-toastify";
export default function TaskDetailsModel({ id }) {
  const { FullTaskDetails, error, isError, isLoading, isSuccess } =
    useFullTaskDetails(id);
    const QueryClient = useQueryClient();
    const [taskById,settaskID] = useState();
    const AxiosSecureV1 = useAxiosSecureV1();
    const mutation = useMutation({
      mutationFn : async (data)=>{
        const res = AxiosSecureV1.patch(`/task/status/${data.taskId}`,{status:data.status});
        return res;
      },
      onSuccess :()=>{
        QueryClient.invalidateQueries(['TodayTask', 'FullTaskDetails'])
      },
      onError : (err)=>{
        toast.error(err.message)
      },
    }) 
    const handleTaskStatusChange = (taskId, newStatus) => {
    
      if(FullTaskDetails?.data?.status === newStatus){
         toast.error("No changes Found")
      }
      else{
        mutation.mutate({taskId:taskId,status:newStatus})
      }
     
    };
  return (
    <dialog id="viewTask" className="modal">
      <div className="modal-box  w-11/12 max-w-4xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {id && isLoading ? (
          <SmallLoading></SmallLoading>
        ) : isError ? (
          <SmallError></SmallError>
        ) : (
          <div className="mt-5 my-10 space-y-3">
            <h1 className="text-2xl text-red-500">
              {FullTaskDetails?.data?.name}
            </h1>
            <p className="text-lg leading-8">
              {FullTaskDetails?.data?.description}
            </p>
            <div className=" badge badge-neutral  ">
              <i className="fa-duotone fa-calendar-days mr-2"></i>
              {moment(FullTaskDetails?.data?.date).calendar().includes("at")
                ? moment(FullTaskDetails?.data?.date)
                    .calendar()
                    .split(" at ")[0]
                : moment(FullTaskDetails?.data?.date).format("MMM Do YY")}
            </div>
            <div className="badge badge-secondary ml-2  capitalize">
              {FullTaskDetails?.data?.status}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Mark as</span>
              </label>
              <select value={FullTaskDetails?.data?.status} onChange={(e)=>handleTaskStatusChange(FullTaskDetails?.data?._id,e.target.value)} className="select select-bordered focus:outline-none text-base w-full max-w-xs">
                <option value="to-do">To Do</option> 
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div></div>
          </div>
        )}
      </div>
    </dialog>
  );
}
