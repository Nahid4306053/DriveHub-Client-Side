/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import useFullTaskDetails from "../../Hooks/useFullTaskDetails";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
export default function EditTask({ id }) {
  const Queryclient = useQueryClient();
  const { FullTaskDetails, error, isError, isLoading, isSuccess } =
    useFullTaskDetails(id);
  const [startDate, setStartDate] = useState(
    FullTaskDetails?.data?.date && new Date(FullTaskDetails?.data?.date)
  );
  const AxiosSecureV1 = useAxiosSecureV1();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data) => {
      const res = AxiosSecureV1.put(`/task/${id}`, data);
      return res;
    },
    onSuccess: () => {
      toast.success(" The Task Update successfully");
      document.getElementById("Edit").close();
      Queryclient.invalidateQueries(['TodayTask', 'Tasks'])
    },
    onError: (err) => {
      toast.error("Failed to Edit Task due to Server side error");
    },
  });

  const handelinfo = (form) => {
    form.preventDefault();
    const formdata = {};
    formdata.name = form.target.name.value.trim();
    formdata.description = form.target.description.value.trim();
    formdata.date = startDate || new Date();
    const err = [];
    if (
      new Date().setHours(0, 0, 0, 0) > new Date(startDate).setHours(0, 0, 0, 0)
    ) {
      toast.error("please Provide latest Date");
      err.push("please Provide latest Date");
      Queryclient.invalidateQueries(['TodayTask',])
    }
    if (!formdata.name || !formdata.description) {
      toast.error("Task Description and title are Required");
      err.push("Task Description and title are Required");
    }
    if (err.length === 0) {
      mutation.mutate(formdata);
    }
  };
  return (
    <dialog id="Edit" className="modal">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="modal-box  w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            {" "}
            ✕{" "}
          </button>
        </form>

        {id && isLoading ? (
          <SmallLoading></SmallLoading>
        ) : isError ? (
          <SmallError></SmallError>
        ) : (
          id && (
            <div>
              <div className="flex">
                <h1 className="p-5 mx-auto px-10 text-xl text-center bg-base-300   clipshape2 shadow-lg">
                  Edit Task
                </h1>
              </div>
              <form onSubmit={handelinfo} className="mt-10">
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg label-text">Task Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="You Task Name"
                    className="input focus:outline-none input-bordered"
                    name="name"
                    required
                    defaultValue={FullTaskDetails?.data?.name}
                  />
                </div>

                <div className="form-control mt-2">
                  <label className="label">
                    <span className="text-lg label-text">Task Description</span>
                  </label>
                  <textarea
                    rows={5}
                    name="description"
                    required
                    defaultValue={FullTaskDetails?.data?.description}
                    className="textarea textarea-bordered focus:outline-none placeholder:text-base"
                    placeholder="Type What You will do in this Task"
                  ></textarea>
                </div>
                <div className=" mt-4  flex items-center gap-5">
                  <DatePicker
                    selected={
                      startDate || new Date(FullTaskDetails?.data?.date)
                    }
                    onChange={(date) => setStartDate(date)}
                    customInput={
                      <div className="btn btn-sm bg-base-300 overflow-hidden relative ">
                        Deu date{" "}
                      </div>
                    }
                  />
                  <div className="badge-secondary badge ">
                    {moment(startDate || new Date(FullTaskDetails?.data?.date))
                      .calendar()
                      .includes("at")
                      ? moment(
                          startDate || new Date(FullTaskDetails?.data?.date)
                        )
                          .calendar()
                          .split(" at ")[0]
                      : moment(
                          startDate || new Date(FullTaskDetails?.data?.date)
                        ).calendar()}
                  </div>
                </div>
                <div className=" flex justify-end mt-6">
                  <button type="submit" className="btn btn-neutral">
                    Edit Task
                  </button>
                </div>
              </form>
            </div>
          )
        )}
      </div>
    </dialog>
  );
}
