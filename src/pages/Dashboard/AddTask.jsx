/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useMutation } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
export default function AddTask({ CloseModel }) {
  const [startDate, setStartDate] = useState(new Date());
  const AxiosSecureV1 = useAxiosSecureV1();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data) => {
      const res = AxiosSecureV1.post("/task", data);
      return res;
    },
    onSuccess: () => {
      toast.success("Add The Task successfully");
      CloseModel();
      navigate("/dashboard/my-task");
    },
    onError: (err) => {
      toast.error("Failed to add Task due to Server side error");
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
    <div>
      <div className="flex">
        {" "}
        <h1 className="p-5 mx-auto px-10 text-xl text-center bg-base-300   clipshape2 shadow-lg">
          Add New Task
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
            className="textarea textarea-bordered focus:outline-none placeholder:text-base"
            placeholder="Type What You will do in this Task"
          ></textarea>
        </div>
        <div className=" mt-4  flex items-center gap-5">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <div className="btn btn-sm bg-base-300 overflow-hidden relative ">
                Deu date{" "}
              </div>
            }
          />
          <div className="badge-secondary badge ">
            {moment(startDate).calendar().includes("at")
              ? moment(startDate).calendar().split(" at ")[0]
              : moment(startDate).calendar()}
          </div>
        </div>
        <div className=" flex justify-end mt-6">
          <button type="submit" className="btn btn-neutral">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
