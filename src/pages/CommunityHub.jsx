/* eslint-disable no-unused-vars */
import { useState } from "react"
import useApprovePosts from "../Hooks/useApprovePosts"
import SmallLoading from "../components/shared/SmallLoading";
import SmallError from "../components/shared/SmallError";
import moment from "moment";
import { Link } from "react-router-dom";
import Pagination from "../components/Filter/Pagination";

export default function CommunityHub() {
  const [page,setpage] = useState(1);                  
  const {ApprovePosts,isError,isLoading,error,isSuccess} = useApprovePosts(page,5)  
               
  return (
    <div>
     {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError> </SmallError>
            </div>
          ) : 
          (<>
          {ApprovePosts.data.Posts.length > 0 &&
           ApprovePosts.data.Posts.map(ele=>{
           return ( <div key={ele._id} className="card md:grid grid-cols-2 mb-14 md:rounded-none rounded-md bg-[#dcdde1a5] shadow-xl">
              <figure>
                <img className="h-full  w-full object-cover" src={ele.banner} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="time mb-4 flex justify-between items-center">
                    <span>{ moment(ele.createdAt).format("MMM Do YY")}</span>
                    <span className="opacity-75 flex gap-2 items-center"> <img className="h-10 w-10 border border-black rounded-full object-cover p-[1px]" src={ele?.author?.photoURL} alt="" /> <span>{ele.author.displayName}</span></span>
                 </div>    
                <h2 className="card-title">{ele.title.slice(0,50)+".."}</h2>
                <p className="text-base">{ele.description.slice(0,100)+".."}</p>
                <div className="card-actions mt-5 justify-end">
                   <Link to={`/community/post-details/${ele._id}`}><button className="btn bg-red-600 hover:bg-red-600 text-white rounded-none">Read more </button></Link>
                </div>
              </div>
            </div> )
          })}
            <div className=" flex justify-center mt-20 mx-auto">
              <Pagination
               page={page} setpage={setpage} totalData={ApprovePosts.data.totalData}></Pagination>
            </div>
          </>)}   
    </div>
      
  )
}
