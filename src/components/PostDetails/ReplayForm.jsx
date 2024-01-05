/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxiosSecureV1";
import { useRef } from "react";
import { toast } from "react-toastify";
export default function ReplayForm({currentCommentId,setCureentCommentID}) {
  const Axios = useAxios();
  const formref = useRef();
  const Queryclient = useQueryClient();
  const Mutation = useMutation({
    mutationFn: async (data) => {
      const res = await Axios.put(`/comment/replay/${currentCommentId.id}`, data);
      return res;
    },
    onSuccess: () => {
      formref.current.reset();
      Queryclient.invalidateQueries("Comments");
      setCureentCommentID('')
    },
    onError: (err) => {
    
      toast.error("There is server side errro Occured");
    },
  });
  const handelReplay = (form) => {
    form.preventDefault();
    const formdata = {};
    formdata.replay = form.target.comment.value.trim();
    if (formdata.replay) {
      Mutation.mutate(formdata);
    } else {
      toast.error("Please write your replay");
    }
  }; 
  return (
    <form ref={formref} onSubmit={handelReplay} className="p-0 mt-10 w-full  comment-2">
      <div className="col-12">
        <textarea defaultValue={currentCommentId.name} style={{ height: 80 }} id="text" required name="comment" className="textarea textarea-bordered border-black w-full placeholder:text-black focus:outline-none text-lg rounded-none " placeholder="Masage" cols="30" rows="2" aria-label="With textarea" ></textarea>
      </div>
      <div className="mt-5 flex justify-end p-0">
        <div onClick={()=>setCureentCommentID('')} className="btn btn-sm btn-ghost    mt-1 py-0">
          close
        </div>
        <button type="submit" className="btn  btn-ghost  btn-sm  mt-1 py-0">
          Replay
        </button>
      </div>
    </form>
  );
}
