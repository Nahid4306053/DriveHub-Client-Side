/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxiosSecureV1";
import { useRef } from "react";
import { toast } from "react-toastify";
export default function Comment_form({post_id}) {
  const Axios = useAxios();
  const formref = useRef(); 
  const Queryclient = useQueryClient()
  const Mutation = useMutation({
    mutationFn: async (data)=>{
      const res = await Axios.post('/comment',data)
      return res;
    },
    onSuccess : ()=>{
      formref.current.reset()
      Queryclient.invalidateQueries('Comments')
    },
    onError : (err)=>{
     toast.error("There is server side errro Occured");
    
    }
  })
  const handelComment = (form) =>{
  form.preventDefault();
   const formdata = {};
   formdata.comment = form.target.comment.value.trim();
   if(formdata.comment){
    formdata.post_id = post_id;  
    Mutation.mutate(formdata);
   }
   else{
      toast.error('Please write your comment')
   }
  }
  return (
    <form ref={formref} onSubmit={handelComment} className="p-0 mt-24 w-full  comment-2">
      <div className="col-12">
        <textarea id="text" required name="comment" className="textarea textarea-bordered form-control  w-full border-black placeholder:text-black text-lg rounded-none" placeholder="Write a Comment" cols="30" rows="5" aria-label="With textarea" ></textarea>
      </div>
      <div className="mt-5 flex justify-end p-0">
        <button type="submit" className="btn bg-red-600 hover:bg-red-600 text-white rounded-none  mt-1 py-3 px-5">
          Post Comment
        </button>
      </div>
    </form>
  );
}
