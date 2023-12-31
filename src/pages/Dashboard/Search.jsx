/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import useAxiosSecureV1 from '../../Hooks/useAxiosSecureV1'
import { toast } from 'react-toastify';
import moment from 'moment';
import TaskDetailsModel from './TaskDetailsModel';


export default function Search({CloseModel}) {
 const [searchData,setSearchData] = useState([]); 
 const [serachkeyworad,setSerachkeyworad] = useState('');
 const AxiosSecureV1 = useAxiosSecureV1();   
 const [viewtaskId,setViewTaskId] = useState(); 
  useEffect(()=>{

  const Interval = setTimeout(()=>{
  AxiosSecureV1.get(`/task/search?search=${serachkeyworad}`).then((data)=>setSearchData(data.data)).catch(err=>toast.error("There is a server side error"))
  },500)
  return ()=> clearTimeout(Interval);
  },[serachkeyworad]); 
 
  return (
    <>               
    <div className='mt-14 min-h-[500px]'>
      <input type="text" onChange={(e)=>setSerachkeyworad(e.target.value)} placeholder="Type here" className="input focus:outline-none input-bordered w-full" /> 
      <div className='mt-5'>
        {searchData.length > 0 ? searchData.map((ele)=>{
         return (
         <div className='bg-red-100 p-3 flex justify-between gap-5  my-2 rounded-lg' key={ele._id}>
          <h2 onClick={()=>(setViewTaskId(ele._id),document.getElementById('viewTask').showModal())} className='hover:underline text-start cursor-pointer'>{ele.name}</h2>
           <div className='flex flex-wrap gap-2'>
           <div className=" badge ">
            <i className="fa-duotone fa-calendar-days mr-2"></i>{moment(ele?.date).calendar().includes('at') ? moment(ele?.date).calendar().split(" at ")[0] : moment(ele?.date).format("MMM Do YY")}
           </div>
          <div className="badge  capitalize">{ele?.status}</div> </div>
         </div>)   
        }) 
        : <p className='py-20 text-center bg-red-100'>No data Found</p> }           
      </div>
    </div>
   <TaskDetailsModel id={viewtaskId}></TaskDetailsModel>  
    </> 
  )
}
